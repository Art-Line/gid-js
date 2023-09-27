// Task 1
// Pressing the .b-1 button fires the f1 function.
// The function should read the contents of .i-1 and compare it with the number 4 (comparison ==).
// Output the result of the comparison - true or false in .out-1.

function f1() {
   let i1 = +document.querySelector('.i-1').value;
   document.querySelector('.out-1').textContent = i1 == 4;
}
document.querySelector('.b-1').onclick = f1;


// Task 2
// Given two variables a21 and a22.
// When the .b-2 button is pressed, function f2 is run.
// The function should compare variables with if else and print the number that is greater in .out-2.
// The option of equality of variables is not considered.

let a21 = 45;
let a22 = 32;
const out2 = document.querySelector('.out-2');
function f2() {
   if (a21 > a22) {
      out2.textContent = a21;
   } else {
      out2.textContent = a22;
   }
}
document.querySelector('.b-2').onclick = f2;


// Task 3
// Given 2 inputs - .i-31 and .i-32, both input[type=number]. Pressing the .b-3 button triggers the f3 function.
// The function should compare the numbers from input, print the larger number in .out-3.
// Do a self-test of the work, enter the pairs of numbers 4 and 9, 9 and 22, 5 and 111.

const out3 = document.querySelector('.out-3');
function f3() {
   let i31 = +document.querySelector('.i-31').value;
   let i32 = +document.querySelector('.i-32').value;
   if (i31 > i32) {
      out3.textContent = i31;
   } else {
      out3.textContent = i32;
   }
}
document.querySelector('.b-3').onclick = f3;


// Task 4. 
// The user enters in .i-4 their year of birth.
// There is a .b-4 button that triggers the f4 function.
// The function should output the number 1 in .out-4 if the user is 18 or older, and 0 if it's less than.

const out4 = document.querySelector('.out-4');
function f4() {
   let userYear = +document.querySelector('.i-4').value;
   const CURRENT_YEAR = 2023;
   let age = CURRENT_YEAR - userYear;
   if (age >= 18) {
      out4.textContent = 1;
   } else {
      out4.textContent = 0;
   }
}
document.querySelector('.b-4').onclick = f4;

// Task 5. 
// The page has an input with class i-5 where the user can enter a number.
// There is a b-5 button that runs the f5 function.
// The function should output the character 'm' in .out-5 if the number is less than zero, 0 if the number is zero, and the number 1 if greater.

const out5 = document.querySelector('.out-5');
function f5() {
   let x = +document.querySelector('.i-5').value;
   if (x < 0) {
      out5.textContent = 'm';
   } else if (x == 0) {
      out5.textContent = 0;
   } else {
      out5.textContent = 1;
   }
}
document.querySelector('.b-5').onclick = f5;


// Task 6.
// The page has an input with class i-6 where the user can enter a number.
// There is a .b-6 button that triggers the f6 function.
// The function should output the word even if the number is even and odd if the number is odd in .out-6.
// Parity check uses the integer remainder of division by 2 (% operator).
// If the remainder is zero - even, no - odd.

const out6 = document.querySelector('.out-6');
function f6() {
   let i6 = +document.querySelector('.i-6').value;
   if (i6 % 2 === 0) {
      out6.textContent = 'even';
   } else {
      out6.textContent = 'odd';
   }
}
document.querySelector('.b-6').onclick = f6;

// Task 7.
// Given 2 inputs - .i-71 and .i-72, both input[type=number].
// Pressing the .b-7 button triggers the f7 function.
// The function should raise the number from .i-71 to the power of .i-72, output the result to .out-7.
// For exponentiation, you can use **, or Math.pow.

const out7 = document.querySelector('.out-7');
function f7() {
   let i71 = +document.querySelector('.i-71').value;
   let i72 = +document.querySelector('.i-72').value;
   out7.textContent = i71 ** i72;
}
document.querySelector('.b-7').onclick = f7;

// Task 8.
// Given a select s-8 that contains 3 values: 1, 2, 3.
// Given button b-8. When pressed, the f8 function is triggered.
// The function should get the number selected in select, then use switch case to compare it in turn with 1, 2, 3.
// And if the number selected is 1, then output the string one, if 2 - two, if 3 - three, into .out-8.
// I remind you - this is programming. As indicated in the task - and we deduce. Those. Three with a capital letter is a mistake!!!

