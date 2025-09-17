var width = window.innerWidth;
var height = window.innerHeight;
var scale = width / height;
var canvasPreview = null;
var canvasTimeLine = null;
var _timeLine = null;
var _keyboard = null;
var _mouse = null;
function update(){
    _timeLine.update({
        mouse: _mouse.getMouse(),
        keyboard: _keyboard.isKeyPressed()
    });
    draw();
    requestAnimationFrame(update);
}
function draw(){
    _timeLine.draw(canvasTimeLine.getContexto());
}
window.addEventListener('load', () => { 
     canvasPreview = new canvas(document.getElementById('VideoPreviewCanvas'),{width: width - 1 * scale, height: 180 * scale});
     canvasTimeLine = new canvas(document.getElementById('timeLineCanvas'),{width: width - 1 * scale, height: 85 * scale});
     _timeLine = new timeLine(width - 1 *scale, 75 * scale);
    _keyboard = new keyboard();
    _mouse = new mouse(canvasTimeLine.getCanvas());
     
     update();
});


