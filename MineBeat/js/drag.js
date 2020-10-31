var drag_timer, drag_offset = 0;
/*太难用，不好做兼容
function addDrag(leftEle, dragEle, rightEle, minLeftWidth, minRightWidth){
    dragEle.addEventListener("mousedown", function (e){
        drag_offset = e.clientX - dragEle.getBoundingClientRect().left;
        drag_timer = setInterval(function (){
            var percent = ((Mouse.clientX - drag_offset + 5) / window.innerWidth) * 100;
            percent = percent < minLeftWidth ? minLeftWidth : (100 - percent < minRightWidth ? 100 - minRightWidth : percent);
            leftEle.style.width = "calc(" + percent + "% - 5px)";
            dragEle.style.left = "calc(" + percent + "% - 5px)";
            rightEle.style.width = "calc(" + (100 - percent) + "% - 5px)"
        }, 10);
    });
    document.addEventListener("mouseup", function (){
        window.clearInterval(drag_timer);
    });
}

addDrag(document.getElementById("project-list"), document.getElementById("drag-project-edit"), document.getElementById("edit-view"), 10, 20);*/

var minLeftWidth = 10, minRightWidth = 20;
document.getElementById("drag-project-edit").addEventListener("mousedown", function (e){
    drag_offset = e.clientX - document.getElementById("drag-project-edit").getBoundingClientRect().left;
    drag_timer = setInterval(function (){
        var percent = ((Mouse.clientX - drag_offset + 5) / window.innerWidth) * 100;
        percent = percent < minLeftWidth ? minLeftWidth : (100 - percent < minRightWidth ? 100 - minRightWidth : percent);
        document.getElementById("project-list").style.width = "calc(" + percent + "% - 5px)";
        document.getElementById("drag-project-edit").style.left = "calc(" + percent + "% - 5px)";
        document.getElementById("edit-view").style.width = "calc(" + (100 - percent) + "% - 5px)"
    }, 10);
});
document.addEventListener("mouseup", function (){
    window.clearInterval(drag_timer);
});
