 /*:
 * @plugindesc Fossil is an interoperability layer for RMMZ, designed to make MV plugins work with in MZ. Fossil_Pre goes at the start of your plugin list.
 * So far, we support over 250 plugins.  You can help!
 * @author FOSSIL TEAM
 * @target MZ  

 * @command useOldPlugin
 * @text 'Enter MV plugin commands'
 * @desc 'They're back! Enter them the same way you used to.'

 * @arg OldPluginCommand
 * @text
 * @ desc Identical to MV's commands.

 * @help Fossil_Pre goes at the start, before all other plugins.
 
Fixing Old Software / Special Interoperability Layer (FOSSIL) Version 0.3.07

FOSSIL is an interoperability plugin.  
The purpose of this layer is to expand the use and usefulness of RPG MAKER 
MV plugins, by allowing them to work in RPG MAKER MZ projects.

So far we have interoperability with these MV plugins.  They seem to run 
with FOSSIL the same way they did in stock MV, free from all but a few 
little aesthetic glitches.  

To invoke old plugin commands, either use the built in OldPluginCommand 
plugin command, or put oldCommand('whateverthecommandwas') in a script.

///////////////////////////////////////////////////////////////////////
==Fully Functional==  
(Alphabetical by plugin maker, then roughly by plugin order)
///////////////////////////////////////////////////////////////////////

-DreamX_ChoiceHelp

-GALV_Questlog
-GALV_TimedMessagePopups
-GALV_RollCredits
-GALV_CharacterFrames
-GALV_CFStepSE
-GALV_CharacterAnimations
-GALV_DiagonalMovement
-GALV_PrizeWheel
-GALV_VariableBar

-Gimmer_MirrorMirrorOnTheWall
-Gimmer_WibblyWobbly

-HIME_BattleWeather
-HIME_GuestFollowers Note: plugin commands ONLY work with oldCommand()
-HIME_HiddenShopGoods
-HIME_ScopeCore
-HIME_ScopeChangeRules
-HIME_EquipSlotsCore
-HIME_EnemyReinforcements
-HIME_RandomEncounterEvents
-HIME_EnemyLevels
-HIME_EnemyClasses
-HIME_EnemyEquips
-HIME_SideviewActorEnemies
-HIME_MoreEnemyDrops

-Irina_AutoMessageColor

-Jay_BattleVAManager
-Jay_FocusedSoundEffects

-KMS_SpiralEncount
-KMS_WaterMapEffect
-KMS_Minimap

-mjshi's ChainCommand QTE plugin
-mjshi's MatchCardLottery Minigame
-mjshi's StatPolygon
-mjshi's Wuxing Minigame

-MOG_ActionName
-MOG_BattleHud
-MOG_BattleResult
-MOG_BossHp
-MOG_ComboCounter
-MOG_CharacterMotion
-MOG_DizzyEffect
-MOG_EventIndicators
-MOG_TreasurePopup
-MOG_Weather_EX
-MOG_PickupThrow
-MOG_ActorHud
-MOG_GoldHud
-MOG_CharPoses
-MOG_EventSensor
*MOG_ChronoEngine
-MOG_ChronoATBHud
-MOG_ChronoEnemyHp
-MOG_ChronoToolHud
-MOG_ChronoCT

-Reval's Animated Enemies

-SE_Core
-SE_EventChance
-SE_DashStamina
-SE_Minimap

-Shaz_TileChanger

-SRD_SummonCore
-SRD_ReplaceSummons
-SRD_ShakingText 
-SRD_ActorSelect

-STV_BeastBook
-STV_MonsterCards

-UNCO_AmmunitionSystem
-UNCO_X_Crafting

*VE_Basic Module
-VE_ActionConditions
-VE_ActionStates
-VE_ActionStrengthen
-VE_ArrowCursor
-VE_BattleAdvantage
-VE_CharacterFrames
-VE_ChargeActions
-VE_DirectCommands
-VE_CommandReplace
-VE_CooperationSkills
-VE_CounterActions
-VE_CriticalHitEffects
-VE_DiagonalMovement
-VE_EquipSet
-VE_EnemySkill
-VE_FollowUpSkills
-VE_Masters
-VE_MateriaSystem
-VE_PassiveStates 

-VLUE Game Time MV 1.1c
-VLUE questsystem

*WAY_Core (note: requires Fossil_Post_Way to be the NEXT plugin beneath it)
-WAY_StorageSystem
-WAY_OptionsMenuCustomActions
-WAY_VerticalScreenShake
-WAY_CustomOnEquipEval
-WAY_CustomOnDeathEval
-WAY_Achievements
-WAY_YEP_TurnOrderDisplay

-YEP_AdvancedSwVar
-YEP_BaseParamControl
-YEP_ClassBaseParam
*YEP_ClassChangeCore
-YEP_X_Subclass
-YEP_ExtraParamFormula
*YEP_MainMenuManager
*YEP_MessageCore (Needs FOSSIL_Pre_MessageCore & FOSSIL_Post_MessageCore)
-YEP_X_ExtMesPack1 
-YEP_X_ExtMesPack2 
-YEP_MessageEvalText 
-YEP_X_MessageMacros1
-YEP_SelfSwVar
*YEP_BattleEngineCore (Note: Battle system must be 'turn-based' in System 1)
-YEP_X_ActionSeqPack1
-YEP_X_ActionSeqPack2
-YEP_X_ActionSeqPack3
-YEP_X_AnimatedSVEnemies
*YEP_X_BattleSysATB note: now works Moghunter's MOG_ATB_Gauge (MZ ver)
-YEP_X_VisualATBGauge
*YEP_X_BattleSysCTB note: now works Moghunter's MOG_ATB_Gauge (MZ ver)
*YEP_X_BattleSysSTB
-YEP_X_CounterControl
-YEP_X_InBattleStatus
-YEP_X_TurnOrderDisplay
-YEP_X_VisualHpGauge
-YEP_X_WeakEnemyPoses
-YEP_Z_ActionBeginEnd
-YEP_AbsorptionBarrier
*YEP_BattleAICore
-YEP_X_ActorAutoBattleAI
-YEP_BattleBGMControl
-YEP_BattleSelectCursor
*YEP_BuffsStatesCore
-YEP_X_ExtDoT
-YEP_X_StateCategories
-YEP_X_VisualStateFX
-YEP_Z_StateProtection
*YEP_DamageCore
-YEP_X_ArmorScaling
-YEP_X_CriticalControl
-YEP_Z_CriticalSway
*YEP_ElementCore
-YEP_ExtraEnemyDrops
-YEP_ForceAdvantage
-YEP_HitAccuracy
-YEP_HitDamageSounds
-YEP_LevelUpGrowthEffects
-YEP_LifeSteal
-YEP_OverkillBonus
*YEP_TargetCore (Tell me if you have odd interactions with action sequences)
-YEP_X_AreaOfEffect
-YEP_X_SelectionControl	
-YEP_Taunt
-YEP_VictoryAftermath
-YEP_X_AftermathLevelUp
-YEP_WeatherInBattle
*YEP_ItemCore
-YEP_X_AttachAugments
-YEP_X_ItemDisassemble
-YEP_X_ItemDiscard
-YEP_X_ItemCategories
-YEP_X_ItemPictureImg
-YEP_X_ItemRename
-YEP_X_ItemRequirements
-YEP_X_ItemUpgradeSlots
-YEP_ItemSynthesis
*YEP_ShopMenuCore
-YEP_X_CondShopPrices
-YEP_HideShowItems
-YEP_X_MoreCurrencies
*YEP_SkillCore
-YEP_X_LimitedSkillUses
-YEP_MultiTypeSkills
-YEP_PartyLimitGauge
-YEP_X_SkillCooldowns
-YEP_X_SkillCostItems
-YEP_InstantCast
-YEP_SkillLearnSystem 
-YEP_SkillMasteryLevels
*YEP_EquipCore
-YEP_X_EquipCustomize
-YEP_EquipRequirements
-YEP_WeaponUnleash
*YEP_StatusMenuCore
-YEP_X_ActorVariables
-YEP_X_BattleStatistics
-YEP_X_MoreStatusPages
-YEP_X_ProfileStatusPage
*YEP_AutoPassiveStates
-YEP_X_PassiveAuras
-YEP_Z_PassiveCases
*YEP_EnemyLevels
-YEP_X_DifficultySlider
-YEP_X_EnemyBaseParam
-YEP_EnhancedTP
*YEP Equip Battle Skills
-YEP_X_EBSAllowedTypes
-YEP_X_EquipSkillTiers
-YEP_JobPoints
-YEP_PartySystem
-YEP_StealSnatch
*YEP_MoveRouteCore
-YEP_X_ExtMovePack1
-YEP_FloorDamage
-YEP_QuestJournal
-YEP_X_MapQuestWindow
*YEP_OptionsCore
-YEP_AnimateTilesOption
-YEP_EventChasePlayer
-YEP_X_EventChaseStealth
-YEP_EventClickTrigger
-YEP_EventCopier
-YEP_EventEncounterAid
-YEP_EventHitboxResize
-YEP_EventMiniLabel
-YEP_EventMorpher
-YEP_EventProximityActivate
-YEP_EventRegionTrigger
-YEP_EventSpawner
-YEP_EventSpriteOffset
-YEP_EventTimerControl
-YEP_IconsOnEvents
-YEP_BaseTroopEvents
-YEP_ButtonCommonEvents
*YEP_CommonEventMenu
-YEP_X_CEMSetupPack1
-YEP_X_CEMSetupPack2
-YEP_CreditsPage
-YEP_DashToggle
-YEP_DynamicTitleImages
-YEP_ExternalLinks
-YEP_FootstepSounds
-YEP_GabWindow
*YEP_GridFreeDoodads
-YEP_X_ExtDoodadPack1
-YEP_HelpFileAccess
-YEP_IconBalloons
-YEP_KeyNameEntry
-YEP_KeyboardConfig
-YEP_MainMenuVar
-YEP_MapGoldWindow
-YEP_MapSelectEquip
-YEP_MapSelectSkill
-YEP_MapStatusWindow
-YEP_MusicMenu
-YEP_PictureSpriteSheets
-YEP_PictureCommonEvents
-YEP_RegionEvents
-YEP_RegionRestrictions
-YEP_SaveEventLocations
-YEP_ScaleSprites
-YEP_SlipperyTiles
-YEP_SmartJump
-YEP_StopMapMovement
-YEP_SwapEnemies

///////////////////////////////////////////////////////////////////////
==Almost Functional with UI issues==
///////////////////////////////////////////////////////////////////////
-YEP_X_ItemDurability (there's no obvious spot to show the durability stat)

///////////////////////////////////////////////////////////////////////
==Special Cases==
///////////////////////////////////////////////////////////////////////
-none ATM.


This is the 'pre' half of the plugin. Put it ABOVE the supported plugins.


Terms of use:


All unique code in FOSSIL is licensed under a 
Creative Commons Attribution-ShareAlike 4.0 International License.  The 
remainder is taken from RPG Maker MV and RPG Maker MZ, and is covered under 
the appropriate licenses. No code from any existing plugin was used. 
Credit Restart, 'FOSSIL' or 'FOSSIL Team', and link back to the github 
or the forum thread.

In order to improve clarity, I am officially stating that the 'CC-BY-SA' 
only requires that code directly derived from FOSSIL be also put under a 
'CC-BY-SA' license.  Any other assets in your game, (such as code, art, 
et cetera) as well as your game as a whole are *not* considered to be 
'derivative works' for this purpose.

*/


