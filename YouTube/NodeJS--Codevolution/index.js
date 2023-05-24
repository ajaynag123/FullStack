// // const EventEmitter = require('node:events');

// // const emitter = new EventEmitter();

// // emitter.on('order-pizza', (size, topping) => {
// //   console.log(`Order recevid, ${size}${topping}`);
// // })

// // emitter.emit('order-pizza', 'large', 'mushroom');

// import PizzaShop from './pizza-shop.mjs';

// const pizzaShop = new PizzaShop();

// pizzaShop.order();
// pizzaShop.order();
// pizzaShop.displayOrderNumber();
// pizzaShop.displayOrderNumber();

const buffer = new Buffer.from('Vishwas');

buffer.write('AmruthaVarshini');
console.log(buffer.toString());
console.log(buffer.toJSON());