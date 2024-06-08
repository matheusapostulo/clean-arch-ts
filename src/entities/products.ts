export default class Product{
    _name: string;
    _cost: number = 0;
    _salesPrice: number = 0;

    constructor(name: string){
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string){
        this._name = name;
    }

    set cost(cost: number){
        if(cost < 0){
            throw new Error("Cost cannot be negative")
        }
        this._cost = cost;
    }

    get cost(){
        return this._cost;
    }

    get salesPrice(){
        return this._cost * 3;
    }
}