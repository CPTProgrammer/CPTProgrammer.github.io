/*var AdminPassword = "qinghua123";
var isAdminType = false;
//alert("请全屏浏览，效果更佳！");*/
/*
//当屏幕比例不为16:9的时候，自动适应屏幕大小
var mainObject = document.getElementById ("main");
var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
setInterval(function (){
	screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	if (screenHeight / 9 != screenWidth / 16){
		mainObject.style.height = (parseFloat(window.getComputedStyle (mainObject).width) / 16 * 9) + "px";
		//alert ((parseFloat(window.getComputedStyle (mainObject).width) / 16 * 9) + "px");
	}else {
		mainObject.style.height = "100%";
	}
}, 10);

//去掉滚动条，自动滚动
//onmousewheel = function (e){
//	if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件			   
//		if (e.wheelDelta > 0) { //当滑轮向上滚动时  
//			scrollBy (0, -30);
//		}
//		if (e.wheelDelta < 0) { //当滑轮向下滚动时  
//			scrollBy (0, 30);
//		}
//	} else if (e.detail) {  //Firefox滑轮事件  
//		if (e.detail> 0) { //当滑轮向上滚动时  
//			scrollBy (0, -30);
//		}
//		if (e.detail< 0) { //当滑轮向下滚动时  
//			scrollBy (0, 30);
//		}
//	}
//};

function max (a, b){
	return a >= b ? a : b;
}
function min (a, b){
	return a <= b ? a : b;
}
function abs(x){
	if (x < 0){
		return -x;
	}
	return x;
}
function fix(num, length) {
	return ('' + num).length < length ? ((new Array(length + 1)).join('0') + num).slice(-length) : '' + num;
}
function toTen (st){
	return parseInt(st, 16);
}
function rgba (st, opacity){
	st = st.substr (1, 6);
	var rgba = "rgba(";
	rgba += toTen (st.substr(0, 2)) + ",";
	rgba += toTen (st.substr(2, 2)) + ",";
	rgba += toTen (st.substr(4, 2)) + ",";
	rgba += opacity + ")";
	return rgba;
} 
//Confirm重载
//function show(str){
//	var _n = msgbox('"+str+"',3,'提示');
//	return(_n);
//}
function GetRect (element) {
	var rect = element.getBoundingClientRect();
	return {
		top	: rect.top - top,
		bottom : rect.bottom - top,
		left : rect.left - left,
		right : rect.right - left
	};
}
function JS(str){
	var _script = document.createElement("script");
	_script.text = str;
	document.getElementById ("jsCode").appendChild(_script);
}
*/
/*
var body = document.getElementsByTagName ("body")[0];
var MousePoint = {
	x : 0,
	y : 0
};
var CT = {
	s: 0,
	mi: 0,
	h: 0,
	d: 0,
	mo: 0,
	y: 0,
	w: 0
};
onmousemove = function (e){
	MousePoint.x = e.pageX;
	MousePoint.y = e.pageY;
};*/
/*
//选择栏组件
function SellectBoxFunction(){
	main = document.getElementById("main");
	backgroundImg = document.getElementById ("backgroundImg");
	SellectBox = document.getElementById("SellectBox");
	SellectFirstMouse = null;
	SellectFirstTimes = true;
	SellectTimer = null;
	OnMouseUp = true;
	backgroundImg.onmousedown = function (e){
		SellectFirstMouse = {
			x : MousePoint.x,
			y : MousePoint.y
		};
		SellectBox.style.display = "block";
		OnMouseUp = false;
	};
	main.onmousemove = function (){
		if (OnMouseUp == false){
			if (parseFloat(SellectBox.style.width) < 2 && parseFloat(SellectBox.style.height) < 2){
				SellectBox.style.display = "none";
			}else {
				SellectBox.style.display = "block";
			}
			SellectBox.style.top = min(MousePoint.y, SellectFirstMouse.y) + "px";
			SellectBox.style.left = min(MousePoint.x, SellectFirstMouse.x) + "px";
			SellectBox.style.width = abs(MousePoint.x - SellectFirstMouse.x) + "px";
			SellectBox.style.height = abs(MousePoint.y - SellectFirstMouse.y) + "px";
		}
	};
	main.onmouseup = function (){
		OnMouseUp = true;
		SellectFirstTimes = true;
		SellectBox.style.display = "none";
		SellectTimer = null;
		SellectBox.style.top = "0px";
		SellectBox.style.left = "0px";
		SellectBox.style.width = "0px";
		SellectBox.style.height = "0px";
	};
}*/
/*
//时间组件
function TimeFunction(){
	Time = document.getElementById ("Time");
	TimeDay = document.getElementById ("TimeDay");
	TimeYear = document.getElementById ("TimeYear");
	TimeTimer = setInterval (function (){
		var tstr;
		var cuti = new Date();
		CT.s = cuti.getSeconds();
		CT.mi = cuti.getMinutes();
		CT.h = cuti.getHours();
		CT.d = cuti.getDate();
		CT.mo = cuti.getMonth() + 1;
		CT.y = cuti.getFullYear();
		CT.w = cuti.getDay();
		TimeDay.innerHTML = /..fix(CT.h, 2)../CT.h + ":" + fix(CT.mi, 2);
		TimeYear.innerHTML = CT.y + "/" + CT.mo + "/" + CT.d;
		Time.title = CT.y + "年" + CT.mo + "月" + CT.d + "日\n" + "星期";
		switch (CT.w){
			case 0 + 1:
				tstr = "一";
				break;
			case 1 + 1:
				tstr = "二";
				break;
			case 2 + 1:
				tstr = "三";
				break;
			case 3 + 1:
				tstr = "四";
				break;
			case 4 + 1:
				tstr = "五";
				break;
			case 5 + 1:
				tstr = "六";
				break;
			case 0:
				tstr = "日";
				break;
		}
		Time.title += tstr;
	}, 100);
}*/
/*
//右键插件
function RightClick (){
	//防止浏览器出现右键菜单
	oncontextmenu = function (){
		return false;
	};
	RightClickElements = document.getElementsByClassName ("RightClickElement");
	RightClickMenus = document.getElementsByClassName ("RightClick");
	document.getElementById ("backgroundImg").oncontextmenu = function (){
		document.getElementById ("DesktopRightClick").style.left = MousePoint.x + "px";
		document.getElementById ("DesktopRightClick").style.top = MousePoint.y + "px";
		document.getElementById ("DesktopRightClick").style.display = "block";
		return false;
	};
	//当在特定情况下隐藏菜单
	MouseOnRightClickMenu = [];
	for (var i = 0; i < RightClickMenus.length; i++){
		RightClickMenus[i].onmouseout = function (){
			MouseOnRightClickMenu[getElementInArray (this, RightClickMenus)] = true;
		};
		RightClickMenus[i].onmouseover = function (){
			MouseOnRightClickMenu[getElementInArray (this, RightClickMenus)] = false;
		};
	}
	onclick = function (){
		for (var i = 0; i < RightClickMenus.length; i++){
			if (MouseOnRightClickMenu[i] == true){
				RightClickMenus[i].style.display = "none";
			}
		}
	};
	for (var i = 0; i < RightClickElements.length; i++){
		RightClickElements[i].onclick = function (){
			if (this.className.substr (-24, 24) == "RightClickInvalidElement"){
				/..代码../
			}else {
				this.parentNode.style.display = "none";
			}
		};
	}
	//元素前面的小图片
	for (var i = 0; i < RightClickElements.length; i++){
		switch (RightClickElements[i].innerHTML){
			case "英特尔® 显卡设置":
				RightClickElements[i].style.backgroundImage = "url(image/icon/IntelDisplaySet.png)";
				RightClickElements[i].style.backgroundPosition = "12px";
				RightClickElements[i].style.backgroundSize = "20px";
				break;
			case "显示设置(D)":
				RightClickElements[i].style.backgroundImage = "url(image/icon/DisplaySet.png)";
				RightClickElements[i].style.backgroundPosition = "12px";
				RightClickElements[i].style.backgroundSize = "20px";
				break;
			case "个性化(R)":
				RightClickElements[i].style.backgroundImage = "url(image/icon/Individualization.png)";
				RightClickElements[i].style.backgroundPosition = "12px";
				RightClickElements[i].style.backgroundSize = "20px";
				break;
		}
	}
}*/
/*
//基本按键插件
function KeyDown (){
	onkeydown = function (e){
		//开启作弊装置
		if (e.keyCode == 72 && e.ctrlKey){
			//alert ("你触发了作弊组合键");
			//检测窗口是否在屏幕之外
			if (parseFloat(window.getComputedStyle(document.getElementById ("CheatingWindow")).top) < 0){
				document.getElementById ("CheatingWindow").style.top = "0px";
			}
			if (parseFloat(window.getComputedStyle(document.getElementById ("CheatingWindow")).left) < 0){
				document.getElementById ("CheatingWindow").style.left = "0px";
			}
			document.getElementById ("CheatingWindow").style.display = "block";
			return false;
		}
		//禁止按F12
		if (e.keyCode == 123){
			if (isAdminType == true){
				return true;
			}else if(confirm("童鞋，不可以乱动代码哦！\n确定输入管理员密码(只需输入一次)？")){
				var _administratorPassword = prompt("输入管理员密码：");
				if (_administratorPassword == AdminPassword){
					isAdminType = true;
					return true;
				}
			}
			//return false;
		}
	};
}*/
/*
//作弊
function Cheating (){
	document.getElementById ("CheatingSellectBox").onchange = function (){
		//alert (rgba(document.getElementById ("CheatingSellectBox").value, 0.2));
		if (document.getElementById ("CheatingSellectBoxBorder").value == "实线边框（有背景）"){
			document.getElementById ("SellectBox").style.backgroundColor = rgba(document.getElementById ("CheatingSellectBox").value, 0.2);
			document.getElementById ("SellectBox").style.borderColor = document.getElementById ("CheatingSellectBox").value;
		}else {
			document.getElementById ("SellectBox").style.borderColor = document.getElementById ("CheatingSellectBox").value;
		}
	};
	document.getElementById ("CheatingSellectBoxBorder").onchange = function (){
		//alert (rgba(document.getElementById ("CheatingSellectBox").value, 0.2));
		if (document.getElementById ("CheatingSellectBoxBorder").value == "虚线边框（无背景）"){
			document.getElementById ("SellectBox").style.borderStyle = "dotted";
			document.getElementById ("SellectBox").style.borderColor = "#BBBBBB";
			document.getElementById ("SellectBox").style.backgroundColor = "transparent";
			document.getElementById ("CheatingSellectBox").value = "#BBBBBB";
		}else {
			document.getElementById ("SellectBox").style.border = "1px solid rgb(51,153,255)";
			document.getElementById ("SellectBox").style.backgroundColor = "rgba(51,153,255,0.2)";
			document.getElementById ("CheatingSellectBox").value = "#3399FF";
		}
	};
}*/
/*
function getElementInArray (element, array){
	var index;
	for (index = 0; index < array.length; index++){
		if (element == array[index]){
			break;
		}
	}
	if (index == array.length){
		index--;
	}
	return index;
}

function getPointOnElement(element, x, y) {
	var bbox = element.getBoundingClientRect();
	//console.log(body.scrollTop);
	return {
		x : x - bbox.left,
		y : y - bbox.top - body.scrollTop
	};
}*/

