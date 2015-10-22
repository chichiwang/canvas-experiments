var canvas = document.getElementById('tutorial');
var color;
var baseAmt = 30;
var radius = 20;
var x = y = baseAmt;

function setColor(clr) {
  color = clr;
}

function increment(pos) {
  pos += baseAmt + radius;
  return pos;
}

function drawDot(ctx, size) {
  size = size || 2;
  ctx.fillStyle = color;
  ctx.fillRect(x, y, size, size);
}

function createArc(ctx, startAngle, endAngle, counterClockwise, rad) {
  rad = rad || radius;
  counterClockwise = (typeof counterClockwise != 'undefined') ? counterClockwise : true;
  ctx.arc(x, y, rad, startAngle, endAngle, counterClockwise);
}

function fillArc(ctx, startAngle, endAngle, counterClockwise, rad) {
  ctx.fillStyle = color;
  ctx.moveTo(x, y);
  ctx.beginPath();
  createArc(ctx, startAngle, endAngle, counterClockwise, rad);
  ctx.fill();
  ctx.closePath();
}

function strokeArc(ctx, startAngle, endAngle, counterClockwise, rad) {
  ctx.strokeStyle = color;
  ctx.moveTo(x, y);
  ctx.beginPath();
  createArc(ctx, startAngle, endAngle, counterClockwise, rad);
  ctx.stroke();
  ctx.closePath();
}

