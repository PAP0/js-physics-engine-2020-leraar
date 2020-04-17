const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let A, B, C, D, f, g, S;

A = new Point(200,200,30,"red",true);
B = new Point(700,400,20,"black",true);
C = new Point(300,400,40,"orange",true);
D = new Point(400,300,30,"pink",true);
S = new Point(0,0,10,"green",false);

f = new LinearFunction(1,1);
g = new LinearFunction(2,1);



function animate(){
    context.clearRect(0,0,width,height)
    f.slope = (A.y - B.y)/(A.x - B.x);
    g.slope = (C.y - D.y)/(C.x - D.x);
    f.intercept = A.y - A.x * f.slope;
    g.intercept = C.y - C.x * g.slope;

    f.draw(context);
    g.draw(context);
    A.draw(context);
    B.draw(context);
    C.draw(context);
    D.draw(context);

    S.x = f.intersection(g).x;
    S.y = f.intersection(g).y;
    S.draw(context);
}

setInterval(animate,10);
