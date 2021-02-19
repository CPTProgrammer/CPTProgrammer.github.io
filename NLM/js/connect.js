
var oriEle = document.getElementById("photo-original-canvas");
var lmEle = document.getElementById("photo-lm-canvas");
var nlmEle = document.getElementById("photo-nlm-canvas");
var oriCtx = oriEle.getContext("2d");
var lmCtx = lmEle.getContext("2d");
var nlmCtx = nlmEle.getContext("2d");
var submitButton = document.getElementById("submitButton");
var inputFile = document.getElementById("inputFile");
var LMButton = document.getElementById("LMButton");
var NLMButton = document.getElementById("NLMButton");

var oriImg;

oriCtx.imageSmoothingEnabled = false;
lmCtx.imageSmoothingEnabled = false;
nlmCtx.imageSmoothingEnabled = false;

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
    lmEle.width = oriImg.width;
    lmEle.height = oriImg.height;
    nlmEle.width = oriImg.width;
    nlmEle.height = oriImg.height;
    oriCtx.drawImage(oriImg, 0, 0);
}

LMButton.addEventListener ("click", function (){
    var imgData = oriCtx.getImageData(0, 0, oriEle.width, oriEle.height);
    lmCtx.putImageData(LM(imgData, oriEle.width, oriEle.height, parseInt(document.getElementById("LM-w").value)), 0, 0);
    //lmCtx.putImageData(imgData, 0, 0);
});

NLMButton.addEventListener ("click", function (){
    var imgData = oriCtx.getImageData(0, 0, oriEle.width, oriEle.height);
    //var _tempData = NLM(imgData, oriEle.width, oriEle.height, parseInt(document.getElementById("NLM-searchRadius").value), parseInt(document.getElementById("NLM-compR").value), document.getElementById("NLM-progress"));
    NLM(imgData, oriEle.width, oriEle.height, parseInt(document.getElementById("NLM-searchRadius").value), parseInt(document.getElementById("NLM-compR").value), document.getElementById("NLM-progress"), NLM_success);
});

function NLM_success(imgData, _tempData){
    for (var i = 0; i < oriEle.height; i++){
        for (var j = 0; j < oriEle.width; j++){
            imgData.data[i * 4 * oriEle.width + j * 4] = _tempData[i][j].R;
            imgData.data[i * 4 * oriEle.width + j * 4 + 1] = _tempData[i][j].G;
            imgData.data[i * 4 * oriEle.width + j * 4 + 2] = _tempData[i][j].B;
        }
    }
    nlmCtx.putImageData(imgData, 0, 0);
}
