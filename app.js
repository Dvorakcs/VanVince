var width = window.innerWidth;
var height = window.innerHeight;
var scale = width / height;
var canvasTimeLine = null;
var _timeLine = null;

function update(){

    _timeLine.update();
    draw();
    requestAnimationFrame(update);
}
function draw(){
    _timeLine.draw(canvasTimeLine.getContexto());
}
window.addEventListener('load', () => { 
     canvasTimeLine = new canvas(document.getElementById('timeLineCanvas'),{width: width - 1 * scale, height: 85 * scale});
     _timeLine = new timeLine(width - 1 *scale, 75 * scale);
     update();
});


