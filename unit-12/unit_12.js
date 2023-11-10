// Task 1
// When you press b-1, execute the f1 function. 
// The function should output the value 55 from array a1 to out-1. 
// Return this value.
// The first task is given as an example.

function f1() {
    let a1 = [12, [45, 87], [55, 13]];
    document.querySelector('.out-1').innerHTML = a1[2][0];
    return a1[2][0];
}

document.querySelector('.b-1').onclick = f1;


// Task 2
// When you press b-2, execute the f2 function.
// The function should output the value hi from array a2 to out-2.
// Return this value.


function f2() {
    let a2 = [[12, 'hi'], [45, 87], [55, 13]];
    document.querySelector('.out-2').innerHTML = a2[0][1];
    return a2[0][1];
}

document.querySelector('.b-2').onclick = f2;


// Task 3
// When you press b-3, execute the f3 function.
// The function should output the value my from array a3 to out-3.
// Return this value.


function f3() {
    let a3 = [[1, 2, 3], [3, 4, 5], [6, [7, 'my']]];
    document.querySelector('.out-3').innerHTML = a3[2][1][1];
    return a3[2][1][1];
}

document.querySelector('.b-3').onclick = f3;


// Task 4
// When you press b-4, execute the f4 function.
// The function should output the value of go from array a4 to out-4.
// Return this value.


function f4() {
    let a4 = [[1, 2, 3], 'go', [3, 4, 5], [6, [7, 'my']]];
    document.querySelector('.out-4').innerHTML = a4[1];
    return a4[1];
    // return
}

document.querySelector('.b-4').onclick = f4;

// Task 5
// When you press b-5, execute the f5 function.
// The function should output even values from array a5 to out-5.
// We use a loop to iterate.


function f5() {
    let out = '';
    let a5 = [[1, 2], [3, 4], [5, 6], [21, 34], [44, 56]];
    for (let i = 0; i < a5.length; i++) {
        if (a5[i][0] % 2 == 0) out += a5[i][0] + ' ';
        if (a5[i][1] % 2 == 0) out += a5[i][1] + ' ';
    }
    document.querySelector('.out-5').innerHTML = out;
}

document.querySelector('.b-5').onclick = f5;


// Task 6
// When you press b-6, execute the f6 function.
// The function should output odd values from array a6 to out-6.
// We use a loop to iterate. We do it in the same way as the previous task.

function f6() {
    let out = '';
    let a6 = [[1, 2], [3, 4], [5, 6], [21, 34], [44, 56]];
    for (let i = 0; i < a6.length; i++) {
        if (a6[i][0] % 2 !== 0) out += a6[i][0] + ' ';
        if (a6[i][1] % 2 !== 0) out += a6[i][1] + ' ';
    }
    document.querySelector('.out-6').innerHTML = out;
}

document.querySelector('.b-6').onclick = f6;

// Task 7
// When you press b-7, execute the f7 function.
// The function should output even values from array a7 to out-7.
// As you can see, nested arrays have different lengths, which means the previous option no longer works.
// Use a loop. The output is separated by a space.

function f7() {
    let out = '';
    let a7 = [
        [1, 2, 3, 9],
        [3, 4, 7],
        [5, 6, 8, 32],
        [21, 34, 43],
        [44, 56]
    ];
    for (let i = 0; i < a7.length; i++) {
        for (let k = 0; k < a7[i].length; k++) {
            if (a7[i][k] % 2 == 0) out += a7[i][k] + ' ';
        }
    }
    document.querySelector('.out-7').innerHTML = out;

}

document.querySelector('.b-7').onclick = f7;

// Task 8
// When you press b-8, execute the f8 function.
// The function should output odd values from array a8 to out-8.
// As you can see, nested arrays have different lengths, which means the previous option no longer works.
// Use a loop. The output is separated by a space.

function f8() {
    let out = '';
    let a8 = [
        [1, 2, 3, 9],
        [3, 4, 7],
        [5, 6, 8, 32],
        [21, 34, 43],
        [44, 56]
    ];

    for (let i = 0; i < a8.length; i++) {
        for (let k = 0; k < a8[i].length; k++) {
            if (a8[i][k] % 2 !== 0) {
                out += a8[i][k] + ' ';
            }
        }
    }
    document.querySelector('.out-8').innerHTML = out;
}

document.querySelector('.b-8').onclick = f8;

// Task 9
// When you press b-9, execute the f9 function.
// The function should output to out-9 the values from array a9 that are greater than zero.
// Use a loop. The output is separated by a space.

function f9() {
    let out = '';
    let a9 = [
        [-2, 7, -3],
        [3, 4, -7],
        [-5, 6, -8, 32],
        [21, -34, -43],
        [44, -56]
    ];

    for (let i = 0; i < a9.length; i++) {
        for (let k = 0; k < a9[i].length; k++) {
            if (a9[i][k] > 0) {
                out += a9[i][k] + ' ';
            }
        }
    }
    document.querySelector('.out-9').innerHTML = out;

}

document.querySelector('.b-9').onclick = f9;

// Task 10
// When you press b-10, execute the f10 function.
// The function should output to out-10 the values from the a10 array, which are a string.
// Use a loop. The output is separated by a space.

function f10() {
    let out = '';
    let a10 = [
        [-2, '7', -3],
        [3, 4, -7],
        [-5, 6, -8, 32, 'a'],
        ['st', 21, -34, -43],
        [44, -56, 'task']
    ];

    for (let i = 0; i < a10.length; i++) {
        for (let k = 0; k < a10[i].length; k++) {
            if (typeof (a10[i][k]) === "string") {
                out += a10[i][k] + ' ';
            }
        }
    }
    document.querySelector('.out-10').innerHTML = out;

}

