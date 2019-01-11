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
/*onmousewheel = function (e){
	if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件   
		if (e.wheelDelta > 0) { //当滑轮向上滚动时  
			scrollBy (0, -30);
		}
		if (e.wheelDelta < 0) { //当滑轮向下滚动时  
			scrollBy (0, 30);
		}
	} else if (e.detail) {  //Firefox滑轮事件  
		if (e.detail> 0) { //当滑轮向上滚动时  
			scrollBy (0, -30);
		}
		if (e.detail< 0) { //当滑轮向下滚动时  
			scrollBy (0, 30);
		}
	}
};*/

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
/**function show(str){
	var _n = msgbox('"+str+"',3,'提示');
	return(_n);
}**/ 
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
	/*var jsCode = str;
	var jsIframe = document.createElement("iframe");
	jsIframe.style.display = "none";//把jsIframe隐藏起来
	document.body.appendChild(jsIframe);
	with(window.frames[window.frames.length - 1]){
		document.open();
		document.write("<script>" + jsCode + "<\script>"); //执行JS代码
		document.close();
	}
	document.body.removeChild(jsIframe);*/
	var _script = document.createElement("script");
	_script.text = str;
	document.getElementById ("jsCode").appendChild(_script);
}
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
}