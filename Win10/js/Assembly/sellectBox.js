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
}