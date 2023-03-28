
do{
    fourNumber = prompt("inserisci 4 cifre")
}while(!(fourNumber.length === 4))

let total = 0

const split = fourNumber.split("")

for(let i = 0; i < fourNumber.length; i++){

    total += parseInt(split[i])
}

document.getElementById("output").innerHTML = total