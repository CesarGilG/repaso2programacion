var mobile = /** @class */ (function () {
    function mobile(name, model, trademark, sdSize, color, is5G, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    return mobile;
}());
var nokia3210 = new mobile("Nokia3210", "3210", "Nokia", [84, 48], "black", false, 0, 50);
var iPhone3G = new mobile("iPhone3G", "3G", "iPhone", [115, 62], "white", false, 1, 150);
var samsungGalaxy10 = new mobile("Samsung Galaxy 10", "Galaxy 10", "Samsung", [14, 7], "blue", true, 4, 500);
console.log(nokia3210);
console.log(iPhone3G);
console.log(samsungGalaxy10);
nokia3210.cameraNumber = 4;
nokia3210.is5G = true;
var mobiles = [nokia3210, iPhone3G, samsungGalaxy10];
console.log(mobiles);
