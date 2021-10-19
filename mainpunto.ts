import {punto} from "./punto"
import {triangulo} from "./punto"

let punto1:punto = new punto(33,-33)
let punto2:punto = new punto(0,0)
let punto3:punto = new punto(2,1)

let triangulo1:triangulo = new triangulo(punto1,punto2,punto3)
console.log(punto1.toStrng())
console.log(punto1.distaciaOrigen())
console.log(punto1.calcularDistancia(punto2))
console.log(punto2.calcularCuadrante())
let arrayPuntos:punto[] = [punto1,punto2]
console.log(punto3.calcularMasCercano(arrayPuntos))
console.log(triangulo1.calcularLongitudLados())