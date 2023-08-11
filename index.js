function RectangularErea(length, width) {
    return length * width;
}

function checkEvenNumber(number) {
   var evenNumber = number % 2 == 0 ? console.log("even number") : console.log("odd number");
}

function forLoop() {
    for (let index = 1; index <= 10; index++) {
         console.log(index);
    
    }
}

function whileLoop() {
    var index = 10;
    while (index > 0) {
        console.log(index);
        index--;
       
    }
}

function dowhileLoop() {
    var index = 10;
    do {
        console.log(index);
        index--;
    } while (index > 0);
}

function Sum() {
    var number = prompt("Enter your number: ");
    if (number <= 0) {
        return;
    }
    var sum = 0;
    for (let index = 1; index <= number; index++) {
        sum += index;      
    }
    alert(sum);
}

console.log("Area: ",RectangularErea(2,3));
console.log(checkEvenNumber(5));
console.log("For:",forLoop());
console.log("While: ",whileLoop());
console.log("doWhile: ",dowhileLoop());
console.log(Sum());


