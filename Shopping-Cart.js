// const shoppingCart =[
//      {mame:"shoe", price:2200,},
//      {mame:"pant", price:2900,},
//      {mame:"shirt", price:2000,},
//      {mame:"Balt", price:1000,},
// ];

// function totelCost (products){
//      let sum = 0;
//      for(let i = 0; i <products.length; i++){
//           const product = products[i];
//           sum = sum + product.price
          
//      }
//      return sum;
// }

// const expence =totelCost(shoppingCart);
// console.log(expence);


// Quantity-cart




const shoppingCart =[
     {mame:"shoe", price:2200, Quantity: 2 },
     {mame:"pant", price:2900, Quantity: 3},
     {mame:"shirt", price:2000, Quantity: 5},
     {mame:"Balt", price:1000, Quantity: 2},
];

function totelCost (products){
     let sum = 0;
     for(let i = 0; i <products.length; i++){
          const product = products[i];
          const totelQuantity = product.price * product.Quantity;
          sum = sum + totelQuantity;
          
     }
     return sum;
}

const expence =totelCost(shoppingCart);
console.log(expence);

