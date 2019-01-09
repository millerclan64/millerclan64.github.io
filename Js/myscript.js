window.onload = function(){
init(window.innerWidth,window.innerHeight);
}



function init(width, height)
{
console.log(height);

console.log(width);
//function init(width,height){
//var x = document.getElementById("demo");
//x.style.color = "red";
//console.log("the screen width is"+width);
//console.log("the screen height is"+height);
}

var position = {x: 0, y: window.innerHeight/2};
var counter = 0;
var minFontSize = 3;
var angleDistortion = 0;
var letters = "Are you, are you Coming to the tree They strung up a man They say who murdered three Strange things did happen hereNo stranger would it be If we met at midnight In the hanging tree Are you, are you Coming to the tree Where dead man called out For his love to flee Strange things did happen here No stranger would it be If we met at midnight In the hanging tree Are you, are you Coming to the tree Where I told you to run So we'd both be free Strange things did happen here No stranger would it be If we met at midnight In the hanging tree Are you, are you Coming to the tree Wear a necklace of hope Side by side with me Strange things did happen here No stranger would it be If we met at midnight In the hanging tree Are you, are you Coming to the tree Where I told you to run So we'd both be free Strange things did happen here No stranger would it be If we met at midnight In the hanging tree Are you, are you Coming to the tree Where they strung up a man They say who murdered three Strange things did happen here No stranger would it be If we met at midnight In the hanging tree Are you, are you Coming to the tree Where dead man called out For his love to flee Strange things did happen here No stranger would it be If we met at midnight In the hanging tree'";


var canvas;
var context;
var mouse = {x: 0, y: 0, down: false}

function init() {
  canvas = document.getElementById( 'canvas' );
  context = canvas.getContext( '2d' );
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  canvas.addEventListener('mousemove', mouseMove, false);
  canvas.addEventListener('mousedown', mouseDown, false);
  canvas.addEventListener('mouseup',   mouseUp,   false);
  canvas.addEventListener('mouseout',  mouseUp,  false);  
  canvas.addEventListener('dblclick', doubleClick, false);
  
  window.onresize = function(event) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
}

function mouseMove ( event ){
  mouse.x = event.pageX;
  mouse.y = event.pageY;
  draw();
}

function draw() {
 if ( mouse.down ) {
    var d = distance( position, mouse );
    var fontSize = minFontSize + d/2;
    var letter = letters[counter];
    var stepSize = textWidth( letter, fontSize );
    
    if (d > stepSize) {
      var angle = Math.atan2(mouse.y-position.y, mouse.x-position.x);
      
      context.font = fontSize + "px Georgia";
    
      context.save();
      context.translate( position.x, position.y);
      context.rotate( angle );
      context.fillText(letter,0,0);
      context.restore();

      counter++;
      if (counter > letters.length-1) {
        counter = 0;
      }
    
   
      position.x = position.x + Math.cos(angle) * stepSize;
      position.y = position.y + Math.sin(angle) * stepSize;

      }
  }     
}

function distance( pt, pt2 ){
  
  var xs = 0;
  var ys = 0;
 
  xs = pt2.x - pt.x;
  xs = xs * xs;
 
  ys = pt2.y - pt.y;
  ys = ys * ys;
 
  return Math.sqrt( xs + ys );
}

function mouseDown( event ){
  mouse.down = true;
  position.x = event.pageX;
  position.y = event.pageY;
  
  document.getElementById('info').style.display = 'none';
}

function mouseUp( event ){
    mouse.down = false;
}

function doubleClick( event ) {
  canvas.width = canvas.width; 
}

function textWidth( string, size ) {
  context.font = size + "px Georgia";
  
  if ( context.fillText ) {
    return context.measureText( string ).width;
  } else if ( context.mozDrawText) {
    return context.mozMeasureText( string );
  }
  
 };

init();


var count = document.getElementById("count");


if(typeof(Storage) !== "undefined") {
  

    if (localStorage.clickCount) {
   
    } else {

      localStorage.clickCount = 0;
    }

    function btnClicked() {
    

      localStorage.clickCount = Number(localStorage.clickCount) + 1;
      

      count.innerHTML = localStorage.clickCount;
    }

    count.innerHTML = localStorage.clickCount;
    
} else {

  window.alert("Sorry, your browser does not support web storage...");
}

