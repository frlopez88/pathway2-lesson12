export class Product {

    constructor(pname, pprice, pyear){
        this.name= pname
        this.price= pprice
        this._year = pyear  // private property 
    }

    getDeatils(){
        return `The ${this.name} cost ${this.price} `
    }

}

export class ElectricProduct extends Product{

    calculateDiscount() {
        this.price  = this.price - 15
    }

    getDeatils(){
        return `Electric Product cost ${this.price} `
    }

}


export class Vehicle{

    constructor(ptires, pRegisterNumber, pCylinders){
        this.tires= ptires
        this.registerNumber = pRegisterNumber
        this.cylinders = pCylinders
    }

    makeSound(){
        return `Add a sound`
    }


}

export class Cars extends Vehicle{

    makeSound(){
        return `Rumm Rumm`
    }
}

export class MotorCycle extends Vehicle {

    // Capability to modify a method that has been inherited
    makeSound() {
        return `Brimmmmm Brimmmmmm`
    }

}