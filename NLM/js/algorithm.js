function LM (ori, width, height, w){
    var imgData = ori;
    for (var i = 0; i < ori.data.length; i += 4){
        var count = 0;
        var aveR, aveG, aveB;
        aveR = aveG = aveB = 0;
        //Left
        if (i != 0){
            count++;
            aveR += ori.data[i - 4];
            aveG += ori.data[i - 3];
            aveB += ori.data[i - 2];
        }
        //Top
        if (i >= 4 * width){
            count++;
            aveR += ori.data[i - 4 * width];
            aveG += ori.data[i - 4 * width + 1];
            aveB += ori.data[i - 4 * width + 2];
        }
        //Right
        if (i != ori.data.length - 4){
            count++;
            aveR += ori.data[i + 4];
            aveG += ori.data[i + 5];
            aveB += ori.data[i + 6];
        }
        //Bottom
        if (i <= ori.data.length - 4 * width - 4){
            count++;
            aveR += ori.data[i + 4 * width];
            aveG += ori.data[i + 4 * width + 1];
            aveB += ori.data[i + 4 * width + 2];
        }
        imgData.data[i] = Math.floor((aveR + w * imgData.data[i]) / (count + w));
        imgData.data[i + 1] = Math.floor((aveG + w * imgData.data[i + 1]) / (count + w));
        imgData.data[i + 2] = Math.floor((aveB + w * imgData.data[i + 2]) / (count + w));
        //console.log(imgData.data[i] + ", " + imgData.data[i + 1] + ", " + imgData.data[i + 2]);
    }
    return imgData;
}

function NLM (ori, width, height, searchRadius, compR, progressBar, doneFunc){
    var imgData = ori;
    var data = ImageDataToArray(imgData, width, height);
    var oriData = ImageDataToArray(imgData, width, height);
    //for (var I = 0; I < height; I++){
    var I = 0;
    var NLM_timer = setInterval(function (){
        if (I >= height){
            window.clearInterval(NLM_timer);
            console.log(data);
            doneFunc(imgData, data);
            return;
        }
        for (var J = 0; J < width; J++){
            var R = 0, G = 0, B = 0, maxU = 1, sumU = 0;
            var searchL = max(0, J - searchRadius),
                searchT = max(0, I - searchRadius),
                searchR = min(width - 1, J + searchRadius),
                searchB = min(height - 1, I + searchRadius);
            for (var i = searchT + compR; i <= searchB - compR; i++){
                for (var j = searchL + compR; j <= searchR - compR; j++){
                    /*if (i == I && j == J){
                        continue;
                    }*/

                    //内层比较
                    data[i][j].u = 0;/*差异值*/
                    for (var i1 = (I < compR ? -I : -compR); i1 <= (I + compR >= height ? (height - 1 - I) : compR); i1++){
                        for (var j1 = (J < compR ? -J : -compR); j1 <= (J + compR >= width ? (width - 1 - J) : compR); j1++){
                            //差异值计算
                            data[i][j].u += Math.pow((abs(oriData[I + i1][J + j1].R - oriData[i + i1][j + j1].R) + abs(oriData[I + i1][J + j1].G - oriData[i + i1][j + j1].G) + abs(oriData[I + i1][J + j1].B - oriData[i + i1][j + j1].B)) / 3, 2);
                        }
                    }

                    maxU = (maxU < data[i][j].u ? data[i][j].u : maxU);
                    //sumU += data[i][j].u;
                }
            }
            for (var i = searchT + compR; i <= searchB - compR; i++){
                for (var j = searchL + compR; j <= searchR - compR; j++){
                    R += oriData[i][j].R * (maxU - data[i][j].u);
                    G += oriData[i][j].G * (maxU - data[i][j].u);
                    B += oriData[i][j].B * (maxU - data[i][j].u);
                    sumU += maxU - data[i][j].u;
                }
            }
            R /= sumU;
            G /= sumU;
            B /= sumU;
            data[I][J].R = R;
            data[I][J].G = G;
            data[I][J].B = B;
        }
        console.log("LOG: I=" + I);
        progressBar.style.width = I * 100 / height + "%";
        I++;
    //}
    }, 0);
    //return data;
}

