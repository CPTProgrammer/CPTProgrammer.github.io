var AdminPassword = "qinghua123";
var isAdminType = false;

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
};

//禁止所有元素的拖动
ondragstart = function (){
	return false;
};