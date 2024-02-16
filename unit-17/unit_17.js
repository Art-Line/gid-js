// use these variables
let a1_res = [],
    a2_res = [],
    a3_res = [],
    a4_res = [],
    a5_res = [],
    a6_res = [],
    a7_res = [],
    a8_res = [],
    a11_res = [],
    a15_res = [];

// do these variables need to be cleared when the function runs? Yes, but specifically to cleanse.


// Task 1 ============================================
// Array a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11] - use map to iterate through the array and create a new array
// a1_res where add the elements of this array multiplied by 2. Return the array a1_res.

let a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];

function t1() {
    a1_res = a1.map(elem => {
        return elem * 2;
    });
    return a1_res;
}

document.querySelector('.b-1').onclick = () => {
    console.log(t1());
}

// Task 2 ============================================
// Array a2= [2,3,4,5,10,11,12] - using map, iterate through the array and create an array a2_res where add the elements of this array raised to the second power.
// Return array a2_res. Actions should be triggered when function t2 is called.

let a2 = [2, 3, 4, 5, 10, 11, 12];

function t2() {
    a2_res = a2.map(function (item) {
        return item ** 2;
    });
    return a2_res;
}

document.querySelector('.b-2').onclick = () => {
    console.log(t2());
}


// Task 3 ============================================
// Array a3 = [4,"3",6,7,"12",34,"56",78,90,11] - using map, iterate through the array and create an array a3_res where add all the elements converted to a number .
// Return a3_res.
// Actions should be triggered when function t3 is called.

let a3 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];

function t3() {
    a3_res = a3.map(function (item) {
        return Number(item);
    });
    return a3_res;
}

document.querySelector('.b-3').onclick = () => {
    console.log(t3());
}


// Task 4 ============================================
// Function t4 should use filter to filter the array t4 and create a new array a4_res,
// where to add only numbers from the t4 array.
// The function should return a4_res.

let a4 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];

function t4() {
    a4_res = a4.filter(item => {
        if (typeof (item) === "number") {
            return true;
        }
    });
    return a4_res;
}

document.querySelector('.b-4').onclick = () => {
    console.log(t4());
}



// Task 5 ============================================
// Given an array a5 = [3, 14, 15, 92]. Using filter, iterate through the array and create a5_res,
// which contains only even numbers from a5.
// Return a5_res. Actions should be triggered when function t5 is called.
// Check that the function works correctly with strings, i.e. '6' should not be included in the resulting array.

let a5 = [3, 14, 15, 92, '6'];

function t5() {
    a5_res = a5.filter(item => {
        if ((typeof (item) === 'number') && (item % 2 === 0)) {
            return true;
        }
    });
    return a5_res;
}

document.querySelector('.b-5').onclick = () => {
    console.log(t5());
}



// Task 6 ============================================
// Given an array a6 = [3, 14, 15, 92, "6", "5", "hello", 32].
// C, using a filter, iterate through the array a6 and create an array a6_res, which contains only the numbers a6,
// which are greater than 14. Return a6_res. The parts are related to the t6 functions.

let a6 = [3, 14, 15, 92, "6", "5", "hello", 32];

function t6() {
    a6_res = a6.filter(item => {
        if ((typeof (item) === 'number') && (item > 14)) {
            return true;
        }
    });
    return a6_res;
}

document.querySelector('.b-6').onclick = () => {
    console.log(t6());
}


// Task 7 ============================================
// Array a7 = ['Alto`s Adventure', 'Angry Birds 2', 'Anno 2205', 'Assassin`s Creed Chronicles'].
// Using map, iterate through array a7 and create a7_res, which contains the elements of array a7 converted to lowercase.
// Actions should be triggered when function t7 is called. The function must return a7_res.

let a7 = ['Alto`s Adventure', 'Angry Birds 2', 'Anno 2205', 'Assassin`s Creed Chronicles'];

function t7() {
    a7_res = a7.map(item => {
        return item.toLowerCase();
    })
    return a7_res;
}

document.querySelector('.b-7').onclick = () => {
    console.log(t7());
}

// Task 8 ============================================
// Array a8 = [3, 14, 15, 92, 7, 32, 59].
// Using a loop or a method - decide for yourself, iterate over the a8 array and add the indices of even elements to a8_res.
// That is for this example, the result of the function in a8_res should be [1, 3, 5].
// The function should return a8_res.

let a8 = [3, 14, 15, 92, 7, 32, 59];

function t8() {
    a8.forEach((element, index) => {
        if (element % 2 == 0) {
            a8_res.push(index);
        }
    });
    return a8_res;
}

