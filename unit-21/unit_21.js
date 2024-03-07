
// Task 1
// Create a div-1 block. Add a touchstart event to it.
// Output the word touch in out-1 if the event fires.

function t1() {
    document.querySelector('.out-1').innerHTML = 'touch';
}
document.querySelector('.div-1').addEventListener('touchstart', t1);



// Task 2
// Create a div-2 block. Add a touchstart event to it.
// Print in out-2 the number of times the event is triggered.

let count2 = 0;
function t2() {
    count2++;
    document.querySelector('.out-2').innerHTML = count2;
}
document.querySelector('.div-2').addEventListener('touchstart', t2);



// Task 3
// Create a block div-3_1 and div-3_2. Add a touchstart event to them.
// Output in out-3 the number of block 1 or 2 on which the event was triggered.

let out3 = document.querySelector('.out-3');
function t3(e) {
    if (e.target.className === 'div-3_2 block') {
        out3.innerHTML = 2;
    } else if (e.target.className === 'div-3_1 block') {
        out3.innerHTML = 1;
    }
}
document.querySelector('.div-3_1').addEventListener('touchstart', t3);
document.querySelector('.div-3_2').addEventListener('touchstart', t3);



// Task 4
// Create a div-4 block. And button b-4.
// When the button is clicked, add an ontouchstart event to div-4.
// When an event occurs, the text touch is output to out-4.

let div4 = document.querySelector('.div-4');
function out4() {
    document.querySelector('.out-4').innerHTML = 'touch';
}
function t4() {
    div4.addEventListener('touchstart', out4);
}
document.querySelector('.b-4').addEventListener('click', t4);



// Task 5
// There is a button b-5. When it is clicked, clear the ontouchstart event on div-4.

function t5() {
    div4.removeEventListener('touchstart', out4);
}
document.querySelector('.b-5').addEventListener('click', t5);



// Task 6
// Add an ontouchend event on div-4. When it fires, output the word touchend to out-6.

function t6() {
    document.querySelector('.out-6').innerHTML = 'touch';
}
div4.addEventListener('touchend', t6);



// Task 7
// There is a div-7 block. Add a touch event, when triggered, color the block red.

function t7(e) {
    e.target.style.background = 'red';
}
document.querySelector('.div-7').addEventListener('touchstart', t7);



// Task 8
// There is a div-8 block. Add a touch event to it,
// which, when triggered, colors the block with a random color from the array a8=[red, green, blue, orange, pink, yellow]

const a8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow'];
function t8(e) {
    let x = Math.floor(Math.random() * a8.length);
    e.target.style.background = a8[x];
}
document.querySelector('.div-8').addEventListener('touchstart', t8);



// Task 9
// There is a div-9 block. Add ontouch event. Output the number of simultaneous touches in out-9.

function t9(e) {
    document.querySelector('.out-9').innerHTML = e.touches.length;
}
document.querySelector('.div-9').addEventListener('touchstart', t9);



// Task 10
// There is a div-10 block. Add a touchmove event to it. When an event is triggered, increase its width by 1.

let x10 = 75;
function t10(e) {
    x10++;
    e.target.style.width = x10 + 'px';
}
document.querySelector('.div-10').addEventListener('touchmove', t10);



// Task 11
// There is a div-11 block. Add a touch event to it. When triggered, output the radius of the event radiusX, radiusY.

function t11(e) {
    console.log(e);
    document.querySelector('.out-11').innerHTML = 'X:' + e.touches[0].radiusX + ', Y:' + e.touches[0].radiusY;
}
document.querySelector('.div-11').addEventListener('touchstart', t11);



// Task 12
// Mini project. Check out the layout in task 12.
// Examine the html code inside div-12-wrapper.
// 1. Add a click, touch event to the nex button so that when the event occurs, the nextFunction function is launched and the image next to the selected active-img class (frame) becomes active. Accordingly, a frame appears on the active image, and the rest are deprived of a frame.
// 2. Add a click, touch event to the prev button so that when the event occurs, the prevFunction function is launched and the image up to the one selected by the active-img class (frame) becomes active. Accordingly, a frame appears on the active image, and the rest are deprived of a frame.
// 3. Consider edge effects - when we reach the end or beginning, pressing the button should cause the frame to move to the beginning or end of the images.
// 4. Add a reset button (resetFunction), which when pressed resets the active image to zero.
// 5. Add the following to all actions - in the image img-12-max, replace src with the active one. Those. an event occurred - the main picture was replaced.

const images = document.querySelectorAll('.img-12-min');
let count = 0;

const next = document.querySelectorAll('.next');
next[0].onclick = nextFunction;

const prev = document.querySelectorAll('.prev');
prev[0].onclick = prevFunction;

const reset = document.createElement('button');
reset.innerText = 'Reset';
reset.classList.add('button-primary', 'reset');
document.querySelector('.next').after(reset);

reset.onclick = resetFunction;


function nextFunction() {
    if (count < images.length - 1) {
        count++;
    } else {
        count = 0;
    }
    myImg(images);
}

function prevFunction() {
    if (count > 0) {
        count--;
    } else {
        count = images.length - 1;
    }
    myImg(images);
}

function resetFunction() {
    count = 0;
    myImg(images);

}

function myImg(list) {
    list.forEach(item => item.classList.remove('active-img'));
    list[count].classList.add('active-img');
    document.querySelector('.img-12-max').src = list[count].src;
}