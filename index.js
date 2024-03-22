//question1
let names = ["Charlie", "Samip", "Ali"];
let eventName = "surprise";

function writeCards(names, eventName) {
  let messages = [];

  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }

  return messages;
}

let cards = writeCards(names, eventName);
console.log(cards);
//question2
function countDown(startingNumber) {
    let currentNumber = startingNumber;
  
    while (currentNumber >= 0) {
      console.log(currentNumber);
      currentNumber--;
    }
  }
  
  countDown(10);
  