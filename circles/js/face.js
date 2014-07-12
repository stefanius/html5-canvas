
function Face(centerX,centerY, skincolor)
{
    var centerX = centerX;
    var centerY = centerY;
    var skincolor = skincolor;

    Face.prototype.draw = function(context) {

        var radius = 99;
        var earOffset = (radius / 2)  + (radius / 3);
        var eyeOffset = (radius / 2);

        var baseCircle = new Circle(centerX, centerY, radius, skincolor);
        baseCircle.draw(context);

        var leftEar = new Circle(centerX - earOffset, centerY - earOffset, radius / 4, skincolor);
        leftEar.draw(context);

        var rightEar = new Circle(centerX + earOffset, centerY - earOffset, radius / 4, skincolor);
        rightEar.draw(context);

        var rightEye = new Circle(centerX + eyeOffset, centerY - eyeOffset, radius / 10, "#0000FF");
        rightEye.draw(context);

        var leftEye = new Circle(centerX - eyeOffset, centerY - eyeOffset, radius / 10, "#0000FF");
        leftEye.draw(context);

        var mouthCircle = new Circle(centerX, centerY + (eyeOffset - 3), radius / 3, "#FF0000");
        mouthCircle.draw(context);

        var mouthCover = new Circle(centerX, centerY + (eyeOffset - 7), radius / 3, skincolor);
        mouthCover.draw(context);

        var nose = new Circle(centerX, centerY, radius / 6, "#000000");
        nose.draw(context);
    };


}