const out8 = document.querySelector('.out-8');
function f8() {
   let s8 = +document.querySelector('.s-8').value;
   switch (s8) {
      case 1:
         out8.textContent = 'one';
         break;
      case 2:
         out8.textContent = 'two';
         break;
      case 3:
         out8.textContent = 'three';
         break;
   }
}
document.querySelector('.b-8').onclick = f8;

// Task 9
// There is an input with class .i-9 where the user can enter the apartment number.
// There is a .b-9 button that triggers the f9 function.
// The function should display in .out-9 the number of the entrance where the apartment is located.
// if from 1 inclusive to 32 inclusive - then print the number 1
// if from 33 (inclusive) to 43 (inclusive) - then output 2
// if from 44 (inclusive) to 64 (inclusive) - then 3.
// Otherwise, output 0.

const out9 = document.querySelector('.out-9');
function f9() {
   let flatNumber = +document.querySelector('.i-9').value;
   if (flatNumber >= 1 && flatNumber <= 32) {
      out9.textContent = 1;
   } else if (flatNumber >= 33 && flatNumber <= 43) {
      out9.textContent = 2;
   } else if (flatNumber >= 44 && flatNumber <= 64) {
      out9.textContent = 3;
   } else {
      out9.textContent = 0;
   }
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// Given select .s-100. On button click, output the value of the selected option to .out-10.

const out10 = document.querySelector('.out-10');
function f10() {
   let s100 = document.querySelector('.s-100').value;
   out10.textContent = s100;

}

document.querySelector('.b-10').onclick = f10;

// Task 11
// Given select .s-110. When the state of the select changes (the onchange event), output the value of the selected option to .out-11.

const out11 = document.querySelector('.out-11');
function f11() {
   let s110 = document.querySelector('.s-110').value;
   out11.textContent = s110;
}

document.querySelector('.s-110').onchange = f11;

// Task 12
// Given input .i-120.
// On button click, get the value from input into a variable,
// and then output to .out-12 typeof of the resulting variable.
// Typeof allows you to define the data type.
// Please note that this problem has already been solved, you need to remove the comments and study the work.

let i120 = document.querySelector('.i-120');
function f12() {
   let v = i120.value;
   document.querySelector('.out-12').innerHTML = (typeof v);
}
document.querySelector('.b-12').onclick = f12;

// Task 13
// Given input i-130. Unlike the previous task - input type number.
// On button click, get the value from input into a variable, and then output to out-13 typeof of the resulting variable.
// Typeof allows you to define the data type.
// If you did everything right - it's amazing, but the data type will be string! Think why so?

let i130 = document.querySelector('.i-130');
function f13() {
   let v = i130.value;
   document.querySelector('.out-13').innerHTML = (typeof v);
}
document.querySelector('.b-13').onclick = f13;


// Task 14
// Given input .i-141 and .i-142, type=number.
// Given a select .s-143 that contains four operations - +, -, *, / .
// Given a button b-14, when pressed, the function f14 is triggered.
// The function displays in .out-14 the result of operations selected in the 3rd select to the numbers entered in the first and second input.
// For example, 1 13 + is selected, you need to display the result of the operation 1+13 i.e. 14.

const i141 = document.querySelector('.i-141');
const i142 = document.querySelector('.i-142');
const s143 = document.querySelector('.s-143');
const out14 = document.querySelector('.out-14');

function f14() {
	let a = +i141.value;
	let b = +i142.value;
	let x = s143.value;
	switch (x) {
		case '+':
			out14.textContent = a + b;
			break;
		case '-':
			out14.textContent = a - b;
			break;
		case '*':
			out14.textContent = a * b;
			break;
		case '/':
			out14.textContent = a / b;
			break;
	}
}

document.querySelector('.b-14').onclick = f14;


// Task 15
// Given select .s-151 and .s-152, each containing 1's and 0's.
// Given select .s-153, which contains two operations - && and || .
// Given a button .b-15, when pressed, the function f15 is triggered.
// The function prints in .out-15 the result of the logical operations selected in 3 selects to the numbers selected in the first and second selects.
// For example, 1 1 && is selected, you need to display the result of the operation 1&&1 i.e. 1 or 0.

const s151 = document.querySelector('.s-151');
const s152 = document.querySelector('.s-152');
const s153 = document.querySelector('.s-153');
const out15 = document.querySelector('.out-15');

function f15() {
	let a = +s151.value;
	let b = +s152.value;
	let x = s153.value;
	switch (x) {
		case '&&':
			out15.textContent = a && b;
			break;
		case '||':
			out15.textContent = a || b;
			break;
	}
}

document.querySelector('.b-15').onclick = f15;



