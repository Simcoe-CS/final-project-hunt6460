/** @type {HTMLCanvasElement} */
let can =document.getElementById("canvas");
let c = can.getContext("2d");
let img = new Image();
let img2 = new Image();


//make doll always load

img.onload = function() { //load and draw right away
c.drawImage(img, 0, 0, 640, 480);
}
img.src = "doll.png"

img2.onload = function() { //load and draw right away
c.drawImage(img2, 0, 0, 640, 480);
}
img2.src = "image.png"



















/*c.fillStyle = "red";
c.fillRect (200,200,120,120);*/

/*c.beginPath();
c.fillStyle="orange";
c.moveTo(199,200)
c.lineTo(320,200)
c.lineTo(260,110)
c.fill();*/

/*c.beginPath();
c.fillStyle = "yellow";
c.arc(500, 90, 80, 0, 2*Math.PI);
c.stroke()
c.fill()*/