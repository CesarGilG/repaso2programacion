import {mobile} from "./mobile"
import {mobileLibrary} from "./MobileLibrary"

let nokia3210 = new mobile("Nokia3210","3210","Nokia",4,"black",false,0,50);
let iPhone3G = new mobile("iPhone3G","3G","iPhone",12,"white",false,1,150);
let samsungGalaxy10 = new mobile("Samsung Galaxy 10","Galaxy 10","Samsung",256,"blue",true,4,500);
let arrayMobil:mobile[] = [nokia3210,iPhone3G,samsungGalaxy10]

let librerianueva = new mobileLibrary("La Librería","Calle nueva",arrayMobil)

function totalPriceCalculation(libreria:mobileLibrary):number{
    let totalPrice:number = 0;
    libreria.getMobiles().forEach(movil => totalPrice = totalPrice + movil.getPrice())
    return totalPrice
}

console.log(totalPriceCalculation(librerianueva))
console.log(librerianueva.getTotalPrice())