"use strict";
exports.__esModule = true;
exports.triangulo = exports.punto = void 0;
var punto = /** @class */ (function () {
    function punto(x, y) {
        this.x = x;
        this.y = y;
    }
    punto.prototype.toStrng = function () {
        return '"(' + this.x.toString() + "," + this.y.toString() + ')"';
    };
    punto.prototype.setX = function (newX) {
        this.x = newX;
    };
    punto.prototype.getX = function () {
        return this.x;
    };
    punto.prototype.getY = function () {
        return this.y;
    };
    punto.prototype.setY = function (newY) {
        this.y = newY;
    };
    punto.prototype.distaciaOrigen = function () {
        return Math.round(Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)) * 100) / 100;
    };
    punto.prototype.calcularDistancia = function (newPunto) {
        return Math.round(Math.sqrt(Math.pow((this.x - newPunto.getX()), 2) + Math.pow((this.y - newPunto.getY()), 2)) * 100) / 100;
    };
    punto.prototype.calcularCuadrante = function () {
        var cuadrante = 0;
        if (this.x != 0 && this.y != 0) {
            if (this.x >= 0 && this.y >= 0) {
                cuadrante = 1;
            }
            if (this.x >= 0 && this.y < 0) {
                cuadrante = 2;
            }
            if (this.x < 0 && this.y < 0) {
                cuadrante = 3;
            }
            if (this.x < 0 && this.y >= 0) {
                cuadrante = 4;
            }
        }
        return cuadrante;
    };
    punto.prototype.calcularMasCercano = function (puntos) {
        var _this = this;
        var arrDistancias = [];
        puntos.forEach(function (point) { return arrDistancias.push(point.calcularDistancia(_this)); });
        return arrDistancias.indexOf(Math.min.apply(null, arrDistancias));
    };
    return punto;
}());
exports.punto = punto;
var triangulo = /** @class */ (function () {
    function triangulo(punto1, punto2, punto3) {
        this.punto1 = punto1;
        this.punto2 = punto2;
        this.punto3 = punto3;
    }
    triangulo.prototype.calcularLongitudLados = function () {
        return [this.punto1.calcularDistancia(this.punto2), this.punto2.calcularDistancia(this.punto3), this.punto3.calcularDistancia(this.punto1)];
    };
    return triangulo;
}());
exports.triangulo = triangulo;