var Imported = Imported || {};
Imported.Fossil_Pre=true;
var Fossil =Fossil || {}
Fossil.version='0.3.07'

Fossil.isPlaytest=Utils.isOptionValid('test');
Fossil.listPlugins=Fossil.isPlaytest;

//a variation of console.log for listing plugins
//basically reduces the if statements I need to write/
Fossil.log=function(inputText){
	if(Fossil.listPlugins)
	{
		console.log(inputText)
	}
}

//Since the version number got reset with MZ, plugins that look for MV version number will get confused.  
//We save the correct version number one in this half of the plugin sandwich, then restore it afterwards!
Utils.MZ_VERSION= Utils.RPGMAKER_VERSION;
Utils.RPGMAKER_VERSION="1.7.1";  
//if we are running MZ we have webgl.
Graphics.hasWebGL=function(){return true}
Graphics.isWebGL=function(){return true}
//alias these again.
Graphics.BLEND_NORMAL = PIXI.BLEND_MODES["NORMAL"];
Graphics.BLEND_ADD = PIXI.BLEND_MODES["ADD"];
Graphics.BLEND_MULTIPLY = PIXI.BLEND_MODES["MULTIPLY"];
Graphics.BLEND_SCREEN = PIXI.BLEND_MODES["SCREEN"];




//get a list of what plugins we have installed.  This is necessary because
//we are acting BEFORE we can see that handy Imported convention, and because
//not everyone is nice enough to do that.
//this fills in with 'false' for any plugins that are added but not enabled, since I want to have
//the indexes correct for these names just in case
Fossil.pluginNameList =  $plugins.map(a => a.status && a.name ); 
if (Fossil.pluginNameList[0] !== 'FOSSIL_Pre')
{
	console.log('FOSSIL_Pre should probably be your first plugin')
	
}
if (!Fossil.pluginNameList.contains('FOSSIL_Post'))
{
	console.log('You need to have Fossil_Post as well!')
}

oldCommand = function (oldPluginCommand)
{
	//command356 is still in, just depreciated.  Use that code to invoke.
	const args = oldPluginCommand.split(" ");
    const command = args.shift();
	
	//use the game map one if it exists.
	if($gameMap._interpreter)
	{
		Fossil.Interpreter=$gameMap._interpreter
	}
	
	if(!Fossil.Interpreter)
	{
		//we need to have this be persistent since sometimes people put stuff into the interpreter.
		Fossil.Interpreter = new Game_Interpreter()
	}
	//initial params (unused in mz).
	Fossil.Interpreter._params=[]
	//apparently some MV people like to just read the whole parameter list raw, so add it back.
	Fossil.Interpreter._params[0]=oldPluginCommand.trim();
    Fossil.Interpreter.pluginCommand(command, args);
    return true;
	
}

PluginManager.registerCommand('FOSSIL_Pre', 'useOldPlugin' , args => {
	const oldPluginCommand = String(args.OldPluginCommand );
	oldCommand(oldPluginCommand)
});

//alter the 'executeCommand' function so it stores the parameters taken in as an argument into ._params
//rmmv code expects this and it will save a ton of one-off fixes.
Game_Interpreter.prototype.executeCommand = function() {
    const command = this.currentCommand();
    if (command) {
		if(command.parameters)
		{
			this._params = command.parameters
		}
        this._indent = command.indent;
        const methodName = "command" + command.code;
        if (typeof this[methodName] === "function") {
            if (!this[methodName](command.parameters)) {
                return false;
            }
        }
        this._index++;
    } else {
        this.terminate();
    }
    return true;
};



//alter our buttondata in order to include an option for no button type being provided
//as MV doesn't provide this information.  Value is a guess but seems to work.
Sprite_Button.prototype.buttonData = function() {
    const buttonTable = {
		undefined: {x:0 , w:2},
        cancel: { x: 0, w: 2 },
        pageup: { x: 2, w: 1 },
        pagedown: { x: 3, w: 1 },
        down: { x: 4, w: 1 },
        up: { x: 5, w: 1 },
        down2: { x: 6, w: 1 },
        up2: { x: 7, w: 1 },
        ok: { x: 8, w: 2 },
        menu: { x: 10, w: 1 }
    };
    return buttonTable[this._buttonType];
};

//In RMMZ state icons scale with enemies
//in RMMV they do not
//due to the state icons being a larger bitmap with a small visible frame, 
//rounding errors mean that if you scale a sprite, you get an irritating 
//frame around your 'invisible' state icon. 
//this fixes that, and also makes state icons stop scaling with enemies in general.
Fossil.fixSprite_Enemy_updateBitmapStateIcon =   Sprite_Enemy.prototype.updateBitmap;
Sprite_Enemy.prototype.updateBitmap = function() 
{
	Fossil.fixSprite_Enemy_updateBitmapStateIcon.call(this);
	if(this._enemy.stateIcons().length==0)
	{
		//the frame still shows up even when scaling is implemented, 
		//possibly due to subpixel rounding.
		//if you can't make it stay still, just make it vanish
		this.children[0].visible=false;
	}else{
		//prevent the state icon from scaling with enemies.
		this.children[0].visible=true;
		this.children[0].scale.y = 1/this.scale.y;
		this.children[0].scale.x = 1/this.scale.x;
	}
	
}
//we can't just grab the animation duration in RMMZ the way we do in RMMV
//because effekseer doesn't let us just grab animation.frames.length
//so we have this horrible hack where we check for the last sound or the end
//of the last flash instead.
//if you want to extend an animation, 
//just set a flash of duration 1 frame at the end point
Fossil.guessAnimationEnd = function (animation)
{
	//take in either the animation ID or the animation object.
	if(typeof(animation)=='number')
	{
		animation=$dataAnimations[animation]
	}
	var flashEnd=0;
	var soundEnd =0;
	var flashList =animation.flashTimings;
	if(flashList.length)
	{
		var flashEnd = flashList[flashList.length-1].frame+flashList[flashList.length-1].duration;
	}
	var soundList = animation.soundTimings;
	//I can't tell how long a sound is so let's say 10 frames arbitrarily.
	if (soundList.length)
	{
		soundEnd = soundList[soundList.length-1].frame+10 ;
	}
	
	return Math.max(flashEnd,soundEnd,1);
}



//Making custom gauges is more difficult in MZ, because they default is hard-coded to be
//only for a few specific battler stats.
//I am making a custom gauge class (which other people can use if they want), which 
//can reference an arbitary expression for the maxval and targetval


/* 
//example in a window
this.placeFossilGauge('testGauge','$gamePlayer.x','$gameMap.width()','xcoord',50,50,300,50)
//this will monitor the game player's x position, out of how many tiles across the map is.

// If you put in the string 'rate' as the maxExpression
// then it will just use currentExpression as a numerical value (so 0.5 = half full)
// the target param gets stored into this._target
*/

Window_Base.prototype.placeFossilGauge = function(gaugeID, currentExpression, maxExpression,label,x,y,width,height,target) {

	const newGauge = this.fossilCreateInnerSprite(gaugeID, Fossil_Sprite_Gauge);
    newGauge.setup(currentExpression, maxExpression,target)
    newGauge.setupSize(x,y,width,height)
    newGauge._label = label;
	newGauge.show()
	newGauge.drawGauge();
	return newGauge;
};


//create a generic inner sprite for window_base, allowing us to put gauges in any window
Window_Base.prototype.fossilCreateInnerSprite = function(key, spriteClass) {
	this._additionalSprites=this._additionalSprites||{};
    return Window_StatusBase.prototype.createInnerSprite.apply(this,arguments)
};

function Fossil_Sprite_Gauge() {
    this.initialize(...arguments);
}

Fossil_Sprite_Gauge.prototype = Object.create(Sprite_Gauge.prototype);
Fossil_Sprite_Gauge.prototype.constructor = Fossil_Sprite_Gauge;

Fossil_Sprite_Gauge.prototype.initialize = function(rect) {
	if(rect)
	{
		this._barlength=rect.width;
		this._thickness=rect.height;
		this.move(rect.x,rect.y)
	}
	Sprite_Gauge.prototype.initialize.call(this);
    this.initMembers();
    this.createBitmap();
	this.autoHide=false;
	this.autoHideTimer=-1;
	
};

Fossil_Sprite_Gauge.prototype.setup = function(currentExpression, maxExpression,target) {
	this._target=target||this;//target yourself if you don't have anyone to play with
    this._currentExpression=currentExpression;
	this._maxExpression=maxExpression;
    this._value = this.currentValue();
    this._maxValue = this.currentMaxValue();
    this.updateBitmap();
};


Fossil_Sprite_Gauge.prototype.setupSize = function(x,y,barlength,thickness) {
    if(barlength){this._barlength=barlength};
	if(thickness){this._thickness=thickness};
	this.move(x,y)
	this.createBitmap();//push our change in thickness
};

Fossil_Sprite_Gauge.prototype.update = function() {
    Sprite.prototype.update.call(this);
	//fossil gauges are persistent, rmmv gauges are not
	//if we are being called by a rmmv function, we can set our 
	//gauge to self-destruct after a frame
	if (this.autoHide)
	{
		if(this.autoHideTimer<=0)
		{
			this.hide();
		}else{
			this.show()
		}
		
		this.autoHideTimer--;
	}
	
    this.updateBitmap();
};

//commment this out, but leave for injection
Fossil_Sprite_Gauge.prototype.updateFlashing = function() {
}

Fossil_Sprite_Gauge.prototype.bitmapWidth = function() {
    return this._barlength||128;
};

Fossil_Sprite_Gauge.prototype.bitmapHeight = function() {
    return this._thickness+12||24;
};

Fossil_Sprite_Gauge.prototype.gaugeHeight = function() {
    return this._thickness||12;
};

Fossil_Sprite_Gauge.prototype.gaugeX = function() {
    if (this._label === "" || this.hideLabelText) {
        return 0;
    } else {
        return this.measureLabelWidth() + 6;
    }
};

Fossil_Sprite_Gauge.prototype.drawGauge = function() {	
    const gaugeX = this.gaugeX();
    const gaugeY = this.bitmapHeight() - this.gaugeHeight();
    const gaugewidth = this.bitmapWidth() - gaugeX;
    const gaugeHeight = this.gaugeHeight()+500;
    this.drawGaugeRect(gaugeX, gaugeY, gaugewidth, gaugeHeight);
};

Fossil_Sprite_Gauge.prototype.isValid = function() {
    if (this._currentExpression && this._maxExpression) {
		return true;
    }
    return false;
};

Fossil_Sprite_Gauge.prototype.gaugeColor1 = function() {
    if (this._gaugeColor1)
	{
		//if we have a string, assume that it's a hex color.
		if(typeof(this._gaugeColor1)=='string')
		{
			return(this._gaugeColor1) 
		}
		return ColorManager.textColor(this._gaugeColor1)
	}
	return ColorManager.normalColor();
};

Fossil_Sprite_Gauge.prototype.gaugeColor2 = function() {
    if (this._gaugeColor2)
	{
		//if we have a string, assume that it's a hex color.
		if(typeof(this._gaugeColor2)=='string')
		{
			return(this._gaugeColor2) 
		}
		return ColorManager.textColor(this._gaugeColor2)
	}
	return ColorManager.normalColor();
};

Fossil_Sprite_Gauge.prototype.valueColor = function() {
    if (this._valueColor)
	{
		//if we have a string, assume that it's a hex color.
		if(typeof(this._valueColor)=='string')
		{
			return(this._valueColor) 
		}
		return ColorManager.textColor(this._valueColor)
	}
	return ColorManager.normalColor();
    
};



