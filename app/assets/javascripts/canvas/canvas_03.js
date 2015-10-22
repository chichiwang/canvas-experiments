var canvas = document.getElementById('tutorial');
var lightBlue = "rgba(180, 180, 245, 0.75)";

if (canvas.getContext){
  canvas.style.border = "1px solid " + lightBlue;
  var ctx = canvas.getContext('2d');
  
  canvas.addEventListener('mousemove', logPosition);
  quadraticDraw(ctx);
  drawGrid(ctx);
} else {
  // canvas-unsupported code here
}

function logPosition(e) {
  var xEl = document.querySelectorAll('.x')[0],
      yEl = document.querySelectorAll('.y')[0];
  var x = e.offsetX,
      y = e.offsetY;

  xEl.innerHTML = x;
  yEl.innerHTML = y;
}

function quadraticDraw(ctx) {
  // ctx.moveTo(230, 32);
  ctx.beginPath();
  ctx.quadraticCurveTo(230, 70, 230, 15);
  ctx.quadraticCurveTo(230, 15, 240, 50);
  ctx.quadraticCurveTo(250, 45, 260, 45);
  ctx.quadraticCurveTo(270, 45, 280, 50);
  ctx.quadraticCurveTo(280, 50, 290, 15);
  ctx.quadraticCurveTo(290, 65, 290, 70);
  ctx.quadraticCurveTo(295, 105, 320, 110);
  ctx.quadraticCurveTo(350, 110, 360, 60);
  ctx.stroke();
  ctx.closePath();
}

function drawVerticalLine(ctx, x, color) {
  var y = canvas.clientHeight;

  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, 0);
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.closePath();
}

function drawHorizontalLine(ctx, y, color) {
  var x = canvas.clientWidth;

  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(0, y);
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.closePath();
}

function drawGrid(ctx) {
  var spacing = 10;
  var x = spacing;

  var canvasW = canvas.clientWidth;
  while (x < canvasW) {
    drawVerticalLine(ctx, x, lightBlue);
    x += spacing;
  }

  var y = spacing;
  var canvasH = canvas.clientHeight;
  while(y < canvasH) {
    drawHorizontalLine(ctx, y, lightBlue);
    y += spacing;
  }
}