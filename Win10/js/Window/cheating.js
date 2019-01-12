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
}