Fossil_Sprite_Gauge.prototype.currentValue = function() {
	if (this._maxExpression == 'rate')
	{
		return this._currentExpression
	}
    if (this._currentExpression) {
		
    	return eval(this._currentExpression)
	}
    return NaN;
};

Fossil_Sprite_Gauge.prototype.currentMaxValue = function() {
	if (this._maxExpression == 'rate')
	{
		return 1;
	}
    if (this._maxExpression)
	{
		return eval(this._maxExpression)
	}
    
    return NaN;
};

//just return the label property.
Fossil_Sprite_Gauge.prototype.label = function() {
	return this._label || "";
};


Fossil_Sprite_Gauge.prototype.drawValue = function() {
	if(!this.hideValueText)
	{
		Sprite_Gauge.prototype.drawValue.apply(this);
	}
};


Fossil_Sprite_Gauge.prototype.drawLabel = function() {
	if(!this.hideLabelText)
	{
		Sprite_Gauge.prototype.drawLabel.apply(this);
	}
    
};

//reimplement the drawgauge from RMMV using our new fossil gauge
//note: yes, RMMZ has a 'drawGauge' function, but it's attached to the Sprite_Gauge object.
//don't get them confused
Window_Base.prototype.drawGauge = function(x, y, width, rate, color1, color2) {
	//I am going to gamble and bet that nobody draws multiple different gauges
	//of the exact same x y coordinates and width
	//with the exact same object.  Maybe I'm wrong, but we can deal with that when it comes up
	//so I think it's fine for our key to be this
	
	//EDIT: it came up in YEP_OptionsCore.  Wow.
	//inefficient but since nothing is going on in that window it's not gonna cause a 
	//huge problem if we delete old gauges each time.
	gaugeID=[this.constructor.name.toString(),x,y,width].toString()

	//this will be something like "Window_VictoryExp,184,38,416"
	label ='';//no label
	[x,y]=this.FossilTweakGaugeByPlugin(x,y)

    var fillW = Math.floor(width * rate);
    var gaugeY = y + this.lineHeight() - 20;
	var newGauge=this.placeFossilGauge(gaugeID, rate,'rate',label,x,gaugeY,width,12)
	newGauge._gaugeColor1 = color1;
	newGauge._gaugeColor2 = color2;
	newGauge.hideValueText = true;
	newGauge.hideLabelText=true;
	newGauge.drawGauge();


};

//helper function to do all our fine positioning, on a per-window basis.
Window_Base.prototype.FossilTweakGaugeByPlugin=function(x,y)
{
	if(this.constructor.name=="Window_VictoryExp")
	{
		x=x-32;
	}
	if(this.constructor.name=="Window_PartyLimitGauge")
	{
		
		y=y-24;
	}
	if(this.constructor.name=="Window_VisualHPGauge")
	{
		y=y-12;
	}

	return [x,y]
}

//now let's reimplement the old RMMV draw actor hp/mp/tp functions with our new gauge

Window_Base.prototype.drawActorHp = function(actor, x, y, width) {
    width = width || 186;
    var color1 = this.hpGaugeColor1();
    var color2 = this.hpGaugeColor2();
	var gaugeID = 'actor'+actor.actorId().toString()+'hpbar'
	var newGauge = this.placeFossilGauge(gaugeID, 'this._target.hp','this._target.mhp',TextManager.hpA,x,y,width,12,actor)
	newGauge._gaugeColor1=color1;
	newGauge._gaugeColor2=color2;
	newGauge._valueColor2 = ColorManager.hpColor(actor);	
	newGauge.drawLabel();
	newGauge.drawValue();
};

Window_Base.prototype.drawActorMp = function(actor, x, y, width) {
    width = width || 186;
    var color1 = this.mpGaugeColor1();
    var color2 = this.mpGaugeColor2();
	var gaugeID = 'actor'+actor.actorId().toString()+'mpbar'
	
	var newGauge = this.placeFossilGauge(gaugeID, 'this._target.mp','this._target.mmp',TextManager.mpA,x,y,width,12,actor)
	newGauge._gaugeColor1=color1;
	newGauge._gaugeColor2=color2;
	newGauge._valueColor2 = ColorManager.mpCostColor(actor);
	newGauge.drawLabel();
	newGauge.drawValue();
};
Window_Base.prototype.drawActorTp = function(actor, x, y, width) {
    width = width || 186;
    var color1 = this.tpGaugeColor1();
    var color2 = this.tpGaugeColor2();
	var gaugeID = 'actor'+actor.actorId().toString()+'tpbar'
	
	var newGauge = this.placeFossilGauge(gaugeID, 'this._target.tp','this._target.maxTp()',TextManager.tpA,x,y,width,12,actor)
	
	newGauge._gaugeColor1=color1;
	newGauge._gaugeColor2=color2;
	newGauge._valueColor2 = ColorManager.tpCostColor(actor);
	newGauge.drawLabel();
	newGauge.drawValue();
};

//text handling tweak; in rmmv putting in no text would have no width.
Fossil.measureTextUndefinedZero=Bitmap.prototype.measureTextWidth;
Bitmap.prototype.measureTextWidth = function(text) {
    if (text === undefined)
	{
		return 0;
	}
    return Fossil.measureTextUndefinedZero.apply(this,arguments)
};

//similarly, don't choke if we're given no text to work with.  Just turn it into an empty string.
Fossil.convertEscapeUndefined=Window_Base.prototype.convertEscapeCharacters;
Window_Base.prototype.convertEscapeCharacters = function(text) {
    if (text === undefined)
	{
		return '';
	}
    return Fossil.convertEscapeUndefined.apply(this,arguments)
};



/*
////////////////////////////////////////////////////////////
     Window Handling Code
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

*/

// RMMZ puts color information into ColorManager.textColor() instead.
//so let's redirect any calls to the old windowbase solution to the new location
Window_Base.prototype.textColor = function(n) {
	return ColorManager.textColor(n);
}

//tell it the standard font size is our system font.
Window_Base.prototype.standardFontSize=function(){
	return $gameSystem.mainFontSize()
}
//get the standard font face
Window_Base.prototype.standardFontFace=function(){
	return $gameSystem.mainFontFace()
}

//preemptive function redirections.
Window_ShopNumber.prototype.itemY = function() {
    return this.itemNameY();
};

Window_ShopNumber.prototype.priceY = function() {
    return this.totalPriceY();
};

//and here's a big block redirecting all those specific color picks.
Window_Base.prototype.crisisColor = function() { return ColorManager.crisisColor() }
Window_Base.prototype.ctGaugeColor1 = function() { return ColorManager.ctGaugeColor1() }
Window_Base.prototype.ctGaugeColor2 = function() { return ColorManager.ctGaugeColor2() }
Window_Base.prototype.deathColor = function() { return ColorManager.deathColor() }
Window_Base.prototype.gaugeBackColor = function() { return ColorManager.gaugeBackColor() }
Window_Base.prototype.hpGaugeColor1 = function() { return ColorManager.hpGaugeColor1() }
Window_Base.prototype.hpGaugeColor2 = function() { return ColorManager.hpGaugeColor2() }
Window_Base.prototype.mpCostColor = function() { return ColorManager.mpCostColor() }
Window_Base.prototype.mpGaugeColor1 = function() { return ColorManager.mpGaugeColor1() }
Window_Base.prototype.mpGaugeColor2 = function() { return ColorManager.mpGaugeColor2() }
Window_Base.prototype.normalColor = function() { return ColorManager.normalColor() }
Window_Base.prototype.pendingColor = function() { return ColorManager.pendingColor() }
Window_Base.prototype.powerDownColor = function() { return ColorManager.powerDownColor() }
Window_Base.prototype.powerUpColor = function() { return ColorManager.powerUpColor() }
Window_Base.prototype.systemColor = function() { return ColorManager.systemColor() }
Window_Base.prototype.tpCostColor = function() { return ColorManager.tpCostColor() }
Window_Base.prototype.tpGaugeColor1 = function() { return ColorManager.tpGaugeColor1() }
Window_Base.prototype.tpGaugeColor2 = function() { return ColorManager.tpGaugeColor2() }
Window_Base.prototype.paramchangeTextColor= function(change) {return ColorManager.paramchangeTextColor(change)}
Window_Base.prototype.hpColor = function(actor) { return ColorManager.hpColor(actor) }
Window_Base.prototype.mpColor = function(actor) { return ColorManager.mpColor(actor) }
Window_Base.prototype.tpColor = function(actor) { return ColorManager.tpColor(actor) }


/*
This was in MV but isn't in MZ.  
 */
WindowLayer.prototype.move = function(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
};


//dummy out a RMMV function that isn't present, isn't needed, and isn't spelled right
Window_Base.prototype.updateButtonsVisiblity = function(){}

//tell it to fetch face images in advance using the existing function
Window_Base.prototype.reserveFaceImages=Window_StatusBase.prototype.loadFaceImages;

//MZ uses rectangles instead of multiple numbers being passed in.
//There's even a special check in the MZ code that checks if you forgot a rectangle.
//But I figure, hey, why not make it flexible?  That way legacy code will still work. :)

var rectFixWindowBase= Window_Base.prototype.initialize;
Window_Base.prototype.initialize = function(rect) {
	
	if(this.constructor.name == 'Window_Hidden')
	{
		//special case for DTextPicture.  Code is wrapped, window is hidden.
		console.log('hide')
		//if you don't have a backsprite it crashes.
		Window.prototype._createAllParts.call(this);
	}
	
	if(arguments.length>0)
	{
		//if we have arguments that are missing in a weird order
		//(like having width and height but no x and y
		//then we should initialize them to 0.
		if (arguments[0]==undefined)
		{
			arguments[0]=0;
		}
		if (arguments[1]==undefined)
		{
			arguments[1]=0;
		}
		if (arguments[2]==undefined)
		{
			arguments[2]=0;
		}
		if (arguments[3]==undefined)
		{
			arguments[3]=0;
		}
		
	}else{
		//if arguments are zero length, throw a warning and set them to all be 0.
		if (Utils.isOptionValid('test'))
		{
			console.log('You created a window without defining the size!')
		}
		arguments=[0,0,0,0]
	}
		
	if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
	{
		rectFixWindowBase.apply(this,arguments) 
	}else{ //if not, I am assuming it is MV.
		if(this._backupRect) //if we don't have a rectangle now, and backed up one earlier, use that one.
		{
			rect=this._backupRect;
			this._backupRect=undefined;
			rectFixWindowBase.call(this,rect)
			return;
		}
		
		if(arguments.length==1)
		{
			console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
		}
		var rect = new Rectangle(arguments[0], arguments[1], arguments[2]||400,  arguments[3]||Graphics.boxHeight);
		rectFixWindowBase.call(this,rect)
	}

};

