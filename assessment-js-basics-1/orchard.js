///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/
let totalAcres = 0

for (let index = 0; index < fujiAcres.length; index++) {
    totalAcres=totalAcres+fujiAcres[index];
    
}
for (let index = 0; index < galaAcres.length; index++) {
    totalAcres=totalAcres+galaAcres[index];
    
}
for (let index = 0; index < pinkAcres.length; index++) {
    totalAcres=totalAcres+pinkAcres[index];
    
}

console.log(totalAcres)


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/
let averagefujiAcres = 15
let averagegalaAcres = 26
let averagepinkAcres = 25
for (let index = 0; index < fujiAcres.length; index++) {
    averageDailyAcres=averagefujiAcres/fujiAcres[index];
}
for (let index = 0; index < galaAcres.length; index++) {
    averageDailyAcres=averagegalaAcres/galaAcres[index];
    
}
for (let index = 0; index < pinkAcres.length; index++) {
    averageDailyAcres=averagepinkAcres/pinkAcres[index];
    
}

console.log(averageDailyAcres)





// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

while (acresLeft>0) {
    days++;
    acresLeft=acresLeft-9
}

console.log(days)

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

let fujiTons = []
let galaTons = []
let pinkTons = []

let applesperacre = 97.5
let galaapple = 169
let pinkapple = 162.5
//in terminal it says NaN so i put let there to let the questions make more sense, need some help here
for (let index = 0; index < fujiAcres.length; index++) {
    let applesperacre = (fujiAcres+6.5)
    
}
fujiTons.push(97.5)
for (let index = 0; index < galaAcres.length; index++) {
    let galaapple = (galaAcres*6.5)

}
galaTons.push(169)
for (let index = 0; index < pinkAcres.length; index++) {
    let pinkapple = (pinkAcres*6.5)
    
}
pinkTons.push(162.5)
console.log(applesperacre)
console.log(galaapple)
console.log(pinkapple)



// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/
let applelbsfuji = 0
let applelbsgala = 0
let applelbspink = 0
for (let index = 0; index < fujiAcres.length; index++) {
    applelbsfuji = fujiTons*2000

}
for (let index = 0; index < galaAcres.length; index++) {
    applelbsgala = galaTons*2000
    
}
for (let index = 0; index < pinkAcres.length; index++) {
    applelbspink = pinkTons*2000
    
}

 let fujiPounds = []
let galaPounds = []
let pinkPounds = []

fujiPounds.push(195000)
galaPounds.push(338000)
pinkPounds.push(325000)

console.log(applelbsfuji)
console.log(applelbsgala)
console.log(applelbspink)



// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

let fujimoney = 0
let galamoney = 0
let pinkmoney = 0
for (let index = 0; index < fujiAcres.length; index++) {
    fujimoney= fujiPounds*.89
    
}
for (let index = 0; index < galaAcres.length; index++) {
    galamoney= galaPounds*.64
    
}
for (let index = 0; index < pinkAcres.length; index++) {
    pinkmoney= pinkPounds*.55
    
}

let fujiProfit = []
let galaProfit = []
let pinkProfit = []

fujiProfit.push(173550)
galaProfit.push(216320)
pinkProfit.push(178750)

console.log(fujimoney)
console.log(galamoney)
console.log(pinkmoney)





// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/
let totalProfit = 0
    totalProfit=fujimoney+galamoney+pinkmoney

    console.log(totalProfit)