
// Task 1
// Create a function t1 that writes key 5 with value 11 to LS.
// Check what will happen if the function is called again. The function is started by button b-1.

function t1() {
    localStorage.setItem('5', 11);
}
document.querySelector('.b-1').onclick = t1;


// Task 2
// Create a function t2 that writes the array a2 = [7,6,5] to LS. Key a2.
// Check what will happen if the function is called again. The function is started by button b-2.

function t2() {
    let a2 = [7, 6, 5];
    localStorage.setItem('a2', JSON.stringify(a2));
}
document.querySelector('.b-2').onclick = t2;


// Task 3
// When button t3 is pressed, output the saved array a2 from LS.
// Output to out-3 in line-break format: value space key.

function t3() {
    let b = JSON.parse(localStorage.getItem('a2'));
    let out = '';
    b.forEach((elem, index) => {
        out += index + ' ' + elem + '<br>';
    });
    document.querySelector('.out-3').innerHTML = out;
}
document.querySelector('.b-3').onclick = t3;


// Task 4
// Create a function t4 that writes the array a4 = {hello: world, hi:mahai} to LS. Key A4.
// Check what will happen if the function is called again. The function is started by button b-4.

function t4() {
    let a4 = {
        hello: 'world',
        hi: 'mahai'
    };
    localStorage.setItem('a4', JSON.stringify(a4));
}
document.querySelector('.b-4').onclick = t4;


// Task 5
// When we press b-5, we output the saved array a4 from LS.
// Output to out-5 in line-break format the keyspace value.

function t5() {
    let b = JSON.parse(localStorage.getItem('a4'));
    let out = '';
    for (let key in b) {
        out += key + ' ' + b[key] + '<br>';
    }
    document.querySelector('.out-5').innerHTML = out;
}
document.querySelector('.b-5').onclick = t5;


// Task 6
// Create a function t6 that clears the entire LS. Start with button b-6

function t6() {
    localStorage.clear();
}
document.querySelector('.b-6').onclick = t6;


// Task 7
// Create an i-7 input where the user can enter numbers and strings. Create an array a7.
// When the user presses the b-7 button, a number should be added to the array.
// The array should be stored in LS with key a7.

let a7 = [];
function t7() {
    let x = document.querySelector('.i-7');
    a7.push(x.value);
    localStorage.setItem('a7', JSON.stringify(a7));
}
document.querySelector('.b-7').onclick = t7;


// Task 8
// Create a function t8 that, when run, removes the last element from a7.
// After which the array is saved in LS with key a7. Use the array from the previous problem.

function t8() {
    a7.pop();
    localStorage.setItem('a7', JSON.stringify(a7));
}
document.querySelector('.b-8').onclick = t8;
