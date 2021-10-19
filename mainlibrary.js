"use strict";
exports.__esModule = true;
var mobile_1 = require("./mobile");
var MobileLibrary_1 = require("./MobileLibrary");
var nokia3210 = new mobile_1.mobile("Nokia3210", "3210", "Nokia", 4, "black", false, 0, 50);
var iPhone3G = new mobile_1.mobile("iPhone3G", "3G", "iPhone", 12, "white", false, 1, 150);
var samsungGalaxy10 = new mobile_1.mobile("Samsung Galaxy 10", "Galaxy 10", "Samsung", 256, "blue", true, 4, 500);
var arrayMobil = [nokia3210, iPhone3G, samsungGalaxy10];
var mobil1 = new mobile_1.mobile("nombre", "modelo", "marca", 256, "color", true, 4, 500);
var mobil2 = new mobile_1.mobile("nombre", "modelo", "marca", 256, "color", true, 4, 500);
var mobil3 = new mobile_1.mobile("nombre", "modelo", "marca", 256, "color", true, 4, 500);
var arraymobil2 = [mobil1, mobil2, mobil3];
var librerianueva = new MobileLibrary_1.mobileLibrary("La Librería", "Calle nueva", arrayMobil);
var libreria2 = new MobileLibrary_1.mobileLibrary("Otra librería", "otra calle", arraymobil2);
function totalPriceCalculation(libreria) {
    var totalPrice = 0;
    libreria.getMobiles().forEach(function (movil) { return totalPrice = totalPrice + movil.getPrice(); });
    return totalPrice;
}
libreria2.printLIbrary();
console.log("-----------------------------------------------------------------");
librerianueva.printLIbrary();
console.log("-----------------------------------------------------------------");
librerianueva.setLocation(libreria2.getLocation());
librerianueva.setMobiles(libreria2.getMobiles());
librerianueva.setName(libreria2.getName());
librerianueva.setTotalPrice(librerianueva.getTotalPrice());
librerianueva.printLIbrary();
