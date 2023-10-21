// Task 1
// Create an array ar1 containing strings, numbers, booleans. Output it to .out-1.
// Output - by pressing button b-1

let ar1 = [1, 'srt', true, 2, 'text', false];

function f1() {
    const out = document.querySelector('.out-1');
    out.innerHTML = ar1;
}

document.querySelector('.b-1').onclick = f1;

// Task 2
//Create an array ar2 containing strings, numbers, booleans. Output it to div.out-2.
// Use output template from code in JS. Output - by pressing button b-2

let ar2 = [10, 'srt', true, 20, 'text', false];

function f2() {
    let out = '';
    for (let i = 0; i < ar2.length; i++) {
        out += ar2[i] + ' ';
    }
    document.querySelector('.out-2').innerHTML = out;
}

document.querySelector('.b-2').onclick = f2;

// Task 3
//Create an ar3 array, fill it with any values. Print the length of the array.
// Output - by pressing button b-3
// Output to out-3
// Test valid array [1,2,3] output - 3

let ar3 = [10, 'srt', true, 20, 'text', false];

function f3() {
    document.querySelector('.out-3').innerHTML = ar3.length;
}

document.querySelector('.b-3').onclick = f3;

// Task 4
//Create an array ar4. Print the zero, third, eighth element of the array in out-4 separated by a space.
// Output - by pressing button b-4
// Output to out-4
// Test valid array [1,2,3,4,5,6,7,8,9,10] output: 1 4 9

let ar4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function f4() {
    let x = '';
    for (let i = 0; i < ar4.length; i++) {
        if (i === 0 || i === 3 || i === 8) {
            x += ar4[i] + ' ';
        }
    }
    document.querySelector('.out-4').innerHTML = x;
}

document.querySelector('.b-4').onclick = f4;

// Task 5
//Create an ar5 array whose length is greater than 5.
// Print the sum of the zero, second and third elements of the array (zero, second - and third are indices 0, 2, 3)
// Output - by pressing button b-5
// Output to out-5
// Test valid array [1,2,3,4,5,6,7,8,9,10] output: 8

let ar5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function f5() {
    let x = 0;
    for (let i = 0; i < ar5.length; i++) {
        if (i === 0 || i === 2 || i === 3) {
            x += ar5[i];
        }
    }
    document.querySelector('.out-5').innerHTML = x;
}

document.querySelector('.b-5').onclick = f5;

// Task 6
//Create an ar6 array that contains your name, zodiac sign, birthday and month of birth.
// Output the array to the page in div-6. Separator - space.
// Output - by pressing button b-6
// Output to out-6

let ar6 = ['Sergey', 'crayfish', 1, 7];

function f6() {
    let x = '';
    for (let i = 0; i < ar6.length; i++) {
        x += ar6[i] + ' ';
    }
    document.querySelector('.out-6').innerHTML = x;
}

document.querySelector('.b-6').onclick = f6;

// Task 7
// Add the values 'vietnam' with index 7, 'turkey' with index 6, 'italy' with index 5 to the ar7 array. Add elements in f7.
// Output the array to the page in .out-7. Separator - space. Draw your attention! This is programming. Therefore - no capital letters and the like!!!!
// Output - by pressing button b-7
// Output to out-7

let ar7 = ['china', 'india', 'brazil', 'japan', 'egypt'];

function f7() {
    ar7[7] = 'vietnam';
    ar7[6] = 'turkey';
    ar7[5] = 'italy';
    let x = '';
    for (let i = 0; i < ar7.length; i++) {
        x += ar7[i] + ' ';
    }
    document.querySelector('.out-7').innerHTML = x;
}

document.querySelector('.b-7').onclick = f7;

// Task 8
// Add to the ar8 array the third (index 3) element equal to 3.14, 4 (index 4) element equal to 17, 6th element (index 6) equal to 5.
// Output the array to .out-8. The separator is a hyphen. In .out-8-1 print the length of the ar8 array.
// Output - by pressing button b-8
// Output to out-8

let ar8 = [];

function f8() {
    ar8[3] = 3.14;
    ar8[4] = 17;
    ar8[6] = 5;
    let x = '';
    for (let i = 0; i < ar8.length; i++) {
        x += ar8[i] + '-';
    }
    document.querySelector('.out-8').innerHTML = x;
    document.querySelector('.out-8-1').innerHTML = ar8.length;
}

document.querySelector('.b-8').onclick = f8;

// Task 9
// Print the last element of the ar9 array. Output of the last element - implement by index.
// To calculate the index of the last element - use the length of the array.
// Output - by pressing button b-9
// Output to out-9

let ar9 = [100, 200, 300, 400, 700, 121];

