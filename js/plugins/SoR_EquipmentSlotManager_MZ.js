//=============================================================================
// SoR_EquipmentSlotManager_MZ.js
// SoR License inherited from MIT License (C) 2020 蒼竜
// http://dragonflare.blue/dcave/license.php
// ----------------------------------------------------------------------------
// Latest version v1.00 (2021/04/17)
//=============================================================================
/*:ja
@plugindesc ＜装備欄スロット設定＞ v1.10
@author 蒼竜
@target MZ
@url http://dragonflare.blue.jp/dcave/
@help アクターの装備スロットを変更，設定できるようにします。
ゲーム内における装備品による装備スロットの追加や、
一部装備画面のUIを変更する機能も有します。

・基本タグ(アクター，職業，武器・防具)
<EQSlots: [X],[Y],[Z],...>

装備スロットの設定する。カンマ区切りで任意個数指定可能

@param Texts_ReleaseEquipments
@desc 装備選択ウィンドウで「装備を外す」に相当するコマンドの名前(ツクール標準は空欄)
@type string
@default 装備を外す

@param Position_ReleaseEquipments
@desc 装備選択ウィンドウで「装備を外す」相当コマンドの表示位置(ツクール標準は末尾)
@type select
@option 先頭
@value 0
@option 末尾
@value 1
@default 0

@param Texts_NullEqupiment
@desc 装備スロットウィンドウで「装備なし」に相当する状態の名前(ツクール標準は空欄)
@type string
@default ---

@param AdditionalTextColor
@desc 追加の「装備を外す」や「装備なし」を描画する文字色。Window.pngの番号に対応 (default: 4)
@type number
@default 4

@param Unreleasable_EquipmentType
@desc 「外す」コマンドを装備選択画面に出現させない装備種類ID
@type number[]
@default []
*/
/*:
@plugindesc <Equipment Slot Management> v1.10
@author Soryu
@target MZ
@url http://dragonflare.blue.jp/dcave/
@help This plugin enables to assign actor's equipment slots.
It can also make equipments to add slots. Some UI in the equipment menu 
can be modified.

Tags (Effective for Actors, Classes, Weapons, and Armors)
<EQSlots: [X],[Y],[Z],...>

Assign the equipment slot as [X],[Y],[Z],... which can be aligned by comma.
Tags for equipments are eligible to add a trait of additional slots.

@param Texts_ReleaseEquipments
@desc Command Name of release equips in the equip item selection window (Blank in default RPGMaker)
@type string
@default Release

@param Position_ReleaseEquipments
@desc Command Position of "Release" in the equip item selection (Last in default RPGMaker)
@option Top
@value 0
@option Last
@value 1
@default 0

@param Texts_NullEqupiment
@desc Item Name which indicates no equips in the equip slot selection window (Blank in default RPGMaker)
@type string
@default ---

@param AdditionalTextColor
@desc Texts Color for "Release" and "No equipments" associated with Color palette in Window.png (default: 4)
@type number
@default 4

@param Unreleasable_EquipmentType
@desc Type ID of equipment that "Release" command never appears in the equip item selection window
@type number[]
@default []
*/

