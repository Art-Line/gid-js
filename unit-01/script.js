// Task 1
// Print your name to the console.

console.log('Skubida Sergii');

// Task 2
// Print to the console the number of the month in which you were born. 
// Learn the difference between outputting a number and a string.

console.log(7);

// Task 3
// Print the line to the console: 'Welcome ' + ' to the course'

console.log('Welcome ' + ' to the course');

// Task 4
// Use alert to display the number 2023. 
// After the code works, comment it out so that it does not interfere with further development

// alert(2023);


// Task 5
// Use console.log to output the result of operation 2019 - 200. Check the result in the console.

console.log(2019 - 200);

// Task 6
// A div#six has been created on the page. 
// Use document.getElementById to write the text 'Hello World' to div#six .

const six = document.getElementById('six');
six.innerText = 'Hello World';

// Task 7
// A div#seven has been created on the page. 
// Use document.getElementById to write the result of multiplying 12 by 12 into this element. 
// Multiplication can be done using the asterisk sign (shift + 8).

document.getElementById('seven').innerHTML = 8*8;

// Task 8
// A div.out-8 has been created on the page. 
// Use document.querySelector to write the text 'task-8' to this element.
document.querySelector('.out-8').innerHTML = 'task-8';

// Task 9
// The layout is created on the page:
// <h2>Hello <span class="out-8">everyone</span></h2>

document.querySelector('span.out-8').innerHTML = 'world';


// Task 10
// A div.out-10 has been created on the page. 
// Use innerHTML to write the following line inside it '<h2>Hi</h2>'.

document.querySelector('.out-10').innerHTML = '<h2>Hi</h2>';

// Task 11
// A div.out-11 has been created on the page. Write the string '123' inside it. For the record, use innerHTML. 
// The second operation is to add the string '456' to div.out-11. Use += to append.

const out11 = document.querySelector('.out-11');
out11.innerHTML = '123';
out11.innerHTML += '456';


// Task 12
// A div.out-12 has been created on the page. Get it into variable a. 
// Use innerHTML to write the number 3.1415 inside variable a. 
// Learn how fractions are written in JS - separated by a dot or separated by a comma!

const a = document.querySelector('.out-12');
a.innerHTML = 3.1415;


// Task 13
// A div.out-13 has been created on the page. Get it into the out13 variable.
// Use innerHTML to write the line into it:
// '<img src="https://itgid.info/img/js20/js20_unit_01.png" alt="js">'
// Note. You will have to insert a string that already contains quotes. The main thing is that the quotes alternate.
// Therefore, when pasting, wrap this string in single quotes. If everything is done correctly, then an image will appear on the page.

const out13 = document.querySelector('.out-13');
out13.innerHTML = '<img src="https://itgid.info/img/js20/js20_unit_01.png" alt="js">';

// Task 14
// Create two variables z1 = 6, z2 = 3. In div.out-14 print the result of multiplying z1 by z2.

const z1 = 6;
const z2 = 3;
const out14 = document.querySelector('.out-14');
out14.innerHTML = z1 * z2;

// Task 15
// Create two variables y1 = 6, y2 = 3. In div.out-15 print the result of dividing y1 by y2.

const y1 = 6;
const y2 = 3;
const out15 = document.querySelector('.out-15');
out15.innerHTML = y1 / y2;

// Task 16
// Create two variables x1='Hello', x2 = 5. In div.out-16 print the sum of x1 + x2. 
// Examine the result of the operation.

const x1 = 'Hello';
const x2 = 5;
const out16 = document.querySelector('.out-16');
out16.innerHTML = x1 + x2;

// Task 17
// Get div.out-17 into out17 variable. Print this variable to the console. 
// Examine the conclusion.

const out17 = document.querySelector('.out-17');
console.log(out17);
console.dir(out17);

// Task 18
// Get div.out-18 into out18 variable. Print this variable to the console. 
// Set out18 to 5 (out18 = 5). Print the variable to the console. 
// Examine the conclusion.

let out18 = document.querySelector('.out-18');
console.log(out18);
out18 = 5;
console.log(out18);


// Task 19
// Now get the div block with the out-19-test class into the same out19 variable. 
// Print the out19 variable to the console. Learn what has changed.

let out19 = document.querySelector('.out-19');
console.log(out19)
out19 = document.querySelector('.out-19-test');
console.log(out19)

// Task 20
// Get div.out-20 into out20 variable. Use textContent to write the string '<h2>Hi</h2>' into it. 
// Study the result. See how this output differs from the output in 10 task.

const out20 = document.querySelector('.out-20');
out20.textContent = '<h2>Hi</h2>';