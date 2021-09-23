//=============================================================================
// BB_FesHensuuWindow.js
// Copyright (c) 2017 BB ENTERTAINMENT
// This software is released under the MIT license.
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @plugindesc 変数の名前と値を表示するウィンドウを追加するプラグイン
 * @author ビービー
 *
 * @param ShowWindowSwitch
 * @type switch
 * @desc ウィンドウを表示するスイッチのIDを指定。
 * 初期値: 1
 * @default 1
 *
 * @param A_VariableId
 * @type variable
 * @desc 表示枠Aに表示する変数を指定する変数のIDを指定。
 * 初期値: 0
 * @default 0
 *
 * @param B_VariableId
 * @type variable
 * @desc 表示枠Bに表示する変数を指定する変数のIDを指定。
 * 初期値: 0
 * @default 0
 *
 * @param C_VariableId
 * @type variable
 * @desc 表示枠Cに表示する変数を指定する変数のIDを指定。
 * 初期値: 0
 * @default 0
 *
 * @param D_VariableId
 * @type variable
 * @desc 表示枠Dに表示する変数を指定する変数のIDを指定。
 * 初期値: 0
 * @default 0
 *
 * @param FontSize
 * @type number
 * @desc フォントサイズを指定。
 * 初期値: 26
 * @default 26
 *
 * @param NameFontColor
 * @type number
 * @min 0
 * @max 31
 * @default 0
 * @desc 変数の名前のフォントカラーを指定
 * 初期値: 0（白）
 *
 * @param UnderLineOpacity
 * @type number
 * @min 0
 * @max 255
 * @default 96
 * @desc 変数の下に表示する線の透明度を指定。(0で非表示)
 * 初期値: 96
 *
 * @param BetweenNameAndValue
 * @type string
 * @default :
 * @desc 変数の名前と値の間に表示する記号を指定。(空白で非表示)
 * 初期値: :
 *
 *
 * @param FesWindowX
 * @type number
 * @default 408
 * @desc 変数表示ウィンドウの表示位置のX座標
 * 初期値: 408
 *
 * @param FesWindowY
 * @type number
 * @default 0
 * @desc 変数表示ウィンドウの表示位置のY座標
 * 初期値: 0
 *
 * @param ShowMaxItem
 * @type number
 * @min 1
 * @max 4
 * @default 4
 * @desc 変数表示ウィンドウの行数を指定。
 * 初期値: 4
 *
 * @help ◆概要
 * RPGツクールフェスの機能の一つである
 * 変数の名前と値を表示するウィンドウを追加するプラグインです。
 * このプラグインでは最大4つまで変数の名前と値を表示することができます。
 * 
 * ◆使用方法
 * プラグインパラメータ【A_VariableId】～【D_VariableId】で指定した変数に
 * 格納されている数値で表示する変数を切り替えることができます。
 * 使用例：
 * 【A_VariableId】で1を指定した場合に変数1の値が5の時
 * ウィンドウの一番上に変数5の名前と値が表示されます。
 * 
 * ◆プラグインパラメータの説明
 * 【ShowWindowSwitch】
 * ウィンドウを表示するスイッチのIDを指定。
 * ここで指定したIDのスイッチがONのときウィンドウが表示されます。
 * 
 * 【A_VariableId】
 * 表示枠A(一番上)に表示する変数を指定する変数のID
 * ここで指定したIDの変数に格納されている数値が実際に表示される変数のIDです。
 * 
 * 【B_VariableId】
 * 表示枠B(上から二番目)に表示する変数を指定する変数のID
 * ここで指定したIDの変数に格納されている数値が実際に表示される変数のIDです。
 * 
 * 【C_VariableId】
 * 表示枠C(上から三番目)に表示する変数を指定する変数のID
 * ここで指定したIDの変数に格納されている数値が実際に表示される変数のIDです。
 * 
 * 【D_VariableId】
 * 表示枠D(一番下)に表示する変数を指定する変数のID
 * ここで指定したIDの変数に格納されている数値が実際に表示される変数のIDです。
 * 
 * 【FontSize】
 * ウィンドウに表示される変数の名前と値のフォントサイズを指定。
 * 
 * 【NameFontColor】
 * ウィンドウに表示される変数の名前のフォントカラーを指定。
 * 
 * 【UnderLineOpacity】
 * 変数の下に表示する線の透明度を指定。(0で非表示)
 * 
 * 【BetweenNameAndValue】
 * 変数の名前と値の間に表示する記号を指定。(空白で非表示)
 * 
 * 【FesWindowX】
 * 変数表示ウィンドウの表示位置のX座標を指定。
 *
 * 【FesWindowY】
 * 変数表示ウィンドウの表示位置のX座標を指定。
 *
 * 【ShowMaxItem】
 * 変数表示ウィンドウの行数(高さ)を指定。
 * ※ゲーム中に変更することはできません。
 *
 * バージョン：
 * 1.0.0 2017/11/28 初版
 * 1.0.1 2020/12/24 項目名・数値が正常に表示されないバグ修正
 * 変数の値が0でも表示されるよう仕様変更。
 * 
 * 利用規約：
 * このプラグインは、MITライセンスのもとで公開されています。
 * Copyright (c) 2017 BB ENTERTAINMENT
 * Released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 * 
 * コンタクト：
 * BB ENTERTAINMENT Twitter: https://twitter.com/BB_ENTER/
 * BB ENTERTAINMENT BLOG   : http://bb-entertainment-blog.blogspot.jp/
 */