(function() {
const pluginName = "SoR_EquipmentSlotManager_MZ";
const Param = PluginManager.parameters(pluginName);

const Texts_ReleaseEquipments = String(Param['Texts_ReleaseEquipments']) || '';
const Texts_NullEqupiment = String(Param['Texts_NullEqupiment']) || '';
const Position_ReleaseEquipments = Number(Param['Position_ReleaseEquipments']) || 0;
const AdditionalTextColor = Number(Param['AdditionalTextColor']) || 0;

const Unreleasable_EquipmentType = convertJsonParam(Param['Unreleasable_EquipmentType']) || '';
 
function convertJsonParam(param) {
    if (param == undefined) return [];
    let arr = [];
        JSON.parse(param).map(function(param) {
            arr.push(Number(param));
        });
    return arr;
}


Window_EquipSlot.prototype.maxItems = function() {
    if(this._actor && !this._actor.num_equipslot){
         this._actor.num_equipslot = this._actor.equipSlots().length;
         this._actor.refresh();
    }
    return this._actor ? this._actor.num_equipslot : 0;
}

const SoR_ESM_GA_refresh = Game_Actor.prototype.refresh;
Game_Actor.prototype.refresh = function() {
    const eqs = this.equipSlots();
    this.num_equipslot = eqs.length;

    for (let i = 0; i < this.num_equipslot; i++) {
        if(!this._equips[i]){
            this._equips[i] = new Game_Item();
            this._equips[i].setEquip(eqs[i] === 1, 0);
        }
    }

    SoR_ESM_GA_refresh.call(this); 
}

const SoR_ESM_GA_equipSlots = Game_Actor.prototype.equipSlots;
Game_Actor.prototype.equipSlots = function() {
    const exslot = this.ArrangedEqSlots();
    if(exslot.length != 0){
        this.num_equipslot = exslot.length;
        return exslot;
    }

    const slot = SoR_ESM_GA_equipSlots.call(this);
    this.num_equipslot = slot.length;
    return slot;
}

Game_Actor.prototype.ArrangedEqSlots = function() {
    const slots = [];
    const slotlist = this.actor().meta.EQSlots;
    if(slotlist){
        const splitlist = slotlist.split(',').map(Number);
        for(x of splitlist) slots.push(x);         
    }

    const act_class = this.currentClass().meta.EQSlots;
    if(act_class){
        const splitlist = act_class.split(',').map(Number);
        for(x of splitlist) slots.push(x);         
    }

    const eqs = this.equips();
    for(eq of eqs){
        if(!eq) continue;
        const exslots = eq.meta.EQSlots;
        if(exslots){
            const splitlist = exslots.split(',').map(Number);
            for(x of splitlist) slots.push(x);         
        }
    }
    //slots.sort();

    return slots;
}



const SoR_ESM_GA_initEquips = Game_Actor.prototype.initEquips;
Game_Actor.prototype.initEquips = function(equips) {

    if(this.actor().meta.InitEquip){
        const IniEQ = this.actor().meta.InitEquip;
        equips = [];
        const splitlist = IniEQ.split(',').map(Number);
        for(x of splitlist) equips.push(x); 
    }

    if (DataManager.isBattleTest() && this.actor().meta.BattleTestEquip){ //v1.10
        const IniEQ = this.actor().meta.BattleTestEquip;
        equips = [];
        const splitlist = IniEQ.split(',').map(Number);
        for(x of splitlist) equips.push(x); 
    }

    SoR_ESM_GA_initEquips.call(this,equips);
}

////////////////////////////////////////////////////////////
Window_EquipItem.prototype.isCurrentItemEnabled = function() {
    return this.isEnabled(this.item());
}
Window_EquipItem.prototype.isEnabled = function(item) {
    return (typeof item !== "undefined");
}

Window_EquipItem.prototype.makeItemList = function() {
    this._data = $gameParty.allItems().filter(item => this.includes(item));
    if (this.includes(null)) {
        Position_ReleaseEquipments==0? this._data.unshift(null) : this._data.push(null);
    }
}

Window_EquipItem.prototype.includes = function(item) {
    if (item === null && Unreleasable_EquipmentType.every(x=> x!=this.etypeId()) ) return true;
    return (
        this._actor &&
        this._actor.canEquip(item) &&
        item.etypeId === this.etypeId()
    );
}

Window_EquipItem.prototype.drawItem = function(index) {
    const item = this.itemAt(index);
    if (item) {
        Window_ItemList.prototype.drawItem.call(this, ...arguments);
    }
    else {
        const rect = this.itemLineRect(index);
        this.changeTextColor(ColorManager.textColor(AdditionalTextColor));
        this.drawText(Texts_ReleaseEquipments, rect.x, rect.y, 300);
        this.resetTextColor();
        this.resetFontSettings();
    }
}

////////////////////////////////////////////////////////////
Window_EquipSlot.prototype.drawItemName = function(item, x, y, width) {
    if (item) {
        const iconY = y + (this.lineHeight() - ImageManager.iconHeight) / 2;
        const textMargin = ImageManager.iconWidth + 4;
        const itemWidth = Math.max(0, width - textMargin);
        this.resetTextColor();
        this.resetFontSettings();
        this.drawIcon(item.iconIndex, x, iconY);
        this.drawText(item.name, x + textMargin, y, itemWidth);
    }
    else {
        const textMargin = ImageManager.iconWidth + 4;
        this.changeTextColor(ColorManager.textColor(AdditionalTextColor));
        const itemWidth = Math.max(0, width - textMargin);
        this.drawText(Texts_NullEqupiment, x, y, itemWidth, "center");
        this.resetTextColor();
        this.resetFontSettings();
    }
}

})();