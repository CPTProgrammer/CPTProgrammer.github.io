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
	document.addEventListener("click", function (){
		for (var i = 0; i < RightClickMenus.length; i++){
			if (MouseOnRightClickMenu[i] == true){
				RightClickMenus[i].style.display = "none";
			}
		}
	});
	for (var i = 0; i < RightClickElements.length; i++){
		RightClickElements[i].onclick = function (){
			if (this.className.substr (-24, 24) == "RightClickInvalidElement"){
				/**代码**/
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
}