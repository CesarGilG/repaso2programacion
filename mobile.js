"use strict";
exports.__esModule = true;
exports.mobile = void 0;
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
    mobile.prototype.getName = function () {
        return this.name;
    };
    mobile.prototype.setName = function (newName) {
        this.name = newName;
    };
    mobile.prototype.getModel = function () {
        return this.model;
    };
    mobile.prototype.setModel = function (newModel) {
        this.model = newModel;
    };
    mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    mobile.prototype.setTrademark = function (newTrademark) {
        this.trademark = newTrademark;
    };
    mobile.prototype.getSdSide = function () {
        return this.sdSize;
    };
    mobile.prototype.setSdSide = function (newSdSide) {
        this.sdSize = newSdSide;
    };
    mobile.prototype.getColor = function () {
        return this.color;
    };
    mobile.prototype.setColor = function (newColor) {
        this.color = newColor;
    };
    mobile.prototype.getIs5G = function () {
        return this.is5G;
    };
    mobile.prototype.setIs5G = function (newIs5G) {
        this.is5G = newIs5G;
    };
    mobile.prototype.getCameraNumber = function () {
        return this.cameraNumber;
    };
    mobile.prototype.setCameraNumber = function (newCameraNumber) {
        this.cameraNumber = newCameraNumber;
    };
    mobile.prototype.getPrice = function () {
        return this.price;
    };
    mobile.prototype.setPrice = function (newPrice) {
        this.price = newPrice;
    };
    mobile.prototype.tiene5G = function () {
        if (this.is5G == true) {
            return " Si";
        }
        else {
            return " No";
        }
    };
    mobile.prototype.Print = function () {
        console.log("The caracteristics of the mobile " + this.name + " are:" + "\n" +
            "   -Name: " + this.name + "\n" +
            "   -Model: " + this.model + "\n" +
            "   -Trademark: " + this.trademark + "\n" +
            "   -SD side (GB): " + this.sdSize + "\n" +
            "   -Color: " + this.color + "\n" +
            "   -is 5G?:" + this.tiene5G() + "\n" +
            "   -Number of cameras: " + this.cameraNumber + "\n");
    };
    return mobile;
}());
exports.mobile = mobile;
