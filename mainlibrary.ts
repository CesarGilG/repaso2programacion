import {mobile} from "./mobile"
import {mobileLibrary} from "./MobileLibrary"

let nokia3210 = new mobile("Nokia3210","3210","Nokia",4,"black",false,0,50);
let iPhone3G = new mobile("iPhone3G","3G","iPhone",12,"white",false,1,150);
let samsungGalaxy10 = new mobile("Samsung Galaxy 10","Galaxy 10","Samsung",256,"blue",true,4,500);
let arrayMobil:mobile[] = [nokia3210,iPhone3G,samsungGalaxy10]
let mobil1 = new mobile("nombre","modelo","marca",256,"color",true,4,500);
let mobil2 = new mobile("nombre","modelo","marca",256,"color",true,4,500);
let mobil3 = new mobile("nombre","modelo","marca",256,"color",true,4,500);
let arraymobil2:mobile[] = [mobil1,mobil2,mobil3]

let librerianueva = new mobileLibrary("La Librería","Calle nueva",arrayMobil)
let libreria2 = new mobileLibrary("Otra librería","otra calle",arraymobil2)
function totalPriceCalculation(libreria:mobileLibrary):number{
    let totalPrice:number = 0;
    libreria.getMobiles().forEach(movil => totalPrice = totalPrice + movil.getPrice())
    return totalPrice
}
libreria2.printLIbrary();
console.log("-----------------------------------------------------------------")
librerianueva.printLIbrary();
console.log("-----------------------------------------------------------------")

librerianueva.setLocation(libreria2.getLocation());
librerianueva.setMobiles(libreria2.getMobiles());
librerianueva.setName(libreria2.getName());
librerianueva.setTotalPrice(librerianueva.getTotalPrice());
librerianueva.printLIbrary();
