
// Task 1 
// Add a click event to the .div-1 block and launch function t1 on click.
// The function should return and display the contents of the block (text only).
// Output is carried out in out-1.

function t1() {
    document.querySelector('.out-1').textContent = this.textContent;
    return this.textContent;
}
document.querySelector('.div-1').onclick = t1;



// Task 2 
// Add a click event to the .div-2 block and launch function t2 on click.
// The function should return true or false depending on whether the alt key is pressed or not at the time of click.
// Also, display the result. The output is carried out in out-2.

function t2(e) {
    document.querySelector('.out-2').innerHTML = e.altKey;
    return e.altKey;

}
document.querySelector('.div-2').onclick = t2;



// Task 3 
// Add a click event to the .div-3 block. When clicked, increase the block width by 5px.
// Each click increases the width by 5px. 10 clicks - at 50px. Output the width in out-3.

let w3 = 75;
function t3(e) {
    w3 += 5;
    e.target.style.width = w3 + 'px';
    document.querySelector('.out-3').innerHTML = w3;
}
document.querySelector('.div-3').onclick = t3;



// Task 4 
// Add a double-click event to the .div-4 block and, on double-click, launch the t4 function.
// The function should return and display the contents of the block (text only).
// Output is carried out in out-4.

function t4(e) {
    document.querySelector('.out-4').textContent = e.target.textContent;
    return this.textContent;
}
document.querySelector('.div-4').addEventListener('dblclick', t4);



// Task 5 
// There is a block .div-5.active.
// Add a double-click event to it, which will remove the active class if it exists and add it if there is no such class.

function t5(e) {
    e.target.classList.toggle('active');
}
document.querySelector('.div-5').addEventListener('dblclick', t5);



// Task 6 
// There is a .div-6 block and a .ul-6 list.
// When double clicking on a block, hide .ul-6 if it is shown and show if it is hidden.
// Hiding and showing is done by adding - removing the .hide class

function t6() {
    document.querySelector('.ul-6').classList.toggle('hide');
}
document.querySelector('.div-6').addEventListener('dblclick', t6);



// Task 7 
// There is a .div-7 block.
// When you right-click on a block, add the .active class to it.
// When clicked again, delete.

function t7() {
    document.querySelector('.div-7').classList.toggle('active');
}
document.querySelector('.div-7').addEventListener('contextmenu', t7);



// Task 8 
// There is a checkbox .ch-8.
// Attach an onchange event to it, which disables right-clicking on the document
// if checkbox is selected and disables if not selected.

function t8(e) {
    if (e.target.checked) {
        document.body.oncontextmenu = () => false;
    } else {
        document.body.oncontextmenu = '';
    }
}
document.querySelector('.ch-8').addEventListener('change', t8);



// Task 9 
// There is a .div-9 block. Inside the block is image 1.png. When you right-click, change the image to 2.png.
// I hope you can guess to change only the src of the image?

function t9(e) {
    e.target.src = 'img/2.png';
}
document.querySelector('.div-9 img').addEventListener('contextmenu', t9);



// Task 10 
// There is a .div-10 block. Inside the block is image 1.png.
// When hovering the mouse (mouseenter) - change the image to 2.png.

function t10(e) {
    e.target.src = 'img/2.png';
}
document.querySelector('.div-10 img').addEventListener('mouseenter', t10);



// Task 11 
// There is a .div-11 block. Inside the block is image 1.png. When you hover the mouse (mouseenter) - change the image to 2.png.
// When moving the mouse away - mouseleave - return the original image.

function t11(e) {
    e.target.src = 'img/2.png';
}
function t112(e) {
    e.target.src = 'img/1.png';
}
const elem = document.querySelector('.div-11 img');
elem.addEventListener('mouseenter', t11);
elem.addEventListener('mouseleave', t112);



// Task 12 
// There is a .div-12 block. Add a mousedown event to it - when the mouse button is pressed - add the active class to it.

let t12 = (e) => {
    e.target.classList.add('active');
}
document.querySelector('.div-12').addEventListener('mousedown', t12);



// Task 13 
// There is a .div-13 block. Add a mousedown event to it - when the mouse button is pressed - add the active class to it.
// Add a mouseup event to it - when the mouse is released - remove the active class.

let t131 = (e) => {
    e.target.classList.add('active');
}
let t132 = (e) => {
    e.target.classList.remove('active');
}
const elem2 = document.querySelector('.div-13');
elem2.addEventListener('mousedown', t131);
elem2.addEventListener('mouseup', t132);



// Task 14 
// There is a .div-14 block.
// When button b-14 is pressed, add an onclick event to it - which, when clicked, we add the active class to the div-14 block.

function t14() {
    document.querySelector('.div-14').addEventListener('click', function (e) {
        e.target.classList.add('active');
    });
}
document.querySelector('.b-14').onclick = t14;



// Task 15 
// There is a .div-15 block.
// Add a move event to it. Each time you move the mouse, increase the number inside by 1.

let x = 0;
function t15(e) {
    x++;
    e.target.textContent = x;

}
document.querySelector('.div-15').addEventListener('mousemove', t15);



// Task 16 
// There is a .div-16 block.
// Add a move event to it. With each mouse movement, increase the block width by 1px.

let w16 = 75;
function t16(e) {
    w16++;
    e.target.style.width = w16 + 'px';
}
const div16 = document.querySelector('.div-16');
div16.addEventListener('mousemove', t16);



// Task 17 
// There are two buttons - b-17_on and b-17_off.
// Write functions t17On and t17Off that enable and disable the move event in task 16.

function t17On() {
    div16.addEventListener('mousemove', t16);
}
function t17Off() {
    div16.removeEventListener('mousemove', t16);
}
document.querySelector('.b-17_on').addEventListener('click', t17On);
document.querySelector('.b-17_off').addEventListener('click', t17Off);



// Task 18 
// There is a div-18 block.
// Write a function t18 that displays its width in this block during the onmouseenter event.

function t18(e) {
    e.target.textContent = e.target.offsetWidth;
}
document.querySelector('.div-18').addEventListener('mouseenter', t18);



// Task 19 
// There is a div-19 block.
// Write a function t19 that displays its classes in this block during the onmouseout event.

function t19(e) {
    e.target.textContent = e.target.className;
}
document.querySelector('.div-19').addEventListener('mouseout', t19);



// Task 20 
// There is a progress element.
// Write a function t20 that increases its value by 1 on each mousemove event inside progress.

function t20(e) {
    e.target.value += 1;
}
document.querySelector('progress').addEventListener('mousemove', t20);