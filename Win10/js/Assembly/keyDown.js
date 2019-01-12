//基本按键插件
function KeyDown (){
	document.addEventListener("keydown", function (e){
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
			//如果用onkeydown就可以用return false;   但是addEventListener不行
			//return false;
			e.preventDefault();
		}
		//禁止按F12
		/*if (e.keyCode == 123){
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
		}*/
	});
}