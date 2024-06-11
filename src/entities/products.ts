export default class Product{
    _name: string;
    _cost: number = 0;
    _salesPrice: number = 0;
    _id: string;

    constructor(id:string, name: string, ){
        this._name = name;
        this._id = id;
    }

    get name(): string {
        return this._name;
    }

    get id(): string{
        return this._id;
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