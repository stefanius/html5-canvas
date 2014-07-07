
function RGBColor(red, green, blue)
{
    var red = red;
    var green = green;
    var blue = blue;

    RGBColor.prototype.toHexColor = function() {
        return "#" + this.toHex(red) + this.toHex(green) + this.toHex(blue)
    };

    RGBColor.prototype.toHex = function (n) {
        var nybHexString = "0123456789ABCDEF";

        return String(nybHexString.substr((n >> 4) & 0x0F, 1)) + nybHexString.substr(n & 0x0F, 1);
    }

    RGBColor.prototype.increase = function () {
        var overflow = 0;
        blue = blue + 19;

        if (blue > 255) {
            overflow = blue - 255;
            blue = 0;
        }

        if (overflow > 0) {
            green = green + overflow;
            overflow = 0;
        }

        if (green > 255) {
            overflow = green - 255;
            green = 0;
        }

        if (overflow > 0) {
            red = red + overflow;
            overflow = 0;
        }

        if (red > 255) {
            overflow = red - 255;
            red = 0;
        }

        if (overflow > 0) {
            blue = blue + overflow;
        }
    }
}
