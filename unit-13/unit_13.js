// Task 1
// When you press b-1, execute the f1 function.
// the function should output to out-1 the value stored under key two from array a1.
// Return this value.

function f1() {
    let a1 = {
        "one": 15,
        "two": 16,
        "five": 20
    };
    document.querySelector('.out-1').innerHTML = a1.two;
    return a1.two;
}

document.querySelector('.b-1').onclick = f1;


// Task 2
// When you press b-2, execute the f2 function.
// The function should output the value hi from array a2 to out-2.
// Return this value.
// Output, as in the previous task


function f2() {
    let a2 = {
        "one": "hello",
        "two": "mahai",
        "five": "hi"
    };
    return a2.five;
}

document.querySelector('.b-2').onclick = () => {
    document.querySelector('.out-2').innerHTML = f2();
}


// Task 3
// When you press b-3, execute the f3 function.
// The function should output the value hi from array a3 to out-3.
// Return this value. The output is separated by a space.
// Output, as in the previous task, we write “by hand”


function f3() {
    let a3 = {
        "one": "hello",
        "two": "mahai",
        "five": "hi",
        "test": 21,
        "odd": "hi",
        "mix": "mix"
    };
    return a3['five'] + ' ' + a3['odd'];
}

document.querySelector('.b-3').onclick = () => {
    document.querySelector('.out-3').innerHTML = f3();
}


// Task 4
// Let's write a function f4 that will output array a4 to out-4 when button b-4 is pressed.
// Output format - key space value line break +' <br>'.
// The function must return a string in the specified output format.
// Note the space before br!!!!!!!!!!!


let a4 = {
    "one": "hello",
    "two": "mahai",
    "five": "hi",
    "test": 21,
    "odd": "hi",
    "mix": "mix"
};
function f4() {
    let out = '';
    for (let key in a4) {
        out += `${key} ${a4[key]} <br>`;
    }
    return out;
}

document.querySelector('.b-4').onclick = () => {
    document.querySelector('.out-4').innerHTML = f4();
}

// Task 5
// Function f4 is hardwired to array a4. It is not comfortable.
// Let's write a function f5 that takes an array as a parameter
// and outputs it in the format specified in the function to the specified block (as the second parameter).


function f5(arr, block) {
    let out = '';
    for (let key in arr) {
        out += `${key} : ${arr[key]} <br>`;
    }
    document.querySelector(block).innerHTML = out;
}

// let's test f5

document.querySelector('.b-5').onclick = () => {
    let a5 = {
        "one": 1,
        "two": 2
    }
    f5(a5, '.out-5');
}


// Task 6
// Add input .i-61 and i-62. When you press b-6, you execute the f6 function.
// The function should receive the key from i-61, and the value from i-62 and add it to array a6.
// After that, use the f5 function to output the a6 array to out-6.

let a6 = {
    "b": 17,
    "e": 22
};

function f6() {
    let userKey = document.querySelector('.i-61').value;
    let userData = document.querySelector('.i-62').value;
    a6[userKey] = userData;
    f5(a6, '.out-6');
}

document.querySelector('.b-6').onclick = f6;

// Task 7
// Add input .i-7. When you press b-7, execute the f7 function. The function must receive a key from i-7.
// If there is such a key in a7 then output 1 to out-7, if not - 0.

let a7 = {
    "b": 17,
    "e": 22
};


function f7() {
    let userKey = document.querySelector('.i-7').value;
    let out = userKey in a7;
    out = (out == true) ? 1 : 0;
    document.querySelector('.out-7').innerHTML = out;
}

document.querySelector('.b-7').onclick = f7;

// Task 8
// Add input .i-8. When you press b-8, you execute the f8 function.
// The function should output the value in out-8 if the key entered in i-8 is in the array, if not - 0.

let a8 = {
    "b": 17,
    "e": 22
};

function f8() {
    let userKey = document.querySelector('.i-8').value;
    let out;
    if (userKey in a8) {
        out = a8[userKey];
    } else {
        out = 0;
    }
    document.querySelector('.out-8').innerHTML = out;
}

