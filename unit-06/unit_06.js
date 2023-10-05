//Task 1
// Using nested loops, draw the line:
// <pre>
// ***_***_***_
// </pre>
// where the asterisk is drawn using the inner loop from 0 to 3, and _ is drawn using the outer one.

const out1 = document.querySelector('.out-1');
function t1() {
    let str = '';
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            str += '*';
        }
        str += '_';
    }
    out1.innerHTML = str;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// Using nested loops, draw the line:
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// Solve the task using nested loops.
// The outer loop prints the digit and line break br, the inner loop prints *_, and then the outer loop prints the line break.

const out2 = document.querySelector('.out-2');
function t2() {
    let str = '';
    for (let i = 1; i <= 3; i++) {
        str += i + '<br>'
        for (let j = 0; j < 3; j++) {
            str += '*_';
        }
        str += '<br>';
    }
    out2.innerHTML = str;
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// Using nested loops, draw the line:
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// Solve the task using nested loops.
// The inner loop prints *_, the outer loop prints line breaks br.

const out3 = document.querySelector('.out-3');
function t3() {
    let str = '';
    for (let i = 0; i <= 3; i++) {
        for (let j = 0; j < 3; j++) {
            str += '*_';
        }
        str += '<br>';
    }
    out3.innerHTML = str;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// Using nested loops, draw the line:
// 1_1*2*3*4*5*2_1*2*3*4*5*3_1*2*3*4*5*
// The outer loop prints the number and _, and the inner loop prints 1 to 5 s *

const out4 = document.querySelector('.out-4');
function t4() {
    let str = '';
    for (let i = 1; i <= 3; i++) {
        str += i + '_';
        for (let j = 1; j <= 5; j++) {
            str += j + '*';
        }
    }
    out4.innerHTML = str;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// Using nested loops, draw the line:

// 101010
// 101010
// 101010

// The nested loop, depending on whether k (the loop counter) is even or not, draws either 0 or 1.
// Outer loop - br.

const out5 = document.querySelector('.out-5');
function t5() {
    let str = '';
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j <= 5; j++) {
            if (j % 2 === 0) {
                str += '1';
            } else {
                str += '0';
            }
        }
        str += '<br> ';
    }
    out5.innerHTML = str;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// Using nested loops, draw the line:

// 10x01x
// 10x01x
// 10x01x

const out6 = document.querySelector('.out-6');

function t6() {
    let str = '';
    for (let i = 0; i < 3; i++) {
        for (let j = 1; j <= 6; j++) {
            if (j % 3 === 0) {
                str += 'x';
            } else if (j % 3 !== 0 && j % 2 === 0) {
                str += '0';
            } else {
                str += '1';
            }
        }
        str += '<br> ';
    }
    out6.innerHTML = str;
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// Using nested loops, draw the line:

// *
// **
// ***
// ****

const out7 = document.querySelector('.out-7');
function t7() {
    let str = '';
    for (let i = 1; i <= 4; i++) {
        for (let j = 0; j < i; j++) {
            str += '*';
        }
        str += '<br>';
    }
    out7.innerHTML = str;
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// Using nested loops, draw the line:

// *****
// ****
// ***
// **
// *

const out8 = document.querySelector('.out-8');
function t8() {
    let str = '';
    for (let i = 5; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            str += '*';
        }
        str += '<br>';
    }
    out8.innerHTML = str;
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// Using nested loops, draw the line:

// 1_
// 1_2_
// 1_2_3_
// 1_2_3_4_
// 1_2_3_4_5_

const out9 = document.querySelector('.out-9');
function t9() {
    let str = '';
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= i; j++) {
            str += j + '_';
        }
        str += '<br>';
    }
    out9.innerHTML = str;
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// Using nested loops, draw the line:

//01_02_03_04_05_06_07_08_09_10_
//11_12_13_14_15_16_17_18_19_20_
//21_22_23_24_25_26_27_28_29_30_
//31_32_33_34_35_36_37_38_39_40_
//41_42_43_44_45_46_47_48_49_50_

const out10 = document.querySelector('.out-10');
function t10() {
    let str = '';
    for (let i = 0; i <= 4; i++) {
        for (let j = 1; j <= 10; j++) {
            if (i === 0 && j < 10) {
                str += '0';
            }
            str += 10 * i + j + '_';
        }
        str += '<br>';
    }
    out10.innerHTML = str;
}

document.querySelector('.b-10').onclick = t10;