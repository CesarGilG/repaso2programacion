"use strict";
exports.__esModule = true;
var mobile_1 = require("./mobile");
var MobileLibrary_1 = require("./MobileLibrary");
var nokia3210 = new mobile_1.mobile("Nokia3210", "3210", "Nokia", 4, "black", false, 0, 50);
var iPhone3G = new mobile_1.mobile("iPhone3G", "3G", "iPhone", 12, "white", false, 1, 150);
var samsungGalaxy10 = new mobile_1.mobile("Samsung Galaxy 10", "Galaxy 10", "Samsung", 256, "blue", true, 4, 500);
var arrayMobil = [nokia3210, iPhone3G, samsungGalaxy10];
var librerianueva = new MobileLibrary_1.mobileLibrary("La Librería", "Calle nueva", arrayMobil);
function totalPriceCalculation(libreria) {
    var totalPrice = 0;
    libreria.getMobiles().forEach(function (movil) { return totalPrice = totalPrice + movil.getPrice(); });
    return totalPrice;
}
console.log(totalPriceCalculation(librerianueva));
console.log(librerianueva.getTotalPrice());