function arcDraw(ctx) {
  var aqua = "rgba(0, 175, 200, 1)";
  var blue = "rgba(0, 100, 240, 1)";
  var green = "rgba(0, 200, 0, 1)";
  var purple = "rgba(225, 0, 225, 1)";
  var red = "rgba(220, 0, 100, 1)";

  // Quarter circle 1
  setColor(green);
  drawDot(ctx);
  strokeArc(ctx, Math.PI, Math.PI*1.5, false);
  strokeArc(ctx, 0, Math.PI*0.5, false);

  // Quarter circle 2
  setColor(aqua);
  x = increment(x);
  drawDot(ctx);
  strokeArc(ctx, Math.PI, Math.PI/2);
  strokeArc(ctx, 0, Math.PI*1.5);

  // Quarter circle 3
  setColor(blue);
  x = increment(x);
  drawDot(ctx);
  strokeArc(ctx, 0, Math.PI/2, false);
  strokeArc(ctx, Math.PI, Math.PI*1.5, false);

  // Quarter circle 4
  setColor(purple);
  x = increment(x);
  drawDot(ctx);
  strokeArc(ctx, 0, Math.PI*1.5);
  strokeArc(ctx, Math.PI, Math.PI*0.5);

  // Full Circle 1
  setColor(red);
  x = increment(x);
  drawDot(ctx);
  strokeArc(ctx, 0, Math.PI*2)

  // Offset arc 1
  setColor(green);
  x = baseAmt;
  y = increment(y);
  drawDot(ctx);
  strokeArc(ctx, Math.PI*0.9, Math.PI*1.1, false);
  strokeArc(ctx, Math.PI*1.4, Math.PI*1.6, false);
  strokeArc(ctx, Math.PI*0.4, Math.PI*0.6, false);
  strokeArc(ctx, Math.PI*1.9, Math.PI*0.1, false);

  // Offset arc 2
  setColor(aqua);
  x = increment(x);
  drawDot(ctx);
  strokeArc(ctx, Math.PI*1.85, Math.PI*1.65);
  strokeArc(ctx, Math.PI*1.35, Math.PI*1.15);
  strokeArc(ctx, Math.PI*0.85, Math.PI*0.65);
  strokeArc(ctx, Math.PI*0.35, Math.PI*0.15);

  // Offset arc 3
  setColor(blue);
  x = increment(x);
  drawDot(ctx);
  strokeArc(ctx, Math.PI*0.45, Math.PI*0.05);
  strokeArc(ctx, Math.PI*0.95, Math.PI*0.55);
  strokeArc(ctx, Math.PI*1.45, Math.PI*1.05);
  strokeArc(ctx, Math.PI*1.95, Math.PI*1.55);

  // Offset arc 4
  setColor(purple);
  x = increment(x);
  drawDot(ctx);
  strokeArc(ctx, Math.PI*1.4, Math.PI*1.6);
  strokeArc(ctx, Math.PI*1.52, Math.PI*1.48);

  // Offset arc 5
  setColor(red);
  x = increment(x);
  drawDot(ctx);
  strokeArc(ctx, Math.PI*0, Math.PI*1.9);
  strokeArc(ctx, Math.PI*1.8, Math.PI*1.7);
  strokeArc(ctx, Math.PI*1.6, Math.PI*1.5);
  strokeArc(ctx, Math.PI*1.4, Math.PI*1.3);
  strokeArc(ctx, Math.PI*1.2, Math.PI*1.1);
  strokeArc(ctx, Math.PI*1, Math.PI*0.9);
  strokeArc(ctx, Math.PI*0.8, Math.PI*0.7);
  strokeArc(ctx, Math.PI*0.6, Math.PI*0.5);
  strokeArc(ctx, Math.PI*0.4, Math.PI*0.3);
  strokeArc(ctx, Math.PI*0.2, Math.PI*0.1);

  // Filled Arc 1
  setColor(green);
  x = baseAmt;
  y = increment(y);
  fillArc(ctx, Math.PI*1.75, Math.PI*0.25);

  // Filled Arc 2
  setColor(aqua);
  x = increment(x);
  fillArc(ctx, Math.PI*0.75, Math.PI*1.25);

  // Filled Arc 3
  setColor(blue);
  x = increment(x);
  fillArc(ctx, Math.PI*2, Math.PI*1.75);
  fillArc(ctx, Math.PI*1.75, Math.PI*1.5);
  fillArc(ctx, Math.PI*1.5, Math.PI*1.25);
  fillArc(ctx, Math.PI*1.25, Math.PI*1);
  fillArc(ctx, Math.PI*1, Math.PI*0.75);
  fillArc(ctx, Math.PI*0.75, Math.PI*0.5);
  fillArc(ctx, Math.PI*0.5, Math.PI*0.25);
  fillArc(ctx, Math.PI*0.25, 0);

  // Filled Arc 4
  setColor(purple);
  x = increment(x);
  fillArc(ctx, Math.PI*1.75, Math.PI*1.25);
  fillArc(ctx, Math.PI*1.25, Math.PI*0.75);
  fillArc(ctx, Math.PI*0.75, Math.PI*0.25);
  fillArc(ctx, Math.PI*0.25, Math.PI*1.75);

  // Filled Arc 5
  setColor(red);
  x = increment(x);
  fillArc(ctx, Math.PI*0.15, Math.PI*1.5);
  fillArc(ctx, Math.PI*1.5, Math.PI*0.85);
  fillArc(ctx, Math.PI*0.85, Math.PI*0.15);

  // Concentric Arc 1
  setColor(green);
  x = baseAmt;
  y = increment(y);
  strokeArc(ctx, 0, Math.PI*2, true);
  setColor(aqua);
  strokeArc(ctx, 0, Math.PI*2, true, 15);
  setColor(green);
  strokeArc(ctx, 0, Math.PI*2, true, 10);
  setColor(aqua);
  strokeArc(ctx, 0, Math.PI*2, true, 5);

  // Concentric Arc 2
  setColor(aqua);
  x = increment(x);
  fillArc(ctx, 0, Math.PI*2, true);
  setColor(green);
  fillArc(ctx, 0, Math.PI*2, true, 15);
  setColor(aqua);
  fillArc(ctx, 0, Math.PI*2, true, 10);
  setColor(green);
  fillArc(ctx, 0, Math.PI*2, true, 5);

  // Concentric Arc 3
  setColor(blue);
  x = increment(x);
  strokeArc(ctx, Math.PI*1.45, Math.PI*0.55, true);
  strokeArc(ctx, Math.PI*0.45, Math.PI*1.55, true);
  setColor(purple);
  strokeArc(ctx, Math.PI*1.45, Math.PI*0.55, true, 15);
  strokeArc(ctx, Math.PI*0.45, Math.PI*1.55, true, 15);
  setColor(blue);
  strokeArc(ctx, Math.PI*1.45, Math.PI*0.55, true, 10);
  strokeArc(ctx, Math.PI*0.45, Math.PI*1.55, true, 10);
  setColor(purple);
  strokeArc(ctx, Math.PI*1.45, Math.PI*0.55, true, 5);
  strokeArc(ctx, Math.PI*0.45, Math.PI*1.55, true, 5);

  // Concentric Arc 4
  setColor(purple);
  x = increment(x);
  fillArc(ctx, Math.PI*1.95, Math.PI*1.05);
  fillArc(ctx, Math.PI*0.95, Math.PI*0.05);
  setColor(blue);
  fillArc(ctx, Math.PI*1.95, Math.PI*1.05, true, 15);
  fillArc(ctx, Math.PI*0.95, Math.PI*0.05, true, 15);
  setColor(purple);
  fillArc(ctx, Math.PI*1.95, Math.PI*1.05, true, 10);
  fillArc(ctx, Math.PI*0.95, Math.PI*0.05, true, 10);
  setColor(blue);
  fillArc(ctx, Math.PI*1.95, Math.PI*1.05, true, 5);
  fillArc(ctx, Math.PI*0.95, Math.PI*0.05, true, 5);

  //Concentric Arc 4
  setColor(red);
  x = increment(x);
  strokeArc(ctx, Math.PI*1.95, Math.PI*1.55);
  fillArc(ctx, Math.PI*1.45, Math.PI*1.05);
  strokeArc(ctx, Math.PI*0.95, Math.PI*0.55);
  fillArc(ctx, Math.PI*0.45, Math.PI*0.05);

  fillArc(ctx, Math.PI*1.95, Math.PI*1.55, true, 15);
  fillArc(ctx, Math.PI*1.45, Math.PI*1.05, true, 15);
  fillArc(ctx, Math.PI*0.95, Math.PI*0.55, true, 15);
  fillArc(ctx, Math.PI*0.45, Math.PI*0.05, true, 15);

  fillArc(ctx, Math.PI*1.95, Math.PI*1.55, true, 10);
  fillArc(ctx, Math.PI*1.45, Math.PI*1.05, true, 10);
  fillArc(ctx, Math.PI*0.95, Math.PI*0.55, true, 10);
  fillArc(ctx, Math.PI*0.45, Math.PI*0.05, true, 10);

  fillArc(ctx, Math.PI*1.95, Math.PI*1.55, true, 5);
  fillArc(ctx, Math.PI*1.45, Math.PI*1.05, true, 5);
  fillArc(ctx, Math.PI*0.95, Math.PI*0.55, true, 5);
  fillArc(ctx, Math.PI*0.45, Math.PI*0.05, true, 5);
}

if (canvas.getContext){
  var ctx = canvas.getContext('2d');
  arcDraw(ctx);
} else {
  // canvas-unsupported code here
}