document.querySelector('.b-8').onclick = f8;

// Task 9
// Add input .i-9. When you press b-9 you execute the f9 function.
// The function should output to out-9 all the keys of the a9 array that contain a value equal to the value in input.i-9.
// Output separated by space.
// If there are no values, then output an empty line.

let a9 = {
    "b": 17,
    "e": 22,
    "j": 17,
    "k": 22,
    "d": 54
};

function f9() {
    let userData = +document.querySelector('.i-9').value;
    let out = '';
    for (let key in a9) {
        if (a9[key] === userData) {
            out += key + ' ';
        }
    }
    document.querySelector('.out-9').innerHTML = out;
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// Let's write a useful function f10 that checks if a value is in an associative array.
// The function should return true if there is, and false if not. The array and value are passed to the function as parameters.

function f10(arr, val) {
    let x;
    for (let key in arr) {
        if (arr[key] === val) {
            x = true;
            break;
        } else {
            x = false;
        }
    }
    return x;
}

document.querySelector('.b-10').onclick = () => {
    let a10 = {
        "k": 22,
        "d": 54,
        "m": 22,
    }
    document.querySelector('.out-10').innerHTML = f10(a10, 22);
};


// Task 11
// When you press b-11, execute the f11 function. The function must get the key from i-11 and remove the entry from the a11 array with that key.
// After this, output the array to out-11. To output, use the f5 function.

let a11 = {
    "b": 17,
    "e": 22,
    "j": 17,
    "k": 22,
    "d": 54
};

function f11() {
    let userKey = document.querySelector('.i-11').value;
    delete a11[userKey];
    f5(a11, '.out-11')
}

document.querySelector('.b-11').onclick = f11;

// Task 12
// When you press b-12, execute the f12 function.
// The function should get the value from i-12 and remove the entry from the a12 array with that value.
// After this, output the array to out-12. To output, use the f5 function.

let a12 = {
    "b": 17,
    "e": 22,
    "j": 17,
    "k": 22,
    "d": 17,
};

function f12() {
    let userData = +document.querySelector('.i-12').value;

    for (let key in a12) {
        if (a12[key] === userData) {
            delete a12[key];
        }
    }
    f5(a12, '.out-12')
}

document.querySelector('.b-12').onclick = f12;

// Task 13
// When you press b-13, execute the f13 function. The function should output the sum of the values of array a13 (numbers only) in out-13.

let a13 = {
    'prim': 'hello',
    'one': 4,
    'testt': 'vodoley',
    'ivan': 6
};

function f13() {
    let summ = 0;
    for (let key in a13) {
        if (typeof (a13[key]) === 'number') {
            summ += a13[key];
        }
    }
    document.querySelector('.out-13').innerHTML = summ;
}

document.querySelector('.b-13').onclick = f13;

// Task 14
// When you press b-14, execute the f14 function.
// The function should output zero (by index) elements of nested arrays in a14 in out-14. Output via space.
// Expected output - 1 3 6 9

let a14 = {
    'prim': [1, 2, 23],
    'one': [3, 4, 5],
    'testt': [6, 7, 8],
    'ivan': [9, 10]
};

function f14() {
    let out = '';
    for (let key in a14) {
        out += a14[key][0] + ' ';
    }
    document.querySelector('.out-14').innerHTML = out;
}

document.querySelector('.b-14').onclick = f14;

// Task 15
// When you press b-15, execute the f15 function.
// The function should output the elements of nested arrays to a15 in out-15. Output via space.
// i.e. we expect 1 2 23 3 5 6 7 8 9 10

let a15 = {
    'prim': [1, 2, 23],
    'one': [3, 5],
    'testt': [6, 7, 8],
    'ivan': [9, 10]
};

function f15() {
    let out = '';
    for (let key in a15) {
        for (let i = 0; i < a15[key].length; i++) {
            out += a15[key][i] + ' ';
        }
    }
    document.querySelector('.out-15').innerHTML = out;
}

document.querySelector('.b-15').onclick = f15;

// Task 16
// When you press b-16, execute the f16 function.
// The function should output the name elements of nested arrays to a16 in out-16. Output via space.

let a16 = {
    "iis8sj": {
        "name": "Ivan",
        "age": 27,
    },
    "iiss7j": {
        "name": "Petr",
        "age": 26,
    },
    "s3s8sj": {
        "name": "Serg",
        "age": 47,
    },
}

function f16() {
    let out = '';
    for (let key in a16) {
        out += a16[key].name + ' ';
    }
    document.querySelector('.out-16').innerHTML = out;
}

document.querySelector('.b-16').onclick = f16;


// Task 17
// When you press b-17, execute the f17 function.
// The function should in out-17 output the name elements of nested arrays in a17 for which age > 30. Output separated by a space.

let a17 = {
    "iis8sj": {
        "name": "Ivan",
        "age": 27,
    },
    "iiss7j": {
        "name": "Petr",
        "age": 26,
    },
    "s3s8sj": {
        "name": "Serg",
        "age": 47,
    },
}

function f17() {
    let out = '';
    for (let key in a17) {
        if (a17[key].age > 30) {
            out += a17[key].name + ' ';
        }
    }
    document.querySelector('.out-17').innerHTML = out;
}

document.querySelector('.b-17').onclick = f17;

// Task 18
// When you press b-18, execute the f18 function.
// The function should display out-18 metro stations from array a18 of the line that the user entered in i-18.
// Output stations - separated by a space. If the branch is not found, print an empty line.

let a18 = {
    "red": ['Akademmistechko', 'Nyvky', 'Universytet', 'Lisova'],
    "blue": ['Minska', 'Obolon', 'Pochaina', 'Holosiivska'],
    "green": ['Syrets', 'Zoloti Vorota', 'Klovska', 'Vidubichi']
}

function f18() {
    let userKey = document.querySelector('.i-18').value;
    let out = '';
    if (userKey in a18) {
        for (let i = 0; i < a18[userKey].length; i++) {
            out += a18[userKey][i] + ' ';
        }
    }

    document.querySelector('.out-18').innerHTML = out;
}

document.querySelector('.b-18').onclick = f18;

// Task 19
// When you press b-19, execute the f19 function. The function should display in out-19 the color of the station branch that the user entered in i-19.
// The user can enter text in both capital and small letters. If the branch is not found, output an empty line.
// The user entered Lisova - output red, entered Obolon - output blue.

let a19 = {
    "red": ['Akademmistechko', 'Nyvky', 'Universytet', 'Lisova'],
    "blue": ['Minska', 'Obolon', 'Pochaina', 'Holosiivska'],
    "green": ['Syrets', 'Zoloti Vorota', 'Klovska', 'Vidubichi']
}

function f19() {
    let userData = document.querySelector('.i-19').value.toLowerCase();
    let x = '';
    for (let key in a19) {
        for (let i = 0; i < a19[key].length; i++) {
            if (a19[key][i].toLowerCase() === userData) {
                x = key;
            }
        }
    }
    document.querySelector('.out-19').innerHTML = x;
}

document.querySelector('.b-19').onclick = f19;

// Task 20
// When you press b-20, execute the f20 function.
// The function should display in out-20 the name of the station that contains a transition to another branch.
// Such stations are marked 2. Output separated by a space

let a20 = {
    "red": [['Akademmistechko', 1], ['Nyvky', 0], ['Universytet', 3], ['Lisova', 1]],
    "blue": [['Minska', 1], ['Obolon', 0], ['Pochaina', 2], ['Holosiivska', 0]],
    "green": [['Syrets', 1], ['Zoloti Vorota', 2], ['Klovska', 0], ['Vidubichi', 1]],
}

function f20() {
    let out = '';
    for (let key in a20) {
        for (let i = 0; i < a20[key].length; i++) {
            if (a20[key][i][1] === 2) {
                out += a20[key][i][0] + ' ';
            }
        }
    }
    document.querySelector('.out-20').innerHTML = out;
}

document.querySelector('.b-20').onclick = f20
