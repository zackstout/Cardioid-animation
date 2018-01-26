
var cardCan = document.getElementById('can');
  var cardCtx = cardCan.getContext('2d');

  //x is how far you iterate, r is radius, f controls number of flower petals or nodes:
  function circleCard(a, b, x, r, f) {
    cardCtx.beginPath();
    for (var i = 0; i < x; i++) {
      cardCtx.translate(250, 250);
      var start = {xCoord: r*a*Math.cos(i*2*Math.PI/x), yCoord: r*b*Math.sin(i*2*Math.PI/x)};
      var doubleStart = (f * i) % x;
      var end = {xCoord: r*a*Math.cos(doubleStart*2*Math.PI/x), yCoord: r*b*Math.sin(doubleStart*2*Math.PI/x)};
      cardCtx.moveTo(start.xCoord, start.yCoord);
      cardCtx.lineTo(end.xCoord, end.yCoord);
      cardCtx.strokeStyle = 'darkblue';
      cardCtx.stroke();
      cardCtx.translate(-250, -250);
    }
  }


  // circleCard(1, 1, 200, 200, 3);

  var cardioidPosition = 1;

  function drawCardioid() {
    cardCtx.clearRect(0,0,500, 500);
    circleCard(1, 1, 200, 200, cardioidPosition);
    cardioidPosition += 0.05;
  }

  setInterval(drawCardioid, 100);