var rectFixWindowSelectable= Window_Selectable.prototype.initialize;
Window_Selectable.prototype.initialize = function(rect) {
	if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code 
	{
		rectFixWindowSelectable.apply(this,arguments) 
	}else{ //if not, I am assuming it is MV. :)
		if(arguments.length==1)
		{
			console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
		}
		var rect = new Rectangle(arguments[0], arguments[1], arguments[2]||400,  arguments[3]||Graphics.boxHeight);
		rectFixWindowSelectable.call(this,rect)
	}
	
};
//we have to do this each time for each window class :(
var rectFixWindowCommand= Window_Command.prototype.initialize;
Window_Command.prototype.initialize = function(rect) {
	
	if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
	{
		rectFixWindowCommand.apply(this,arguments) 
	}else{ //if not, I am assuming it is MV.
		if(arguments.length==1)
		{
			console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
		}
		
		
		var rectA=new Rectangle(0,0,0,0);
		//Window_Command is inherited from a lot of individual plugin windows.
		//handle case-by-case window sizes here.
		//I may have to refactor this later but this seems okay for now.
		
		switch(this.constructor.name)
		{
			case "Window_SkillLearnConfirm":
			if(SceneManager._scene.helpWindowRect)
			{
				rectA=SceneManager._scene.helpWindowRect();
				rectA.height = (this.windowHeight ? this.windowHeight() : rectA.height)
			}
			break;
			case "Window_ItemActionCommand":
			case "Window_ItemDiscardConfirm":
			if(SceneManager._scene.itemWindowRect)
			{
				rectA=SceneManager._scene.itemWindowRect();
				rectA.height = (this.windowHeight ? this.windowHeight() : rectA.height)
			}
			break;

			default:
		}
			
			
			
		
		
		var rect = new Rectangle(
		arguments[0]||rectA.x, 
		arguments[1]||rectA.y, 
		arguments[2]||rectA.width ||(this.windowWidth ? this.windowWidth() : 0)  ||400,  
		arguments[3]||rectA.height||(this.windowHeight ? this.windowHeight() : 0)||this.fittingHeight(this.numVisibleRows())||Graphics.boxHeight
		);
		rectFixWindowCommand.call(this,rect)
		//if we guessed at the number of rows as MV plugin, then we need to resize.
		if(this._FossilGuessedVisibleRows && this._list)
		{
			this.move(this.x,this.y,this.width,this.fittingHeight(this.numVisibleRows()))
			this._FossilGuessedVisibleRows=false;
		}
	}

	
};


var rectFixWindowMenuCommand= Window_MenuCommand.prototype.initialize;
Window_MenuCommand.prototype.initialize = function(rect) {
	
	if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
	{
		rectFixWindowMenuCommand.apply(this,arguments) 
	}else{ //if not, I am assuming it is MV.
		if(arguments.length==1)
		{
			console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
		}
		
		
		var rectA=new Rectangle(0,0,0,0);
		
		if(SceneManager._scene.commandWindowRect)
		{
			rectA=SceneManager._scene.commandWindowRect();
		}

		var rect = new Rectangle(
		arguments[0]||rectA.x, 
		arguments[1]||rectA.y, 
		arguments[2]||rectA.width ||(this.windowWidth ? this.windowWidth() : 0)  ||400,  
		arguments[3]||rectA.height||(this.windowHeight ? this.windowHeight() : 0)||this.fittingHeight(this.numVisibleRows())||Graphics.boxHeight
		);
		rectFixWindowMenuCommand.call(this,rect)
		
	}
	
};

var rectFixWindowSkillList= Window_SkillList.prototype.initialize;
Window_SkillList.prototype.initialize = function(rect) {
	if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
	{
		rectFixWindowSkillList.apply(this,arguments) 
	}else{ //if not, I am assuming it is MV.
		if(arguments.length==1)
		{
			console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
		}
		
		//SRD initializes this tiny and then resizes it, which doesn't work anymore.
		//because the options size doesn't get set beyond the first entry.
		//do the reverse instead - start it big, then trust it to resize down.
		if(this.constructor.name == 'Window_SkillExtend')
		{
			arguments[3]=800;
		}
		
		
		var rect = new Rectangle(
		arguments[0], 
		arguments[1], 
		arguments[2]||(this.windowWidth ? this.windowWidth() : 0)||400,
		arguments[3]||(this.windowHeight ? this.windowHeight() : 0)||Graphics.boxHeight
		);
		rectFixWindowSkillList.call(this,rect)
	}

};

var rectFixWindowEquipCommand= Window_EquipCommand.prototype.initialize;
Window_EquipCommand.prototype.initialize = function(rect) {
	
	if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
	{
		rectFixWindowEquipCommand.apply(this,arguments) 
	}else{ //if not, I am assuming it is MV.
		if(arguments.length==1)
		{
			console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
		}
		var rect = new Rectangle(arguments[0], arguments[1], arguments[2]||(this.windowWidth ? this.windowWidth() : 0) ||400,  arguments[3]||(this.windowHeight ? this.windowHeight() : 0)||Graphics.boxHeight);
		rectFixWindowEquipCommand.call(this,rect)
		
	}
	
};

var rectFixWindowSkillStatus= Window_SkillStatus.prototype.initialize;
Window_SkillStatus.prototype.initialize = function(rect) {
	
	if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
	{
		rectFixWindowSkillStatus.apply(this,arguments) 
	}else{ //if not, I am assuming it is MV.
		if(arguments.length==1)
		{
			console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
		}
		var rect = new Rectangle(arguments[0], arguments[1], arguments[2]||(this.windowWidth ? this.windowWidth() : 0) ||400,  arguments[3]||(this.windowHeight ? this.windowHeight() : 0)||Graphics.boxHeight);
		rectFixWindowSkillStatus.call(this,rect)
		
	}
	
};

var rectFixWindowStatusBase= Window_StatusBase.prototype.initialize;
Window_StatusBase.prototype.initialize = function(rect) {
	
	if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
	{
		rectFixWindowStatusBase.apply(this,arguments) 
	}else{ //if not, I am assuming it is MV.
		if(arguments.length==1)
		{
			console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
		}
		var rect = new Rectangle(arguments[0], arguments[1], arguments[2]||(this.windowWidth ? this.windowWidth() : 0) ||400,  arguments[3]||(this.windowHeight ? this.windowHeight() : 0)||Graphics.boxHeight);
		rectFixWindowStatusBase.call(this,rect)
		
	}
	
};

var rectFixWindowBattleStatus= Window_BattleStatus.prototype.initialize;
Window_BattleStatus.prototype.initialize = function(rect) {
	
	if(arguments.length)
	{
		if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
		{
			rectFixWindowBattleStatus.apply(this,arguments) 
		}else{ //if not, I am assuming it is MV.
			if(arguments.length==1)
			{
				console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
			}
			var rect = new Rectangle(arguments[0], arguments[1], arguments[2]||(this.windowWidth ? this.windowWidth() : 0) ||400,  arguments[3]||(this.windowHeight ? this.windowHeight() : 0)||Graphics.boxHeight);
			rectFixWindowBattleStatus.call(this,rect)
			
		}
	}else{
		//0 length arguments, we lost it.
		//call from our current scene using the Scene_Menu prototype 
		//(in case we end up calling this from outside a menu scene)
		var rectA= Scene_Battle.prototype.statusWindowRect.call(SceneManager._scene);
		rectFixWindowBattleStatus.call(this,rectA);
	}
	
};

var rectFixWindowItemList= Window_ItemList.prototype.initialize;
Window_ItemList.prototype.initialize = function(rect) {
	
	if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
	{
		rectFixWindowItemList.apply(this,arguments) 
	}else{ //if not, I am assuming it is MV.
		if(arguments.length==1)
		{
			console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
		}
		var rect = new Rectangle(arguments[0], arguments[1], arguments[2]||(this.windowWidth ? this.windowWidth() : 0) ||400,  arguments[3]||(this.windowHeight ? this.windowHeight() : 0)||Graphics.boxHeight);
		rectFixWindowItemList.call(this,rect)
		
	}
	
};

