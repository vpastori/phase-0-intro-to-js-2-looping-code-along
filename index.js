// Code your solutions in this file
// for ([initialization]; [condition]; [iteration]) {
//     [loop body]
//   }

// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for(let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }

//     return gifts;
// }

// wrapGifts(gifts);



function writeCards(names, event) {
    let messages = [];
  
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      messages.push(message);
    }
  
    return messages;
  }
  
writeCards(["john", "Joe", "Mike"])

// while ([condition]) {
//     [loop body]
//   }

// const gifts = ["teddy bear", "droe", "doll"];

// function wrapGifts(gifts) {
//     let i = 0;
//     while (i < gifts.length) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         i++;
//     }

//     return gifts;
// }

// wrapGifts(gifts);

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}