(function () {
    'use strict';
    //-----------------------------------------------------------------------------
    // プラグインパラメータ管理
    //-----------------------------------------------------------------------------
    var parameters = PluginManager.parameters('BB_FesHensuuWindow');
    var BBFSWSID = Number(parameters['ShowWindowSwitch']);
    var BBFAV = Number(parameters['A_VariableId']);
    var BBFBV = Number(parameters['B_VariableId']);
    var BBFCV = Number(parameters['C_VariableId']);
    var BBFDV = Number(parameters['D_VariableId']);
    var BBFFS = Number(parameters['FontSize']);
    var BBFFC = Number(parameters['NameFontColor']);
    var BBFULO = Number(parameters['UnderLineOpacity']);
    var BBFBNAV = String(parameters['BetweenNameAndValue']);
    var BBFWX = Number(parameters['FesWindowX']);
    var BBFWY = Number(parameters['FesWindowY']);
    var BBFSMI = Number(parameters['ShowMaxItem']);

    var Scene_map_createAllWindows = Scene_Map.prototype.createAllWindows;
    Scene_Map.prototype.createAllWindows = function () {
        this._FesWindow = new Window_Fes();
        this.addWindow(this._FesWindow);
        Scene_map_createAllWindows.call(this);
    };

    var _Scene_Map_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function () {
        _Scene_Map_update.call(this);
        this._FesWindow.setText();
        // 指定スイッチで起動
        if ($gameSwitches.value(BBFSWSID)) {
            this._FesWindow.show();
        } else {
            this._FesWindow.hide();
        }
    };

    // Window_Fes
    function Window_Fes() {
        this.initialize.apply(this, arguments);
    };

    Window_Fes.prototype = Object.create(Window_Base.prototype);
    Window_Fes.prototype.constructor = Window_Fes;

    Window_Fes.prototype.initialize = function () {
        var x = BBFWX;
        var y = BBFWY;
        var width = Graphics.width / 4;
        var height = this.windowHeight();
        Window_Base.prototype.initialize.call(this, x, y, width, height);
    };

    Window_Fes.prototype.windowHeight = function () {
        return this.fittingHeight(BBFSMI);
    };

    Window_Fes.prototype.setText = function (str) {
        this._text = str;
        this.refresh();
    };

    // ウィンドウに載せる内容
    Window_Fes.prototype.refresh = function () {
        this.contents.clear();
        var width1 = 20 * 4;
        var width2 = 20 * 4;
	var x = Graphics.width / 2 - width2 - 230;
        var BY = 0;
        var CY = 0;
        var DY = 0;

        if (BBFAV) {
            this.changeTextColor(this.textColor(BBFFC));
            // this.drawText($dataSystem.variables[$gameVariables.value(BBFAV)],0, 0, width1);
            this.drawText($dataSystem.variables[BBFAV], 0, 0, width1);
            this.resetTextColor();
            this.drawText(BBFBNAV, width1 + 11, 0, 13);
            // this.drawText($gameVariables.value($gameVariables.value(BBFAV)), x, 0, width2, 'right');
            this.drawText($gameVariables.value(BBFAV), x, 0, width2, 'right');
            this.contents.paintOpacity = BBFULO;
            this.contents.fillRect(0, this.lineHeight() - 2, Graphics.width / 4, 2, this.normalColor());
            this.contents.paintOpacity = 255;
            BY += this.lineHeight();
            CY += this.lineHeight();
            DY += this.lineHeight();
        }
        if (BBFBV) {
            this.changeTextColor(this.textColor(BBFFC));
            // this.drawText($dataSystem.variables[$gameVariables.value(BBFBV)],0, BY, width1);
            this.drawText($dataSystem.variables[BBFBV], 0, 0, width1);
            this.resetTextColor();
            this.drawText(BBFBNAV, width1 + 11, BY, 13);
            // this.drawText($gameVariables.value($gameVariables.value(BBFBV)), x, BY, width2, 'right');
            this.drawText($gameVariables.value(BBFBV), x, BY, width2, 'right');
            this.contents.paintOpacity = BBFULO;
            this.contents.fillRect(0, this.lineHeight() + BY - 2, Graphics.width / 2, 2, this.normalColor());
            this.contents.paintOpacity = 255;
            CY += this.lineHeight();
            DY += this.lineHeight();
        }
        if (BBFCV) {
            this.changeTextColor(this.textColor(BBFFC));
            // this.drawText($dataSystem.variables[$gameVariables.value(BBFCV)],0, CY, width1);
            this.drawText($dataSystem.variables[BBFCV], 0, 0, width1);
            this.resetTextColor();
            this.drawText(BBFBNAV, width1 + 11, CY, 13);
            // this.drawText($gameVariables.value($gameVariables.value(BBFCV)), x, CY, width2, 'right');
            this.drawText($gameVariables.value(BBFCV), x, CY, width2, 'right');
            this.contents.paintOpacity = BBFULO;
            this.contents.fillRect(0, this.lineHeight() + CY - 2, Graphics.width / 2, 2, this.normalColor());
            this.contents.paintOpacity = 255;
            DY += this.lineHeight();
        }
        if (BBFDV) {
            this.changeTextColor(this.textColor(BBFFC));
            this.drawText($dataSystem.variables[BBFDV], 0, 0, width1);
            this.resetTextColor();
            this.drawText(BBFBNAV, width1 + 11, DY, 13);
            // this.drawText($gameVariables.value($gameVariables.value(BBFDV)), x, DY, width2, 'right');
            this.drawText($gameVariables.value(BBFDV), x, DY, width2, 'right');
            this.drawText($gameVariables.value(BBFDV), x, DY, width2, 'right');
            this.contents.paintOpacity = BBFULO;
            this.contents.fillRect(0, this.lineHeight() + DY - 2, Graphics.width / 2, 2, this.normalColor());
            this.contents.paintOpacity = 255;
        }
    };

    // フォントサイズ
    Window_Fes.prototype.standardFontSize = function () {
        return BBFFS;
    };

    // ウィンドウの余白
    Window_Fes.prototype.standardPadding = function () {
        return 18;
    };

})();