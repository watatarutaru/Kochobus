//=============================================================================
// PANDA_ImagePreLoad.js
//=============================================================================
// [Update History]
// 2021-05-29 Ver.1.0.0 First Release for MZ.
// 2021-06-23 Ver.1.1.0 fix for subfolder (MZ 1.3.0).
// 2021-07-05 Ver.1.1.1 revert fix for subfolder (MZ 1.3.2).

/*:
 * @target MZ
 * @plugindesc Improve image preloading.
 * @author panda(werepanda.jp)
 * @url http://www.werepanda.jp/blog/20210529185556.html
 * 
 * @help Improve image preloading to eliminate image display lag.
 * 
 * By default, when the event starts, the face images of [Show Text]
 * and the picture images of [Show Picture] in the 200 lines
 * from the beginning of the event are loaded first.
 * This allows the images to be displayed quickly when they are actually used.
 * However, since there is no additional preloading of images appearing after
 * the 200th line, the lag will be noticeable later in the long event.
 * 
 * To solve this problem,
 * this plugin allows you to set the number of lines to preload.
 * When the number is 0, all lines of the event will be preloaded.
 * However, if the event is very long, it may take some time to preload.
 * In addition to the face images of Show Text and the picture of Show Picture,
 * the parallaxe images of [Change Parallax] and the character images of
 * [Change Image] in [Set Movenemt Route] are also preloaded.
 * 
 * You can also use the plugin command "Preload Image" to preload any images.
 * 
 * [License]
 * this plugin is released under MIT license.
 * https://opensource.org/licenses/mit-license.php
 * 
 * @param SliceRows
 * @text Preload Lines
 * @desc Specify the number of lines to be preloaded in the event. 0 means all lines will be preloaded.
 * @type number
 * @default 0
 * @min 0
 * 
 * @command PRELOAD_IMAGE
 * @text Preload Image
 * @desc Preload the specified image file.
 * 
 * @arg file
 * @text Image File Name
 * @desc Specify the image file to be preloaded.
 * @type file
 * @dir img/
 * 
 */

/*:ja
 * @target MZ
 * @plugindesc ????????????????????????????????????????????????
 * @author panda(werepanda.jp)
 * @url http://www.werepanda.jp/blog/20210529185556.html
 * 
 * @help ???????????????????????????????????????????????????????????????????????????????????????
 * 
 * ???????????????????????????????????????????????????????????????????????????200?????????????????????
 * ????????????????????????????????????????????????????????????????????????????????????????????????????????????
 * ????????????????????????????????????????????????????????????????????????????????????
 * ????????????200????????????????????????????????????????????????????????????????????????????????????
 * ?????????????????????????????????????????????????????????????????????????????????????????????
 * 
 * ???????????????????????????????????????????????????????????????????????????????????????????????????????????????
 * ?????????????????? 0 ????????????????????????????????????????????????????????????
 * ????????????????????????????????????????????????????????????????????????????????????????????????????????????
 * ??????????????????????????????????????????????????????????????????????????????????????????????????????
 * ???????????????????????????????????????????????????????????????????????????????????????????????????
 * ??????????????????????????????????????????????????????????????????????????????????????????
 * 
 * ?????????????????????????????????????????????????????????????????????????????????????????????????????????
 * ????????????????????????????????????
 * 
 * ??? ????????????
 * ????????????????????????MIT???????????????????????????????????????
 * ????????????????????????????????????
 * https://opensource.org/licenses/mit-license.php
 * 
 * @param SliceRows
 * @text ???????????????
 * @desc ???????????????????????????????????????????????????????????????????????????0???????????????????????????????????????????????????
 * @type number
 * @default 0
 * @min 0
 * 
 * @command PRELOAD_IMAGE
 * @text ???????????????
 * @desc ??????????????????????????????????????????????????????
 * 
 * @arg file
 * @text ?????????????????????
 * @desc ??????????????????????????????????????????????????????
 * @type file
 * @dir img/
 * 
 */

