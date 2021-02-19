
var oriEle = document.getElementById("photo-original-canvas");
var ibEle = document.getElementById("photo-ib-canvas");
var ibpEle = document.getElementById("photo-ibp-canvas");
var oriCtx = oriEle.getContext("2d");
var ibCtx = ibEle.getContext("2d");
var ibpCtx = ibpEle.getContext("2d");
var submitButton = document.getElementById("submitButton");
var inputFile = document.getElementById("inputFile");
var IBButton = document.getElementById("IBButton");
var IBPButton = document.getElementById("IBPButton");

var oriImg;

oriCtx.imageSmoothingEnabled = false;
ibCtx.imageSmoothingEnabled = false;
ibpCtx.imageSmoothingEnabled = false;

submitButton.addEventListener("click", function (){
    if (inputFile.files.length == 0){
        return;
    }
    console.log("Submiting...");
    const reader = new FileReader();
    reader.readAsDataURL(inputFile.files[0]);
    reader.onload = function (){
        oriImg = new Image();
        oriImg.src = reader.result;
        oriImg.onload = function (){
            reloadOriginalImage();
            console.log("Submit Done!");
        };
    };
});


function reloadOriginalImage(){
    oriEle.width = oriImg.width;
    oriEle.height = oriImg.height;
    ibEle.width = oriImg.width;
    ibEle.height = oriImg.height;
    ibpEle.width = oriImg.width;
    ibpEle.height = oriImg.height;
    oriCtx.drawImage(oriImg, 0, 0);
}

IBButton.addEventListener("click", function (){
    var imgData = oriCtx.getImageData(0, 0, oriEle.width, oriEle.height);
    var data = IB(imgData, oriEle.width, oriEle.height);
    ibCtx.putImageData(BinaryToImageData(data, imgData, oriEle.width, oriEle.height), 0, 0);
});

IBPButton.addEventListener("click", function (){
    var imgData = oriCtx.getImageData(0, 0, oriEle.width, oriEle.height);
    IBP(imgData, oriEle.width, oriEle.height, parseInt(document.getElementById("IBP-searchRadius").value), document.getElementById("IBP-progress"), IBP_success);
});

function IBP_success(imgData, data){
    ibpCtx.putImageData(BinaryToImageData(data, imgData, oriEle.width, oriEle.height), 0, 0);
    return;
}

function BinaryToImageData(data, imgData, width, height){
    for (var i = 0; i < height; i++){
        for (var j = 0; j < width; j++){
            if (data[i][j] == 1){
                imgData.data[i * 4 * width + j * 4] = 255;
                imgData.data[i * 4 * width + j * 4 + 1] = 255;
                imgData.data[i * 4 * width + j * 4 + 2] = 255;
            }else {
                imgData.data[i * 4 * width + j * 4] = 0;
                imgData.data[i * 4 * width + j * 4 + 1] = 0;
                imgData.data[i * 4 * width + j * 4 + 2] = 0;
            }
        }
    }
    return imgData;
}
