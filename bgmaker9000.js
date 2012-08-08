/*
 * BGMaker9000 - A HTML5 canvas image generating tool
 * http://www.jhammonddesign.com/bgmaker9000.html/
 *
 * Copyright (c) 2012  Jonathan D Hammond. All Rights reserved.
 *
 * Author: Jonathan D Hammond, jhammonddesign.com
 * Version: 1.0
 * Date: 30th July 2012
 *
 *
 */

var getInput = function(id) {
    var myValue = document.getElementById(id).value;
    myValue = Math.floor(parseInt(myValue, 10));
    myValue = myValue < 0 ? 0 : myValue;
    myValue = id === 'myheight' && myValue > 3000 ? 3000 : myValue;
    myValue = id === 'mywidth' && myValue > 3000 ? 3000 : myValue;
    myValue = id === 'rectheight' && myValue > 100 ? 100 : myValue;
    myValue = id === 'rectwidth' && myValue > 100 ? 100 : myValue;
    myValue = id === 'circlewidth' && myValue > 100 ? 100 : myValue;
    myValue = id === 'rectheightdev' && myValue > 100 ? 100 : myValue;
    myValue = id === 'rectwidthdev' && myValue > 100 ? 100 : myValue;
    myValue = id === 'circledev' && myValue > 100 ? 100 : myValue;
    myValue = id === 'rectstartx' && myValue > 100 ? 100 : myValue;
    myValue = id === 'rectstarty' && myValue > 100 ? 100 : myValue;
    myValue = id === 'circlestartx' && myValue > 100 ? 100 : myValue;
    myValue = id === 'circlestarty' && myValue > 100 ? 100 : myValue;
    myValue = id === 'locdeviation' && myValue > 100 ? 100 : myValue;
    myValue = id === 'randomness' && myValue > 100 ? 100 : myValue;
    myValue = id === 'minshapes' && myValue > 5000 ? 5000 : myValue;
    myValue = id === 'maxshapes' && myValue > 5000 ? 5000 : myValue;
    myValue = id === 'redchannel' && myValue > 255 ? 255 : myValue;
    myValue = id === 'greenchannel' && myValue > 255 ? 255 : myValue;
    myValue = id === 'bluechannel' && myValue > 255 ? 255 : myValue;
    myValue = id === 'colordeviation' && myValue > 200 ? 200 : myValue;
    myValue = id === 'bgcolordeviation' && myValue > 100 ? 100 : myValue;
    myValue = id === 'rectopacity' && myValue > 100 ? 100 : myValue;
    myValue = id === 'circleopacity' && myValue > 100 ? 100 : myValue;



    ///document.getElementById("counter").innerHTML = parseInt(myValue);
    return myValue;
};
getInput("myheight");
var reset = function() {
    var randNum = function(x, y) {
        return Math.floor(Math.random() * x + y);
    };
    var printMe = document.getElementById('testarea');
    //var endBegin= document.getElementById('begin');
    //endBegin.style.display = 'none';
    var deviation = function(amount) {
        return (amount / 100 * -1) + 1;
    };
    var getPercent = function(val, percent) {
        return Math.round(val * (percent / 100));
    };
    var greaterOfTwo = function(val1, val2) {
        return val1 >= val2 ? val1 : val2;
    }
    //var scaleAll = getInput("masterdensity") / 100;
    //var scaleCircleX = getInput("circledensity") / 100 * scaleAll;
    //var scaleCircleY = getInput("circledensity") / 100 * scaleAll;
    //var scaleRectX = getInput("rectdensity") / 100 * scaleAll;
    //var scaleRectY = getInput("rectdensity") / 100 * scaleAll;
    var myWidth = getInput("mywidth");
    var myHeight = getInput("myheight");

	//document.getElementById('controls').style.marginTop = String(myHeight)+'px';

    var greater = greaterOfTwo(myWidth, myHeight);

    var geoRatio = getInput("georatio") / 100;

    var maxRectHeight = randNum(getPercent(greater, getInput("rectheight")), 0);
    var maxRectWidth = randNum(getPercent(greater, getInput("rectwidth")), 0);
    var maxCircleSize = randNum(getPercent(greater, getInput("circlewidth")), 0);

    var rectHeightDeviation = maxRectHeight * deviation(getInput("rectheightdev"));
    var rectWidthDeviation = maxRectWidth * deviation(getInput("rectwidthdev"));
    var circleSizeDeviation = maxCircleSize * deviation(getInput("circledev"));

    //var MinStartCircleX = randNum(myWidth - (getInput("circlestartx"), getInput("circlestartx"));
    //var MinStartCircleY = randNum(myHeight - getInput("circlestarty"), getInput("circlestarty"));
    //var MinStartRectX = randNum(myWidth - getInput("rectstartx"), getInput("rectstartx"));
    //var MinStartRectY = randNum(myWidth - getInput("rectstarty"), getInput("rectstarty"));
    var MinStartCircleX = myWidth * (getInput("circlestartx") / 100);
    var MinStartCircleY = myHeight * (getInput("circlestarty") / 100);

    var MinStartRectX = myWidth * (getInput("rectstartx") / 100);
    var MinStartRectY = myHeight * (getInput("rectstarty") / 100);

    var locationDeviation = myWidth * (getInput("locdeviation") / 100);

    var randomize = (getInput("randomness") / 100);

    var minNumShapes = getInput("minshapes");
    var maxNumShapes = getInput("maxshapes") - getInput("minshapes");

    var minSpeed = 0;
    var maxSpeed = 4;

    var bgColorDeviation = getInput("bgcolordeviation") < 1 ? 1 : getInput("bgcolordeviation");
    var colorDeviation = getInput("colordeviation") < 1 ? 1 : getInput("colordeviation");
    var startRedChannel = getInput("redchannel") < 1 ? 1 : getInput("redchannel");
    var startGreenChannel = getInput("greenchannel") < 1 ? 1 : getInput("greenchannel");
    var startBlueChannel = getInput("bluechannel") < 1 ? 1 : getInput("bluechannel");

    var rectOpacity = randNum(getInput("rectopacity"), 1) / 100;
    var circleOpacity = randNum(getInput("circleopacity"), 1) / 100;












    maxCircleSize = maxCircleSize / 2;
    var minRedChannel = startRedChannel > 5 ? startRedChannel - 5 : startRedChannel + 5;
    var minGreenChannel = startGreenChannel > 5 ? startGreenChannel - 5 : startGreenChannel + 5;
    var minBlueChannel = startBlueChannel > 5 ? startBlueChannel - 5 : startBlueChannel + 5;


    var canvasHeight = String(myHeight);
    var canvasWidth = String(myWidth);
    document.getElementById("tutorial").height = canvasHeight;
    document.getElementById("tutorial").width = canvasWidth;
    document.getElementById("canvasImg").style.display = 'none';

    document.getElementById('reset').innerHTML = "<canvas id='tutorial' onclick='reset() ' ></canvas>";
    document.getElementById("tutorial").height = canvasHeight;
    document.getElementById("tutorial").width = canvasWidth;

    var mycanvas = document.getElementById("tutorial");
    //mycanvas.style.display = 'block';
    // save canvas image as data url (png format by default)
    var dataURL = mycanvas.toDataURL();

    // set canvasImg image src to dataURL
    // so it can be saved as an image
    document.getElementById("canvasImg").src = dataURL;


    var a = randNum(colorDeviation, minRedChannel);
    var b = randNum(colorDeviation, minGreenChannel);
    var c = randNum(colorDeviation, minBlueChannel);

    var randColor = function(deviation, abc) {

        var newColor = abc - randNum(deviation, 0) + randNum(deviation, 0);

        if (newColor > 254) {
            newColor = 255;
            newColor = newColor - randNum(deviation, 1);
        } else if (newColor < 1) {
            newColor = 0;
            newColor = newColor + randNum(deviation, 1);
        }
        return newColor;
    };

    var colorChange = function(color, change) {
        var difference = color + (255 * (change / 100));
        var bgChange = difference > 255 ? difference - 255 : difference;

        return Math.floor(bgChange);
    };
    var myColor = 'rgb(' + randColor(bgColorDeviation, startRedChannel) + ',' + randColor(bgColorDeviation, startGreenChannel) + ' ,' + randColor(bgColorDeviation, startBlueChannel) + ')';
    printMe.innerHTML = myColor;
    var myColorAlphaRect = 'rgba(' + randColor(colorChange(a, 25), colorDeviation) + ',' + randColor(colorChange(b, 25), colorDeviation) + ' ,' + randColor(colorChange(c, 25), colorDeviation) + ',' + (rectOpacity) + ')';

    var myColorAlphaCircle = 'rgba(' + randColor(colorChange(a, 25), colorDeviation) + ',' + randColor(colorChange(b, 25), colorDeviation) + ' ,' + randColor(colorChange(c, 25), colorDeviation) + ',' + (circleOpacity) + ')';
    var myAlpha = 'rgba(' + 0 + ',' + 0 + ' ,' + 0 + ',' + 0 + ')';

    function Rectangle(width, height, x, y, color, blur, blurColor) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.color = color;
        this.blur = blur;
        this.blurColor = blurColor;
        var canvas = document.getElementById('tutorial');

        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');

            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.shadowColor = this.blurColor;
            ctx.shadowOffsetX = '0';
            ctx.shadowOffsetY = '0';
            ctx.shadowBlur = this.blur;
            //ctx.clearRect(45,45,60,60);
            //ctx.strokeRect(50,50,50,50);
        }
    }

    function Circle(radius, x, y, color, blur, blurColor) {
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.color = color;
        this.blur = blur;
        this.blurColor = blurColor;
        var canvas = document.getElementById('tutorial');

        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');

            ctx.fillStyle = this.color;

            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
            ctx.fill();
            ctx.shadowColor = this.blurColor;
            ctx.shadowOffsetX = '0';
            ctx.shadowOffsetY = '0';
            ctx.shadowBlur = this.blur;
        }

    }
    var rectX = randNum((myWidth - MinStartRectX), MinStartRectX);
    var rectY = randNum((myHeight - MinStartRectY), MinStartRectY);
    var rx = rectX + randNum(locationDeviation, 0) - randNum(locationDeviation, 0);
    var ry = rectY + randNum(locationDeviation, 0) - randNum(locationDeviation, 0);
    var makeBox = function(x, y) {
        var height = randNum(maxRectHeight, rectHeightDeviation);
        var width = randNum(maxRectWidth, rectWidthDeviation);

        if ((width + x) > myWidth) {
            x = width + x - myWidth;
        }
        if ((height + y) > myHeight) {
            y = height + y - myHeight;
        }
        var newBox = new Rectangle(width, height, x, y, myColorAlphaRect, randNum(30, 1), myColor);
    };
    var circX = randNum((myWidth - MinStartCircleX), MinStartCircleX);
    var circY = randNum((myHeight - MinStartCircleY), MinStartCircleY);
    var cx = circX + randNum(locationDeviation, 0) - randNum(locationDeviation, 0);
    var cy = circY + randNum(locationDeviation, 0) - randNum(locationDeviation, 0);

    var makeCircle = function(x, y) {
        var radius = randNum(maxCircleSize, circleSizeDeviation);


        if ((radius + x) > myWidth) {
            x = radius + x - myWidth;
        }
        if ((radius + y) > myHeight) {
            y = radius + y - myHeight;
        }


        var newCircle = new Circle(radius, x, y, myColorAlphaCircle, randNum(30, 1), myColor);
    };

    var lotsOfBoxes = new Array();


    var k = 0;
    var t = 1;

    var maxCount = randNum(maxNumShapes, minNumShapes);
    var background = new Rectangle(myWidth, myHeight, 0, 0, myColor);

    lotsOfBoxes[k] = background;
    k++;
    var interval = setInterval(function() {
        document.getElementById("tutorial").style.backgroundColor = myColor;


        // for (var i = k; i <= maxCount; i++) {
        var random = randomize + Math.random();
        if ((random) >= 1) {
            circX = randNum((myWidth), 0);
            circY = randNum((myWidth), 0);

            //printMe.innerHTML += 'x'+(cx)+' y'+cy+' <br />' ;
            //printMe.innerHTML += (Math.round(randNum(locationDeviation, 0) - randNum(locationDeviation, 0)))+'<br />';
        }
        random = randomize + Math.random();
        if ((random) >= 1) {
            rectX = randNum((myWidth), 0);
            rectY = randNum((myHeight), 0);


        }
        //cx = circX + Math.round(randNum(locationDeviation, 0) - randNum(locationDeviation, 0));
        //cy = circY + Math.round(randNum(locationDeviation, 0) - randNum(locationDeviation, 0));
        //rx = rectX + Math.round( randNum(locationDeviation, 0) - randNum(locationDeviation, 0));
        //ry = rectY + Math.round( randNum(locationDeviation, 0) - randNum(locationDeviation, 0));
        if (k % 4 === 0) {
            cx = circX + Math.round(randNum(locationDeviation, 0));
            cy = circY - Math.round(randNum(locationDeviation, 0));
            rx = rectX + Math.round(randNum(locationDeviation, 0));
            ry = rectY - Math.round(randNum(locationDeviation, 0));
        } else if (k % 4 === 1) {
            cx = circX + Math.round(randNum(locationDeviation, 0));
            cy = circY + Math.round(randNum(locationDeviation, 0));
            rx = rectX + Math.round(randNum(locationDeviation, 0));
            ry = rectY + Math.round(randNum(locationDeviation, 0));
        } else if (k % 4 === 2) {
            cx = circX - Math.round(randNum(locationDeviation, 0));
            cy = circY + Math.round(randNum(locationDeviation, 0));
            rx = rectX - Math.round(randNum(locationDeviation, 0));
            ry = rectY + Math.round(randNum(locationDeviation, 0));
        } else {
            cx = circX - Math.round(randNum(locationDeviation, 0));
            cy = circY - Math.round(randNum(locationDeviation, 0));
            rx = rectX - Math.round(randNum(locationDeviation, 0));
            ry = rectY - Math.round(randNum(locationDeviation, 0));
        }
        var randRatio = Math.random();
        if (randRatio <= geoRatio) {
            lotsOfBoxes[c] = makeBox(rx, ry);
        } else {
            lotsOfBoxes[c] = makeCircle(cx, cy);
        }
        document.getElementById("maxCount").innerHTML = '# of shapes: ' + (maxCount);
        document.getElementById("counter").innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count: ' + (k + 1);
        k++;

        if (k >= maxCount) {
            var mycanvas = document.getElementById("tutorial");

            // save canvas image as data url (png format by default)
            var dataURL = mycanvas.toDataURL();

            // set canvasImg image src to dataURL
            // so it can be saved as an image
            document.getElementById("canvasImg").src = dataURL;
            
            document.getElementById("canvasImg").style.display = 'block';
            clearInterval(interval);
            //document.getElementById("tutorial").style.display = 'none';
        }
        //}
    }, randNum(maxSpeed, minSpeed));
    
};