function f9() {
    document.querySelector('.out-9').innerHTML = ar9[ar9.length - 1];
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// Output the sum of the first (index 1) and last ar10 array into an out-10 block.
// Do not specify the index of the last element of the array directly, but calculate it through the length of the array.
// Output - by pressing button b-10
// Output to out-10

let ar10 = [100, 200, 300, 400, 700, 121];

function f10() {
    document.querySelector('.out-10').innerHTML = ar10[1] + ar10[ar10.length - 1];
}

document.querySelector('.b-10').onclick = f10;


// Task 11
// Write a function that swaps the second (index 2) and fourth (index 4) element of the ar11 array and outputs it to out-11.
// Separator is space.
// Output - by pressing button b-11
// Output to out-11

let ar11 = [2, 3, 4, 5, 6, 7];

function f11() {
    let memory = ar11[2];
    ar11[2] = ar11[4];
    ar11[4] = memory;
    let x = '';
    for (let i = 0; i < ar11.length; i++) {
        x += ar11[i] + ' ';
    }
    document.querySelector('.out-11').innerHTML = x;
}

document.querySelector('.b-11').onclick = f11;


// Task 12
// Write a function f12 that swaps the zero and last element of the ar12 array and outputs it to out-12. Separator - space.
// Calculate the last element using the length of the array.
// Output - by pressing button b-12
// Output to out-12

let ar12 = ['test', 'west', 'list', 'class', 'best'];

function f12() {
    let memory = ar12[0];
    ar12[0] = ar12[ar12.length - 1];
    ar12[ar12.length - 1] = memory;
    let x = '';
    for (let i = 0; i < ar12.length; i++) {
        x += ar12[i] + ' ';
    }
    document.querySelector('.out-12').innerHTML = x;
}

document.querySelector('.b-12').onclick = f12;

// Task 13
// Output the array ar13 in out-13 in the format index space value space.
// Output - by pressing button b-13
// Output to out-13
// Test valid array [1,2,3] output:
// 0 1 1 2 2 3


let ar13 = ['test', 'west', 'list', 'class', 'best'];

function f13() {
    let x = '';
    for (let i = 0; i < ar13.length; i++) {
        x += i + ' ' + ar13[i] + ' ';
    }
    document.querySelector('.out-13').innerHTML = x;
}

document.querySelector('.b-13').onclick = f13;


// Task 14
// Using a loop, print the ar14 array in reverse order. Separator - space.
// Output - by pressing button b-14
// Output to out-14

let ar14 = [1, 2, 3, 'hello', 66];

function f14() {
    let x = '';
    for (let i = ar14.length - 1; i >= 0; i--) {
        x += ar14[i] + ' ';
    }
    document.querySelector('.out-14').innerHTML = x;

}

document.querySelector('.b-14').onclick = f14;

// Task 15
// Using a loop, display on the page the elements of the ar15 array that are greater than zero. Separator - space.
// Output - by pressing button b-15
// Output to out-15

let ar15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];

function f15() {
    let x = '';
    for (let i = 0; i < ar15.length; i++) {
        if (ar15[i] > 0) {
            x += ar15[i] + ' ';
        }
    }
    document.querySelector('.out-15').innerHTML = x;
}

document.querySelector('.b-15').onclick = f15;

// Task 16
// Loop through array arr16. Add even elements to the ar16_even array, odd elements to ar16_odd.
// Adding to the array is by index, not +=!!!!!.
// Test the task to run again!
// Output ar16_odd to div.out-16-odd and ar16_even to div.out-16-even. Separator - space.
// Output - by pressing button b-16
// Output to out-16

let ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let ar16_odd = [];
let ar16_even = [];

function f16() {
    let odd = 0;
    let even = 0;
    let x = '';
    let y = '';

    for (let i = 0; i < ar16.length; i++) {
        if (ar16[i] % 2 == 0) {
            ar16_even[even] = ar16[i];
            even++;
        } else {
            ar16_odd[odd] = ar16[i];
            odd++;
        }
    }
    for (let i = 0; i < ar16_odd.length; i++) {
        x += ar16_odd[i] + ' ';
    }
    for (let i = 0; i < ar16_even.length; i++) {
        y += ar16_even[i] + ' ';
    }

    document.querySelector('.out-16-odd').innerHTML = x;
    document.querySelector('.out-16-even').innerHTML = y;
}

document.querySelector('.b-16').onclick = f16;

// Task 17
// Using a loop, print in .out-17 the number of ar17 elements whose value is greater than 3.
// Use a loop and a counter variable to calculate.
// Output - by pressing button b-17
// Output to out-17

let ar17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];

function f17() {
    let count = 0;
    for (let i = 0; i < ar17.length; i++) {
        if (ar17[i] > 3) {
            count++;
        }
    }
    document.querySelector('.out-17').innerHTML = count;
}

document.querySelector('.b-17').onclick = f17;


// Task 18
// Using a loop, output to .out-18 the maximum element of the array ar18.
// Output - by pressing button b-18
// Output to out-18

let ar18 = [15, 24, 13, 78, 21, 4, 45, 67];

function f18() {
    let max = ar18[0];
    for (let i = 0; i < ar18.length; i++) {
        if (ar18[i] > max) {
            max = ar18[i];
        }
    }
    document.querySelector('.out-18').innerHTML = max;
}

document.querySelector('.b-18').onclick = f18;


// Task 19
// Output in .out-19 the index of the minimum element in the ar19 array
// Output - by pressing button b-19
// Output to out-19

let ar19 = [15, 424, 313, 78, 241, 4, 45, 67];

function f19() {
    let min = ar19[0];
    let minNum = 0;
    for (let i = 0; i < ar19.length; i++) {
        if (ar19[i] < min) {
            min = ar19[i];
            minNum = i;
        }
    }
    document.querySelector('.out-19').innerHTML = minNum;
}

document.querySelector('.b-19').onclick = f19;

// Task 20
// Print in .out-20 the sum of the elements in the ar20 array
// Output - by pressing button b-20
// Output to out-20

let ar20 = [4, 5, 6, 7, 8, 9, 10];

function f20() {
    let summ = 0;
    for (let i = 0; i < ar20.length; i++) {
        summ += ar20[i];
    }
    document.querySelector('.out-20').innerHTML = summ;
}

document.querySelector('.b-20').onclick = f20;