
// Question 1

let speed =90;

if (speed > 60) {
    alert("YOU ARE OVERSPEEDING");
} else {
    alert("NOT");
}

// Question 2


let islogin = "true";
if (islogin) {
    alert("Welcome,you!")
} else {
    alert("Please log in to continue")
}
// Question 3


let temp = 41;
if (temp > 40){
    alert("IMPORTANT ANNOUNCEMENT!!! UIT is closed tomorrow due to heat wave");
}
let account= 1000000;
if (account > 100){
    alert("Congratulations! You are a millionaire")
    } else {
       alert( "I'm sorry, you are not a millionaire");
    }

    // Question 4


let carElectric = "true";
if(carElectric =="false") {
    alert("made By Tesla")
} else {
    alert("Not MAde By Tesla")
}
// Question 5


let userScore = 40;
let highScore = 20;
let result = userScore;
let need = highScore - userScore;

if(userScore > highScore) {
    alert("Congratulations!! Your new high score is") + alert ("40")
} else{
    alert("Try Again. You just need <the number of more points needed to beat the high score> to win!") + alert ("20");
}
// Question 7


let number = 100;
let evenNumber = 100 % 2 ;
if (evenNumber == 0){
    alert("This is EVEN")
} else{
    alert("This is ODD");
}
// Question 8


let balance= -10;
if (balance < 1){
    alert("Moazziz Sarif, aap ka mojooda balance iss call k lye naa kaafi hai. Please re-charge karain")
} else if (balance <=10){
    alert("Moazziz sarif, aap ka balance khatam honay wala hai ");
    alert("Ring Ring");
} else {
    alert("Ring Ring");
}
// Question No 9

let Math = 10;
let english = 8;
let computer = 20;
if (Math >= 10 || english >= 8 ||computer >= 20){
    alert("Passed");
} else {
    alert("Failed");
}
// Question 10.


// let Math = 10;
// let english = 8;
// let computer = 20;
// if (Math > 10 || english > 8 ||computer >20){
//     alert("Passed");
// } else {
//     alert("Failed");
// }

// Question 11

const costOfApple = 10;
const costOfBanana = 8;
const costOfMangoes = 15;

let noOfApple = 5;
let noOfBanana = 2;
let noOfMangoes = 3;
const aliBalance = 100;
let totalCost = noOfApple * costOfApple + noOfMangoes * costOfMangoes + noOfBanana * costOfBanana;
if  (totalCost <= aliBalance ){
    console.log("Shopping Success");
} else{
    console.log("SHOPPING FAILED");
}
