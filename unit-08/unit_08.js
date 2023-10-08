//  Task 1
// Button b-1 starts function t1. The function should output a line like this in .out-1
// 1_2_3_4_5_6_7_8_9_ ... 49_50_
// from 1 to 50 inclusive. The separator is underscore. The task is solved using a loop.


function t1() {
    const out = document.querySelector('.out-1');
    let i = 1;
    let result = '';
    while(i <= 50) {
        result += i + '_';
        i++;
    }
    out.innerHTML = result;
}

document.querySelector('.b-1').onclick = t1;

// Task 2
// Button b-2 starts function t2.
// The function should output a line like this in .out-2 (you output all numbers in increments of 2 without skipping.
// 2_4_6_ ... 44_46_
// from 2 to 46 in increments of 2. The separator is an underscore. The task is solved using a while loop.

function t2() {
    const out = document.querySelector('.out-2');
    let i = 2;
    let result = '';
    while(i <= 46) {
        result += `${i}_`;
        i += 2;
    }
    out.innerHTML = result;
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// Button .b-3 runs function t3. The function should output a line like this in .out-3:
// 25_24_23_22_21_20_19_18_17_16_15_14_13_12_11_10_9_8_7_
// from 25 to 7 in increments of 1. The separator is an underscore. The task is solved using a while loop.

function t3() {
    const out = document.querySelector('.out-3');
    let i = 25;
    let result = '';
    while(i >= 7) {
        result += `${i}_`;
        i--;
    }
    out.innerHTML = result;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// Button b-4 starts function t4. The function should output a line like this in .out-4:
// 77_74_71_68_65_62_59_56_53_50_47_44_41_38_35_
// from 77 to 35 in increments of 3. The separator is an underscore. The task is solved using a while loop.


function t4() {
    const out = document.querySelector('.out-4');
    let i = 77;
    let result = '';
    while(i >= 35) {
        result += `${i}_`;
        i -= 3;
    }
    out.innerHTML = result;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// Button .b-5 runs function t5. The function should output a line like this in .out-5:
// 1_*2_**3_*4_**5_*6_**7_*8_**9_*10_**11_*12_**13_*14_**15_*16_**17_*
// from 1 to 17 in increments of 1. The separator is an underscore and one asterisk if the number is odd, and two asterisks if it is even.
// The task is solved using a while loop.

function t5() {
    const out = document.querySelector('.out-5');
    let i = 1;
    let result = '';
    while(i <= 17) {
        result += `${i}_*`;
        if (i % 2 === 0) {
            result += '*';
        }
        i++;
    }
    out.innerHTML = result;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// Button .b-6 runs function t6. The function should output a line like this in .out-6:
// ******
// ******
// ******
// The task is solved using a loop. In each iteration, the loop outputs 6 asterisks without spaces and the line break character br.
// The number of lines (iterations, repetitions) of the while loop is entered by the user in .i-6.

function t6() {
    const out = document.querySelector('.out-6');
    const count = +document.querySelector('.i-6').value;
    let i = 0;
    let result = '';
    while(i < count) {
        result += '*****<br>';
        i++;
    }
    out.innerHTML = result;
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// There is input .i-7 where the user can enter a number greater than zero (we don’t do any checks, we take it as a fact).
// When the .b-7 button is pressed, the f7 function should be launched, which displays in .out-7 the numbers from the user entered, inclusive, to zero, inclusive.
// The separator is an underscore. If the user entered 4 and clicked the button, we would get:
// 4_3_2_1_0_
// The task is solved using a while loop.

function t7() {
    const out = document.querySelector('.out-7');
    let i = +document.querySelector('.i-7').value;
    let result = '';
    while(i >= 0) {
        result += `${i}_`;
        i--;
    }
    out.innerHTML = result;
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// There are input .i-81 and .i-82 where the user can enter numbers greater than zero (we don’t do any checks, we take them as a fact).
// We assume that the second number is always greater than the first.
// By pressing the .b-8 button, the f8 function should be launched, which displays in .out-8 the numbers from the first entered, inclusive, to the second, inclusive, in increments of 1.
// The separator is an underscore. If the user entered 4 and 8 and clicked the button, we would get:
// 4_5_6_7_8_
// The task is solved using a while loop.

function t8() {
    const out = document.querySelector('.out-8');
    let i81 = +document.querySelector('.i-81').value;
    let i82 = +document.querySelector('.i-82').value;
    let i = i81;
    let result = '';
    while (i <= i82) {
        result += `${i}_`;
        i++
    }
    out.innerHTML = result;
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// There are input .i-91 and .i-92 where the user can enter numbers.
// By pressing the .b-9 button, the f9 function should be launched, which displays in .out-9 the numbers from the smallest entered to the largest, inclusive, in increments of 1.
// The separator is an underscore. If the user entered 4 and 8 and clicked the button, we would get:
// 4_5_6_7_8_
// if I entered 8 and 6, we get
// 6_7_8_
// The task is solved using a loop. Hint - first we check and, if necessary, swap the values in the variables,
// and then start the while loop.

function t9() {
    const out = document.querySelector('.out-9');
    let i91 = +document.querySelector('.i-91').value;
    let i92 = +document.querySelector('.i-92').value;
    let x = '';
    let min = i91;
    let max = i92;

    if (min > max) {
        min = i92;
        max = i91;
    }
    while (min <= max) {
        x += `${min}_`;
        min++;
    }
    out.innerHTML = x;
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// Button .b-10 runs function t10. The function should output in .out-10 even years from 1950 to 1966 inclusive.
// The separator is an underscore. The task is solved through a loop, and parity is solved through a step (equal to 2).

function t10() {
    const out = document.querySelector('.out-10');
    let x = '';
    let i = 1950;
    while (i <= 1966) {
        x += `${i}_`;
        i += 2;
    }
    out.innerHTML = x;
}

document.querySelector('.b-10').onclick = t10;

//  Task 11
// Button b-11 starts function t11.
// The function should:
// get all div.div-11
// iterate through them using a while loop. Calling a div looks like this: your_variable[i]
// output the contents of each block to .out-11. The separator is an underscore.
// The result should look like this:
// one_3_4_two_


function t11() {
    const out = document.querySelector('.out-11');
    const data = document.querySelectorAll('.div-11');
    let result = '';
    let i = 0;
    while(i < data.length) {
        result += data[i].textContent + '_';
        i++;
    }
    out.innerHTML = result;
}

document.querySelector('.b-11').onclick = t11;

//  Task 12
// The .b-12 button runs the t12 function. The function should:
// get all div.div-12
// iterate through them using a while loop. Calling a div looks like this elem[i]
// apply to each elem[i].style.background = 'orange'


function t12() {
    let elems = document.querySelectorAll('.div-12');
    let i = 0;
    while (i < elems.length) {
        elems[i].style.background = 'orange';
        i++;
    }
}

document.querySelector('.b-12').onclick = t12;

//  Task 13
// Button .b-13 runs function t13. The function should:
// get all input.i-13
// iterate through them using a while loop. Referring to an element looks like this: elem[i]
// apply to each elem[i].value, and the value of the first should be 1, the second - 2, the third - 3...

function t13() {
    let elems = document.querySelectorAll('.i-13');
    let i = 0;
    while (i < elems.length) {
        elems[i].value = i + 1;
        i++;
    }
}

document.querySelector('.b-13').onclick = t13;

//  Task 14
// Button .b-14 runs function t14 The function should:
// get all input.i-14
// iterate through them using a while loop. Referring to an element looks like this: elem[i]
// output to .out-14 the value of the selected one. You can check whether an element is selected using elem[i].checked.


function t14() {
    const out = document.querySelector('.out-14');
    let elems = document.querySelectorAll('.i-14');
    let i = 0;
    while (i < elems.length) {
        if (elems[i].checked) {
            out.textContent = elems[i].value;
            break;
        }
        i++;
    }
}

document.querySelector('.b-14').onclick = t14;

//  Task 15
// Button .b-15 runs function t15 The function should output the following sequence in .out-15:
// 77_88_99_77_88_99_77_88_99_
// Use a while loop for output. The delimiter is underscore.

function t15() {
    const out = document.querySelector('.out-15');
    let x = '';
    let i = 77;
    let count = 0;
    while (count < 9) {
        if (i > 100) {
            i = 77;
        }
        x += `${i}_`;
        i += 11;
        count++;
    }
    out.innerHTML = x;
}

document.querySelector('.b-15').onclick = t15;
