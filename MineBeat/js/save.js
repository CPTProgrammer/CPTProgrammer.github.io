/*

举个例子
JSON:
{
    settings: {
        dragPercent: ,
        openedPages: []
    },
    file: [
        {
            fileName: "", //<-文件名称
            fileSuffix: "", //<-文件后缀 "{folder}"为文件夹 "mb"为MineBeat音乐保存文件
            fileContent: "" //<-文件内容 当fileSuffix为"{folder}"时存储[]数组（套娃）
        }
    ],
}


"*.mb"
{
    date: , //<-时间（毫秒）
    author: "", //<-作者
    ......
}

*/
