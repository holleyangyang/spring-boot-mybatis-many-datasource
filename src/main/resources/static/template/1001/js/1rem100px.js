/*
* @Author: Administrator
* @Date:   2016-06-16 10:10:18
* @Last Modified by:   rtdl.liuft
* @Last Modified time: 2017-11-01 10:19:58
*/

'use strict';


var oHtml = document.documentElement;
getSize();

window.onresize = function(){
	getSize();
}
function getSize(){

	var screenWidth = oHtml.clientWidth;
	
	if(screenWidth < 320){
		// 如果说屏幕宽度小于320的话 就让根目录的font-size停留在320的这个范围内
		oHtml.style.fontSize = '42.666667px';
	} else if(screenWidth > 750){
		// 如果说屏幕宽度大于640的话 就让根目录的font-size停留在640的这个范围内
		oHtml.style.fontSize = '100px';
	}else{
		// 在这个区间之间，就让根目录的font-size自己去适配
		oHtml.style.fontSize = screenWidth/(750/100) + 'px';
	}

}
// 实现:active等效果
// 
// window.onload=function(){
// 	document.body.addEventListener('touchstart', function () { });
// }
