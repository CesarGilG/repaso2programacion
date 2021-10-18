class mobile{
    public name:string;
    public model:string;
    public trademark:string;
    public sdSize:number[];
    public color:string;
    public is5G:boolean;
    public cameraNumber:number;
    public price:number;

    constructor (name:string,model:string,trademark:string,sdSize:number[],color:string,is5G:boolean,
        cameraNumber:number,price:number){
            this.name = name;
            this.model = model;
            this.trademark = trademark;
            this.sdSize = sdSize;
            this.color = color;
            this.is5G = is5G;
            this.cameraNumber = cameraNumber;
            this.price = price;
        }
}

let nokia3210 = new mobile("Nokia3210","3210","Nokia",[84,48],"black",false,0,50);
let iPhone3G = new mobile("iPhone3G","3G","iPhone",[115,62],"white",false,1,150);
let samsungGalaxy10 = new mobile("Samsung Galaxy 10","Galaxy 10","Samsung",[14,7],"blue",true,4,500);

console.log(nokia3210);
console.log(iPhone3G);
console.log(samsungGalaxy10);

nokia3210.cameraNumber=4;
nokia3210.is5G=true;
let mobiles:mobile[] = [nokia3210,iPhone3G,samsungGalaxy10];
console.log(mobiles)
