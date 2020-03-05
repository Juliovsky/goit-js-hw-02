"use strict";

let input;
const numbers = [];
let total = 0;
let cycle = true;


while (cycle) {
    const input = prompt("Please enter the number");
    if (input === null) {
        cycle = false;
    } else {

        if (Number.isNaN(Number(input))){
            alert("Not a number, try again"); 
        } else{
            numbers.push(input);
        }
    }

}

for(const number of numbers){
    total+=Number(number);
}

alert(`Total sum is ${total}`);

