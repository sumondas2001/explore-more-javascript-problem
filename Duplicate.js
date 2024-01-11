// const names = ["abul", "babul", "cabul", "dubul", "kabul", "babul", "abul", "dabul" ,"cabul"];

// function removeDuplicate(names){
//      let unique = [];
//      for(let i = 0; i <names.length; i++){
//           let element = names[i];
//           if(unique.includes(element) === false){
//                unique.push(element);
//           }
//      }
//      return unique;

// }
// const uniqueName = removeDuplicate(names);
// console.log(uniqueName);



const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 90, 30, 4, 5, 630, 44, 50, 60, 10, 70, 100];

function removeDuplicate (number){

     const unique = [];

     for (let i = 0; i < number.length; i++){
       let element = number[i];
       
       if(unique.includes(element) === false){
          unique.push(element);
       }
      
     }
     return unique;
}
const uniqueName = removeDuplicate(numbers);
console.log(uniqueName);