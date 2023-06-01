canvas=document.getElementById("myCanvas");
pen=canvas.getContext("2d");
mouseyevent="";
lastmouseyx="";
lastmouseyy="";
couleur="red";
linewitdth=2;
rad=20;
canvas.addEventListener("mousedown",clicky);
function clicky(e) {
    mouseyevent="md";
    console.log("Mousedown");
    couleur=document.getElementById("penCouleur").value;
    linewitdth=document.getElementById("penwitdth").value;
    rad=document.getElementById("rad").value
}
canvas.addEventListener("mouseup",unclick)
function unclick(e) {
    mouseyevent="mu";
    console.log("MouseUp");
}
canvas.addEventListener("mouseleave",bye);

function bye(e) {
    mouseyevent="ml";
    console.log("Mouseleave");
}

canvas.addEventListener("mousemove",whee)

function whee(e) {
    console.log("MouseMove")
    currentmouseyx=e.clientX-canvas.offsetLeft;
    currentmouseyy=e.clientY-canvas.offsetTop;

    if (mouseyevent=="md"){
        pen.beginPath();
        pen.strokeStyle=couleur;
        pen.lineWidth=linewitdth;
        pen.arc(currentmouseyx,currentmouseyy,rad,0,2*Math.PI)
        pen.stroke();
    }
    lastmouseyx=currentmouseyx;
    lastmouseyy=currentmouseyy;

}
function relstart() {
    pen.clearRect(0,0,canvas.width,canvas.height);
}
