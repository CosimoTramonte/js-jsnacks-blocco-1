
const odd = [];

let counter = 0;

while(counter <= 5){

    const number = prompt("scrivi un numero")
    
    if(!(number % 3)){
        odd.push(number)
    }

    counter++
}

let message = document.querySelector(".output")

message.innerHTML = odd