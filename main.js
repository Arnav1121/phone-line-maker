var width =screen.width;

var newWidth=screen.width-70;

var newHeight=screen.height-300;

if (width<992){

document.getElementById("myCanvas").width=newWidth;

document.getElementById("myCanvas").height=newHeight;

document.body.style.overflow="hidden";

}

var last_x,last_y;

var color = "blue";

var linewidth = 2;

canvas = document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

canvas.addEventListener("touchstart",my_touchstart);

function my_touchstart(e){
last_x=e.touches[0].clientX-canvas.offsetLeft;
last_y=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove",my_touchmove);

function my_touchmove(e){

    current_x=e.touches[0].clientX-canvas.offsetLeft;

    current_y=e.touches[0].clientY-canvas.offsetTop;

ctx.beginPath();

ctx.strokeStyle=color;

ctx.lineWidth=linewidth;

ctx.moveTo(last_x,last_y);

ctx.lineTo(current_x,current_y);

ctx.stroke();

last_x=current_x;

last_y=current_y;



}