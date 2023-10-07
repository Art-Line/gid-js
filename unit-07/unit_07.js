// Task 1
// Write a function t1 that, when the button is pressed, outputs the variable a1 to .out-1.

let a1 = 8;
function t1() {
    const out1 = document.querySelector('.out-1');
    out1.innerHTML = a1;
}
document.querySelector('.b-1').onclick = t1;


// Task 2.
// Let's change task 1. Now it only outputs a variable to a predefined block.
// Let's make the function more flexible.
// Now let the function t2 return the variable a2.
// Since the function returns a variable, the function name with brackets (function call) can be embedded in expressions.
// Notice how the function call changes now.

let a2 = 8;
function t2() {
    return a2;
}

document.querySelector('.b-2').onclick = function () {
    document.querySelector('.out-2').textContent = t2();
    console.log(5 + t2()); // тут выведет 13
    console.log(6 * t2()); // тут 48
    console.log(t2() * t2() * t2()); // 512
}

// Task 3.
// Our previous function is still highly dependent on external variables.
// Let's make it more universal. Let function t3 take 2 arguments and return their product.
// Add the function code so that it returns the product of two numbers passed to it as arguments a, b.
// Let's test the function on two examples, using the buttons .b-3-1 and .b-3-2.

function t3(a, b) {
    return a * b;
}

document.querySelector('.b-3-1').onclick = function () {
    document.querySelector('.out-3-1').textContent = t3(3, 4);
}
document.querySelector('.b-3-2').onclick = function () {
    document.querySelector('.out-3-2').textContent = t3(5, 6);
}

// Task 4
// Write a function t4 that takes your birth year and calculates (returns) your age.

function t4(year) {
    const currentYear = new Date().getFullYear();
    return currentYear - year;
}

document.querySelector('.b-4').onclick = function () {
    document.querySelector('.out-4').textContent = t4(1983);
}


// Task 5
// Write a function t5 that takes your name as a parameter and returns the number of characters in it,
// where name is the name accepted as a parameter. The length (number of characters) can be calculated using the .length property.

function t5(yourName) {
    return yourName.length;
}
document.querySelector('.b-5').onclick = function () {
    document.querySelector('.out-5').textContent = t5('Alex');
}

// Task 6
// Write a function t6 that takes 2 numbers and returns a random integer from the first to second accepted parameter.

function t6(a, b) {
    return Math.floor(Math.random() * (b - a) + a);
}
document.querySelector('.b-6').onclick = function () {
    document.querySelector('.out-6').textContent = t6(100, 107);
}

// Task 7
// Write a function t7 that returns a random color in the format rgb(x,y,z)(string).
// Where x, y, z are random numbers in the range[0, 255].

function t7() {
    return `rgb(${t6(0,255)}, ${t6(0,255)}, ${t6(0,255)}`;
}
document.querySelector('.b-7').onclick = function () {
    document.querySelector('.out-7').style.background = t7();
}

// Task 8
// Write a function t8 that takes a string as a parameter and returns the result with spaces stripped
// at the beginning and end of the line. That is, it takes _hello_ (where the _ sign symbolizes a space), and returns hello.
// To remove spaces, use trim.

function t8(str) {
    return str.trim();
}
document.querySelector('.b-8').onclick = function () {
    let s = "            Hello                ";
    console.log(s);
    console.log(t8(s));
}

// Task 9
// Write a function t9 that takes a number and returns true if the number is even and false if it is not.

function t9(num) {
    return num % 2 === 0 ? true : false;
}
document.querySelector('.b-9').onclick = function () {
    document.querySelector('.out-9').textContent = t9(15);
}

// Task 10
// Create a function t10 that takes 2 numbers and returns the larger one. In case of equality - first.

function t10(x, y) {
    return x >= y ? x : y;
}
document.querySelector('.b-10').onclick = function () {
    document.querySelector('.out-10').textContent = t10(3, 9);
}
