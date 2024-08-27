let counter = document.getElementById("counter");
let clicker = document.getElementById("clicker");

let number = 0;

counter.innerHTML = number;



clicker.addEventListener("click", function(){
    number += 1;
    counter.innerHTML = number;
})

