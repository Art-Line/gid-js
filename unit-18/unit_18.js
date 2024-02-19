let a1_res = [], a2_res = [], a3_res = [], a4_res = [], a5_res = [], a6_res = [], a7_res = [], a8_res, a9_res = '', a10_res = '';

// Task 1 ============================================
// Array a1 = [4,5,6,7,12,34,56,78,90,11]
// Using forEach, we iterate through the array and create a new array a1_res, where the elements of this array multiplied by 2 are added.
// Actions should be triggered when function t1 is called.

function t1() {
    let a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];
    a1.forEach(elem => {
        a1_res.push(elem * 2);
    });
    document.querySelector('.out-1').innerHTML = a1_res;
}

document.querySelector('.b-1').onclick = t1;

// Task 2 ============================================
// Array a1 = [2,3,4,5,10,11,12]
// Using forEach, iterate through the array and create a new array a2_res where add the elements of this array divided by 2.
// Actions should be triggered when function t2 is called.

function t2() {
    let a1 = [2, 3, 4, 5, 10, 11, 12];
    a1.forEach(item => {
        a2_res.push(item / 2);
    });
    document.querySelector('.out-2').innerHTML = a2_res;
}

document.querySelector('.b-2').onclick = t2;


// Task 3 ============================================
// Array a3 = [2, 'hello', 3, 'hi', 4, 'Mazai']
// Using forEach, iterate through the array and create a new array a3_res where add the elements of this array that are numbers.
// The solution should be launched when function t3 is called.

function t3() {
    let a3 = [2, 'hello', 3, 'hi', 4, 'Mazai'];
    a3.forEach(item => {
        if (typeof (item) === 'number') {
            a3_res.push(item);
        }
    });
    document.querySelector('.out-3').innerHTML = a3_res;
}

document.querySelector('.b-3').onclick = t3;


// Task 4 ============================================
// 3 span.task-4 with the data attribute are created on the page.
// Use forEach to loop through them and add the attributes to the a4_res array
// The solution should be launched when function t4 is called.

function t4() {
    let span = document.querySelectorAll('.task-4');
    span.forEach(item => {
        a4_res.push(item.getAttribute('data'));
    });
    document.querySelector('.out-4').innerHTML = a4_res;

}

document.querySelector('.b-4').onclick = t4;


// Task 5 ============================================
// 3 p.task-5 with the data attribute were created on the page.
// Use forEach to loop through them and add a click event.
// Write a function t5 that will run on click and add the data attribute of the clicked element to the a5_res array.


function t5() {
    a5_res.push(this.getAttribute('data'));
    document.querySelector('.out-5').innerHTML = a5_res;
}

document.querySelectorAll('.task-5').forEach(elem => {
    elem.onclick = t5;
});



// Task 6 ============================================
// String str6='helloworld' - convert it to an array and assign it to a6_res.
// Output to the page. The solution should be launched when function t6 is called.

function t6() {
    let str6 = 'helloworld';
    a6_res = str6.split('');
    document.querySelector('.out-6').innerHTML = a6_res;
}

document.querySelector('.b-6').onclick = t6;


// Task 7 ============================================
// String str7='hello world hi mazai' - convert it into an array and split it into words.
// Words must not contain spaces and assign a6_res. Display on the page.
// The solution should be launched when function t7 is called.

function t7() {
    let str7 = 'hello world hi mazai';
    a7_res = str7.split(' ');
    document.querySelector('.out-7').innerHTML = a7_res;
}

document.querySelector('.b-7').onclick = t7;

// Task 8 ============================================
// Array a8 = [1,2,66,77,15] - convert it to a string. The separator is a hyphen.
// Assign the result to a8_res. The solution should be launched when function t8 is called.

function t8() {
    let a8 = [1, 2, 66, 77, 15];
    a8_res = a8.join('-');
    document.querySelector('.out-8').innerHTML = a8_res;
}

document.querySelector('.b-8').onclick = t8;


// Task 9 ============================================
// Aarray a9 = [[hi, mahai], [test, best]] - convert it to a string.
// The separator is a hyphen. Assign the result to a9_res.
// The solution should be launched when function t9 is called.
// An extra hyphen is allowed at the end of the line!!!

function t9() {
    let a9 = [['hi', 'mahai'], ['test', 'best']];
    a9.forEach(item => {
        a9_res += item.join('-') + '-';
    });
    a9_res = a9_res.slice(0, -1);
    document.querySelector('.out-9').innerHTML = a9_res;
}

document.querySelector('.b-9').onclick = t9;


// Task 10 ============================================
// Array a10 = {name: ivan, age: 15, sex: 1, id: 45} - convert it into a query string (this is how GET parameters are passed).
// Find a description of what a query string is yourself. The separator is ampersand.
// Assign the result to a10_res. The solution should be launched when function t10 is called.
// An extra & is allowed at the end of the line!!!

function t10() {
    let a10 = {
        name: 'ivan',
        age: 15,
        sex: 1,
        id: 45
    };

    for (let key in a10) {
        a10_res += key + '=' + a10[key] + '&';
    }
    a10_res = a10_res.slice(0, -1);
    document.querySelector('.out-10').innerHTML = a10_res;
}

document.querySelector('.b-10').onclick = t10;