//the setup
var c = document.getElementById("slate");
var ctx = c.getContext('2d');
ctx.fillStyle = "#ff00ff";


//globals
var rid = 0;
var size = 1;
var growing = true;//false for shrinking


//fxns
var animateCircle = function(){    

    window.cancelAnimationFrame(rid);
    var center_circle = function(){
	//window.cancelAnimationFrame(rid);
	ctx.clearRect(0,0,500,500);
	console.log("circle");
	ctx.beginPath();
	ctx.arc(250, 250, size, 0, 2 * Math.PI);
	if(growing == true){
	    size+=1;
	}
	else{    
	    size-=1;
	}
	ctx.stroke();
	ctx.fill();
	if(size>250){
	    growing = false;
	}
	if(size<1){
	    growing = true;
	}
	rid = window.requestAnimationFrame(center_circle);
    };

    rid = window.requestAnimationFrame(center_circle);
    
};

var x = 250;
var y = 250;
var xdirection = 0;//0 is right, 1 is left
var ydirection = 0;//1 is up, 0 is down


var animateDVD = function(){
    var rectL = 100;
    var rectH = 100;
    
    window.cancelAnimationFrame(rid);
    var dvd_rectangle = function(){
	ctx.clearRect(0,0,500,500);
	console.log("rect");
	ctx.beginPath();
	ctx.fillRect(x,y,rectL, rectH);
	ctx.stroke();
	ctx.fill();

	//randomness
	var rand = Math.random();
	rand = rand * 100;
	if(xdirection == 0){
	    if(rand > 50){
		x+=1;
	    }
	}
	else{
	    if(rand > 50){
		x-=1;
	    }
	}
	//
	
	if(xdirection == 0 && ydirection == 0){
	    x++;
	    y++;
	}
	if(xdirection == 0 && ydirection == 1){
	    x++;
	    y--;
	}
	if(xdirection == 1 && ydirection == 1){
	    x--;
	    y--;
	}
	if(xdirection == 1 && ydirection == 0){
	    x--;
	    y++;
	}
	
	if(x > (500-rectL)){
	    xdirection = 1;
	}
	if(x < 0){
	    xdirection = 0;
	}
	if(y > (500-rectH)){
	    ydirection = 1;
	}
	if(y < 0){
	    ydirection = 0;
	}
	
	rid = window.requestAnimationFrame(dvd_rectangle);
    };

    rid = window.requestAnimationFrame(dvd_rectangle);
    
};

//fxn to clear
var clear_canvas = function(){
    //reseting everything
    window.cancelAnimationFrame(rid);
    rid = 0;
    size = 1
    grwoing = true;
    var x = 250;
    var y = 250;
    ctx.clearRect(0,0,500,500);
};

var stopIt = function(){
    window.cancelAnimationFrame(rid)
}

//listeners
document.getElementById("clear").addEventListener("click", clear_canvas);
document.getElementById("stop").addEventListener("click", stopIt);
document.getElementById("circle").addEventListener("click", animateCircle);
document.getElementById("dvd").addEventListener("click", animateDVD);

//rid = window.requestAnimationFrame(center_circle);

