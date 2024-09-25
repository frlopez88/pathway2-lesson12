export class Cart {
    constructor() {
        this.item  = []
    }

    addProducts( product ){
        this.item.push(product)
    }

    getTotalInvoice(){

        let total = 0

        for(let i=0; i < this.item.length; i++){
            let x = this.item[i]
            total = total + x.price 
        }

        return total

    }

}