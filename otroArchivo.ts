import {mobile} from "./mobile"

let nokia3210 = new mobile("Nokia3210","3210","Nokia",4,"black",false,0,50);
let iPhone3G = new mobile("iPhone3G","3G","iPhone",12,"white",false,1,150);
let samsungGalaxy10 = new mobile("Samsung Galaxy 10","Galaxy 10","Samsung",256,"blue",true,4,500);

let arrayMobile:mobile[] = [nokia3210,iPhone3G,samsungGalaxy10];

for(let i = 0;i<arrayMobile.length;i++){
    arrayMobile[i].Print()
}