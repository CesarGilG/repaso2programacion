import {mobile} from "./mobile"

let nokia3210 = new mobile("Nokia3210","3210","Nokia",4,"black",false,0,50);
let iPhone3G = new mobile("iPhone3G","3G","iPhone",12,"white",false,1,150);
let samsungGalaxy10 = new mobile("Samsung Galaxy 10","Galaxy 10","Samsung",256,"blue",true,4,500);

// console.log(nokia3210);
// console.log(iPhone3G);
// console.log(samsungGalaxy10);

// nokia3210.setCameraNumber(4);
// nokia3210.setIs5G(true);
// let mobiles:mobile[] = [nokia3210,iPhone3G,samsungGalaxy10];
// console.log(mobiles)

nokia3210.Print()