//  Task 1
// When the .b-1 button is clicked, the function assigns the .out-1 block a width of 200px and a height of 90px.

function f1() {
    const out = document.querySelector('.out-1');
    out.style.width = "200px";
    out.style.height = "90px";

}

document.querySelector('.b-1').onclick = f1;

//  Task 2
// When the .b-2 button is pressed, the f2 function assigns the .out-2 block the class .bg-orange.

function f2() {
    document.querySelector('.out-2').classList.add('bg-orange');
}

document.querySelector('.b-2').onclick = f2;


//  Task 3
// On pressing the .b-3 button, run the f3 function, which removes the .bg-orange class from the .out-3 block.

function f3() {
    document.querySelector('.out-3').classList.remove('bg-orange');
}

document.querySelector('.b-3').onclick = f3;

//  Task 4
// On pressing the .b-4 button, run the f4 function, which toggles the .bg-orange class for the out-4 block.

const out4 = document.querySelector('.out-4');
function f4() {
    out4.classList.toggle('bg-orange');
}

document.querySelector('.b-4').onclick = f4;


//  Task 5
// By pressing .b-5, run the f5 function, which checks for the presence of the .bg-orange class in the .out-4 block (yes, exactly out-4 ).
// Result - true or false, output to .out-5.

function f5() {
    const out = document.querySelector('.out-5');
    if (out4.classList.contains('bg-orange')) {
        out.textContent = true;
    } else {
        out.textContent = false;
    }
}

document.querySelector('.b-5').onclick = f5;


//  Task 6
// By pressing .b-6, run the f6 function, which displays in .out-6 the number of paragraphs with class .p-6.

function f6() {
    const p = document.querySelectorAll('.p-6');
    const out = document.querySelector('.out-6');
    out.textContent = p.length;
}

document.querySelector('.b-6').onclick = f6;


//  Task 7
// On pressing the .b-7 button, run the f7 function, which assigns the class .bg-orange to the .out-7 blocks.
// Please note that there is more than one of these blocks, hence the need for a loop.

let blocks7 = document.querySelectorAll('.out-7');

function f7() {
    for (let i = 0; i < blocks7.length; i++) {
        blocks7[i].classList.add('bg-orange');
    }
}

document.querySelector('.b-7').onclick = f7;


//  Task 8
// On pressing the .b-8 button, run the f8 function, which toggles the .out-8 blocks with the .bg-orange class.
// Please note that there is more than one of these blocks, hence the need for a loop.

let blocks8 = document.querySelectorAll('.out-8');

function f8() {
    for (let i = 0; i < blocks8.length; i++) {
        blocks8[i].classList.toggle('bg-orange');
    }
}

document.querySelector('.b-8').onclick = f8;


//  Task 9
// Let's complicate the previous problems. Using a loop, we will attach a click event to the .out-9 blocks. When clicked, the f9 function should be executed.
// The function should add the .bg-orange class to the .out-9 that was clicked.

function f9() {
    this.classList.add('bg-orange');
}

let div9 = document.querySelectorAll('.out-9');

for (let i = 0; i < div9.length; i++) {
    div9[i].onclick = f9;
}


//  Task 10
// Let's complicate the previous problems. Using a loop, we will attach a click event to the .out-10 blocks. When clicked, the f10 function should be executed.
// The function should toggle the .bg-orange class to the .out-10 that was clicked.

let div10 = document.querySelectorAll('.out-10');

function f10() {
    this.classList.toggle('bg-orange');
}

for (let i = 0; i < div10.length; i++) {
    div10[i].onclick = f10;
}



//  Task 11
// Button .b-11, runs the f11 function. The function creates a div with text 25 via createElement and adds it via append to .out-11.


function f11() {
    const out = document.querySelector('.out-11');
    let div = document.createElement('div');
    div.textContent = 25;
    out.append(div);

}

document.querySelector('.b-11').onclick = f11;

