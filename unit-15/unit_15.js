// In this work and further, the definition of a set is understood to be Set.

//Task 1
// Create set s1. Add three elements 'h', 'b', 'o', 'h' to it.
// Add using add. Output the resulting set s1 to the console.

let s1 = new Set();
s1.add('h');
s1.add('b');
s1.add('o');
s1.add('h');
console.log(s1);


// Task 2
// When you press b-2, execute the f2 function. The function must be added to the set of elements s2 that the user enters into i-2.
// the function should be output to the s2 console after adding each element.


let s2 = new Set();

const f2 = () => {
    let i2 = document.querySelector('.i-2').value;
    s2.add(i2);
    console.log(s2);
}

document.querySelector('.b-2').onclick = f2;


// Task 3
// When you press b-3, execute the f3 function. The function must remove from the set s3 the string that the user enters into i-3.
// The function should print to the s3 console after each element is removed.

let s3 = new Set(['one', 'two', 'four']);

const f3 = () => {
    let i2 = document.querySelector('.i-3').value;
    s3.delete(i2);
    console.log(s3);
}

document.querySelector('.b-3').onclick = f3;


// Task 4
// When you press b-4, execute the f4 function. The function must check if the set s4 contains the string entered by the user in i-4.
// If there is a line, then print true in out-4. If not - false.

let s4 = new Set(['a', 'b', 'c', 'z']);

const f4 = () => {
    let i4 = document.querySelector('.i-4').value;
    document.querySelector('.out-4').innerHTML = s4.has(i4);
}

document.querySelector('.b-4').onclick = f4;

// Task 5
// When you press b-5, execute the f5 function. The function should output in out-5 the number of elements in the set s5.


let s5 = new Set(['a', 'b', 'c', 'z', 'a2', 'b2', 'c2', 'z2']);

const f5 = () => {
    document.querySelector('.out-5').innerHTML = s5.size;
}

document.querySelector('.b-5').onclick = f5;

// Task 6
// When you press b-6, execute the f6 function.
// The function should print out-6 the number of unique elements in array a6. The solution is to use set.

let a6 = [1, 2, 3, 4, 5, 3, 4, 5, 2, 4, 5, 3, 24, 5, 2, 4, 56, 4, 3, 2, 335, 2, 23, 41, 3, 4, 1, 1, 4, 2, 2, 4, 5, 24, 5, 3, 22, 56];

const f6 = () => {
    let out = document.querySelector('.out-6');
    let x = new Set(a6);
    out.innerHTML = x.size;
}

document.querySelector('.b-6').onclick = f6;

// Task 7
// When you press b-7, execute the f7 function.
// The function should get the password value from i-7 and check that the user uses non-repeating characters in the password line.
// If the characters are unique and the password length is greater (strictly) 6, then print the number 1 in out-7.
// If there are duplicate characters, or the length is less than or equal to 6, then output 0. To check the uniqueness of characters, use Set.

const f7 = () => {
    let text = document.querySelector('.i-7').value;
    let out = document.querySelector('.out-7');
    let mySet = new Set(text);
    if ((mySet.size === text.length) && (text.length > 6)) {
        out.innerHTML = 1;
    } else {
        out.innerHTML = 0;
    }
}

document.querySelector('.b-7').onclick = f7;

// Task 8
// When you press b-8, execute the f8 function. The function should iterate over the set s8 and add only numbers greater than 5 to the ar8 array.
// Print the array to the console.

let s8 = new Set([1, 2, 3, 4, 5, 3, 4, 7, 9, 5, 7, 8, 9, 23, 45, 5, 2, 4, 5, 3, 24, 5, 2, 4, 56, 4, 3, 2, 335, 2, 23, 41, 3, 4, 1, 1, 4, 2, 2, 4, 5, 24, 5, 3, 22, 56]);
let ar8 = [];

const f8 = () => {

    for (let item of s8) {
        if (item > 5) {
            ar8.push(item);
        }
    }
    console.log(ar8);
}

document.querySelector('.b-8').onclick = f8;

// Task 9
// When you press b-9, execute the f9 function. The function must take our_set as a parameter, convert it to a string,
// and after each character of the line there must be a space. The function must return the resulting string.
// In our example the result should be 9 8 7 6 5

const f9 = our_set => {
    let x = '';
    for (let item of our_set) {
        x += item + ' ';
    }
    return x;
}

document.querySelector('.b-9').onclick = () => {
    let s9 = new Set([9, 8, 7, 6, 5]);
    document.querySelector('.out-9').innerHTML = f9(s9);
}

// Task 10
// When you press b-10, execute the f10 function.
// The function should take set as a parameter and output it to the specified element.
// The element is specified as the second parameter of the f10 function.
// Output values - separated by spaces.

const f10 = (out_set, elem) => {
    let x = '';
    for (let item of out_set) {
        x += item + ' ';
    }
    document.querySelector(elem).innerHTML = x;
}

document.querySelector('.b-10').onclick = () => {
    let a10 = new Set(['4', '5', '6']);
    f10(a10, '.out-10');
};


// Task 11
// When you press b-11, execute the f11 function. The function should convert the array a11 to a set. And output to the console.
// Examine the output of the resulting set. Find out why this happens.
// Yes, this problem is solved! Just figure it out.

const f11 = () => {
    let s = new Set();
    s.add([1]);
    s.add([1]);
    console.log(s);
}

document.querySelector('.b-11').onclick = f11;

// Task 12
// When you press b-12, execute the f12 function.
// The function should convert the string str12 into an array, so that each letter is a separate element of the array.
// Then create a set based on the array and return it.

let str12 = 'The name conjures up visions of plum pudding and Christmas punch quaint coaching inns and cozy firesides but also of orphaned and starving children';

const f12 = () => {
    let arr = [];
    arr = Array.from(str12);
    return new Set(arr);
}

document.querySelector('.b-12').onclick = () => {
    console.log(f12());
}

// Task 13
// When you press b-13, execute the f13 function. The function must convert the string str13 into an array, with each letter being a separate element of the array.
// Then create a set based on the array. Then, iterating through the set element by element, find how many times each character appears in the original array.
// The result is output to the console as an object of type { symbol : quantity, symbol : quantity } and returned.
// example result for the string 'Hello ho'
// { "H" : 1, 'e' : 1, 'l' : 2, "o" : 2, " ": 1}

let str13 = 'The name conjures up visions of plum pudding and Christmas punch quaint coaching inns and cozy firesides but also of orphaned and starving children';


const f13 = () => {
    let arr = [];
    arr = Array.from(str13);
    let set = new Set(arr);
    let obj = {};
    for (let item of set) {
        let x = 1;
        for (let i = 0; i < arr.length; i++) {
            if (item === arr[i]) {
                obj[item] = x;
                x++;
            }
        }
    }
    return obj;
}

document.querySelector('.b-13').onclick = () => {
    console.log(f13());
}
