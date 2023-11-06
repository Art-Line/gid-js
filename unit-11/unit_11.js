// Task 1
// There is an array d1, button b-1, input i-1. Write a function f1 that, when pressed, reads i-1 and adds it to the array.
// Then outputs the array to .out-1.
// Since we will display the array d1 repeatedly, let's make the output of the array a separate function, showArr - it is prepared.
// Learn it - it's a good way to optimize your code.

function showArr(domElem, arr) {
    let out = '';
    for (let i = 0; i < arr.length; i++) {
        out += arr[i] + ' ';
    }
    document.querySelector(domElem).innerHTML = out;
}

let d1 = [33, 'best', 66, 'best'];

function f1() {
    let data = document.querySelector('.i-1').value;
    d1.push(data);
    showArr('.out-1', d1);
}

document.querySelector('.b-1').onclick = f1;

// Task 2
// Write a function f2 that pops the d1 array and then outputs it (showArr) to .out-2
// function is executed when button b-2 is pressed

function f2() {
    d1.pop();
    showArr('.out-2', d1);
}

document.querySelector('.b-2').onclick = f2;

// Task 3
// Write a function f3 that applies the shift method to the array d1 and then outputs it (showArr) to .out-3
// function is executed when button b-3 is pressed

function f3() {
    d1.shift()
    showArr('.out-3', d1);
}

document.querySelector('.b-3').onclick = f3;

// Task 4
// Write a function f4 that pushes the array d1, takes the data for the array from i-4, and then outputs it (showArr) to .out-4
// function is executed when button b-4 is pressed


function f4() {
    let data = document.querySelector('.i-4').value;
    d1.push(data);
    showArr('.out-4', d1);
}

document.querySelector('.b-4').onclick = f4;

// Task 5
// Write a function f5 that unshifts array d1, takes the data for the array from i-5, and then outputs it (showArr) to .out-5
// function is executed when button b-5 is pressed

function f5() {
    let data = document.querySelector('.i-5').value;
    d1.unshift(data);
    showArr('.out-5', d1);
}

document.querySelector('.b-5').onclick = f5;

// Task 6
// Write a function f6 that emulates the push method on the d6 array. Those. adds the value from i-6 as the last element to the d6 array.
// Emulation means that we will get a result similar to the push method without using it. Emulation consists of assigning a value as the last element of the array.
// How to calculate the index of the last element using the length of the array - you know from the previous lesson. Running the function again should also result in the element being added.
// In all tasks where we say second, third, etc. we mean index
// Output - by pressing button b-6
// Output to out-6

let d6 = ['test', 5, 12];

function f6() {
    let data = document.querySelector('.i-6').value;
    d6[d6.length] = data;
    showArr('.out-6', d6);
}

document.querySelector('.b-6').onclick = f6;

// Task 7
// Write a function f7 that emulates the pop method, i.e. removes the last element of the array d7. Emulate - get a result similar to pop, but without using pop.
// The function can be called many times, each time the last element d7 must be removed.
// In all tasks where we say second, third, etc. we mean index
// Output - by pressing button b-7
// Output to out-7

let d7 = ['china', 'india', 'brazil', 'japan', 'egypt'];

function f7() {
    d7.length = d7.length - 1;
    showArr('.out-7', d7);
}

document.querySelector('.b-7').onclick = f7;

// Task 8
// Write a function f8 that emulates the operation of the unShift method - add the value from i-8 to the beginning of the d8 array.
// In all tasks where we say second, third, etc. we mean index
// Output - by pressing button b-8
// Output to out-8

let d8 = [2, '4', 12, 67, 'hello'];

function f8() {
    let data = document.querySelector('.i-8').value;
    for (let i = d8.length; i > 0; i--) {
        d8[i] = d8[i - 1];
    }
    d8[0] = data;
    showArr('.out-8', d8);
}

document.querySelector('.b-8').onclick = f8;

// Task 9
// Write a function f8 that emulates the operation of the shift method - using the d9 array as an example.
// In all tasks where we say second, third, etc. we mean index
// Output - by pressing button b-9
// Output to out-9

let d9 = [100, 200, 300, 400, 700, 121];

