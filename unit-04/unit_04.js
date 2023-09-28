// Task 1
// When you click on .b-1, run f1, which prints the number 1 in .out-1.

function f1() {
    document.querySelector('.out-1').textContent = 1;
}

document.querySelector('.b-1').onclick = f1;

// Task 2
// When you click on .i-2, run f2, which prints the number 2 in .out-2.
// i.e. as you can see, we can put a click on any element.

function f2() {
    document.querySelector('.out-2').textContent = 2;
}

document.querySelector('.i-2').onclick = f2;

// Task 3
// When you click on .p-3, run f3, which prints the number 3 in .out-3.
// i.e. as you can see, we can put a click on any element.

function f3() {
    document.querySelector('.out-3').textContent = 3;
}

document.querySelector('.p-3').onclick = f3;

// Task 4. 
// When button .b-4 is clicked, function f4 is run.
// The function checks the state of .i-4 and if it's checked it outputs true, if it's not selected it outputs false.
// Output everywhere in tasks, where not otherwise specified, is carried out in div.out - task number.
// In this case, div.out-4

function f4() {
    const out4 = document.querySelector('.out-4');
    const i4 = document.querySelector('.i-4');
    if(i4.checked) {
        out4.textContent = true;
    } else {
        out4.textContent = false;
    }
}   

document.querySelector('.b-4').onclick = f4;

// Task 5.
// When button .b-5 is clicked, function f5 is run.
// The function checks the state of .i-5 and if it is checked - displays the value of this element, if not selected - false.
// Output everywhere in tasks, where not otherwise specified, is carried out in div.out - task number. In this case div.out-5

function f5() {
    const out5 = document.querySelector('.out-5');
    const i5 = document.querySelector('.i-5');
    if(i5.checked) {
        out5.textContent = i5.value;
    } else {
        out5.textContent = false;
    }
}

document.querySelector('.b-5').onclick = f5;


// Task 6. 
// On button click, output value from input.i-6 to div.out-6.
// Note that even a hidden hidden input is not a hindrance to us.

function f6() {
    document.querySelector('.out-6').textContent = document.querySelector('.i-6').value;
}

document.querySelector('.b-6').onclick = f6;

// Task 7.
// When the button is clicked, display in div.out-71 the value written in input .i-7.
// In .out-72 print 1 if password length is greater than or equal to 6 or 0 if less.
// Use length to count the number of characters in a string.

const out71 = document.querySelector('.out-71');
const out72 = document.querySelector('.out-72');
const i7 =  document.querySelector('.i-7');

function f7() {
	let x = i7.value;
	out71.textContent = x;
	if(x.length >= 6) {
		out72.textContent = 1;
	} else {
		out72.textContent = 0;
	}
}

document.querySelector('.b-7').onclick = f7;
document.querySelector('.b-7').onclick = f7;

// Task 8.
// Pressing the .b-8 button triggers the f8 function.
// The function uses innerHTML to create a new div in .out-8 with class js2 and text new div.
// Clicked multiple times? Create multiple times!

const out8 = document.querySelector('.out-8');

function f8() {
    out8.innerHTML += '<div class="js2">new div</div>';
}

document.querySelector('.b-8').onclick = f8;

// Task 9
// When the .b-9 button is pressed, run the f9 function.
// The function checks the checked element .r-9.
// If the element is checked (checked) then prints the value of the radiobutton to .out-9.
// If not selected - displays false.

const out9 = document.querySelector('.out-9');
const r9 = document.querySelector('.r-9');

function f9() {
	out9.textContent = r9.checked ? r9.value : false;
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// When the .b-10 button is pressed, run function f10.
// The function gets the color value from .i-10 and colors the style.background of the .out-10 element with that color.

const out10 = document.querySelector('.out-10');
const i10 = document.querySelector('.i-10');

function f10() {
    out10.style.background = i10.value;
}

document.querySelector('.b-10').onclick = f10;


// Task 11
// When the .b-11 button is pressed, function f11 is run.
// The function gets the color from .i-111 and assigns it as value to the .i-112 element.
// i.e. after pressing the button, the selected colors in the first and second input will be the same.

const i111 = document.querySelector('.i-111');
const i112 = document.querySelector('.i-112');
function f11() {
    i112.value = i111.value;
}

document.querySelector('.b-11').onclick = f11;

// Task 12
// When the .b-12 button is pressed, function f12 is run. The function outputs the date from .i-12 to out-12.


const i12 = document.querySelector('.i-12');
const out12 = document.querySelector('.out-12');
function f12() {
    out12.textContent = i12.value;
}

document.querySelector('.b-12').onclick = f12;

// Task 13
// When changing the position of the .i-13 slider, output its value to out-13.
// Pay attention to the event.

const i13 = document.querySelector('.i-13');
const out13 = document.querySelector('.out-13');
function f13() {
    out13.textContent = i13.value;
}

document.querySelector('.i-13').oninput = f13;

// Task 14
// On button click, output text from textarea .t-14 to .out-14.

const t14 = document.querySelector('.t-14');
const out14 = document.querySelector('.out-14');

function f14() {
    out14.textContent = t14.value;
}

document.querySelector('.b-14').onclick = f14;

// Task 15
// When the .b-15 button is clicked, the function should output the text from .i-15 to textarea .t-15 and to .out-15.

const i15 = document.querySelector('.i-15');
const t15 = document.querySelector('.t-15');
const out15 = document.querySelector('.out-15');
function f15() {
    t15.value = i15.value;
    out15.textContent = i15.value;
}

document.querySelector('.b-15').onclick = f15;

// Task 16
// When the button is clicked, .b-16 output the value of the selected option from .s-16 to .out-16.

const s16 = document.querySelector('.s-16');
const out16 = document.querySelector('.out-16');
function f16() {
    out16.textContent = s16.value;

}

document.querySelector('.b-16').onclick = f16;

// Task 17
// When changing the selected value of .s-17, output to .out-17 the value of the selected option from .s-17.

const s17 = document.querySelector('.s-17');
const out17 = document.querySelector('.out-17');

function f17() {
	out17.textContent = s17.value;
}

document.querySelector('.s-17').onchange = f17;

// Task 18
// When changing the selected value at s-18, get the value of the selected option from it and assign the given value to input .i-18.

const s18 = document.querySelector('.s-18');
const i18 = document.querySelector('.i-18');

function f18() {
	i18.value = s18.value;
}

document.querySelector('.s-18').onchange = f18;

// Task 19
// A div.out-19 has been created on the page. On button click, get the text from it and assign .i-19 to the value of the element.

const out19 = document.querySelector('.out-19');
const i19 = document.querySelector('.i-19');

function f19() {
	i19.value = out19.textContent;
}

document.querySelector('.b-19').onclick = f19;

// Task 20
// You have two selects. Write code that, when select .s-201 changes, will similarly change the selected option in .s-202.

const s201 = document.querySelector('.s-201');
const s202 = document.querySelector('.s-202');
function f20() {
    s202.value = s201.value;
}

document.querySelector('.s-201').onchange = f20;