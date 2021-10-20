export class punto{
    private x:number;
    private y:number;

    constructor(x:number,y:number){
        this.x = x;
        this.y = y;

    }
    toStrng():string{
        return '"(' + this.x.toString() + "," + this.y.toString() + ')"'
    }
    setX(newX:number){
        this.x = newX
    }
    getX():number{
        return this.x
    }
    getY():number{
        return this.y
    }
    setY(newY:number){
        this.y = newY
    }
    distaciaOrigen():number{
        return Math.round(Math.sqrt(this.x**2 + this.y**2)*100)/100
    }
    calcularDistancia(newPunto:punto):number{
        return Math.round(Math.sqrt((this.x - newPunto.getX())**2 + (this.y - newPunto.getY())**2)*100)/100
    }
    calcularCuadrante():number{
        let cuadrante:number = 0;
        if (this.x==0 && this.y==0){
            cuadrante = 0
        }else{
            if (this.x>=0 && this.y>=0){
                cuadrante = 1
            }
            if (this.x>=0 && this.y<0){
                cuadrante = 2
            }
            if (this.x<0 && this.y<0){
                cuadrante = 3
            }
            if (this.x<0 && this.y>=0){
                cuadrante = 4
            }
        }
        return cuadrante
    }
    calcularMasCercano(puntos:punto[]){
        let arrDistancias:number[] = []
        puntos.forEach(point => arrDistancias.push(point.calcularDistancia(this)))
        return arrDistancias.indexOf(Math.min.apply(null,arrDistancias))
    }

}

export class triangulo{
    private punto1:punto;
    private punto2:punto;
    private punto3:punto;
    constructor (punto1:punto,punto2:punto,punto3:punto){
        this.punto1 = punto1
        this.punto2 = punto2
        this.punto3 = punto3
    }
    calcularLongitudLados():number[]{
       return [this.punto1.calcularDistancia(this.punto2),this.punto2.calcularDistancia(this.punto3),this.punto3.calcularDistancia(this.punto1)]
    }
}
