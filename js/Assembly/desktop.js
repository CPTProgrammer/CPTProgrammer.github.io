//桌面
function Desktop (){
	//加载桌面
	DesktopIcon = document.getElementById("DesktopIcon");
	var str = "";
	for (var i = 0; i < 8; i++){
		str += "<tr class='DestopIconRow'>";
		for (var j = 0; j < 16; j++){
			str += "<td class='DestopIconCol' id='DestopIconCol_" + j + "-" + i + "'></td>";
		}
		str += "</tr>";
	}
	DesktopIcon.innerHTML = str;
}