import {mobile} from "./mobile"

export class mobileLibrary{
    private name:string;
    private location:string;
    private mobiles:mobile[];
    private totalPrice:number;

    constructor (name:string,location:string,mobiles:mobile[]){
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();   
    }

    getName():string{
        return this.name
    }
    setName(newName){
        this.name = newName
    }
    getLocation():string{
        return this.location
    }
    setLocation(newLocation){
        this.location = newLocation
    }
    getMobiles():mobile[]{
        return this.mobiles
    }
    setMobiles(newMobiles){
        this.mobiles.push(newMobiles)
    }
    getTotalPrice():number{
        return this.totalPrice
    }
    setTotalPrice(newTotal){
        this.totalPrice = newTotal
    }
    private totalPriceCalculation():number{
        let totalPrice:number = 0;
        this.mobiles.forEach(movil => totalPrice = totalPrice + movil.getPrice())
        return totalPrice

}
}
