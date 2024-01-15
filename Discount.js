function ticketPrice(ticketQuantity){
     const first100Rate = 100;
     const second100Rate = 90;
     const restTicketRate = 70;

     if(ticketQuantity <= 100){
          const price = ticketQuantity * first100Rate;
          return price;
     }
     else if(ticketQuantity <= 200){
          const first100 = 100 * first100Rate;
          const second = ticketQuantity - 100 ;
          const rest = second * second100Rate;
          const total = first100 + rest;
          return total;
     }else{
          const first100Price = 100 * first100Rate;
          const second100Price = 100 * second100Rate;
          const restTicket = ticketQuantity - 200;
          const restTicketPrice = restTicket * restTicketRate;

          const totalPrice = first100Price + second100Price + restTicketPrice;
          return totalPrice; 
     }
}

// const price = ticketPrice(250);
// console.log(price);

let sum= 0; 
for ( let i = 0; i<=3;i++){ 
     sum = sum + i; 
console.log(sum)
}
