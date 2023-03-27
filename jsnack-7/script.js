
const pow = [];

let counter = 0;

let result = 0;

while(result < 1000){

    result = Math.pow(2, counter);

    if(result < 1000){
        pow.push(result);
        counter++      
         
    }  
    
}

document.getElementById("output").innerHTML = pow