function f9() {
    for (let i = 0; i < d9.length; i++) {
        d9[i] = d9[i + 1];
    }
    d9.length -= 1;
    showArr('.out-9', d9);
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// Write a function f10 that applies the reverse method to the array d10 and outputs the resulting array to out-10.
// In all tasks where we say second, third, etc. we mean index
// Output - by pressing button b-10
// Output to out-10

let d10 = [3, 14, 15, 92, 6];

function f10() {
    d10.reverse();
    showArr('.out-10', d10);
}

document.querySelector('.b-10').onclick = f10;


// Task 11
// Write a function that takes a number from input i-11, converts it to a number, and uses the indexOf method to check if d11 is in the array.
// The function outputs in out-11 -1 if such a number is not in the array, or its index in the array.
// In all tasks where we say second, third, etc. we mean index
// Output - by pressing button b-11
// Output to out-11

let d11 = [2, 3, 4, 5, 6, 7];

function f11() {
    let data = +document.querySelector('.i-11').value;
    let x = d11.indexOf(data);
    document.querySelector('.out-11').textContent = x;
}

document.querySelector('.b-11').onclick = f11;


// Task 12
// Write a function f12 that emulates the work of the indexOf method - searches for the entered number in the d12 array (brute force).
// If there is no number, outputs -1, if there is, its position in the array.
// In all tasks where we say second, third, etc. we mean index
// Output - by pressing button b-12
// Output to out-12

let d12 = [6, 62, 60, 70, 1, 5];

function f12() {
    const out = document.querySelector('.out-12');
    let data = +document.querySelector('.i-12').value;
    for (let i = 0; i < d12.length; i++) {
        if (d12[i] === data) {
            out.textContent = i;
            break;
        } else {
            out.textContent = -1;
        }
    }
}

document.querySelector('.b-12').onclick = f12;

// Task 13
// Write a function f13 that emulates the reverse method. Those. creates a new array based on d13 with the elements in reverse order and outputs it to out-13.
// In all tasks where we say second, third, etc. we mean index
// Output - by pressing button b-13
// Output to out-13


let d13 = [6, 0, 22, 1, 4, 76];

function f13() {
    let newArr = [];
    for (let i = d13.length - 1; i >= 0; i--) {
        newArr[newArr.length] = d13[i]
    }
    showArr('.out-13', newArr);
}

document.querySelector('.b-13').onclick = f13;


// Task 14
// Write a function that takes i-14, converts it to a number, and then fills the d14 array so that the number of elements is equal to the number entered, and each element is 1.
// That is the user entered 5, the array will be [1,1,1,1,1]. Output the array to out-14.
// In all tasks where we say second, third, etc. we mean index
// Output - by pressing button b-14
// Output to out-14

let d14 = [];

function f14() {
    let data = +document.querySelector('.i-14').value;
    for (let i = 0; i < data; i++) {
        d14.push(1);
    }
    showArr('.out-14', d14);
}

document.querySelector('.b-14').onclick = f14;

// Task 15
// Write a function f15 that first checks whether the element from i-15 is in the d15 array (converted to a number), and then - if not - adds it to the array.
// In all tasks where we say second, third, etc. we mean index
// Output - by pressing button b-15
// Output to out-15

let d15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];

function f15() {
    let data = +document.querySelector('.i-15').value;
    let x = d15.indexOf(data);
    if (x === -1) {
        d15.push(data);
    }
    showArr('.out-15', d15);
}

document.querySelector('.b-15').onclick = f15;

// Task 16
// Given two arrays d161 and d162 - using the concat method - add to array d16 the result of applying concat between array d161 and d162.
// In all tasks where we say second, third, etc. we mean index
// Output - by pressing button b-16
// Output to out-16

let d16 = [];
let d161 = [5, 6, 7, 8, 9];
let d162 = [23, 24, 56, 87];

function f16() {

    d16 = d161.concat(d162);

    showArr('.out-16', d16);
}

document.querySelector('.b-16').onclick = f16;

// Task 17
// Write a function f17 that emulates the concat method. The function should merge the arrays d171 and d172 and write the result to d17. Use a loop for emulation.
// In all tasks where we say second, third, etc. we mean index
// Output - by pressing button b-17
// Output to out-17

let d17 = [];
let d171 = ['a', 'b', 'c', 'd'];
let d172 = [1, 2, 3, 4, 5];

function f17() {
    for (let i = 0; i < d171.length; i++) {
        d17.push(d171[i]);
    }
    for (let i = 0; i < d172.length; i++) {
        d17.push(d172[i]);
    }
    showArr('.out-17', d17);
}

document.querySelector('.b-17').onclick = f17;


// Task 18
// Write a function f18 that gets a value from i-18 and checks if such a value exists in the d18 array using the include method.
// The result of applying the method is displayed in .out-18.
// In all tasks where we say second, third, etc. we mean index
// Output - by pressing button b-18
// Output to out-18

let d18 = ['b', 'c', '45', 'e', 'z', 'y'];

function f18() {
    let data = document.querySelector('.i-18').value;
    x = d18.includes(data);
    document.querySelector('.out-18').textContent = x;
}

document.querySelector('.b-18').onclick = f18;


// Task 19
// Write a function f19 that prints the longest maxString from array d19 to out-19.
// In all tasks where we say second, third, etc. we mean index
// Output - by pressing button b-19
// Output to out-19

let d19 = ['Your', 'payment', 'method', 'will', 'automatically', 'be', 'charged', 'in', 'advance', 'every'];
let maxString = '';
let count = d19[0].length;
function f19() {
    for (let i = 0; i < d19.length; i++) {
        if (d19[i].length > count) {
            count = d19[i].length;
            maxString = d19[i];
        }
    }
    document.querySelector('.out-19').textContent = maxString;
}

document.querySelector('.b-19').onclick = f19;

// Task 20
// Write a function f20 that applies the join method with parameters to the d20 array and joins the elements of the array into one string. The result is output in .out-20.
// Specify the method like this d20.join(''). Please note - there is no space between apostrophes!!!.
// In all tasks where we say second, third, etc. we mean index
// Output - by pressing button b-20
// Output to out-20

let d20 = [4, 5, 6, 7, 8, 9, 10];

function f20() {
    document.querySelector('.out-20').textContent = d20.join('');
}

document.querySelector('.b-20').onclick = f20;