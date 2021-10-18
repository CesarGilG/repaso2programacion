export class mobile{
    private name:string;
    private model:string;
    private trademark:string;
    private sdSize:number;
    private color:string;
    private is5G:boolean;
    private cameraNumber:number;
    private price:number;

    constructor (name:string,model:string,trademark:string,sdSize:number,color:string,is5G:boolean,
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
getName():string{
    return this.name
}
setName(newName:string){
    this.name = newName
}
getModel():string{
    return this.model
}
setModel(newModel){
    this.model = newModel
}
getTrademark():string{
    return this.trademark
}
setTrademark(newTrademark){
    this.trademark = newTrademark
}
getSdSide():number{
    return this.sdSize
}
setSdSide(newSdSide){
    this.sdSize = newSdSide
}
getColor():string{
    return this.color
}
setColor(newColor){
    this.color = newColor
}
getIs5G():boolean{
    return this.is5G
}
setIs5G(newIs5G){
    this.is5G = newIs5G
}
getCameraNumber():number{
    return this.cameraNumber
}
setCameraNumber(newCameraNumber){
    this.cameraNumber = newCameraNumber
}
getPrice():number{
    return this.price
}
setPrice(newPrice){
    this.price = newPrice
}
tiene5G():string{
    if(this.is5G == true){
        return " Si"
    }else{
        return " No"
    }
}
Print(){
    console.log("The caracteristics of the mobile " + this.name + " are:" + "\n" +
    "   -Name: " + this.name + "\n" +
    "   -Model: " + this.model + "\n" +
    "   -Trademark: " + this.trademark + "\n" +
    "   -SD side (GB): " + this.sdSize + "\n" +
    "   -Color: " + this.color + "\n" +
    "   -is 5G?:" + this.tiene5G()  + "\n" +
    "   -Number of cameras: " + this.cameraNumber + "\n")
}
}