//  Task 12
// Add a button .b-12 that runs the f12 function. The function creates a div with text 12 through createElement and adds the class bg-12 to it.
// The created div is added to out-12.


function f12() {
    const out = document.querySelector('.out-12');
    let div = document.createElement('div');
    div.classList.add('bg-12');
    div.textContent = 12;
    out.append(div);
}

document.querySelector('.b-12').onclick = f12;

//  Task 13
// Button .b-13, runs the f13 function. The function creates a div with the pushMe text via createElement and adds the bg-orange class to it.
// Also, an onclick event is added to the created div, upon which the f13_1 function is executed. The created div is added to .out-13.

function f13() {
    const out = document.querySelector('.out-13');
    let div = document.createElement('div');
    div.textContent = 'pushMe';
    div.classList.add('bg-orange');
    div.onclick = f13_1;
    out.append(div);
}

function f13_1() {
    document.querySelector('.out-13-1').innerHTML += this.innerHTML;
}


document.querySelector('.b-13').onclick = f13;

//  Task 14
// Button .b-14, runs the f14 function. The function creates a div with text 14 via createElement and adds the .bg-orange class to it.
// The created div is added to .out-14 using append.


function f14() {
    let div = document.createElement('div');
    div.classList.add('bg-orange');
    div.textContent = 14;
    document.querySelector('.out-14').append(div);

}

document.querySelector('.b-14').onclick = f14;

//  Task 15
// Button .b-15, which runs the f15 function. The function creates a div with text 15 via createElement and adds the .bg-orange class to it.
// The created div is added before .out-15 using before.

function f15() {
    let div = document.createElement('div');
    div.classList.add('bg-orange');
    div.textContent = 15;
    document.querySelector('.out-15').before(div);
}

document.querySelector('.b-15').onclick = f15;

//  Task 16
// Кнопкa .b-16, которая запускает функцию f16. Функция создает через createElement div c текстом 16 и добавляет ему класс .bg-orange. 
// Созданный div добавляется после .out-16 с помощью after.

function f16() {
    let div = document.createElement('div');
    div.classList.add('bg-orange');
    div.textContent = 16;
    document.querySelector('.out-16').after(div);
}

document.querySelector('.b-16').onclick = f16;

//  Task 17
// Button .b-17, which runs the f17 function. The function creates a div with text 17 via createElement and adds the class .bg-orange to it.
// The created div replaces .out-17 using replaceWith.

function f17() {
    let div = document.createElement('div');
    div.classList.add('bg-orange');
    div.textContent = 17;
    document.querySelector('.out-17').replaceWith(div);
}

document.querySelector('.b-17').onclick = f17;

//  Task 18
// Button .b-18, which runs the f18 function.
// The function using getAttribute receives the data-b attribute from paragraph .p-18 and outputs it to .out-18.

function f18() {
    let attr = document.querySelector('.p-18').getAttribute('data-b');
    document.querySelector('.out-18').innerHTML = attr;
}

document.querySelector('.b-18').onclick = f18;

//  Task 19
// Button .b-19, which runs the f19 function.
// The function using getAttribute receives the data-b attribute from paragraphs p-19 and outputs it to .out-19 separated by a space.
// Note that there is more than one .p-19 element.

function f19() {
    const items = document.querySelectorAll('.p-19');
    const out = document.querySelector('.out-19');
    let x = '';
    for (let i = 0; i < items.length; i++) {
        x += items[i].getAttribute('data-b') + ' ';
    }
    out.textContent = x;
}

document.querySelector('.b-19').onclick = f19;

//  Task 20
// Button .b-20, which runs the f20 function. The function uses setAttribute to assign the title="go" attribute to div.out-20.
// Please note that the attribute can only be seen using web developer tools.

function f20() {
    document.querySelector('.out-20').setAttribute('title', 'go');
}

document.querySelector('.b-20').onclick = f20;