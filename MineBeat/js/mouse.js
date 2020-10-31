var Mouse = {
    clientX: 0,
    clientY: 0
};

document.addEventListener("mousemove", function (e){
    Mouse.clientX = e.clientX;
    Mouse.clientY = e.clientY;
    //console.log(Mouse);
});
