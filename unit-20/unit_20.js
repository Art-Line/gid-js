// Task 1
// There is input .i-1. Create a function t1 that, upon the keydown event, reads the contents of event.key and adds it to .out-1.
// In all the following tasks, we work with the Latin alphabet and numbers.

function t1(event) {
    document.querySelector('.out-1').textContent += event.key;
    return event.key;
}
document.querySelector('.i-1').onkeydown = t1;



// Task 2
// There is input .i-2. 
// Create a function t2 that, based on the onkeypress event, outputs the numeric code of the symbol (event.keyCode) to out-2.

function t2(event) {
    document.querySelector('.out-2').textContent += event.keyCode;

}
document.querySelector('.i-2').onkeypress = t2;



// Task 3
// There is input .i-3. Create a function t3 that prints true if a symbol is entered and false if a number is entered.
// To define - use keyCode.

function t3(event) {
    let out = document.querySelector('.out-3');
    if (event.keyCode >= 48 && event.keyCode <= 57) {
        out.innerHTML = false;
    } else {
        out.innerHTML = true;
    }
}
document.querySelector('.i-3').onkeypress = t3;



// Task 4
// There is input .i-4. Create a function t4 that outputs only lowercase characters to .out-4.
// That is entered ab4Bci in out-4 we get ab4ci.

let out = document.querySelector('.out-4');
function t4(event) {

    if (event.keyCode < 65 || event.keyCode > 90) {
        out.innerHTML += event.key;
    }

}
document.querySelector('.i-4').onkeypress = t4;



// Task 5
// There is input .i-5. Create a function t5 that outputs all uppercase characters entered into .out-5.
// That is the user entered AbCd and the function will output ABCD.

function t5(event) {
    let out = document.querySelector('.out-5');
    out.innerHTML += event.key.toUpperCase();
}
document.querySelector('.i-5').onkeydown = t5;



// Task 6
// There is input .i-6. Create a function t6 that allows only lowercase characters to be entered into i-6.
// That is We create a string before the function. Inside the function we check the symbol code. If the character is lowercase, add it to the line.
// Then we force the string into value input i-6.
// To block standard output in input at the end of the function we write return false;

let data = '';
function t6(event) {
    if (event.keyCode > 96 && event.keyCode < 124) {
        data = event.key
    };
    document.querySelector('.i-6').value = data;
    return false;
}
document.querySelector('.i-6').onkeypress = t6;



// Task 7
// There is input .i-7. Create a function t7 that prints a random character from array a7 into .out-7 each time a character is entered.

const a7 = ['a', 'z', 'x', 'w', 'y', 't'];
const out7 = document.querySelector('.out-7');
function t7() {
    let x = Math.floor(Math.random() * a7.length);
    out7.innerHTML = a7[x];
}
document.querySelector('.i-7').onkeydown = t7;

// Task 8
// There is input .i-8. Write a function t8 that appends the text entered into input to .out-8, but replaces i with 1, o with 0, l with 7.

const a8 = {
    i: 1,
    o: 0,
    l: 7
}
const out8 = document.querySelector('.out-8');
function t8(event) {
    // 1. Receive the entered character from event
    // 2. Check for the presence of such a key in a8 - we’ve already done this before!!!!
    // 3. If there is one, add a character from the a8 array to out-8. If not, the entered character.      
    if (event.key in a8) {
        out8.innerHTML += a8[event.key];
    } else {
        out8.innerHTML += event.key;
    }
}
document.querySelector('.i-8').onkeydown = t8;


// Task 9
// There is input .i-9. Create a function t9 that displays in .out-9 the number of down arrow keys pressed.

let out9 = document.querySelector('.out-9');
let count = 0;
function t9(event) {
    if (event.key == 'ArrowDown') {
        count++;
        out9.innerHTML = count;
    }
}
document.querySelector('.i-9').onkeydown = t9;



// Task 10
// There is an input .i-10 and a block .block-10.
// Add an event to the input, when pressing the right arrow and left arrow keys, increase the width of the block.
// Up and down arrow keys - increase the height of the block. One keystroke - 1px.

let h = 75;
let w = 75;
const block10 = document.querySelector('.block-10');
function t10(event) {
    if (event.key == 'ArrowLeft' || event.key == 'ArrowRight') {
        w++;
        block10.style.width = w + 'px';
    }
    if (event.key == 'ArrowUp' || event.key == 'ArrowDown') {
        h++;
        block10.style.height = h + 'px';
    }
}
document.querySelector('.i-10').onkeydown = t10;



// Task 11
//  Project.
// 1. Study the keyboard layout.
// 2. When entering a character in i-11 (Latin, lowercase) - assign the class .active to the key with such a character.
// This will give the key an orange background. Before searching for and assigning active, use a loop to remove the active class from all keys with the keyboard class.
// 3. If everything is done correctly, then when you enter the next character, the previous key will lose its orange background, and the new one entered will be colored.
// 4. Add all the numbers and the second row of keys from a to l yourself
// 5. Add the alt, enter key yourself.

let allkey = document.querySelectorAll('.keyboard');
function t11(event) {
    let sumb = event.key
    allkey.forEach(item => item.classList.remove('active'));
    if (event.key === 'Control') sumb = 'ctrl';
    if (event.keyCode === 32) sumb = 'space';
    let mySumb = document.querySelector(`.keyboard[data='${sumb}']`);
    if (mySumb) mySumb.classList.add('active');
}
document.querySelector('.i-11').onkeydown = t11;