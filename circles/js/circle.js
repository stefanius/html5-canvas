
function Circle(centerX,centerY,radius, fillcolor)
{
    var centerX = centerX;
    var centerY = centerY;
    var radius = radius;
    var fillcolor = fillcolor;

    Circle.prototype.draw = function(context) {
        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        context.fillStyle = fillcolor;
        context.fill();
    };


}