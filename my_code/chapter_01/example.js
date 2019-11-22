

var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    r = document.getElementById("r"),
    xr = document.getElementById("xr"),
    yr = document.getElementById("yr"),
    nr = document.getElementById("nr");


context.rect(10, 10, 100, 100);
context.stroke();

context.beginPath();
context.rect(50, 50, 100, 100);
context.stroke();
context.fillStyle="red"
context.fill();