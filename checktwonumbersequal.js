let num1 = 10.5 
let num2 = 10.3
let epsilon = 0.5

checkapprox =(num1 , num2, epsilon) => {
    return Math.abs(num1 - num2) < epsilon;

}

console.log(checkapprox(10.5 , 10.3 , 0.5));
console.log(checkapprox(10.9 , 10.3, 0.5));



