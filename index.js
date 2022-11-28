
const button = document.querySelector('#button');
console.log(button)
button.addEventListener("click", calculateAmount);

function calculateAmount(){
const td = document.querySelector('#bill0').value;
const td1 = document.querySelector('#bill1').value;
const td2 = document.querySelector('#bill2').value;
const td3 = document.querySelector('#bill3').value;

if(isNaN(td, td1, td2, td3)){
    Swal.fire({                                          
        title: 'Стоп',
        text: 'Пожалуйста, введите число',
      })
}

let amountPerPerson = +td + +td1 + +td2 + +td3;
console.log(amountPerPerson)

document.querySelector('#bill4').value = amountPerPerson; 
}




const button2 = document.querySelector('#button2');
console.log(button)
button2.addEventListener("click", calculateAmount2);

function calculateAmount2(){
const hd = document.querySelector('#pill0').value;
const hd1 = document.querySelector('#pill1').value;
const hd2 = document.querySelector('#pill2').value;
const hd3 = document.querySelector('#pill3').value;

if(isNaN(hd, hd1, hd2, hd3)){
    Swal.fire({                                          
        title: 'Стоп',
        text: 'Пожалуйста, введите число',
      })
}

let amountPerPerson2 = +hd + +hd1 + +hd2 + +hd3;
console.log(amountPerPerson2)

document.querySelector('#bill5').value = amountPerPerson2; 
}



const btn = document.querySelector('#btn');
console.log(btn)

btn.addEventListener("click", calculate);

function calculate(){
const btn4 = document.querySelector('#bill4').value;
const btn5 = document.querySelector('#bill5').value;

let Person = btn4-btn5;
document.querySelector('#btn2').value = Person; 
console.log(Person)
}