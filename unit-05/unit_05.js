//  Task 1
// Button .b-1 runs function t1. The function should output a line like this in .out-1:
// 1_2_3_4_5_6_7_8_9_10_11_12_13_14_15_16_
// Separator - underscore. The task is solved using a loop.

const out1 = document.querySelector('.out-1');

function t1() {
	let x = '';
	for (let i = 1; i <= 16; i++) {
		x += i + '_';
	}
	out1.textContent = x;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// Button .b-2 runs function t2. The function should output a line like this in .out-2:
// 12_14_16_18_20_22_24_26_28_30_32_34_36_38_
//The separator is underscore. The task is solved using a loop.

const out2 = document.querySelector('.out-2');

function t2() {
	let x = '';
	for (let i = 12; i <= 38; i+=2) {
		x += i + '_';
	}
	out2.textContent = x;
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// Button .b-3 runs function t3. The function should output a line like this in .out-3:
// 25_24_23_22_21_20_19_18_17_16_15_14_13_12_11_10_9_8_7_
// Separator - underscore. The task is solved using a loop.

const out3 = document.querySelector('.out-3');

function t3() {
	let x = '';
	for (let i = 25; i >= 7; i--) {
		x += i + '_';
	}
	out3.textContent = x;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// Button .b-4 runs function t4. The function should output a line like this in .out-4:
// 77_74_71_68_65_62_59_56_53_50_47_44_41_38_35_
// from 77 to 35 in increments of 3. The separator is an underscore. The task is solved using a loop.

const out4 = document.querySelector('.out-4');

function t4() {
	let x = '';
	for (let i = 77; i >= 35; i = i - 3) {
		x += i + '_';
	}
	out4.textContent = x;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// Button .b-5 runs function t5. The function should output a line like this in .out-5:
// 1_*2_**3_*4_**5_*6_**7_*8_**9_*10_**11_*12_**13_*14_**15_*16_**17_*
// from 1 to 17 in increments of 1. The separator is an underscore and an asterisk (if the number is odd, and two asterisks if it is even).
// The task is solved using a loop.

const out5 = document.querySelector('.out-5');

function t5() {
	let x = '';
	for (let i = 1; i <= 17; i++) {
		if(i % 2 == 0 ){
			x += i + '_**';
		} else {
			x += i + '_*';
		}
	}
	out5.textContent = x;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// Button .b-6 runs function t6. The function should output a line like this in .out-6:
//
// ******<br>
// ******<br>
// ******<br>
//
//The problem is solved using a loop. In each iteration the loop outputs 6 stars. Line break - br.
// The number of lines (iterations, repetitions) of the loop is entered by the user in i-6.
//

const out6 = document.querySelector('.out-6');
const i6 = document.querySelector('.i-6');

function t6() {
	let x = '';
	for (let i = 0; i < +i6.value; i++) {
		x += '******<br>';
	}
	out6.innerHTML = x;
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// There is input .i-7 where the user can enter a number greater than zero (we don’t do any checks, we take it as a fact).
// When the .b-7 button is pressed, the t7 function should be launched, which displays in .out-7 the numbers from the user entered to zero, inclusive.
// The separator is an underscore. If the user entered 4 and clicked the button, we would get:
// 4_3_2_1_0_
// The task is solved using a loop.

const out7 = document.querySelector('.out-7');

function t7() {	
	let i7 = +document.querySelector('.i-7').value;
	let x = '';

	for (let i = i7; i >= 0; i--){
		x += i + '_';
	}

	out7.innerHTML = x;
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// There are input .i-81 and .i-82 where the user can enter numbers greater than zero (we don’t do any checks, we take them as a fact).
// We assume that the second number is always greater than the first.
// By pressing the .b-8 button, the t8 function should be launched, which displays in .out-8 the numbers from the first entered to the second, inclusive, in increments of 1.
// Separator is underscore. If the user entered 4 and 8 and clicked the button, we would get:
// 4_5_6_7_8_
// The task is solved using a loop.

const out8 = document.querySelector('.out-8');

function t8() {
	let i81 = +document.querySelector('.i-81').value;
	let i82 = +document.querySelector('.i-82').value;
	let x = '';

	for (let i = i81; i <= i82; i++) {
		x += i + '_';
	}

	out8.innerHTML = x;
}

document.querySelector('.b-8').onclick = t8;


//Task 9
// There are input .i-91 and .i-92 where the user can enter numbers.
// By pressing the .b-9 button, the t9 function should be launched, which displays in .out-9 the numbers from the smallest entered to the largest, inclusive, in increments of 1.
// The separator is underscore. If the user entered 4 and 8 and clicked the button, we would get:
// 4_5_6_7_8_
// if I entered 8 and 6, we get
// 6_7_8_
// The task is solved using a loop. Hint - first we do the check, and then we start the loop.
// loop - one

const out9 = document.querySelector('.out-9');

function t9() {
	let i91 = +document.querySelector('.i-91').value;
	let i92 = +document.querySelector('.i-92').value;
	let x = '';
	let big;
	let small;

	if(i91 > i92) {
		big = i91;
		small = i92;
	} else {
		big = i92;
		small = i91;
	}

	for(let i = small; i <= big; i++){
		x += i + '_';
		console.log(x);
	}

	out9.innerHTML = x;
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// Button .b-10 runs function t10. The function should output in .out-10 even years from 1950 to 1970 inclusive.
// The separator is an underscore. The task is solved through a loop, and parity is solved through a step (equal to 2).

const yearStart = 1950;
const yearEnd = 1970;
const out10 = document.querySelector('.out-10');

function t10() {
	let x = '';
	for (let i = yearStart; i <= yearEnd; i+=2) {
		x += i + '_';
	}
	out10.textContent = x;
}

document.querySelector('.b-10').onclick = t10;

//  Task 11
// Button .b-11 runs function t11. The function should:
// get all div.div-11 into divs11 variable
// go through them using a loop. Calling a div looks like this: divs[i].innerHTML
// output the contents of each block to .out-11. The separator is an underscore.
// The result should look like this:
// one_3_4_two_

const out11 = document.querySelector('.out-11');

function t11() {
	const divs11 = document.querySelectorAll('.div-11');
	let x = '';

	for(let i = 0; i < divs11.length; i++) {
		x += divs11[i].innerHTML + '_';
	}

	out11.textContent = x;
}

document.querySelector('.b-11').onclick = t11;

//  Task 12
// The .b-12 button runs the t12 function. The function should:
// get all div.div-12
// go through them using a loop. Calling a div looks like this elem[i]
// apply to each elem[i].style.background = 'orange'


function t12() {
	const divs12 = document.querySelectorAll('.div-12');
	for(let i = 0; i < divs12.length; i++) {
		divs12[i].style.background = 'orange';
	}
}

document.querySelector('.b-12').onclick = t12;

//  Task 13
// Using a loop, set all input .i-13 values to 1 for the first, 2 for the second, and 3 for the third.

function t13() {
	const elems = document.querySelectorAll('.i-13');
	for(let i = 0; i < elems.length; i++) {
		elems[i].value = i + 1;
	}
}

document.querySelector('.b-13').onclick = t13;

//  Task 14
// Button .b-14 runs function t14 The function should:
// get all input.i-14
// go through them using a loop. Referring to an element looks like this: elem[i]
// output to .out-14 the value of the selected one. You can check whether an element is selected using elem[i].checked.

const out14 = document.querySelector('.out-14');

function t14() {
	const elems = document.querySelectorAll('.i-14');
	for(let i = 0; i < elems.length; i++) {
		if (elems[i].checked) {
			out14.innerHTML = elems[i].value;
			break;
		}		
	}
}

document.querySelector('.b-14').onclick = t14;

//  Task 15
// Button .b-15 runs function t15 The function should output the following sequence in .out-15:
// 10_0_9_1_8_2_7_3_6_4_5_5_4_6_3_7_2_8_1_9_0_10_
// Hint (10 - i) + '_' + i + '_'

const out15 = document.querySelector('.out-15');

function t15() {
	let x = '';
	for(let i = 0; i <= 10; i++) {
		x += (10 - i) + '_' + i + '_';
	}
	out15.textContent = x;
}

document.querySelector('.b-15').onclick = t15;
