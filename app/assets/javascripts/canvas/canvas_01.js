var canvas = document.getElementById('tutorial');

if (canvas.getContext){
  var ctx = canvas.getContext('2d');
  
  basicDraw(ctx);
} else {
  // canvas-unsupported code here
}

function basicDraw(ctx) {
  // Rect Yellow
  ctx.fillStyle = "rgb(215, 215, 0)";
  ctx.fillRect(80, 10, 55, 50);

  // Clear Rect
  ctx.clearRect(70, 20, 55, 50);

  // Rect Orange
  ctx.fillStyle = "rgb(250, 120, 10)";
  ctx.fillRect(10, 80, 55, 50);

  // Clear Rect
  ctx.clearRect(20, 70, 55, 50);

  // Rect Red
  ctx.fillStyle = "rgb(200,0,0)";
  ctx.fillRect(10, 10, 55, 50);

  // Rect Blue Trans
  ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
  ctx.fillRect(30, 30, 55, 50);

  // Rect Magenta
  ctx.fillStyle = "rgb(200, 0, 200)";
  ctx.fillRect(80, 80, 55, 50);

  // Rect Green Trans
  ctx.fillStyle = "rgba(0, 200, 0, 0.5)";
  ctx.fillRect(50, 50, 55, 50);

  // Clear Rect
  ctx.clearRect(45, 45, 45, 40);
}