/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];


/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function (max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}



/*******************
 * QUERY SELECTORS *
 *******************/
// First Dice 
let image_d6 = document.querySelector('#d6-roll');
let mean_d6 = document.querySelector('#d6-rolls-mean');

// Second Dice 
let double_d6_1 = document.querySelector('#double-d6-roll-1');
let double_d6_2 = document.querySelector('#double-d6-roll-2');
let mean_double = document.querySelector("#double-d6-rolls-mean");


// Third Dice
let image_d12 = document.querySelector("#d12-roll");
let mean_d12 = document.querySelector("#d12-rolls-mean");


// Fourth Dice
let image_d20 = document.querySelector("#d20-roll")
let mean_d20 = document.querySelector("#d20-rolls-mean")


// Reset Button 
let resetButton = document.querySelector('#reset-button')


/*******************
 * CODE *
 *******************/
//First Dice 
image_d6.src = './images/start/d6.png'

//Second Dice 
double_d6_1.src = './images/start/d6.png'
double_d6_2.src = './images/start/d6.png'


// Third Dice
image_d12.src = './images/start/d12.jpeg'


// Fourth Dice
image_d20.src = './images/start/d20.jpg'


/*******************
 * EVENT LISTENERS *
 *******************/
// First Dice 

image_d6.addEventListener('click', function () {
    console.log('D6 clicked')
    mean_d6.innerText = getRandomNumber(6);
    image_d6.src = `./images/d6/${mean_d6.innerText}.png`
    sixes.push(mean_d6.innerText)
    mean_d6.innerText = mean1();
    console.log(sixes)
})

//Second Dice
double_d6_1.addEventListener('click', function () {
    console.log(`First Dice clicked`);
    mean_double.innerText = getRandomNumber(6)
    double_d6_1.src = `./images/d6/${mean_double.innerText}.png`
    doubleSixes.push(mean_double.innerText)
    console.log(doubleSixes)
})

double_d6_2.addEventListener('click', function () {
    console.log(`Second Dice clicked`);
    mean_double.innerText = getRandomNumber(6)
    double_d6_2.src = `./images/d6/${mean_double.innerText}.png`
    doubleSixes.push(mean_double.innerText)
    mean_double.innerText = mean2();
    console.log(doubleSixes)
})




// Third Dice

image_d12.addEventListener('click', function () {
    console.log('D12 clicked');
    mean_d12.innerText = getRandomNumber(12);
    image_d12.src = `./images/numbers/${mean_d12.innerText}.png`
    twelves.push(mean_d12.innerText)
    mean_d12.innerText = mean3();
    console.log(twelves)
})



// Fourth Dice

image_d20.addEventListener('click', function () {
    console.log('D20 clicked');
    mean_d20.innerText = getRandomNumber(20);
    image_d20.src = `./images/numbers/${mean_d20.innerText}.png`
    twenties.push(mean_d20.innerText)
    mean_d20.innerText = mean4();
    console.log(twenties)
})



// Reset Button 

resetButton.addEventListener('click', resetFunction);


/******************
 * RESET FUNCTION *
 ******************/

function resetFunction() {

    console.log(`Reset Button clicked!`)


    sixes = [];
    doubleSixes = [];
    twelves = [];
    twenties = [];

    image_d6.src = './images/start/d6.png';
    image_d12.src = './images/start/d12.jpeg'

    mean_d6.innerText = 'N/A';
    mean_d12.innerText = 'N/A';
    mean_double.innerText = 'N/A';
    mean_d20.innerText = 'N/A';
}


/****************
 * MATH SECTION *
 ****************/

// First Dice

function mean1() {
    let result = 0
    for (let i = 0; i < sixes.length; i++) {
        result += sixes[i] / sixes.length
    }
    return result
}

mean1();

// Second Dice

function mean2() {
    let result = 0;
    for (let i = 0; i < doubleSixes.length; i++) {
        result += doubleSixes[i] / doubleSixes.length
    }
    return result
}


// Third Dice

function mean3() {
    let result = 0;
    for (let i = 0; i < twelves.length; i++) {
        result += twelves[i] / twelves.length
    }
    return result
}

mean3();

// Fourth Dice

function mean4() {
    let result = 0;
    for (let i = 0; i < twenties.length; i++) {
        result += twenties[i] / twenties.length
    }
    return result
}

mean4();