const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let img,img2,angle;

img = new Image();
img2 = new Image();
img.src = "images/cog.png";
img2.src = "images/cog2.png";


angle = 0.1;

img.addEventListener('load',()=>{
  setInterval(animate,15)
})

function animate(){
  context.clearRect(0,0,width,height);

  //regel1
  context.save();
  context.translate(40,100);
  context.rotate(-angle+0.3);
  context.drawImage(img2,-150,-150,300,300);
  context.restore();
  angle +=  0.005;

  context.save();
  context.translate(320,100);
  context.rotate(angle);
  context.drawImage(img,-150,-150,300,300);
  context.restore();
  angle +=  0.005;

  context.save();
  context.translate(600,100);
  context.rotate(-angle+0.3);
  context.drawImage(img2,-150,-150,300,300);
  context.restore();
  angle +=  0.005;

  context.save();
  context.translate(880,100);
  context.rotate(angle);
  context.drawImage(img,-150,-150,300,300);
  context.restore();
  angle +=  0.005;

  context.save();
  context.translate(1160,100);
  context.rotate(-angle+0.3);
  context.drawImage(img2,-150,-150,300,300);
  context.restore();
  angle +=  0.005;

  context.save();
  context.translate(1440,100);
  context.rotate(angle);
  context.drawImage(img,-150,-150,300,300);
  context.restore();
  angle +=  0.00;

  context.save();
  context.translate(1720,100);
  context.rotate(-angle+0.3);
  context.drawImage(img2,-150,-150,300,300);
  context.restore();
  angle +=  0.00;

  context.save();
  context.translate(2000,100);
  context.rotate(angle+0.3);
  context.drawImage(img,-150,-150,300,300);
  context.restore();
  angle +=  0.00;

  //regel2
  context.save();
  context.translate(40,500);
  context.rotate(angle);
  context.drawImage(img2,-150,-150,300,300);
  context.restore();
  angle +=  0.00;

  context.save();
  context.translate(320,500);
  context.rotate(-angle+0.3);
  context.drawImage(img,-150,-150,300,300);
  context.restore();
  angle +=  0.00;

  context.save();
  context.translate(600,500);
  context.rotate(angle);
  context.drawImage(img2,-150,-150,300,300);
  context.restore();
  angle +=  0.00;

  context.save();
  context.translate(880,500);
  context.rotate(-angle+0.3);
  context.drawImage(img,-150,-150,300,300);
  context.restore();
  angle +=  0.00;

  context.save();
  context.translate(1160,500);
  context.rotate(angle);
  context.drawImage(img2,-150,-150,300,300);
  context.restore();
  angle +=  0.00;

  context.save();
  context.translate(1440,500);
  context.rotate(-angle+0.3);
  context.drawImage(img,-150,-150,300,300);
  context.restore();
  angle +=  0.00;

  context.save();
  context.translate(1720,500);
  context.rotate(angle);
  context.drawImage(img2,-150,-150,300,300);
  context.restore();
  angle +=  0.00;

  context.save();
  context.translate(2000,500);
  context.rotate(-angle+0.3);
  context.drawImage(img,-150,-150,300,300);
  context.restore();
  angle +=  0.00;

  //regel3
  context.save();
  context.translate(40,900);
  context.rotate(-angle+0.3);
  context.drawImage(img2,-150,-150,300,300);
  context.restore();
  angle +=  0.00;

  context.save();
  context.translate(320,900);
  context.rotate(angle);
  context.drawImage(img,-150,-150,300,300);
  context.restore();
  angle +=  0.00;

  context.save();
  context.translate(600,900);
  context.rotate(-angle+0.3);
  context.drawImage(img2,-150,-150,300,300);
  context.restore();
  angle +=  0.00;

  context.save();
  context.translate(880,900);
  context.rotate(angle);
  context.drawImage(img,-150,-150,300,300);
  context.restore();
  angle +=  0.00;

  context.save();
  context.translate(1160,900);
  context.rotate(-angle+0.3);
  context.drawImage(img2,-150,-150,300,300);
  context.restore();
  angle +=  0.00;

  context.save();
  context.translate(1440,900);
  context.rotate(angle);
  context.drawImage(img,-150,-150,300,300);
  context.restore();
  angle +=  0.00;

  context.save();
  context.translate(1720,900);
  context.rotate(-angle+0.3);
  context.drawImage(img2,-150,-150,300,300);
  context.restore();
  angle +=  0.00;

  context.save();
  context.translate(2000,900);
  context.rotate(angle+0.3);
  context.drawImage(img,-150,-150,300,300);
  context.restore();
  angle +=  0.00;

}