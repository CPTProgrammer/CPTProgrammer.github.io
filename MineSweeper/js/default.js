//导入（require未定义？？？，最后发现是index.js中创建mainWindow时webPreferences少写了"s"）
/*const {ipcRenderer} = require('electron');

//F11全屏 （最后发现Electron自带F11全屏，但隐藏菜单栏后F11全屏不可用）
isFullScreen = false;
canFullScreen = true;
function _fullscreen(e){
    if (e.keyCode == 122 && canFullScreen == true){
        canFullScreen = false;
        isFullScreen = !isFullScreen;
        ipcRenderer.send("fullscreen-msg", isFullScreen);
    }
}
document.addEventListener("keydown", _fullscreen);
document.addEventListener("keyup", function (){
    canFullScreen = true;
});*/


//0代表空，-1代表雷，其他数字代表周围雷数
function random(){
    while (1){
        var i = Math.floor(Math.random() * height);
        var j = Math.floor(Math.random() * height);
        if (map[i][j] == -1){
            continue;
        }else {
            map[i][j] = -1;
            break;
        }
    }
    return true;
}
var isPossible = function (ipi, ipj, includeZero){
    return includeZero ? (ipi >= 0 && ipj >= 0 && ipi < height && ipj < width) : !(ipi <= 0 || ipj <= 0 || ipi > height || ipj > width);
    //return true;
}
var scan = function (sci, scj){
    var cnt = 0;
    //console.log(map);
    console.log("Scan: " + sci + ", " + scj)
    if (isPossible(sci - 1, scj - 1, true)){
        console.log(map[sci - 1][scj - 1]);
        if(map[sci - 1][scj - 1] == -1){
            cnt++;
        }
    }
    if (isPossible(sci - 1, scj, true)){if(map[sci - 1][scj] == -1){
        cnt++;
    }}
    if (isPossible(sci - 1, scj + 1, true)){if(map[sci - 1][scj + 1] == -1){
        cnt++;
    }}
    if (isPossible(sci, scj - 1, true)){if(map[sci][scj - 1] == -1){
        cnt++;
    }}
    if (isPossible(sci, scj + 1, true)){if(map[sci][scj + 1] == -1){
        cnt++;
    }}
    if (isPossible(sci + 1, scj - 1, true)){if(map[sci + 1][scj - 1] == -1){
        cnt++;
    }}
    if (isPossible(sci + 1, scj, true)){if(map[sci + 1][scj] == -1){
        cnt++;
    }}
    if (isPossible(sci + 1, scj + 1, true)){if(map[sci + 1][scj + 1] == -1){
        cnt++;
    }}
    return cnt;
}
var scanFlag = function (sci, scj){
    var cnt = 0;
    //console.log(map);
    console.log("ScanFlag: " + sci + ", " + scj)
    if (isPossible(sci - 1, scj - 1, true)){
        if(flag[sci - 1][scj - 1] == true){
            cnt++;
        }
    }
    if (isPossible(sci - 1, scj, true)){if(flag[sci - 1][scj] == true){
        cnt++;
    }}
    if (isPossible(sci - 1, scj + 1, true)){if(flag[sci - 1][scj + 1] == true){
        cnt++;
    }}
    if (isPossible(sci, scj - 1, true)){if(flag[sci][scj - 1] == true){
        cnt++;
    }}
    if (isPossible(sci, scj + 1, true)){if(flag[sci][scj + 1] == true){
        cnt++;
    }}
    if (isPossible(sci + 1, scj - 1, true)){if(flag[sci + 1][scj - 1] == true){
        cnt++;
    }}
    if (isPossible(sci + 1, scj, true)){if(flag[sci + 1][scj] == true){
        cnt++;
    }}
    if (isPossible(sci + 1, scj + 1, true)){if(flag[sci + 1][scj + 1] == true){
        cnt++;
    }}
    return cnt;
}
function init(){
    for (var i = 0; i < height; i++){
        map[i] = new Array(width);
    }
    for (var i = 0; i < height; i++){
        book[i] = new Array(width);
    }
    for (var i = 0; i < height; i++){
        flag[i] = new Array(width);
    }
    for (var i = 0; i < height; i++){
        for (var j = 0; j < width; j++){
            map[i][j] = 0;
        }
    }
    for (var i = 0; i < height; i++){
        for (var j = 0; j < width; j++){
            book[i][j] = false;
        }
    }
    for (var i = 0; i < height; i++){
        for (var j = 0; j < width; j++){
            flag[i][j] = false;
        }
    }
}
function generate(vi, vj){
    while(1){
        for (var i = 0; i < mineAmount; i++){
            random();
        }
        console.log(vi + ', ' + vj);
        for (var i = 0; i < height; i++){
            for (var j = 0; j < width; j++){
                //map[i][j] = map[i][j] != -1 ? scan(i, j) : -1;
                if (map[i][j] != -1){
                    map[i][j] = scan(i, j);
                }
            }
        }
        if (map[vi][vj] == 0){
            break;
        }else {
            map = undefined;
            map = new Array(height);
            init();
        }
    }
    //console.log(map);
}
function check (){
    var cnt = 0;
    for (var i = 0; i < height; i++){
        for (var j = 0; j < width; j++){
            if (document.getElementById(i + "-" + j).className == "yes"){
                cnt++;
            }
        }
    }
    if (cnt == width * height - mineAmount){
        return true;
    }else {
        return false;
    }
}
function click(i, j){
    console.log("Click: " + i + ", " + j);
    //console.log(map);
    if (clickCount == 0){
        generate(i, j);
        change(i, j);
        refresh();
    }else {
        if (flag[i][j] == true){
            return;
        }
        if (map[i][j] == -1){
            alert("Loser");
            window.refresh();
            return;
        }
        change(i, j);
        refresh();
    }
    clickCount++;
    if (check()){
        alert("Win!!!!!!!!!!!!!!!!");
        window.refresh();
    }
}
function clickAround(i, j){
    for (var di = -1; di <= 1; di++){
        for (var dj = -1; dj <= 1; dj++){
            if ((di != 0 || dj != 0) && isPossible(i + di, j + dj, true)){
                click (i + di, j + dj);
            }
        }
    }
}
var setBlank = function (i, j){
    document.getElementById(i + "-" + j).className = "yes";
}
function nBlank(si, sj){
    for (var i = -1; i <= 1; i++){
        for (var j = -1; j <= 1; j++){
            if (!(i == 0 && j == 0)){
                if (isPossible(si + i, sj + j, true)){
                    if(map[si + i][sj + j] > 0){
                        setBlank(si + i, sj + j);
                        //book[si + i][sj + j] = true;
                    }
                }
            }
        }
    }
}
var change = function (vi, vj){
    setBlank(vi, vj);
    book[vi][vj] = true;
    //console.log("Change: " + vi + ", " + vj);
    /*if (map[vi][vj] > 0){
        return;
    }*/
    if (isPossible(vi - 1, vj, true)){if(map[vi - 1][vj] === 0 && book[vi - 1][vj] == false){
        console.log("Top->" + vi + ", " + vj);
        change(vi - 1, vj);
        nBlank(vi - 1, vj);
    }}else {
        console.warn(!(isPossible(vi - 1, vj, true)) ? ("TopUnpossible->" + vi + ", " + vj) : (!(map[vi - 1][vj] === 0) ? ("TopnoZero->" + vi + ", " + vj) : ("TopBooked->" + vi + ", " + vj)));
    }
    console.log("isPossible(" + (vi + 1) + ", " + (vj) + ", true) = " + isPossible(vi + 1, vj, true));
    if (isPossible(vi + 1, vj, true)){if(map[vi + 1][vj] === 0 && book[vi + 1][vj] == false){
        console.log("Bottom->" + vi + ", " + vj);
        change(vi + 1, vj);
        nBlank(vi + 1, vj);
    }}else {
        console.warn(!(isPossible(vi + 1, vj, true)) ? ("BottomUnpossible->" + vi + ", " + vj) : (!(map[vi + 1][vj] === 0) ? ("BottomnoZero->" + vi + ", " + vj) : ("BottomBooked->" + vi + ", " + vj)));
    }
    /*if (isPossible(vi - 1, vj - 1, true) && map[vi - 1][vj - 1] == 0 && book[vi - 1][vj - 1] == false){
        change(vi - 1, vj - 1);
    }
    if (isPossible(vi + 1, vj + 1, true) && map[vi + 1][vj + 1] == 0 && book[vi + 1][vj + 1] == false){
        change(vi + 1, vj + 1);
    }*/
    if (isPossible(vi, vj - 1, true)){if(map[vi][vj - 1] === 0 && book[vi][vj - 1] == false){
        console.log("Left->" + vi + ", " + vj);
        change(vi, vj - 1);
        nBlank(vi, vj - 1);
    }}else {
        console.warn(!(isPossible(vi, vj - 1, true)) ? ("LeftUnpossible->" + vi + ", " + vj) : (!(map[vi][vj - 1] === 0) ? ("LeftnoZero->" + vi + ", " + vj) : ("LeftBooked->" + vi + ", " + vj)));
    }
    if (isPossible(vi, vj + 1, true)){if(map[vi][vj + 1] === 0 && book[vi][vj + 1] == false){
        console.log("Right->" + vi + ", " + vj);
        change(vi, vj + 1);
        nBlank(vi, vj + 1);
    }}else {
        console.warn(!(isPossible(vi, vj + 1, true)) ? ("RightUnpossible->" + vi + ", " + vj) : (!(map[vi][vj + 1] === 0) ? ("RightnoZero->" + vi + ", " + vj) : ("RightBooked->" + vi + ", " + vj)));
    }
    /*if (isPossible(vi + 1, vj - 1, true) && map[vi + 1][vj - 1] == 0 && book[vi + 1][vj - 1] == false){
        change(vi + 1, vj - 1);
    }
    if (isPossible(vi - 1, vj + 1, true) && map[vi - 1][vj + 1] == 0 && book[vi - 1][vj + 1] == false){
        change(vi - 1, vj + 1);
    }*/
    //book[vi][vj] = false;
}
/*
function change2(vi, vj){
    setBlank(vi, vj);
    book[vi][vj] = true;
    console.log("Change: " + vi + ", " + vj);
    if (isPossible(vi - 1, vj, true) && map[vi - 1][vj] != 0 && book[vi - 1][vj] == false){
        change(vi - 1, vj);
    }
    if (isPossible(vi + 1, vj, true) && map[vi + 1][vj] != -1 && book[vi + 1][vj] == false){
        change(vi + 1, vj);
    }
    if (isPossible(vi, vj - 1, true) && map[vi][vj - 1] != -1 && book[vi][vj - 1] == false){
        change(vi, vj - 1);
    }
    if (isPossible(vi, vj + 1, true) && map[vi][vj + 1] != -1 && book[vi][vj + 1] == false){
        change(vi, vj + 1);
    }
}*/
function render(){
    table.innerHTML = "<tbody style='width: 100%; height: 100%;'></tbody>";
    tableMain = table.getElementsByTagName("tbody")[0];
    for (var i = 0; i < height; i++){
        tableMain.innerHTML += "<tr id=\"" + i + "\" height=\"" + (100 / height) + "%\" width=\"100%\"></tr>";
        var ele = document.getElementById(i.toString());
        for (var j = 0; j < width; j++){
            ele.innerHTML += "<td class=\"no\" id=\"" + i + "-" + j + "\" height=\"" + (100 / height) + "%\" width=\"" + (100 / width) + "%\"></td>";
        }
    }
    for (var i = 0; i < height; i++){
        for (var j = 0; j < width; j++){
            document.getElementById(i + "-" + j).onclick = function (e){
                console.log(e.button);
                //if (e.button == 0){
                if (this.className != "yes"){
                    click(parseInt(this.id.split("-")[0]), parseInt(this.id.split("-")[1]));
                }else {
                    if (scan(parseInt(this.id.split("-")[0]), parseInt(this.id.split("-")[1])) == scanFlag(parseInt(this.id.split("-")[0]), parseInt(this.id.split("-")[1]))){
                        clickAround(parseInt(this.id.split("-")[0]), parseInt(this.id.split("-")[1]));
                    }
                }
                /*}else if (e.button == 2){
                    //标记
                    map[parseInt(this.id.split("-")[0])][parseInt(this.id.split("-")[1])] = -2;
                    refresh();
                }*/
            };
            document.getElementById(i + "-" + j).oncontextmenu = function (){
                if(this.className != "yes"){
                    flag[parseInt(this.id.split("-")[0])][parseInt(this.id.split("-")[1])] = !flag[parseInt(this.id.split("-")[0])][parseInt(this.id.split("-")[1])];
                    refresh();
                }
				return false;
            };
        }
    }
}
function refresh(){
    for (var i = 0; i < height; i++){
        for (var j = 0; j < width; j++){
            if (document.getElementById(i + "-" + j).className == "no flag" && flag[i][j] == false){
                document.getElementById(i + "-" + j).className = "no";
            }
            if (flag[i][j] == true){
                //document.getElementById(i + "-" + j).innerHTML = "✖";
                document.getElementById(i + "-" + j).className = "no flag";
            }
            if (map[i][j] == -1){
                document.getElementById(i + "-" + j).innerHTML = "¤";
            }else {
                document.getElementById(i + "-" + j).innerHTML = map[i][j] == 0 ? "" : map[i][j];
            }
        }
    }
}

window.onload = function(){
    table = document.getElementById("game-table");
    console.log(table);
    width = 20;
    height = 20;
    mineAmount = 60;
    map = new Array(height);
    clickCount = 0;
    book = new Array(height);
    flag = new Array(height);


    init();
    render();

};
