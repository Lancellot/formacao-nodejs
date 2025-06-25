import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishlist = [];

console.log("Welcome to the your Shopee Cart!");

const item1 = await createItem("Shoes", 100, 2);
const item2 = await createItem("hotwheels", 59.34, 2);
const item3 = await createItem("hotwheels raro", 159.34, 1);


await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);

await cartService.removeItem(myCart, item2);

await cartService.displayCart(myCart);

//await cartService.deleteItem(myCart, item1.name);
await cartService.calculateTotal(myCart);

