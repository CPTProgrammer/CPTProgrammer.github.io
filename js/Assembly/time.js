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
		TimeDay.innerHTML = /*fix(CT.h, 2)*/CT.h + ":" + fix(CT.mi, 2);
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
}