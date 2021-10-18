"use strict";
exports.__esModule = true;
var mobile_1 = require("./mobile");
var nokia3210 = new mobile_1.mobile("Nokia3210", "3210", "Nokia", 4, "black", false, 0, 50);
var iPhone3G = new mobile_1.mobile("iPhone3G", "3G", "iPhone", 12, "white", false, 1, 150);
var samsungGalaxy10 = new mobile_1.mobile("Samsung Galaxy 10", "Galaxy 10", "Samsung", 256, "blue", true, 4, 500);
var arrayMobile = [nokia3210, iPhone3G, samsungGalaxy10];
for (var i = 0; i < arrayMobile.length; i++) {
    arrayMobile[i].Print();
}