document.querySelector('.b-10').onclick = f10;


// Task 11
// When you press b-11, execute the f11 function.
// The function should output the values from array a11 into out-11, with each nested array going in reverse order.
// Output separated by space. Those. you should get a string in out-10 like 6 5 4 8 7 13 12 11 10 9.
// Solve the problem in two loops, without reverse.

let a11 = [
    [4, 5, 6],
    [7, 8],
    [9, 10, 11, 12, 13]
];

function f11() {
    let out = '';
    for (let i = 0; i < a11.length; i++) {
        for (let k = a11[i].length - 1; k >= 0; k--) {
            out += a11[i][k] + ' ';
        }
    }
    document.querySelector('.out-11').innerHTML = out;
}

document.querySelector('.b-11').onclick = f11;

// Task 12
// Given an array a12 that models a chessboard.
// Using a loop, print out-12 the units from this array. All actions in function f12.
// The function runs when b12 is pressed. Output via space.

function f12() {
    let out = '';
    let a12 = [
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
    ];


    for (let i = 0; i < a12.length; i++) {
        let k = 0;
        if (i % 2 === 0) {
            k = 1;
        }
        for (; k < a12[i].length; k += 2) {
            out += a12[i][k] + ' ';
        }
    }
    document.querySelector('.out-12').innerHTML = out;
}

document.querySelector('.b-12').onclick = f12;

// Task 13
// When you press b-13, execute the f13 function.
// The function should assign variable a13 an array emulating a chessboard.
// Moreover, the array must be created using loops.
// To check, print the array to the console.

let a13 = [];

function f13() {
    a13.length = 8;
    for (let i = 0; i < a13.length; i++) {
        a13[i] = new Array(a13.length);
        for (let k = 0; k < a13[i].length; k++) {
            if ((i % 2 === 0 && k % 2 === 0) || (i % 2 !== 0 && k % 2 !== 0)) {
                a13[i][k] = 0;
            }
            else {
                a13[i][k] = 1;
            }
        }
    }

    console.log(a13);
}

document.querySelector('.b-13').onclick = f13;

// Task 14
// When you press b-14, execute the f14 function.
// The function should output in out-14 the lengths of arrays nested in a14. Through a space.
// that is, we expect 0 2 4 ...

let a14 = [
    [],
    [1, 0],
    [1, 0, 0, 0],
    [3, 4, 5, 6, 7, 8],
    [1, 2]
];

function f14() {
    let out = '';
    for (let i = 0; i < a14.length; i++) {
        out += a14[i].length + ' ';
    }

    document.querySelector('.out-14').innerHTML = out;

}

document.querySelector('.b-14').onclick = f14;

// Task 15
// When you press b-15, execute the f15 function.
// The function should output in out-15 the length of the largest nested array in a15.
// i.e. we expect 6

let a15 = [
    [],
    [1, 0],
    [1, 0, 0, 0],
    [3, 4, 5, 6, 7, 8],
    [1, 2]
];

function f15() {
    let out = a15[0].length;
    console.log(out);
    for (let i = 0; i < a15.length; i++) {
        if (a15[i].length > out) {
            out = a15[i].length;
        }
    }
    document.querySelector('.out-15').innerHTML = out;
}

document.querySelector('.b-15').onclick = f15;

// Task 16
// Input variable a16 into an array that matches all the conditions below (all console.logs should return true;
// The answer to this problem is written right away. That is, you simply write an array by hand so that the conditions are met.

let a16 = [
    [0, 7, 0, 6],
    0,
    0,
    8
];

console.group('Task 16 ================');
console.log(a16[3] == 8);
console.log(a16[0][1] == 7);
console.log(a16[0][3] == 6);

console.groupEnd();


// Task 17
// Input variable a17 into an array that matches all the conditions below (all console.logs should return true;
// That is, you simply write an array by hand so that the conditions are met.

let a17 = [
    [0, 0, 6],
    [0, 7],
    0,
    [0, 0, 8]
];

console.group('Task 17 ================');
console.log(a17[3][2] == 8);
console.log(a17[1][1] == 7);
console.log(a17[0][2] == 6);

console.groupEnd();

// Task 18
// Input variable a18 into an array that meets all the conditions below (all console.logs should return true;
// That is, you simply write an array by hand so that the conditions are met.

let a18 = [
    3,
    0,
    [0, 12],
    0,
    [8]
];

console.group('Task 18 ================');
console.log(a18[0] == 3);
console.log(a18[4][0] == 8);
console.log(a18[2][1] == 12);

console.groupEnd();

// Task 19
// Input variable a19 into an array that matches all the conditions below (all console.logs should return true;
// That is, you simply write an array by hand so that the conditions are met.

let a19 = [
    [[0, 3]],
    [[0, 0, 8]],
    [0, [12]]
];

console.group('Task 19 ================');
console.log(a19[0][0][1] == 3);
console.log(a19[1][0][2] == 8);
console.log(a19[2][1][0] == 12);

console.groupEnd();

// Task 20
// Input variable a20 into an array that matches all the conditions below (all console.logs should return true;
// That is, you simply write an array by hand so that the conditions are met.

let a20 = [
    0,
    [0, [0, 9]],
    [0, 0, 18],
    12
];

console.group('Task 20 ================');
console.log(a20[1][1][1] == 9);
console.log(a20[2][2] == 18);
console.log(a20[3] == 12);

console.groupEnd();