/*//窗口组件
function Window (){
	allCloseButtons = document.getElementsByClassName ("windowClose");
	for (var i = 0; i < allCloseButtons.length; i++){
		allCloseButtons[i].onclick = function (){
			this.parentNode.parentNode.parentNode.style.display = "none";
		};
	}
	allWindowHead = document.getElementsByClassName ("windowHead");
	DragFirstMouseToLeftTop = [];
	DragMousePoint = [];
	DragOnMouseUp = [];
	DragTimer = [];
	for (var i = 0; i < allWindowHead.length; i++){
		allWindowHead[i].onmousedown = function (e){
			//DragFirstMouseToLeftTop[i] = getPointOnDocument (allWindowHead[i], MousePoint.x, MousePoint.y);
			DragFirstMouseToLeftTop[getElementInArray (this, allWindowHead)] = getPointOnElement (this.parentNode, MousePoint.x, MousePoint.y);
			DragOnMouseUp[getElementInArray (this, allWindowHead)] = false;
			var self = this;
			DragTimer[getElementInArray (this, allWindowHead)] = setInterval(function (){
				if (DragOnMouseUp[getElementInArray (self, allWindowHead)] == false){
					DragMousePoint[getElementInArray (self, allWindowHead)] = {
						x : MousePoint.x,
						y : MousePoint.y
					};
					//alert(DragFirstMouseToLeftTop[getElementInArray (self, allWindowHead)].x);
					self.parentNode.style.top = (DragMousePoint[getElementInArray (self, allWindowHead)].y - DragFirstMouseToLeftTop[getElementInArray (self, allWindowHead)].y) + "px";
					self.parentNode.style.left = (DragMousePoint[getElementInArray (self, allWindowHead)].x - DragFirstMouseToLeftTop[getElementInArray (self, allWindowHead)].x) + "px";
				}
			}, 10);
			/..this.onmousemove = function (){
				if (DragOnMouseUp[getElementInArray (this, allWindowHead)] == false){
					DragMousePoint[getElementInArray (this, allWindowHead)] = {
						x : MousePoint.x,
						y : MousePoint.y
					};
					//alert(DragFirstMouseToLeftTop[getElementInArray (this, allWindowHead)].x);
					this.parentNode.style.top = (DragMousePoint[getElementInArray (this, allWindowHead)].y - DragFirstMouseToLeftTop[getElementInArray (this, allWindowHead)].y) + "px";
					this.parentNode.style.left = (DragMousePoint[getElementInArray (this, allWindowHead)].x - DragFirstMouseToLeftTop[getElementInArray (this, allWindowHead)].x) + "px";
				}
				this.onmouseup = function (){
					DragOnMouseUp[getElementInArray (this, allWindowHead)] = true;
					//alert (DragOnMouseUp[getElementInArray (this, allWindowHead)]);
				};
				//this.onmouseout = function (){
				//	DragOnMouseUp[getElementInArray (this, allWindowHead)] = true;
				//};
			};../
		};
		/..
		allWindowHead[i].onmousemove = function (){
			if (DragOnMouseUp[getElementInArray (this, allWindowHead)] == false){
				DragMousePoint[getElementInArray (this, allWindowHead)] = {
					x : MousePoint.x,
					y : MousePoint.y
				};
				//alert(DragFirstMouseToLeftTop[getElementInArray (this, allWindowHead)].x);
				this.parentNode.style.top = (DragMousePoint[getElementInArray (this, allWindowHead)].y - DragFirstMouseToLeftTop[getElementInArray (this, allWindowHead)].y) + "px";
				this.parentNode.style.left = (DragMousePoint[getElementInArray (this, allWindowHead)].x - DragFirstMouseToLeftTop[getElementInArray (this, allWindowHead)].x) + "px";
			}
		};../
		allWindowHead[i].onmouseup = function (){
			DragOnMouseUp[getElementInArray (this, allWindowHead)] = true;
			window.clearInterval(DragTimer[getElementInArray (this, allWindowHead)]);
			//alert (DragOnMouseUp[getElementInArray (this, allWindowHead)]);
		};
	}
}*/
/*
//执行
SellectBoxFunction();
TimeFunction();
RightClick ();
KeyDown ();
Cheating ();
Window ();

//禁止所有元素的拖动
ondragstart = function (){
	return false;
};*/

//禁止按F12
/*onkeydown = function (e){
	if (e.keyCode == 123){
		if (isAdminType == true){
			return true;
		}else if(confirm("童鞋，不可以乱动代码哦！\n确定输入管理员密码(只需输入一次)？")){
			var _administratorPassword = prompt("输入管理员密码：");
			if (_administratorPassword == AdminPassword){
				isAdminType = true;
				return true;
			}
		}
		//return false;
	}
};*/
/*onclick = function (){
	JS("alert(123);");
	//document.write("<script>setTimeout(function(){var xxxx = 1234;}, 1000);<\script>");
};*/