"use strict";
exports.__esModule = true;
exports.mobileLibrary = void 0;
var mobileLibrary = /** @class */ (function () {
    function mobileLibrary(name, location, mobiles) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }
    mobileLibrary.prototype.getName = function () {
        return this.name;
    };
    mobileLibrary.prototype.setName = function (newName) {
        this.name = newName;
    };
    mobileLibrary.prototype.getLocation = function () {
        return this.location;
    };
    mobileLibrary.prototype.setLocation = function (newLocation) {
        this.location = newLocation;
    };
    mobileLibrary.prototype.getMobiles = function () {
        return this.mobiles;
    };
    mobileLibrary.prototype.setMobiles = function (newMobiles) {
        this.mobiles.push(newMobiles);
    };
    mobileLibrary.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    mobileLibrary.prototype.setTotalPrice = function (newTotal) {
        this.totalPrice = newTotal;
    };
    mobileLibrary.prototype.totalPriceCalculation = function () {
        var totalPrice = 0;
        this.mobiles.forEach(function (movil) { return totalPrice = totalPrice + movil.getPrice(); });
        return totalPrice;
    };
    return mobileLibrary;
}());
exports.mobileLibrary = mobileLibrary;