/*:ko
 * @target MZ
 * @plugindesc ???????????? ?????? ??????????????? ???????????????.
 * @author panda(werepanda.jp)
 * @url http://www.werepanda.jp/blog/20210529185556.html
 * 
 * @help ???????????? ?????? ??????????????? ???????????? ???????????? ?????? ?????? ???????????????.
 * 
 * ??????????????? ???????????? ????????? ?????? ????????? ????????? ???????????? 200?????????
 * "????????? ??????"??? ?????? ???????????? "?????? ??????"??? ????????? ?????? ????????????
 * ????????? ????????? ?????? ??? ???????????? ????????? ????????? ??? ????????????.
 * ????????? 200??? ????????? ???????????? ???????????? ????????? ??????????????? ?????? ?????????
 * ??? ???????????? ?????? ????????? ???????????? ?????? ?????? ?????? ?????????.
 * 
 * ????????? ???????????? ?????? ????????? ?????? ????????? ????????? ????????? ??? ????????? ????????????.
 * ????????? 0?????? ??????, ???????????? ?????? ?????? ?????? ???????????????.
 * ?????? ?????? ??? ???????????? ????????? ?????? ??????????????? ????????? ?????? ???????????? ????????????.
 * ?????? "????????? ??????"??? ?????? ???????????? "?????? ??????"??? ?????? ????????? ????????????
 * "??? ?????? ??????"??? "?????? ?????? ??????"?????? "????????? ??????"?????? ????????????
 * ????????? ????????? ?????? ???????????? ????????????.
 * 
 * ??? ???????????? ?????? "????????? ?????? ????????????"???, ????????? ???????????? ?????? ????????????
 * ??? ??? ????????????. ?????? ??????????????? ????????????.
 * 
 * [?????? ??????]
 * ??? ??????????????? MIT ??????????????? ???????????????.
 * https://opensource.org/licenses/mit-license.php
 * 
 * @param SliceRows
 * @text ?????? ????????? ??????
 * @desc ??????????????? ????????? ?????? ???????????? ????????? ??? ????????? ???????????????. 0??? ???????????? ?????? ?????? ????????? ?????????.
 * @type number
 * @default 0
 * @min 0
 * 
 * @command PRELOAD_IMAGE
 * @text ????????? ?????? ????????????
 * @desc ????????? ????????? ????????? ?????? ???????????????.
 * 
 * @arg file
 * @text ????????? ?????????
 * @desc ?????? ????????? ????????? ????????? ???????????????.
 * @type file
 * @dir img/
 * 
 */


(() => {
	'use strict';
	
	// This Plugin Name
	const pluginName = decodeURIComponent(document.currentScript.src).match(/([^\/]+)\.js$/)[1];
	
	// Parameters
	const parameters = PluginManager.parameters(pluginName);
	const SliceRows = parseInt(parameters['SliceRows']) || 0;
	
	
	//--------------------------------------------------
	// Plugin Command "PreLoad Image"
	//--------------------------------------------------
	PluginManager.registerCommand(pluginName, 'PRELOAD_IMAGE', function(args) {
		
		// get arguments
		const file = args['file'] || '';
		
		// preload image
		if (file !== '') {
			ImageManager.loadBitmap('img/', file);
		}
		
	});
	
	
	//--------------------------------------------------
	// Game_Interpreter.loadImages
	//  [Modified Definition]
	//--------------------------------------------------
	const _Game_Interpreter_loadImages = Game_Interpreter.prototype.loadImages;
	Game_Interpreter.prototype.loadImages = function() {
		// slice event commands (if SliceRows = 0, get all commands)
		const list = (SliceRows > 0) ? this._list.slice(0, SliceRows) : this._list;
		for (const command of list) {
			switch (command.code) {
				case 101: // Show Text
					ImageManager.loadFace(command.parameters[0]);
					break;
				case 231: // Show Picture
					ImageManager.loadPicture(command.parameters[1]);
					break;
				case 284: // Change Parallax (added)
					ImageManager.loadParallax(command.parameters[0]);
					break;
				case 205: // Set Movement Route (added)
					const commands = command.parameters[1].list;
					for (const cmd of commands) {
						switch (cmd.code) {
							case 41:	// Change Character
								ImageManager.loadCharacter(cmd.parameters[0]);
								break;
						}
					}
					break;
			}
		}
	};
	
})();

