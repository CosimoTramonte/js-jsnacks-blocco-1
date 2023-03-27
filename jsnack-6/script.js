
const cubi = [];

const numero = prompt("Scrivi un numero");

let counter = 0;

while(counter <= numero){

    let cubo = (counter * counter * counter);

    cubi.push(cubo);

    counter++
}

let message = cubi

document.getElementById("output").innerHTML = message