var rectFixWindowEquipSlot= Window_EquipSlot.prototype.initialize;
Window_EquipSlot.prototype.initialize = function(rect) {
	
	if (arguments.length>0 && arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
	{
		rectFixWindowEquipSlot.apply(this,arguments) 
	}else{ //if not, I am assuming it is MV.
		if(arguments.length==1)
		{
			console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
		}
		var rectA=new Rectangle(0,0,0,0);
		if (SceneManager._scene.slotWindowRect)
		{
			rectA=SceneManager._scene.slotWindowRect(); //pick the defaults.
		}
		var rect = new Rectangle(
		(typeof(arguments[0]) == undefined? rectA.x : arguments[0])||0,
		(typeof(arguments[1]) == undefined? rectA.y : arguments[1])||0,
		arguments[2]||(this.windowWidth ? this.windowWidth() : 0) ||400,  
		arguments[3]||(this.windowHeight ? this.windowHeight() : 0)||Graphics.boxHeight
		);
		rectFixWindowEquipSlot.call(this,rect)
		
	}
	
};

var rectFixWindowEquipItem= Window_EquipItem.prototype.initialize;
Window_EquipItem.prototype.initialize = function(rect) {
	
	if (arguments.length && arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
	{
		rectFixWindowEquipItem.apply(this,arguments) 
	}else{ //if not, I am assuming it is MV.
		if(arguments.length==1)
		{
			console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
		}
		
		var rectA=new Rectangle(0,0,0,0);
		if (SceneManager._scene.itemWindowRect)
		{
			rectA=SceneManager._scene.itemWindowRect(); //pick the defaults.
		}
		
		var rect = new Rectangle(
		typeof(arguments[0]) == undefined? rectA.x : arguments[0],
		typeof(arguments[1]) == undefined? rectA.y : arguments[1],
		arguments[2]||rectA.width||(this.windowWidth ? this.windowWidth() : 0) ||400,  
		arguments[3]||rectA.height||(this.windowHeight ? this.windowHeight() : 0)||Graphics.boxHeight);
		
		rectFixWindowEquipItem.call(this,rect)
		
	}
	
};

var rectFixWindowGold= Window_Gold.prototype.initialize;
Window_Gold.prototype.initialize = function(rect) {
	
	if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
	{
		rectFixWindowGold.apply(this,arguments) 
	}else{ //if not, I am assuming it is MV.
		if(arguments.length==1)
		{
			console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
		}
		var rectA=new Rectangle(0,0,0,0);
		if (SceneManager._scene.goldWindowRect)
		{
			rectA=SceneManager._scene.goldWindowRect(); //pick the defaults.
		}
		var rect = new Rectangle(
		typeof(arguments[0]) == undefined? rectA.x : arguments[0],
		typeof(arguments[1]) == undefined? rectA.y : arguments[1],
		arguments[2]||rectA.width||(this.windowWidth ? this.windowWidth() : 0) ||400,
		arguments[3]||rectA.height||(this.windowHeight ? this.windowHeight() : 0)||Graphics.boxHeight);
		
		rectFixWindowGold.call(this,rect)
		
	}
	
};


var rectFixWindowHelp= Window_Help.prototype.initialize;
Window_Help.prototype.initialize = function(rect) {
	
	if ((arguments[0]!==undefined) && (arguments[0].constructor.name=='Rectangle')) // if our first argument is a rectangle this is MZ code
	{
		rectFixWindowHelp.apply(this,arguments) 
	}else{ //if not, I am assuming it is MV.
		if(arguments.length==1)
		{
			console.log("Only one argument and not a rectangle. Could be help window inheriting from something that isn't updating, or it could just be RMMV behavior (it takes one number indicating how many lines of text there are)")
		}
		//RMMV passes this in with a single argument, which is how many lines of text
		//there are
		var rectA=new Rectangle(0,0,0,0);
		if (SceneManager._scene.helpWindowRect)
		{
			rectA=SceneManager._scene.helpWindowRect(); //pick the defaults.
		}
		var rect = new Rectangle(
		0||rectA.x, 
		0||rectA.y, 
		rectA.width||Graphics.boxWidth||(this.windowWidth ? this.windowWidth() : 0) ||400, 
		//in RMMV the height in lines is passed as a param.
		this.fittingHeight(arguments[0]||2)||rectA.height||Graphics.boxHeight);
		
		rectFixWindowHelp.call(this,rect)
		
	}
	
};

var rectFixWindowTitleCommand= Window_TitleCommand.prototype.initialize;
Window_TitleCommand.prototype.initialize = function(rect) {
	if (arguments.length==0)
	{//RMMV doesn't take arguments for the title command window.
/* 		var x = (Graphics.boxWidth - this.width) / 2;
		var y = Graphics.boxHeight - this.height - 96;
		var width=240;
		var height=this.fittingHeight(this.numVisibleRows())
		var rect = new Rectangle(x,y,width,height); */
		const rect=SceneManager._scene.commandWindowRect(); //pick the defaults.

		rectFixWindowTitleCommand.call(this,rect)
		return;
	}
	if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
	{
		rectFixWindowTitleCommand.apply(this,arguments) 
	}else{ //if not, I am assuming it is MV.
		if(arguments.length==1)
		{
			console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
		}
		var rectA=new Rectangle(0,0,0,0);
		if (SceneManager._scene.commandWindowRect)
		{
			rectA=SceneManager._scene.commandWindowRect(); //pick the defaults.
		}
		var rect = new Rectangle(
		typeof(arguments[0]) == undefined? rectA.x : arguments[0],
		typeof(arguments[1]) == undefined? rectA.y : arguments[1],
		arguments[2]||rectA.width||(this.windowWidth ? this.windowWidth() : 0) ||400,  
		arguments[3]||rectA.height||(this.windowHeight ? this.windowHeight() : 0)||this.fittingHeight(this.numVisibleRows())||Graphics.boxHeight);
		

		rectFixWindowTitleCommand.call(this,rect)
		
	}
	
};


var rectFixWindowBattleSkill= Window_BattleSkill.prototype.initialize;
Window_BattleSkill.prototype.initialize = function(rect) {
	
	if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
	{
		rectFixWindowBattleSkill.apply(this,arguments) 
	}else{ //if not, I am assuming it is MV.
		if(arguments.length==1)
		{
			console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
		}
		var rectA=new Rectangle(0,0,0,0);
		if (SceneManager._scene.skillWindowRect)
		{
			rectA=SceneManager._scene.skillWindowRect(); //pick the defaults.
		}
		var rect = new Rectangle(
		typeof(arguments[0]) == undefined? rectA.x : arguments[0],
		typeof(arguments[1]) == undefined? rectA.y : arguments[1],
		arguments[2]||rectA.width||(this.windowWidth ? this.windowWidth() : 0) ||400,  
		arguments[3]||rectA.height||(this.windowHeight ? this.windowHeight() : 0)||this.fittingHeight(this.numVisibleRows())||Graphics.boxHeight);
		
		rectFixWindowBattleSkill.call(this,rect)
		
	}
	
};

var rectFixWindowBattleItem= Window_BattleItem.prototype.initialize;
Window_BattleItem.prototype.initialize = function(rect) {
	
	if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
	{
		rectFixWindowBattleItem.apply(this,arguments) 
	}else{ //if not, I am assuming it is MV.
		if(arguments.length==1)
		{
			console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
		}
		
		var rectA=new Rectangle(0,0,0,0);
		if (SceneManager._scene.itemWindowRect)
		{
			rectA=SceneManager._scene.itemWindowRect(); //pick the defaults.
		}
		var rect = new Rectangle(
		typeof(arguments[0]) == undefined? rectA.x : arguments[0],
		typeof(arguments[1]) == undefined? rectA.y : arguments[1],
		arguments[2]||rectA.width||(this.windowWidth ? this.windowWidth() : 0) ||400,  
		arguments[3]||rectA.height||(this.windowHeight ? this.windowHeight() : 0)||this.fittingHeight(this.numVisibleRows())||Graphics.boxHeight);
		
		rectFixWindowBattleItem.call(this,rect)
		
	}
	
};

var rectFixWindowMenuActor= Window_MenuActor.prototype.initialize;
Window_MenuActor.prototype.initialize = function(rect) {
	
	if (arguments.length && arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
	{
		rectFixWindowMenuActor.apply(this,arguments) 
	}else{ //if not, I am assuming it is MV.
		if(arguments.length==1)
		{
			console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
		}
		
		var rectA=new Rectangle(0,0,0,0);
		if (SceneManager._scene.actorWindowRect)
		{
			rectA=SceneManager._scene.actorWindowRect(); //pick the defaults.
		}
		if (Imported.YEP_ShopMenuCore && this.constructor.name =="Window_MenuActor")
		{	//load faces
			this._additionalSprites = {};
			this.loadFaceImages();
			rectA=Scene_Menu.prototype.statusWindowRect()
		}
		var rect = new Rectangle(
		typeof(arguments[0]) == undefined? rectA.x : arguments[0],
		typeof(arguments[1]) == undefined? rectA.y : arguments[1],
		arguments[2]||rectA.width||(this.windowWidth ? this.windowWidth() : 0) ||400,  
		arguments[3]||rectA.height||Graphics.boxHeight||400
		);
		
		rectFixWindowMenuActor.call(this,rect)
		
	}
	


	
};

var rectFixWindowShopBuy= Window_ShopBuy.prototype.initialize;
Window_ShopBuy.prototype.initialize = function(rect) {
	
	if (arguments.length && arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
	{
		rectFixWindowShopBuy.apply(this,arguments) 
	}else{ //if not, I am assuming it is MV.
		if(arguments.length==1)
		{
			console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
		}
		
		var rectA=new Rectangle(0,0,0,0);
		if (SceneManager._scene.buyWindowRect)
		{
			rectA=SceneManager._scene.buyWindowRect(); //pick the defaults.
		}
		
		if(Imported.YEP_ShopMenuCore)
		{
			rectA.width=SceneManager._scene._dummyWindow.width
			rectA.height=SceneManager._scene._dummyWindow.height
		}
		var rect = new Rectangle(
		typeof(arguments[0]) == undefined? rectA.x : arguments[0],
		typeof(arguments[1]) == undefined? rectA.y : arguments[1],
		rectA.width||(this.windowWidth ? this.windowWidth() : 0) ||400,  
		rectA.height||Graphics.boxHeight||400
		);
		
		//set up our goods since MV set it up here.
		this._shopGoods=this._shopGoods||arguments[3]
		
		rectFixWindowShopBuy.call(this,rect)
		
	}
	
};

var rectFixWindowShopSell= Window_ShopSell.prototype.initialize;
Window_ShopSell.prototype.initialize = function(rect) {
	
	if (arguments.length && arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
	{
		rectFixWindowShopSell.apply(this,arguments) 
	}else{ //if not, I am assuming it is MV.
		if(arguments.length==1)
		{
			console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
		}
		
		var rectA=new Rectangle(0,0,0,0);
		if (SceneManager._scene.sellWindowRect)
		{
			rectA=SceneManager._scene.sellWindowRect(); //pick the defaults.
		}
		if(Imported.YEP_ShopMenuCore)
		{
			rectA.width=SceneManager._scene._dummyWindow.width
			rectA.height=SceneManager._scene._dummyWindow.height
		}
		var rect = new Rectangle(
		typeof(arguments[0]) == undefined? rectA.x : arguments[0],
		typeof(arguments[1]) == undefined? rectA.y : arguments[1],
		rectA.width||(this.windowWidth ? this.windowWidth() : 0) ||400,  
		rectA.height||Graphics.boxHeight||400
		);
		
		rectFixWindowShopSell.call(this,rect)
		
	}
	
};

var rectFixWindowShopStatus= Window_ShopStatus.prototype.initialize;
Window_ShopStatus.prototype.initialize = function(rect) {
	
	if (arguments.length && arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
	{
		rectFixWindowShopStatus.apply(this,arguments) 
	}else{ //if not, I am assuming it is MV.
		if(arguments.length==1)
		{
			console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
		}
		
		var rectA=new Rectangle(0,0,0,0);
		if (SceneManager._scene.actorWindowRect)
		{
			rectA=SceneManager._scene.actorWindowRect(); //pick the defaults.
		}
		var rect = new Rectangle(
		typeof(arguments[0]) == undefined? rectA.x : arguments[0],
		typeof(arguments[1]) == undefined? rectA.y : arguments[1],
		arguments[2]||rectA.width||(this.windowWidth ? this.windowWidth() : 0) ||400,  
		arguments[3]||rectA.height||Graphics.boxHeight||400
		);
		
		rectFixWindowShopStatus.call(this,rect)
		
	}
	
};

var rectFixWindowBattleEnemy= Window_BattleEnemy.prototype.initialize;
Window_BattleEnemy.prototype.initialize = function(rect) {
	
	if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
	{
		rectFixWindowBattleEnemy.apply(this,arguments) 
	}else{ //if not, I am assuming it is MV.
		if(arguments.length==1)
		{
			console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
		}
		//seeing if this might be a better option for defaults.  Just check what it was set to earlier.
		var rectA=new Rectangle(0,0,0,0);
		if (SceneManager._scene.enemyWindowRect)
		{
			rectA=SceneManager._scene.enemyWindowRect(); //spawn the defaults.
		}
		var rect = new Rectangle(
		(typeof(arguments[0]) == undefined? rectA.x : arguments[0])||0,
		(typeof(arguments[1]) == undefined? rectA.y : arguments[1])||0,
		arguments[2]||rectA.width||400,  
		arguments[3]||rectA.height|400
		)
		rectFixWindowBattleEnemy.call(this,rect)	
	}	
};


var rectFixWindowHorzCommand= Window_HorzCommand.prototype.initialize;
Window_HorzCommand.prototype.initialize = function(rect) {
	
	if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
	{
		rectFixWindowHorzCommand.apply(this,arguments) 
	}else{ //if not, I am assuming it is MV.
		if(arguments.length==1)
		{
			console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
		}
		var rect = new Rectangle(
		arguments[0], 
		arguments[1], 
		arguments[2]||(this.windowWidth ? this.windowWidth() : 0) ||400,  
		arguments[3]||(this.windowHeight ? this.windowHeight() : 0)||this.fittingHeight(this.numVisibleRows())||Graphics.boxHeight);
		
		rectFixWindowHorzCommand.call(this,rect)
		
	}
	
};

var rectFixWindowShopCommand= Window_ShopCommand.prototype.initialize;
Window_ShopCommand.prototype.initialize = function(rect) {
    	
	if((typeof(arguments[0])!='undefined' ) && arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
	{
		rectFixWindowShopCommand.apply(this,arguments) 
	}else{ //if not, I am assuming it is MV.
		//MV calls it with 
		//Window_ShopCommand(this._goldWindow.x, this._purchaseOnly);
		//which is width,purchaseonly
		//so we'll init with our MZ initialization
		//sadly yanfly does order differently so we have to hardcode this call for the shop core
		var rectA = new Rectangle();
		if(Fossil.pluginNameList.contains('YEP_ShopMenuCore'))
		{
			//copypaste the code out of rmmv_scenes
			const wx = 0;
			const wy = SceneManager._scene.mainAreaTop();
			const ww = arguments[0]||this.windowWidth();
			const wh = this.fittingHeight(this.numVisibleRows());//SceneManager._scene.calcWindowHeight(1, true);
			rectA = new Rectangle(wx, wy, ww, wh);
		}else{
			rectA = SceneManager._scene.commandWindowRect();		
			rectA.width=arguments[0]||rectA.width;
		}
		rectFixWindowShopCommand.call(this,rectA)
		//then we will set the purchaseonly.
		this._purchaseOnly = arguments[1];
	}
};






var rectFixWindowActorCommand= Window_ActorCommand.prototype.initialize;
Window_ActorCommand.prototype.initialize = function(rect) {
		if(arguments.length>0)
	{
		//if we have arguments that are missing in a weird order
		//(like having width and height but no x and y
		//then we should initialize them to 0.
		if (arguments[0]==undefined)
		{
			arguments[0]=0;
		}
		if (arguments[1]==undefined)
		{
			arguments[1]=0;
		}
		if (arguments[2]==undefined)
		{
			arguments[2]=0;
		}
		if (arguments[3]==undefined)
		{
			arguments[3]=0;
		}
		
	}else{
		//if arguments are zero length, throw a warning and set them to all be 0.
		if (Utils.isOptionValid('test'))
		{
			console.log('You created a window without defining the size!')
		}
		arguments=[0,0,0,0]
	}
	if (arguments[0].constructor.name=='Rectangle') // if our first argument is a rectangle this is MZ code
	{
		rectFixWindowActorCommand.apply(this,arguments) 
	}else{ //if not, I am assuming it is MV.
		if(arguments.length==1)
		{
			console.log("Only one argument and not a rectangle.  I am guessing this is inheriting from a window that isn't updating")
		}
		var rect = new Rectangle(
		arguments[0], 
		arguments[1], 
		arguments[2]||(this.windowWidth ? this.windowWidth() : 0) ||400,  
		arguments[3]||(this.windowHeight ? this.windowHeight() : 0)||this.fittingHeight(this.numVisibleRows())||Graphics.boxHeight);
		
		rectFixWindowActorCommand.call(this,rect)
		
	}
	
};



/*
///////////////////////////////////////////////////////////

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

*/

//RMMV put drawActorName into Window_Base.  
//RMMZ only puts it into Window_StatusBase.  hook into the new version.

Window_Base.prototype.drawActorCharacter = function(actor, x, y) {	Window_StatusBase.prototype.drawActorCharacter.apply(this,arguments) }
Window_Base.prototype.drawActorClass = function(actor, x, y, width) {	Window_StatusBase.prototype.drawActorClass.apply(this,arguments) }
Window_Base.prototype.drawActorFace = function( actor, x, y, width, height){	Window_StatusBase.prototype.drawActorFace.apply(this,arguments)}
Window_Base.prototype.drawActorIcons = function(actor, x, y, width) {	Window_StatusBase.prototype.drawActorIcons.apply(this,arguments) }
Window_Base.prototype.drawActorLevel = function(actor, x, y) {	Window_StatusBase.prototype.drawActorLevel.apply(this,arguments) }
Window_Base.prototype.drawActorName = function(actor, x, y, width) {	Window_StatusBase.prototype.drawActorName.apply(this,arguments) }
Window_Base.prototype.drawActorNickname = function(actor, x, y, width) {	Window_StatusBase.prototype.drawActorNickname.apply(this,arguments) }


Window_BattleEnemy.prototype.windowWidth = function() {
    return Graphics.boxWidth - 192;
};

Window_BattleEnemy.prototype.windowHeight = function() {
    return this.fittingHeight(this.numVisibleRows());
};


//RMMV defaulted width to 312.  I am going to respect that.
Fossil.FixWindowBaseDrawItemNameWidth=Window_Base.prototype.drawItemName;
Window_Base.prototype.drawItemName = function(item, x, y, width) {
	width = width || 312;
    Fossil.FixWindowBaseDrawItemNameWidth.apply(this,arguments);
};


//scrolling works differently, so translate the old reset scroll into the new idiom.
Window_Selectable.prototype.resetScroll = function() {
    this.scrollTo(0, 0);
};

//another function that isn't used anymore, kept in because sometimes it gets checked.
Window_Selectable.prototype.isCursorVisible = function() {
	return true; //am gonna trust RMMZ to keep the cursor visible.
};

//define the old RMMV isContentsArea using MZ's definitions. 
Window_Selectable.prototype.isContentsArea=function(x,y){return this.innerRect.contains(x, y)};

//hook the old slot system into the new
Window_EquipSlot.prototype.slotName = function(index) {
	return this.actorSlotName(this._actor,index)
};


var fixnewLineX= Window_Message.prototype.newLineX
Window_Message.prototype.newLineX = function(textState) 
{
	//textstate is now a passed-in argument instead of a property.
	var textState = textState || this._textState;
	return fixnewLineX.apply(this,arguments)
};


Window_Command.prototype.windowWidth = function() {
    return 240;
};

Window_Gold.prototype.windowWidth = function() {
    return 240;
};

Window_ActorCommand.prototype.windowWidth = function() {
    return 192;
};

Window_ActorCommand.prototype.numVisibleRows = function() {
    return 4;
};

Window_Gold.prototype.windowHeight = function() {
    return this.fittingHeight(1);
};

Window_Command.prototype.windowHeight = function() {
    return this.fittingHeight(this.numVisibleRows());
};

//The MV code for rectangular text areas is now 'with padding' instead of 'for text'
Window_Selectable.prototype.itemRectForText = function(index) {
	return this.itemRectWithPadding(index)
};


//Inherit a bunch of magic numbers, and define ones that weren't used in MZ.  
// I wish there was a less ugly way to do this :(
Window_Selectable.prototype.spacing = function() {
    return 48;
};
Window_Base.prototype.textPadding = function() {
    return 6;
};
Window_Base._iconWidth = ImageManager.iconWidth;
Window_Base._iconHeight = ImageManager.iconHeight;
Window_Base._faceWidth = ImageManager.faceWidth
Window_Base._faceHeight = ImageManager.faceHeight
Sprite_StateIcon._iconWidth = ImageManager.iconWidth;
Sprite_StateIcon._iconHeight = ImageManager.iconHeight;

Window_Base.prototype.standardPadding = function() {
    return 18;
};


Window_Command.prototype.normalColor = function() {
    return "#FFFFFF";
};

Window_Selectable.prototype.gaugeBackColor = function() {
    return "#000000";
};


Window_Command.prototype.numVisibleRows = function() {
	if (!this._list)
	{
		this._FossilGuessedVisibleRows=true;
		return 7;//default to 7 if we don't know how many rows we need.  Might as well hope we're lucky :)
	}
    return Math.ceil(this.maxItems() / this.maxCols());
};

Window_HorzCommand.prototype.numVisibleRows = function() {
	if (!this._list)
	{
		return 1;//default to 1 if we don't know how many rows we need, if this is horizontal
	}
    return Math.ceil(this.maxItems() / this.maxCols());
};


/**
 * Copied out of RMMV
 * 
 * Sets the x, y, width, and height all at once.
 *
 * @method move
 * @param {Number} x The x coordinate of the window layer
 * @param {Number} y The y coordinate of the window layer
 * @param {Number} width The width of the window layer
 * @param {Number} height The height of the window layer
 */
WindowLayer.prototype.move = function(x, y, width, height) {
	this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

//the battlemanager no longer is directly attached to the statuswindow in MZ
//so when people want to refresh the status window using it, we'll direct them
//to the new location.
BattleManager.refreshStatus = function() {
	SceneManager._scene._statusWindow.refresh();
}


//RMMZ flags inputting differently so we will make the function do both.
BattleManager.isInputting = function() {
    return this._inputting || this._phase === 'input';
};


if(Fossil.pluginNameList.contains('YEP_BattleEngineCore'))
{
	//okay this is horrible so let me explain it
	//selectEnemySelection got renamed to startEnemySelection
	//selectActorSelection got renamed to startActorSelection
	
	//we want to splice in the battle engine selection code appropriately.
	//so replace this guy with selectEnemySelection
	//then have selectEnemySelection call startEnemySelection and do nothing
	Scene_Battle.prototype.onSelectAction = function() {
		const action = BattleManager.inputtingAction();
		if (!action.needsSelection()) {
			this.selectNextCommand();
		} else if (action.isForOpponent()) {
			this.selectEnemySelection();
		} else {
			this.selectActorSelection();
		}
	};
	
	Scene_Battle.prototype.selectEnemySelection = function() {
		this.startEnemySelection()
	}
	Scene_Battle.prototype.selectActorSelection = function() {
		this.startActorSelection()
	}
	
	
}


/*
	Skill Gauge modifications!

	I am altering the skill gauges so that they can take in item/armor/weapon counts,
	instead of just individual battler stats.
	

*/


var SpriteGaugeCurrent = Sprite_Gauge.prototype.currentValue
Sprite_Gauge.prototype.currentValue = function() {
	if (this._statusType.substring(0,4) == 'item')
	{
		return $gameParty.numItems($dataItems[this._statusType.substring(4)-0]) ;
	}else if (this._statusType.substring(0,5) == 'armor'){
		return $gameParty.numItems($dataArmors[this._statusType.substring(5)-0]) ;
	}else if (this._statusType.substring(0,6) == 'weapon'){
		//this doesn't count equipped stuff, but I don't think you want to burn those for skills anyway.
		return $gameParty.numItems($dataWeapons[this._statusType.substring(6)-0]) ;
	}
    return SpriteGaugeCurrent.apply(this,arguments);
};

var SpriteGaugeMax = Sprite_Gauge.prototype.currentMaxValue 
Sprite_Gauge.prototype.currentMaxValue = function() {
	if (this._statusType.substring(0,4) == 'item')
	{
		//There's no single good answer to the question of how high this maximum should be
		//Saying '99' or other inventorymax value is likely going to end up with the bar 
		//only having a tiny sliver of it full for basically the whole game, and you'll need to squint
		//to see a difference between 0 and 1.
		//
		//Instead, the bar is totally full if you have items left, and totally empty if you don't.
		//
		 return Math.max($gameParty.numItems($dataItems[this._statusType.substring(4)-0]) ,1);
	}else if (this._statusType.substring(0,5) == 'armor'){
		return Math.max($gameParty.numItems($dataArmors[this._statusType.substring(5)-0]) ,1);
	}else if (this._statusType.substring(0,6) == 'weapon'){
		//this doesn't count equipped stuff, but I don't think you want to burn those for skills anyway.
		return Math.max($gameParty.numItems($dataWeapons[this._statusType.substring(6)-0]) ,1);
	}
	return SpriteGaugeMax.apply(this,arguments);
};

var SpriteGaugeLabel = Sprite_Gauge.prototype.label

Sprite_Gauge.prototype.label = function() {
	if (this._statusType.substring(0,4) == 'item')
	{
		return $dataItems[this._statusType.substring(4)-0].name ;
	}else if (this._statusType.substring(0,5) == 'armor'){
		return $dataArmors[this._statusType.substring(5)-0].name ;
	}else if (this._statusType.substring(0,6) == 'weapon'){
		//this doesn't count equipped stuff, but I don't think you want to burn those for skills anyway.
		return $dataWeapons[this._statusType.substring(6)-0].name ;
	}
    return SpriteGaugeLabel.apply(this,arguments);
};


/*   

////////////////////////////////////////////////////////////
     Sprite Handling Code
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

*/


//RMMZ arranges sprite types differently than RMMV does.  It doesn't even have a Sprite_Base class.
//This is actually really handy!  I can copy over the Sprite_Base definition, and use it
//without any worries.  And since all Sprite_Base things will be RMMV imports, that means
//that they can be altered without worrying about breaking RMMZ sprites. :)
//Anyway, here's the Sprite_Base from RMMV.  
function Sprite_Base() {
    this.initialize.apply(this, arguments);
}

Sprite_Base.prototype = Object.create(Sprite.prototype);
Sprite_Base.prototype.constructor = Sprite_Base;

Sprite_Base.prototype.initialize = function() {
    Sprite.prototype.initialize.apply(this,arguments);
    this._animationSprites = [];
    this._effectTarget = this;
    this._hiding = false;
};

Sprite_Base.prototype.update = function() {
    Sprite.prototype.update.apply(this,arguments);
    this.updateVisibility();
    this.updateAnimationSprites();
};

Sprite_Base.prototype.hide = function() {
    this._hiding = true;
    this.updateVisibility();
};

Sprite_Base.prototype.show = function() {
    this._hiding = false;
    this.updateVisibility();
};

Sprite_Base.prototype.updateVisibility = function() {
    this.visible = !this._hiding;
};

Sprite_Base.prototype.updateAnimationSprites = function() {
    if (this._animationSprites.length > 0) {
        var sprites = this._animationSprites.clone();
        this._animationSprites = [];
        for (var i = 0; i < sprites.length; i++) {
            var sprite = sprites[i];
            if (sprite.isPlaying()) {
                this._animationSprites.push(sprite);
            } else {
                //sprite.remove();
				sprite.destroy(); //RMMZ is more hardcore than RMMV
            }
        }
    }
};

Sprite_Base.prototype.startAnimation = function(animation, mirror, delay) {
    var sprite = new Sprite_Animation();
    sprite.setup(this._effectTarget, animation, mirror, delay);
    this.parent.addChild(sprite);
    this._animationSprites.push(sprite);
};

Sprite_Base.prototype.isAnimationPlaying = function() {
    return this._animationSprites.length > 0;
};




//dummy out this function; this is what makes the loading bar move
//but RMMZ uses a spinner instead!
Graphics.updateLoading = function() {
}


//create empty dummy functions for animations and balloons.
Sprite_Character.prototype.updateAnimation=function(){}
Sprite_Character.prototype.setupAnimation=function(){}
Sprite_Character.prototype.endAnimation=function(){}
Sprite_Character.prototype.setupBalloon=function(){}
Sprite_Character.prototype.startBalloon=function(){}
Sprite_Character.prototype.updateBalloon=function(){this.setupBalloon();}
Sprite_Character.prototype.endBalloon=function(){}




//RMMV calls them 'normal' bitmaps, RMMZ doesn't, I guess RMMZ is just abnormal.
//I am discarding the hue information here because RMMZ does things differently,
//and more efficiently.
//If you need a hue shift on a sprite, use a 'this.setHue(hue)' injection instead.
//sadly, since this is an imagemanager, I can't just stick a setHue in here and solve
//that issue preemptively. :(
ImageManager.loadNormalBitmap = function(url, hue) {
    const cache = url.includes("/system/") ? this._system : this._cache;
    if (!cache[url]) {
        cache[url] = Bitmap.load(url);
    }
    return cache[url];

};
// we now 'load' images instead of 'reserve' them.  Do the needful.
ImageManager.reserveAnimation = ImageManager.loadAnimation;
ImageManager.reserveBattleback1 = ImageManager.loadBattleback1;
ImageManager.reserveBattleback2 = ImageManager.loadBattleback2;
ImageManager.reserveCharacter = ImageManager.loadCharacter;
ImageManager.reserveEnemy = ImageManager.loadEnemy;
ImageManager.reserveFace = ImageManager.loadFace;
ImageManager.reserveParallax = ImageManager.loadParallax;
ImageManager.reservePicture = ImageManager.loadPicture;
ImageManager.reserveSvActor = ImageManager.loadSvActor;
ImageManager.reserveSvEnemy = ImageManager.loadSvEnemy;
ImageManager.reserveSystem = ImageManager.loadSystem;
ImageManager.reserveTileset = ImageManager.loadTileset;
ImageManager.reserveTitle1 = ImageManager.loadTitle1;
ImageManager.reserveTitle2 = ImageManager.loadTitle2;


//This rotate hue method from RMMV is very inefficient.
//However, because some old plugins directly blt images together
// I'm including it.  Try to avoid using it if possible - you should never
//need to rotatehue for something that's going into a sprite.
/**
 * Rotates the hue of the entire bitmap.
 *
 * @method rotateHue
 * @param {Number} offset The hue offset in 360 degrees
 */
Bitmap.prototype.rotateHue = function(offset) {
    function rgbToHsl(r, g, b) {
        var cmin = Math.min(r, g, b);
        var cmax = Math.max(r, g, b);
        var h = 0;
        var s = 0;
        var l = (cmin + cmax) / 2;
        var delta = cmax - cmin;

        if (delta > 0) {
            if (r === cmax) {
                h = 60 * (((g - b) / delta + 6) % 6);
            } else if (g === cmax) {
                h = 60 * ((b - r) / delta + 2);
            } else {
                h = 60 * ((r - g) / delta + 4);
            }
            s = delta / (255 - Math.abs(2 * l - 255));
        }
        return [h, s, l];
    }

    function hslToRgb(h, s, l) {
        var c = (255 - Math.abs(2 * l - 255)) * s;
        var x = c * (1 - Math.abs((h / 60) % 2 - 1));
        var m = l - c / 2;
        var cm = c + m;
        var xm = x + m;

        if (h < 60) {
            return [cm, xm, m];
        } else if (h < 120) {
            return [xm, cm, m];
        } else if (h < 180) {
            return [m, cm, xm];
        } else if (h < 240) {
            return [m, xm, cm];
        } else if (h < 300) {
            return [xm, m, cm];
        } else {
            return [cm, m, xm];
        }
    }

    if (offset && this.width > 0 && this.height > 0) {
        offset = ((offset % 360) + 360) % 360;
        var context = this._context;
        var imageData = context.getImageData(0, 0, this.width, this.height);
        var pixels = imageData.data;
        for (var i = 0; i < pixels.length; i += 4) {
            var hsl = rgbToHsl(pixels[i + 0], pixels[i + 1], pixels[i + 2]);
            var h = (hsl[0] + offset) % 360;
            var s = hsl[1];
            var l = hsl[2];
            var rgb = hslToRgb(h, s, l);
            pixels[i + 0] = rgb[0];
            pixels[i + 1] = rgb[1];
            pixels[i + 2] = rgb[2];
        }
        context.putImageData(imageData, 0, 0);
        //this._setDirty();
    }
};



//some plugins try to deal with the pixi tilemap.  Normally this is just pushing a new value to it
//placeholder to avoid crashing.
PIXI.tilemap={}
PIXI.tilemap.TileRenderer={}

//in MV window.onload was the function that ran right after plugins and started the game.
// MZ's load process is different, and sadly since classes are immutable you can't 
// simply patch into main :(

//instead I'm sticking it into Scene_Boot
//and putting in an empty window.onload

 window.onload = function ()
 {
	//a target for injecting before-title-screen code.
	//or it should be, anyway, once I find a place to hook it in
	//as is, this is where code goes to die. :(
 }
 

//RMMZ expects the 'folder' input to end with a slash  (so "se/")
//RMMV expects it will need to add a slash itself (so "se")
//add a slash if there isn't one at the end of the folder name.
Fossil.FixAudioManagerBufferSlash=AudioManager.createBuffer
AudioManager.createBuffer = function(folder, name) {
	if(folder && folder[folder.length-1] !== '/')
	{
		folder=folder+'/';
	}
	return Fossil.FixAudioManagerBufferSlash.apply(this,arguments);
};
	
//load fonts with the new version
Graphics.loadFont = function(name, url) {
	//in RMMV font loading includes the /font/ tag, but in MZ it doesn't!  Remove that
	if(url.substring(0,6) == 'fonts/')
	{
		url=url.substring(6);
	}
	
	FontManager.load(name,url);
}



Sprite_Animation.prototype.updateFlash = function() {
    if (this._flashDuration > 0) {
        const d = this._flashDuration--;
        this._flashColor[3] *= (d - 1) / d;
		
        if(this._targets.length)
        {
            for (const target of this._targets) {
                target.setBlendColor(this._flashColor);
            }
			
        }else{
			
			if(this._target)
			{
				this._target.setBlendColor(this._flashColor)
			}
        }
    }
};

Sprite_Animation.prototype.targetSpritePosition = function(sprite) {

    const point = new Point(0, -sprite.height / 2);
    if (this._animation.alignBottom) {
        point.y = 0;
    }
	//sprites don't always have parents in MV.  Those poor orphan sprites ... :(
	if(sprite.parent)
	{
		sprite.updateTransform();
	}
    return sprite.worldTransform.apply(point);
};

//this was reassigned to Sprite_Battleback in MZ.
Spriteset_Battle.prototype.battleback1Bitmap=function()
{
	return ImageManager.loadBattleback1(Sprite_Battleback.prototype.battleback1Name());
}

Spriteset_Battle.prototype.battleback2Bitmap=function()
{
	return ImageManager.loadBattleback2(Sprite_Battleback.prototype.battleback2Name());
}

//make characters be able to request animations again!
//uses the new ones (obvs)
Game_CharacterBase.prototype.requestAnimation = function(animationId) {
    $gameTemp.requestAnimation([this], animationId);
};

//request balloons.
Game_CharacterBase.prototype.requestBalloon = function(balloonId) {
    $gameTemp.requestBalloon(this,balloonId);
};


Game_Battler.prototype.startAnimation = function (animationId, mirror, delay)
{
	$gameTemp.requestAnimation([this], animationId);
	
}

//MV includes the '.js' in filenames when calling plugins
//MZ does not.  Check if it's there, and if it is, remove it.
Fossil.fixPluginManagerLoadScript= PluginManager.loadScript
PluginManager.loadScript = function(name) {
	if(name.substring(name.length-3)=='.js')
	{
		if (Utils.isOptionValid('test'))
		{
			console.log('trimmed a .js off a plugin call')
		}
		name=name.substring(0,name.length-3)
		
	}
	Fossil.fixPluginManagerLoadScript.call(this,name);
};



//RMMZ does this as a transform all at once.
//RMMV does x and y as different functions.
//It's inefficient to do it twice, but whatever, it's running a transform
//twice per click, that's nothing.
Window_Base.prototype.canvasToLocalX = function(x) {
    const touchPos = new Point(TouchInput.x, TouchInput.y);
    const localPos = this.worldTransform.applyInverse(touchPos);
    return localPos.x;
};

Window_Base.prototype.canvasToLocalY = function(y) {
    const touchPos = new Point(TouchInput.x, TouchInput.y);
    const localPos = this.worldTransform.applyInverse(touchPos);
    return localPos.y;
};


var addToneToSpritesetBaseInitialize =Spriteset_Base.prototype.initialize
Spriteset_Base.prototype.initialize = function(){
	addToneToSpritesetBaseInitialize.apply(this,arguments);
	this.createToneChanger();
}


//this is a dummy function for injection (mog needs it)
Spriteset_Base.prototype.createToneChanger = function() {
    //dummy function for injection!
};

//this is stored elsewhere in RMMZ so redirect
Spriteset_Battle.prototype.battleback1Name = function() {
    return Sprite_Battleback.prototype.battleback1Name.apply(this,arguments);
};

Spriteset_Battle.prototype.battleback2Name = function() {
	return Sprite_Battleback.prototype.battleback2Name.apply(this,arguments);
}


ImageCache={};// The image cache works differently now, so let plugins that want to fiddle around with it play with a toy version :)
ImageCache.prototype={};







if (Fossil.pluginNameList.contains('YEP_BattleEngineCore'))
{
	// selection help is broken because the interface with MZ changed
	// if enabled it requires target selection for every ability, regardless of
	// whether or not this selection is needed.
	// so for instance guard will ask which ally to use it on, and regardless 
	// of who you say, still apply it to the user
	// this looks like a pain to fix for a minor cosmetic setting.
	// I'm just forcibly turning the plugin parameter off, since it's on by default.
	if(PluginManager.parameters('YEP_BattleEngineCore')['Select Help Window'])
	{
		if (Utils.isOptionValid('test'))
		{
			console.log('Select Help Window option in YEP_BattleEngineCore is not supported.')
			console.log('Fossil has disabled it.')
		}
		PluginManager.parameters('YEP_BattleEngineCore')['Select Help Window']="false";
		
	}



	/////Battle_Core
	//MV function, but with the equivalent code from MZ's BattleManager.startInput
	BattleManager.clearActor = function() {
		this._currentActor = null;
	};

	Fossil.backupSprite_BattlerDamagePopup=Sprite_Battler.prototype.setupDamagePopup;
	Fossil.backupdisplayHpDamage=Window_BattleLog.prototype.displayHpDamage;
	Fossil.backupdisplayMpDamage=Window_BattleLog.prototype.displayMpDamage;
	Fossil.backupdisplayTpDamage=Window_BattleLog.prototype.displayTpDamage;

	Fossil.backupSpriteDamageSetup=Sprite_Damage.prototype.setup;
	
	
	//avoid name collision with yanfly
	BattleManager.updateBattlePhase = BattleManager.updatePhase;
	//fix it here.
	BattleManager.update = function(timeActive) {
		if (!this.isBusy() && !this.updateEvent()) {
			this.updateBattlePhase(timeActive);
		}
		if (this.isTpb()) {
			this.updateTpbInput();
		}
	};
	
	
	if(Fossil.pluginNameList.contains('YEP_X_BattleSysATB'))
	{
		//overwrite the MZ ATB with the BEC ATB
		Game_Battler.prototype.tpbChargeTime = function() {
			return this.atbRate();
		};
		
		Window_StatusBase.prototype.placeTimeGauge = function(actor, x, y) {
				this.placeGauge(actor, "time", x, y);
		};
		
	}
	
	if(Fossil.pluginNameList.contains('YEP_X_BattleSysCTB'))
	{
		//overwrite the MZ ATB with the BEC CTB
		Game_Battler.prototype.tpbChargeTime = function() {
			return this.ctbRate();
		};
		
		Window_StatusBase.prototype.placeTimeGauge = function(actor, x, y) {
				this.placeGauge(actor, "time", x, y);
		};
		
	}


	
	//setting flags for phase changes
	BattleManager.startEndPhase = function()
	{
		this._enteredEndPhase=true;
	}
	BattleManager.endEndPhase = function()
	{
		this._enteredEndPhase=false;
	}
	BattleManager.clearPerformedBattlers = function()
	{
		this._performedBattlers= [];
	}

	//back up the start and end turn functions so we can revert the BC changes to them.
	MZBattleManagerEndTurn=BattleManager.endTurn;
	MZBattleManagerStartTurn=BattleManager.startTurn;
	
	
	//ATB isn't suppported, but this is a tiny step towards eventually doing so.
	
	//need to pass in the active time since BEC doesn't.
	fixactivetimeBECupdateTurn=BattleManager.updateTurn
	BattleManager.updateTurn = function(timeActive = SceneManager._scene.isTimeActive())
	{
		fixactivetimeBECupdateTurn.call(this,timeActive)
	}
	fixactivetimeBEConTurnEnd=Game_Battler.prototype.onTurnEnd;
	
	//if there are no subjects for an action (as can happen with action sequences)
	// RMMZ chokes because it can't end it.  So let's tell it to just stop if it doesn't
	// have a subject.
	Fossil.fixEndActionBEC=BattleManager.endAction
	BattleManager.endAction = function() 
	{
		if(!this._subject){
			return
		}
		Fossil.fixEndActionBEC.apply(this,arguments)
	}
	
}

if(Fossil.pluginNameList.includes('YEP_X_InBattleStatus'))
{
	//move gauges on the in battle status window.
	
	Window_StatusBase.prototype.placeGauge = function(actor, type, x, y) 
	{
		const key = "actor%1-gauge-%2".format(actor.actorId(), type);
		const sprite = this.createInnerSprite(key, Sprite_Gauge);
		sprite.setup(actor, type);
		if(this.constructor.name == 'Window_InBattleStatus')
		{
			sprite.move(x-40,y)
		}else{
			sprite.move(x, y);
		}
		sprite.show();
	};


	Window_StatusBase.prototype.drawActorClass = function(actor, x, y, width) {
		width = width || 168;
		this.resetTextColor();
		if(this.constructor.name == 'Window_InBattleStatus')
		{
			this.drawText(actor.currentClass().name, x-54, y, width,'right');
		}else{
			this.drawText(actor.currentClass().name, x, y, width);
		}
	};
	
	

}

//battle log needs a padded rect definition?
/* Window_BattleLog.prototype.itemRectForText = function(index) {
	return Window_Selectable.prototype.itemRectWithPadding.call(this,index)
};
//and an item rect.  Am guessing it's still selectalbe that it likes
Window_BattleLog.prototype.itemRect = function(index) {
	return Window_Selectable.prototype.itemRect.call(this,index)
};  */

if(Fossil.pluginNameList.includes('SRD_ShakingText'))
{
	//undo the weird little textstate++/-- shift SRD does in obtainEscapeCode
	//this will cause problems if SRD_ShakingText isn't the last message parsing plugin before Fossil_Post
	//but we'll cross that bridge when we come to it.
	Fossil.FixSRDShakeTextWindowMessageobtainEscapeCodePre = Window_Message.prototype.obtainEscapeCode;
	Window_Message.prototype.obtainEscapeCode = function(textState)
	{
		textState.index++;
		return Fossil.FixSRDShakeTextWindowMessageobtainEscapeCodePre.apply(this,arguments);
	}
	
}




//There isn't a 'process normal character' function in MZ anymore
//But there isn't one anymore!
//Add a dummy process normal character in the same place it used to be.  
//and give it a chance to tell the plugin that we are done processing it (this will need
//to be added manually)
var addNormaltoWindowBaseProcessCharacter=Window_Base.prototype.processCharacter;
Window_Base.prototype.processCharacter = function(textState) {
	//some plugins, like SRD_ShakingText, put in a full alternate character processing
	//version.  Obviously if this happens we end up with text AlTeRnAtInG between print
	//modes which is no good.  So if we need to stop processing this character, stop.
    this.fossilStopProcessingThisCharacter=false;
	this.processNormalCharacter(textState)

	if(!this.fossilStopProcessingThisCharacter)
	{
		addNormaltoWindowBaseProcessCharacter.apply(this,arguments);
	}	
}

Window_Base.prototype.processNormalCharacter = function(textState) 
{
	//dummy for injection
}



if(Fossil.pluginNameList.contains('WAY_Core'))
{
	Fossil.backupPluginManagerCommands=PluginManager._commands;
}

if(Fossil.pluginNameList.contains('YEP_MainMenuManager'))
{
	Fossil.fixWindowCommandMaxItemsCrash=Window_Command.prototype.maxItems;
	Window_Command.prototype.maxItems = function() {
		if (this._list == undefined)
		{
			this.clearCommandList()
			return 1;//we shouldn't have any empty command lists.
		}
		return Fossil.fixWindowCommandMaxItemsCrash.apply(this,arguments)
	};
	
}


if(Fossil.pluginNameList.contains('YEP_X_MoreCurrencies'))
{
	//yanfly didn't initialize Yanfly.Icon when getting Yanfly.Icon.Gold in this
	var Yanfly = Yanfly || {};
	Yanfly.Param = Yanfly.Param || {};
	Yanfly.Icon = Yanfly.Icon || {};
}

if(Fossil.pluginNameList.contains('Gimmer_MirrorMirrorOnTheWall'))
{
	//give it a shadertilemap to play with - this object doesn't exist in RMMZ but it's basically
	//been subsumed by tilemap.
	
	function ShaderTilemap() {
		Tilemap.apply(this, arguments);
		this.roundPixels = true;
	}
	ShaderTilemap.prototype = Object.create(Tilemap.prototype);
	ShaderTilemap.prototype.constructor = ShaderTilemap;
	//account for the rmmz ._bitmaps vs rmmv .bitmaps on our tilemap.
	Object.defineProperty(ShaderTilemap.prototype, "bitmaps", {
		get: function() {
			return this._bitmaps;
		},
		set: function(value) {
			this._bitmaps = value;
		},
		configurable: true
	});
	
	//give it a useless refreshtileset function
	Tilemap.prototype.refreshTileset = function() {

	};
	//add this weird follower reversal function from RMMV
	Game_Followers.prototype.reverseEach = function(callback, thisObject) {
		this._data.reverse();
		this._data.forEach(callback, thisObject);
		this._data.reverse();
	};
	
}


//some things (like Gimmer's drunk filter Gimmer_WibblyWobbly) 
//will ask for the tone filter when they want the basecolorfilter.  Redirect it.
/* Object.defineProperty(Spriteset_Map.prototype, "_toneFilter", {
	get: function() {
		return this._baseColorFilter;
	},
	set: function(value) {
		this._baseColorFilter = value;
	},
	configurable: true
}); */


//some things (like Gimmer's drunk filter Gimmer_WibblyWobbly) 
//will ask for the AudioManager's ._sourceNode
//problem is it can now have more than one, and it's an array in ._sourceNodes
//we'll just return the first sourcenode in this case.

/* 
Object.defineProperty(WebAudio.prototype, "._sourceNode", {
	get: function() {
		return this._sourceNodes[0];
	},
	set: function(value) {
		this._sourceNodes[0] = value;
	},
	
	configurable: true
}); */

if(Fossil.pluginNameList.contains('YEP_JobPoints'))
{
	//this got moved from window_base to window_statusbase.
	//since YEP_jobpoints wants to meddle only with Window_Base.prototype.drawActorSimpleStatus
	//set up something in advance.
	Fossil.WSBdrawActorSimpleStatus=Window_StatusBase.prototype.drawActorSimpleStatus;
	Window_Base.prototype.drawActorSimpleStatus = function(actor, x, y) {
		Fossil.WSBdrawActorSimpleStatus.apply(this,arguments)
		//this actually draws the job and does nothing else.
		//use the same params as icon drawing, which means that it draws the job points
		//two lines below the level.
		Window_Base.prototype.drawActorClass.call(this,actor, x, y + this.lineHeight() * 2.5)
	};
	
	
}



if(Fossil.pluginNameList.contains('YEP_MapStatusWindow'))
{
	//this blurs the line between Scene_Map and Scene_Battle.
	//hand Scene_Map the needed function
	Scene_Map.prototype.windowAreaHeight = Scene_Battle.prototype.windowAreaHeight;

}

if(Fossil.pluginNameList.contains('YEP_KeyNameEntry'))
{
	//copied out of rpg_windows from MV
	Window_ChoiceList.prototype.textWidthEx = function(text) {
		return this.drawTextEx(text, 0, this.contents.height);
	};
}