/*function NLMSearch (data, width, height, midI, midJ, searchRadius, compR){
    var searchL = max(0, midJ - searchRadius),
        searchT = max(0, midI - searchRadius),
        searchR = min(width - 1, midJ + searchRadius),
        searchB = min(height - 1, midI + searchRadius);
    for (var i = searchT + compR; i <= searchB - compR; i++){
        for (var j = searchL + compR; j <= searchR - compR; j++){
            //内层比较
            var diff = 0;
            for (var i1 = -compR; i1 <= compR; i1++){
                for (var j1 = -compR; j1 <= compR; j1++){

                }
            }
        }
    }
}*/

function IB (ori, width, height){
    var imgData = ori;
    var data = new Array();
    for (var i = 0; i < height; i++){
        data[i] = new Array();
        for (var j = 0; j < width; j++){
            data[i][j] = 0;
        }
    }
    var R = 0, G = 0, B = 0, v = imgData.data.length / 4;
    for (var i = 0; i < imgData.data.length; i += 4){
        R += imgData.data[i];
        G += imgData.data[i + 1];
        B += imgData.data[i + 2];
    }
    R /= v;
    G /= v;
    B /= v;
    var rgbAve = (R + G + B) / 3;
    for (var i = 0; i < height; i++){
        for (var j = 0; j < width; j++){
            data[i][j] = Math.pow((imgData.data[i * 4 * width + j * 4] + imgData.data[i * 4 * width + j * 4 + 1] + imgData.data[i * 4 * width + j * 4 + 2]) / 3 > rgbAve, 2);
        }
    }
    return data;
}

function IBP (ori, width, height, searchRadius, progressBar, doneFunc){
    var imgData = ori;
    var data = ImageDataToArray(imgData, width, height);
    var result = new Array();
    var I = 0;
    var IBP_timer = setInterval(function (){
        if (I >= height){
            window.clearInterval(IBP_timer);
            console.log(result);
            doneFunc(ori, result);
            return;
        }
        result[I] = new Array();
        for (var J = 0; J < width; J++){
            var R = 0, G = 0, B = 0, sum = 0;
            var searchL = max(0, J - searchRadius),
                searchT = max(0, I - searchRadius),
                searchR = min(width - 1, J + searchRadius),
                searchB = min(height - 1, I + searchRadius);
            for (var i = searchT; i <= searchB; i++){
                for (var j = searchL; j <= searchR; j++){
                    R += data[i][j].R;
                    G += data[i][j].G;
                    B += data[i][j].B;
                    sum++;
                }
            }
            R /= sum;
            G /= sum;
            B /= sum;
            result[I][J] = ((data[I][J].R + data[I][J].G + data[I][J].B) / 3 > (R + G + B) / 3);
        }
        I++;
        progressBar.style.width = I * 100 / height + "%";
    }, 1);
    return;
}

function ImageDataToArray (imgData, width, height){
    var array = new Array();
    for (var i = 0; i < height; i++){
        array[i] = new Array();
        for (var j = 0; j < width; j++){
            array[i][j] = {
                R: imgData.data[i * 4 * width + j * 4],
                G: imgData.data[i * 4 * width + j * 4 + 1],
                B: imgData.data[i * 4 * width + j * 4 + 2],
                A: imgData.data[i * 4 * width + j * 4 + 3],
                u: 0
            };
        }
    }
    console.log(array);
    return array;
}

function average(){
    var ans = 0;
    for (var i = 0; i < arguments.length; i++){
        ans += arguments[i];
    }
    ans /= arguments.length;
    return ans;
}

function min (){
    var mini = arguments[0];
    for (var i = 0; i < arguments.length; i++){
        mini = (mini > arguments[i] ? arguments[i] : mini);
    }
    return mini;
}

function max (){
    var maxi = arguments[0];
    for (var i = 0; i < arguments.length; i++){
        maxi = (maxi < arguments[i] ? arguments[i] : maxi);
    }
    return maxi;
}

function abs (val){
    return (val < 0 ? -val : val);
}
