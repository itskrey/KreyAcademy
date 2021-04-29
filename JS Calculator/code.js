function takeValue(x) {
    console.log("Hhoifsd")
    console.log(x)
	document.getElementById('Result').innerHTML += x;
}

function clearInput() {
	document.getElementById('Result').innerHTML = "";
}

function calculateResult() {
	var result = eval(document.getElementById('Result').innerHTML);
	document.getElementById('Result').innerHTML = result;
}


var cero = document.getElementById('cero');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');

var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var divide = document.getElementById('divide');
var multiply = document.getElementById('multiply');
var equal = document.getElementById('equal');
var deleteN = document.getElementById('Delete');





one.addEventListener("click", function(){
    takeValue(1);
})
two.addEventListener("click", function(){
    takeValue(2);
})
three.addEventListener("click", function(){
    takeValue(3);
})
four.addEventListener("click", function(){
    takeValue(4);
})
five.addEventListener("click", function(){
    takeValue(5);
})
six.addEventListener("click", function(){
    takeValue(6);
})
seven.addEventListener("click", function(){
    takeValue(7);
})
eight.addEventListener("click", function(){
    takeValue(8);
})
nine.addEventListener("click", function(){
    takeValue(9);
})
plus.addEventListener("click", function(){
    takeValue("+");
})
minus.addEventListener("click", function(){
    takeValue("-");
})
multiply.addEventListener("click", function(){
    takeValue("*");
})
divide.addEventListener("click", function(){
    takeValue("/");
})


equal.addEventListener("click", function(){
    calculateResult();
})

deleteN.addEventListener("click", function(){
    clearInput()
})