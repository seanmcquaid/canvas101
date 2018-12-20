// go gert canvas element
const canvas = document.getElementById("canvas");
console.dir(canvas);
// canvas by itself is just something to draw on
// in javascript, we need a "context" which is like our brush
let context = canvas.getContext("2d");
// .rect() takes 4 args: 
// 1) the upper x
// 2) the upper y
// 3) lower x 
// 4) lower y 
// gives coordinatrs for rectangle
// context.rect(100,100,300,300);
// // strokes actually draws
// context.stroke();

// context.moveTo(100,100);
// context.lineTo(400,400);
// context.lineTo(100,400);
// context.lineTo(400,100);

// context.stroke();

// context.beginPath();
// // arc() takes 6 arguments:
// // 1 = x coord for center
// // 2 = y coord for center
// // 3 = radius in pixels
// // 4 = start angle (0 = 3:00);
// // 5 = place to end, every 90 deg is a half pi
// // 6 = optional true/false for counterclockwise
// context.arc(100, 75, 50, 0, 2 * Math.PI);
// // context.stroke();
// // fillstyle sets color
// context.fillStyle = "#0044ff";
// // fill() will actually it in 
// context.fill();
// // sets border
// context.strokeStyle = "#ff0";
// context.stroke();
// // sets width of line
// context.lineWidth = 10;
// context.stroke();

// a constructor(code in JS for a class)
// uses capital letter
function Ball(x, y){
    // inside of a constructor, we get the keyword :"this"
    this.x = x;
    this.y = y
}