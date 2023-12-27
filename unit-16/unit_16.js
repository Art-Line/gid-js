// Task 1
// When you press .b-1, execute the f1 function. The function iterates through array a1 using a for loop (let i.
// Output value+space to the page in .out-1 format.

let a1 = [5, 7, 9, 11, 13, 15];

function f1() {
    let out = document.querySelector('.out-1');
    let x = '';
    for (let i = 0; i < a1.length; i++) {
        x += a1[i] + ' ';
    }
    out.innerHTML = x;
}

document.querySelector('.b-1').addEventListener('click', f1);

// Task 2
// When you press .b-2, execute the f2 function. The function iterates through array a2 using a for loop (let i.
// Output to the page in .out-2 format index+space+value+space.

let a2 = [5, 7, 9, 11, 13, 15];

function f2() {
    let out = document.querySelector('.out-2');
    let x = '';
    for (let i = 0; i < a2.length; i++) {
        x += i + ' ' + a1[i] + ' ';
    }
    out.innerHTML = x;
}

document.querySelector('.b-2').addEventListener('click', f2);

// Task 3
// When you press .b-3, execute the f3 function.
// The function gets div.out-3 from the page using getElementsByClassName and writes the number 3 to each one,
// overwriting the contents of the div.

function f3() {
    let out = document.getElementsByClassName('out-3');
    for (let i = 0; i < out.length; i++) {
        out[i].innerHTML = 3;
    }
}

document.querySelector('.b-3').addEventListener('click', f3);


// Task 4
// When you press .b-4, execute the f4 function. Function gets div.out-4 from page using querySelectorAll
// and adds the number 4 to each.

function f4() {
    let out = document.querySelectorAll('.out-4');
    for (let i = 0; i < out.length; i++) {
        out[i].innerHTML += 4;
    }
}

document.querySelector('.b-4').addEventListener('click', f4);

// Task 5
// When you press .b-5, execute the f5 function.
// The function must use for of to iterate through the array a5 and return a new array containing elements from a5 greater than 7.

let a5 = [3, 4, 5, 2, 1, 7, 8, 2, 4, 6, 8, 11, 23, 17];

function f5() {
    let arr = [];
    for (let item of a5) {
        if (item > 7) {
            arr.push(item);
        }
    }
    return arr;
}

document.querySelector('.b-5').addEventListener('click', () => {
    document.querySelector('.out-5').innerHTML = f5();
});

// Task 6
// When you press .b-6, execute the f6 function.
// The function should turn the a6 array into a one-dimensional one. Output the result in out-6 separated by a space.

let a6 = [[1, 2], [3, 4], [5, 6]];

function f6() {
    let out = document.querySelector('.out-6');
    let arr = [];
    for (let i = 0; i < a6.length; i++) {
        for (let k = 0; k < a6[i].length; k++) {
            arr.push(a6[i][k]);
        }
    }
    a6 = arr;
    let x = '';
    for (let i = 0; i < a6.length; i++) {
        x += a6[i] + ' ';
    }
    out.innerHTML = x;
}

document.querySelector('.b-6').addEventListener('click', f6);

// Task 7
// When you press .b-7, execute the f7 function. The function must reindex the array a7. What is meant.
// Now we have a regular array that contains nested objects.
// You need to make a7 an object, where the keys are the id values from the nested arrays, and the values are the name (i.e. { 23 : Ivan, 45 : Petr}.
// The function should return the resulting array.

let a7 = [{ id: 23, name: 'Ivan' }, { id: 45, name: 'Petr' }];

function f7() {
    let obj = {};
    for (let i = 0; i < a7.length; i++) {
        obj[a7[i].id] = a7[i].name;
    }
    return obj;
}

document.querySelector('.b-7').addEventListener('click', () => {
    console.log(f7());
});


// Task 8
// When you press .b-8, execute the f8 function. The function should reindex the a8 array. What is meant.
// Now we have a regular array that contains nested objects.
// You need to make a8 an array that will contain only numeric ids. Those. [23, 45].
// The function should return the resulting array.

