var inputEle, popups;

var maxtime = 60 * 60 * 24; //一个小时，按秒计算
var begintime = new Date("2022/01/20 20:04:47");
let nowtime = new Date();
var livelong = (nowtime - begintime) / 1000; //已经度过的秒数
function CountDown() {
    if (maxtime >= 0) {
        hours = Math.floor(maxtime / 3600);
        minutes = Math.floor(maxtime / 60 % 60);
        seconds = Math.floor(maxtime % 60);
        msg = "距离自毁还有" + hours + "时" + minutes + "分" + seconds + "秒";
        document.all["timer"].innerHTML = msg;
        --maxtime;
    } else {
        clearInterval(timer);
        deleteall();
    }
}

function livetime() {
    nowtime = new Date();//[Rev]Added
    livelong = (nowtime - begintime) / 1000;//[Rev]Added
    var days = Math.floor(livelong / (86400)); //天数
    var dsec = Math.floor(livelong % 86400); //未过完的一天的秒数
    var hours = Math.floor(dsec / 3600); //小时数
    var msec = Math.floor(dsec % 3600); //未过完一小时的秒数
    var minutes = Math.floor(msec / 60); //分钟数
    var sec = Math.floor(msec % 60); //获取秒
    livemsg = '已经存在了' + days + '天' + hours + '时' + minutes + '分' + sec + '秒，' + '欢迎把我分享给你的朋友们，以便我能存在的久一点~';
    document.all["live"].innerHTML = livemsg;
    ++livelong;
}

function deleteall() {
    console.log("add dele func")
}
var ishelp = true;

function help() {
    var div = document.getElementById("addhelp");
    div.innerHTML = "";
    var div2 = document.createElement("pre");
    if (ishelp) {
        div2.innerHTML = "一切还好吗？\n如果您或您认识的人正在苦苦挣扎，那么您并不孤单。\n有许多支持服务可以提供帮助。 <a href='https://www.zhihu.com/question/368761239/answer/1216520108'>希望这个链接能帮到您</a>\n分享苏轼的“莫听穿林打叶声，何妨吟啸且徐行。\n竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。”\n或是创世纪“你本是尘土,仍要归于尘土。”\n保持心态，相信没有过不去的坎。\n希望，爱与阳光常与你同在。<a href='./more.html'>更多</a>";
        div2.setAttribute('class', 'field');
        div.appendChild(div2);
        ishelp = false;
    } else {
        ishelp = true;
    }
}

function post(url = ``, data = {}) {
    return fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    }).then(response => response.json()); // parses response to JSON
}

function get(url = ``) {
    return fetch(url, {
        method: 'GET',
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
    }).then(response => response.json());
}


var canGet = true;//[Rev]Added
function getmsg() {
    if (canGet){//[Rev]Added
        canGet = false;//[Rev]Added
        let outmsg = document.querySelector('#outmsg');
        get('getmsg').then(data => {
            outmsg.value = data;
            console.log(data);
            openPop(1);//[Rev]Added
            canGet = true;//[Rev]Added
        });
    }//[Rev]Added
}

var canSend = true;//[Rev]Added
function addmsg() {
    if (canSend){//[Rev]Added
        canSend = false;//[Rev]Added
        let content = document.querySelector('#msg');
        post('addmsg', {
            content: content.value
        }).then(data => {
            maxtime = 60 * 60 * 24;
            console.log(data);
            content.value = '亲爱的网站：\n\t';//[Rev]Changed
            //getmsg();//[Rev]Deleted
            closePop(0);//[Rev]Added
            canSend = true;
        });
    }//[Rev]Added
}

function gettime() {
    get('gettime').then(data => {
        // var dt = "2010-01-05";     ios不支持这种日期格式，改为 "2010/01/05"
        var data = data.replace(/-/g, "/");
        newdata = new Date(data);
        now = new Date();
        maxtime = 60 * 60 * 24 - (now - newdata) / 1000;

        timer = setInterval(CountDown, 1000);
        live = setInterval(livetime, 1000);
        console.log(data);
        //livetime();
    });
}

/*------[Rev]ADD------*/
function openPop(id){
    document.getElementById("pop-ups").style.display = "block";
    var t = popups[id];
    t.style.display = "block";
    t.style.pointerEvents = "none";
    //t.style.opacity = 1;
    //document.getElementById("pop-ups").style.opacity = "0";
    setTimeout(function (){
        document.getElementById("pop-ups").style.opacity = "1";
        document.getElementById("background").style.transform = "scale(0.9)";
        document.getElementById("background").style.webkitTransform = "scale(0.9)";
        //document.getElementById("pop-ups").style.transform = "scale(1)";
        document.getElementById("pop-ups").style.backdropFilter = "blur(calc(0.8 * var(--defaultv)))";
        document.getElementById("pop-ups").style.webkitBackdropFilter = "blur(calc(0.8 * var(--defaultv)))";
    }, 0);
    setTimeout(function (){
        //t.style.display = "block";
        t.style.pointerEvents = "all";
        t.style.opacity = "1";
        t.style.transform = "scale(1)";
        t.style.webkitTransform = "scale(1)";
    }, 100);
}

function closePop(id){
    var t = popups[id];
    document.getElementById("pop-ups").style.opacity = "0";
    document.getElementById("background").style.transform = "scale(1)";
    document.getElementById("background").style.webkitTransform = "scale(1)";
    //document.getElementById("pop-ups").style.transform = "scale(1.1)";
    t.style.transform = "scale(1.1)";
    t.style.webkitTransform = "scale(1.1)";
    t.style.opacity = "0";
    document.getElementById("pop-ups").style.backdropFilter = "blur(calc(0 * var(--defaultv)))";
    document.getElementById("pop-ups").style.webkitBackdropFilter = "blur(calc(0 * var(--defaultv)))";
    setTimeout(function (){
        t.style.display = "none";
        //t.style.opacity = 1;
        document.getElementById("pop-ups").style.display = "none";
    }, 400);
}

/* [Rev]INVALID */
function updateTextIndent(){
    inputEle.value = inputEle.value.replace(/\n(?!\t)/g, "\n\t");
    return;
}

window.onload = function(){
    //livetime();
    gettime();
    inputEle = document.querySelectorAll("#pop-up-send > .pop-up-text")[0];
    popups = document.getElementsByClassName("pop-up");
    var lastInput;
    /*setInterval(function (){
        if (lastInput != inputEle.value){
            updateTextIndent();
            lastInput = inputEle.value;
        }
    }, 10);*/
    inputEle.onkeyup = function (e){
        if (e.keyCode == 13){
            //alert();
            //console.log(inputEle.selectionStart);
            var tempSelectionStart = inputEle.selectionStart;
            inputEle.value = insertStr(inputEle.value, inputEle.selectionStart, "\t");
            //console.log(inputEle.selectionStart);
            inputEle.selectionStart = tempSelectionStart + 1;
            inputEle.selectionEnd = tempSelectionStart + 1;
            //console.log(inputEle.selectionStart);
        }
    };
};

function insertStr(soure, start, newStr){
    return soure.slice(0, start) + newStr + soure.slice(start);
}