document.querySelector('.b-8').onclick = () => {
    console.log(t8());
}



// Task 9 ============================================
// Array a9 = ['Quantum Break', 'Gears of War 4', 'Mass Effect: Andromeda', 'Far Cry Primal'].
// Using forEach, iterate through the a9 array and convert all entries in the array to lowercase.
// Actions should be triggered when function t9 is called. The function should return a9.

let a9 = ['Quantum Break', 'Gears of War 4', 'Mass Effect: Andromeda', 'Far Cry Primal'];

function t9() {
    let arr = [];
    a9.forEach(item => {
        arr.push(item.toLowerCase());
    })
    a9 = arr;
    return a9;
}

document.querySelector('.b-9').onclick = () => {
    console.log(t9());
}



// Task 10 ============================================
// Array a10 = [2, 13, 14, -7, 9, 5, 0, -2, 14].
// Using forEach, iterate through the a10 array and replace the elements that are less than zero with 0.
// Return a10. Actions should be triggered when function t10 is called.
// For this example the result should look like this: [2, 13, 14, 0, 9, 5, 0, 0, 14]

let a10 = [2, 13, 14, -7, 9, 5, 0, -2, 14];

function t10() {
    let arr = [];
    a10.forEach(item => {
        (item < 0) ? arr.push(0) : arr.push(item);
    });
    a10 = arr;
    return a10;

}

document.querySelector('.b-10').onclick = () => {
    console.log(t10());
}

// Task 11 ============================================
// Array a11 = [2, 13, 14, -7, 9, 5, 0, -2, 14].
// Using filter, iterate through the a11 array and create a new a11_res array
// where add only those array elements whose INDEX is even. Return a11_res.

let a11 = [2, 13, 14, -7, 9, 5, 0, -2, 14];

function t11() {
    a11_res = a11.filter((item, index) => {
        if (index % 2 === 0) {
            return true;
        }
    });
    return a11_res;

}

document.querySelector('.b-11').onclick = () => {
    console.log(t11());
}

// Task 12 ============================================
// a12 = [2, 13, 14, -7, 9, 5, 0, -2, 14].
// Using the Array.isArray method, determine whether the variable a12 is an array.
// If yes, then the function returns true, if not, false.

let a12 = [2, 13, 14, -7, 9, 5, 0, -2, 14];
// a12 = 8; 

function t12() {
    return Array.isArray(a12);
}

document.querySelector('.b-12').onclick = () => {
    console.log(t12());
}

// Task 13 ============================================
// Given an array a13 = [2, 13, 14, -7, 9, 5, 0, -2, 14].
// Using the includes method, the t13 function must determine whether the value from the variable a13_num is in the array.
// If yes, then the function returns true, if not, false.

let a13 = [2, 13, 14, -7, 9, 5, 0, -2, 14];
let a13_num = 9;


function t13() {
    return a13.includes(a13_num);
}

document.querySelector('.b-13').onclick = () => {
    console.log(t13());
}

// Task 14 ============================================
// Array a14 = ['c', 'C', 'd', 'e', 'E'].
// Using the includes method, the t14 function must determine whether the value from the a14_sym variable is in the array.
// If yes, then the function returns true, if not, false.
// Note that the function must search case-insensitively.
// That is if a14_sym contains the string 'd' then return true, but also return true for the string 'D'.

let a14 = ['c', 'C', 'd', 'e', 'E'];
let a14_sym = 'e';


function t14() {
    let arr = a14.map(item => {
        return item.toLowerCase();
    })
    a14 = arr;
    return a14.includes(a14_sym.toLowerCase());

}

document.querySelector('.b-14').onclick = () => {
    console.log(t14());
}

// Task 15 ============================================
// Using the filter method, the t15 function should create based on it an array a15_res containing records of only those users
// passport number (pnum) which is not an empty string and the length of the number is 6 characters. The function must return a15_res.*/
// in this example you need to get the result:
/*
 [
    {
        "name" : "ivanov",
        "pnum" : 'tr7862'
    },
    {
        "name": "sedanov",
        "pnum": 'im7961'
    },
]
*/

let a15 = [
    {
        "name": "ivanov",
        "pnum": 'tr7862'
    },
    {
        "name": "petrov",
        "pnum": ''
    },
    {
        "name": "sedanov",
        "pnum": 'im7961'
    },
    {
        "name": "dou",
        "pnum": 'tr786259'
    },
];


function t15() {
    a15_res = a15.filter(item => {
        if (item.pnum !== '' && item.pnum.length === 6) {
            return true;
        }
    });

    return a15_res;
}

document.querySelector('.b-15').onclick = () => {
    console.log(t15());
}