let a8 = [{ id: 23, name: 'Ivan' }, { id: 45, name: 'Petr' }];

function f8() {
    let arr = [];
    for (let i = 0; i < a8.length; i++) {
        for (let key in a8[i]) {
            if (typeof (a8[i][key]) === "number") {
                arr.push(a8[i][key]);
            }
        }
    }
    a8 = arr;
    return a8;
}

document.querySelector('.b-8').addEventListener('click', () => {
    console.log(f8());
});

// Task 9
// When you press .b-9, execute the f9 function. The function should return in out-9 the largest index of the arrays nested in a9.
// In this case it is 4. I.e. the largest nested array is [0,0,0,0,0], and its largest index is 4.

let a9 = [[4, 3, 2], [2, 5], [0, 0, 0, 0, 0]];

function f9() {
    let size = 0;
    let index = 0;
    for (let i = 0; i < a9.length; i++) {
        if (a9[i].length > size) {
            size = a9[i].length;
            index = a9[i].length - 1;
        }
    }
    return index;
}

document.querySelector('.b-9').addEventListener('click', () => {
    document.querySelector('.out-9').innerHTML = f9();
});

// Task 10
// When you press .b-10, execute the f10 function.
// The function should convert the a10 array into an associative array of the form {4: 4, 6: 6, 9: 9, hello : "hello"}
// and return the resulting array.

let a10 = [4, 6, 9, 'Hello'];

function f10() {
    let obj = {};
    a10.forEach(element => {
        obj[element] = element;
    });
    return obj;
}

document.querySelector('.b-10').addEventListener('click', () => {
    console.log(f10());
});

// Task 11
// When you press .b-11, execute the f11 function.
// The function should use for in to iterate through the object a11 and output to out-11 only those values that are greater than 10.
// Output is separated by a space.

let a11 = {
    one: 11,
    two: 7,
    three: 13,
    four: 0
}

function f11() {
    let x = '';
    let out = document.querySelector('.out-11');
    for (let key in a11) {
        if (a11[key] > 10) {
            x += a11[key] + ' ';
        }
    }
    out.innerHTML = x;
}

document.querySelector('.b-11').addEventListener('click', f11);

// Task 12
// When you press .b-12, execute the f12 function.
// The function should use for of to iterate through a12 and output it to out-12 separated by a space.

let a12 = [4, 5, 6, 7];

function f12() {
    let x = '';
    let out = document.querySelector('.out-12');
    for (let item of a12) {
        x += item + ' ';
    }
    out.innerHTML = x;
}

document.querySelector('.b-12').addEventListener('click', f12);


// Task 13
//When you press .b-13, execute the f13 function.
// The function must use for of to iterate through a13 and output one character at a time in out-13 separated by a space.

let a13 = 'testone';

function f13() {
    let x = '';
    let out = document.querySelector('.out-13');
    for (let item of a13) {
        x += item + ' ';
    }
    out.innerHTML = x;
}

document.querySelector('.b-13').addEventListener('click', f13);



// Task 14
// When you press .b-14, execute the f14 function.
// The function must, using for of, iterate through a14 and output the elements in out-14 separated by a space.

let a14 = new Set([4, 5, 6]);

function f14() {
    let x = '';
    let out = document.querySelector('.out-14');
    for (let item of a14) {
        x += item + ' ';
    }
    out.innerHTML = x;
}

document.querySelector('.b-14').addEventListener('click', f14);

// Task 15
// When you press .b-15, execute the f15 function.
// The function should get a NodeList of .out-15 elements using document.querySelectorAll,
// then, using for of, iterate through the resulting collection of .out-15 elements and write the number 15 inside them (overwriting the contents).

function f15() {
    let list = document.querySelectorAll('.out-15');
    for (let item of list) {
        item.innerHTML = 15;
    }
}

document.querySelector('.b-15').addEventListener('click', f15);