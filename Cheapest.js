const phones = [
     { brand: "Samsung", camera: 23, storage:"128gb", price:35000, color: "black"},
     { brand: "I-phone", camera: 16, storage:"128gb", price:150000, color: "black"},
     { brand: "Xoami", camera: 23, storage:"128gb", price:32000, color: "black"},
     { brand: "Realme", camera: 23, storage:"128gb", price:25000, color: "black"},
     { brand: "Oppo", camera: 23, storage:"128gb", price:20000, color: "black"},
     { brand: "Vivo", camera: 23, storage:"128gb", price:22000, color: "black"}
]


function CheapestPhone(phones){
     let CheapestPrice = phones[0];
     for(let i = 0; i <phones.length; i++){
          const phone = phones[i];
          if(phone.price < CheapestPrice.price){
               CheapestPrice = phone;
          }
     }
     return CheapestPrice;

}

const mySelection = CheapestPhone(phones);
console.log(mySelection);