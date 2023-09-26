// Task 1.
// Create two variables a = 7 and b = 9.
// Print the result of multiplying a by b in the console.

const a = 7;
const b = 9;
console.log(a * b);

// Task 2.
// Create two variables c = 7 and d = 9. 
// Print in .out-2 the result of dividing c by d.

const c = 7;
const d = 9;
document.querySelector('.out-2').textContent = c / d;

// Task 3.
// Create two variables e = 3 and f = 5.
// Print to the page in .out-3 the result of the addition of e + f.

const e = 3;
const f = 5;
document.querySelector('.out-3').textContent = e + f;


// Task 4.
// Create two variables e1 = '3' and f1 = 5.
// Print to the page in .out-4 the result of the addition of e1 + f1. Explain the difference.

const e1 = '3';
const f1 = 5;
document.querySelector('.out-4').textContent = e1 + f1;

// Task 5.
// set two variables e2 = 3 and f2 = 0.
// Print to the page in .out-5 the result of dividing e2 by f2.

const e2 = 3;
const f2 = 0;
document.querySelector('.out-5').textContent = e2 / f2;

// Task 6.
// Create two variables e3 = 3 and f3 = 'Hello'.
// Print to the page in .out-6 the result of adding two variables.

const e3 = 3;
const f3 = 'Hello';
document.querySelector('.out-6').textContent = e3 + f3;

// Task 7.
// Create two variables e4 = 3 and f4 = 'Hello'.
// Print to the page in .out-7 the result of multiplying two variables.

const e4 = 3;
const f4 = 'Hello';
document.querySelector('.out-7').textContent = e4 * f4;

// Task 8.
// By pressing the button .b-8, the function is executed,
// which outputs in div.out-8 what the user has entered in input.i-8.

function t8() {
    let data = document.querySelector('.i-8').value;
    document.querySelector('.out-8').textContent = data;
}
document.querySelector('.b-8').onclick = t8;

// Task 9.
// By clicking on the button .b-9, the function t9 is executed, which displays in div.out-9 what
// what the user entered in input.i-9. Add an input cleanup after the button is clicked.

function t9() {
    const input =  document.querySelector('.i-9')
    document.querySelector('.out-9').textContent = input.value;
    input.value = '';
}
document.querySelector('.b-9').onclick = t9;

// Task 10.
// By clicking on the button .b-10, the function t10 is executed, which displays in div.out-10 what
// what the user entered in input.i-10 times 20.

function t10() {
    let data = document.querySelector('.i-10').value;
    document.querySelector('.out-10').textContent = data * 20;
}
document.querySelector('.b-10').onclick = t10;

// Task 11.
// By pressing the button .b-11, the function t11 is executed, which displays the number in .out-11 on the page,
// which the user entered in i-11 and the number 55 added to it.
// In this task, we don't cast the number from input.

function t11() {
    let data = document.querySelector('.i-11').value;
    document.querySelector('.out-11').textContent = data + 55;
}
document.querySelector('.b-11').onclick = t11;

// Task 12.
// By pressing the button, the function t12 is executed.
// The function should receive data from input i.12-1 and i.12-2 (the user enters the last name and first name in them).
// Then output the string 'Hello firstname lastname' to .out-12, where firstname is the username and lastname is the lastname entered.
// I draw your attention - from now on we work strictly according to the task. Hello - with a capital letter.
// There is one space between Hello name (did you turn on the display of spaces?).
// You do not add "on your own" - commas, any other words and symbols.
// Similar rules apply further down the course.

function t12() {
    let i121 = document.querySelector('.i-12-1').value;
    let i122 = document.querySelector('.i-12-2').value;
    document.querySelector('.out-12').textContent ='Hello ' + i121 + ' ' + i122;
}
document.querySelector('.b-12').onclick = t12;

// Task 13.
// Pressing .b-13 executes t13.
// The function gets numbers from input.i-13-1 and .i-13-2 into variables a, b.
// After that, in .out-13 displays their sum. Convert a, b to numbers!!!!

function t13() {
    const a = +document.querySelector('.i-13-1').value;
    const b = +document.querySelector('.i-13-2').value;
    document.querySelector('.out-13').textContent = a + b;
}

document.querySelector('.b-13').onclick = t13;

// Task 14.
// When button .b-14 is pressed, function t14 is executed.
// It replaces value in input.i-14 with the string 'Go';

function t14() {
    document.querySelector('.i-14').value = 'Go';
}
document.querySelector('.b-14').onclick = t14;

// Task 15.
// When button .b-15 is pressed, function t15 is executed.
// It sets the .i-15 property style.border = "4px solid red";

function t15() {
    document.querySelector('.i-15').style.border = "4px solid red";
}
document.querySelector('.b-15').onclick = t15;

// Task 16.
// By pressing the button .b-16, the function t16 is executed.
// The function gets numbers from .i-16-1 and i-16-2.
// Output in .out-16 the sum of the given numbers on pressing the button b-16.
// Don't cast what you got from input to a number!!!!

function t16() {
    let x = document.querySelector('.i-16-1').value;
    let y = document.querySelector('.i-16-2').value;
    document.querySelector('.out-16').textContent = x + y;
}

document.querySelector('.b-16').onclick = t16;

// Task 17.
// By pressing the button .b-17, the function t17 is executed.
// The function gets a number from .i-17.
// Learn how the code works and remember the differences.
// Try to enter the numbers 5, 4zz, zz4, -200, 33.05

function t17() {
    let a = document.querySelector('.i-17').value;
    document.querySelector('.out-17-1').innerHTML = +a;
    document.querySelector('.out-17-2').innerHTML = parseInt(a, 10);
    document.querySelector('.out-17-3').innerHTML = Number(a);
}

document.querySelector('.b-17').onclick = t17;

// Task 18.
// By pressing the button .b-18, the function t18 is executed.
// The function gets a number from .i-18 into the variable a.
// Outputs the result of the parseFloat(a) operation to out-18.
// Try 5, 33.02, 33.9a, -20.01

function t18() {
    let a = +document.querySelector('.i-18').value;
    document.querySelector('.out-18').textContent = parseFloat(a);
}

document.querySelector('.b-18').onclick = t18;

// Task 19.
// When the .b-19 button is pressed, the t19 function should print the sum of the two negative numbers in out-19 from input .i-19-1 and .i-19-2. 

function t19() {
	let a = document.querySelector('.i-19-1').value;
	let b = document.querySelector('.i-19-2').value;
	document.querySelector('.out-19').innerHTML = +a + +b;
}

document.querySelector('.b-19').onclick = t19;

// Task 20
// When the button .b-20 is pressed, out-20 displays a number - how many times the button .b-20 was pressed;

let count = 0;

function t20() {
    count++;
   	document.querySelector('.out-20').innerHTML = count;
}

document.querySelector('.b-20').onclick = t20;