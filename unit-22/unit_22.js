//  Task 1
// Add a try catch function to the code so that instead of an error, the number out-1 1 is displayed.

function t1() {
    try {
        let a = 22;
        let c = a + d;
    }
    catch (error) {
        document.querySelector('.out-1').innerHTML = 1;
    }
}

document.querySelector('.b-1').onclick = t1;



//  Task 2
// Add try catch functions to the code so that instead of an error, the result is output in out-2.

function t2() {
    let a = 4;
    let b = 5;
    try {
        document.querySelector('.out-2222222').innerHTML = a * b;
    } catch {
        document.querySelector('.out-2').innerHTML = a * b;
    }
}

document.querySelector('.b-2').onclick = t2;



//  Task 3
// Add try catch functions to the code so that instead of an error, the result is output in out-3. If it doesn't exist, create it in code.
// i.e. you don't know whether it will be in html or not.

function t3() {
    let a = 4;
    let b = 5;
    try {
        document.querySelector('.out-3').innerHTML = a * b;
    } catch {
        let btn = document.querySelector('.b-3');
        let div = document.createElement('div');
        div.classList.add('out-3');
        div.innerHTML = a * b;
        btn.insertAdjacentElement('afterend', div);
    }
}

document.querySelector('.b-3').onclick = t3;



//  Task 4
// Given variable a. A push is made to the variable. Using try catch, catch errors if there are any. If there is an error, output the number 0 to out-4.
// If not an error, then the resulting array separated by spaces.

let a = [2, 3, 4];
// a = 5;

function t4() {
    const out = document.querySelector('.out-4');
    try {
        a.push(7);
        let x = '';
        a.forEach(item => {
            x += item + ' ';
        });
        out.innerHTML = x;
    } catch {
        out.innerHTML = 0;
    }
}

document.querySelector('.b-4').onclick = t4;




//  Task 5
// Add try, catch, finally so that out-5 displays 0 if there is an error. And in out-5-1 the word 'finnaly' was always displayed;
function t5() {
    try {
        let p = document.querySelectorAll('p');
        p.push(3);
    } catch {
        document.querySelector('.out-5').innerHTML = 0;
    } finally {
        document.querySelector('.out-5-1').innerHTML = 'finnaly';
    }
}

document.querySelector('.b-5').onclick = t5;

