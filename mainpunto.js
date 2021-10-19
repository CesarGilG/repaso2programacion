"use strict";
exports.__esModule = true;
var punto_1 = require("./punto");
var punto_2 = require("./punto");
var punto1 = new punto_1.punto(33, -33);
var punto2 = new punto_1.punto(0, 0);
var punto3 = new punto_1.punto(2, 1);
var triangulo1 = new punto_2.triangulo(punto1, punto2, punto3);
console.log(punto1.toStrng());
console.log(punto1.distaciaOrigen());
console.log(punto1.calcularDistancia(punto2));
console.log(punto2.calcularCuadrante());
var arrayPuntos = [punto1, punto2];
console.log(punto3.calcularMasCercano(arrayPuntos));
console.log(triangulo1.calcularLongitudLados());