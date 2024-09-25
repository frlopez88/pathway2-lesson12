import { Product, ElectricProduct,Cars } from "./product.js"
import { Cart } from "./cart.js"
import {Tabulator} from 'https://unpkg.com/tabulator-tables@6.2.5/dist/js/tabulator_esm.min.mjs';


let p = new ElectricProduct("Laptop", 500, 2023)
p.calculateDiscount()
let p2 = new ElectricProduct("Iphone 15", 1000, 2023)
p2.calculateDiscount()
let p3 = new ElectricProduct("Play Station 5", 1500, 2023)
p3.calculateDiscount()

let p4= new Product("Chair", 10);
let p5 = new Product("Table", 50)

let cart = new Cart()
cart.addProducts(p)
cart.addProducts(p2)
cart.addProducts(p3)
cart.addProducts(p4)
cart.addProducts(p5)

console.log(cart.getTotalInvoice())

for (let i =0; i < cart.item.length; i++){

    console.log(cart.item[i].getDeatils())
}


cart.item.push()


let c1= new Cars(4, 454654, 4)
console.log(c1.makeSound())

let dataSrudents = [ 
    {
        name : "Patrick", 
        carrear: "Front-End Dev", 
        age: 29
    }, 
    {
        name: "Pax", 
        carrear : "Back-End Dev", 
        age:31
    }, 
    {
        name: "Julie", 
        carrear : "Mobile Dev", 
        age: 24
    }
]

let table = new Tabulator("#table-1", {
    data:dataSrudents, //assign data to table
    autoColumns:true, //create columns from data field names
    layout:"fitColumns"
});
