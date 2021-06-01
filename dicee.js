
var randNum1 = Math.floor(Math.random()*6) + 1; //floor for rounding to integer, 1 is to set limit into 6 as per 6=[5]+1
var randImg1 = 'images/dice' + randNum1 + '.png'; //based on the dice image name, set a random range number between dice1 - dice6.
document.querySelectorAll('img')[0].setAttribute('src', randImg1);//DOM manipulation to insert/change value inside the src attributes.

var randNum2 = Math.floor(Math.random()*6) + 1; 
var randImg2 = 'images/dice' + randNum2 + '.png';
document.querySelectorAll('img')[1].setAttribute('src', randImg2);

//display winner 
if (randNum1 > randNum2){
    document.querySelector('h1').innerHTML = '🚩Player 1 WINS !!!';
    document.querySelector('p').innerHTML = 'Finish Him !';
} else if (randNum2 > randNum1){
    document.querySelector('h1').innerHTML = 'Player 2 WINS !!!🚩';
    document.querySelector('p').innerHTML = 'Finish Him !';
} else{
    document.querySelector('h1').innerHTML = "⚔️It's a DRAW !⚔️";
    document.querySelector('p').innerHTML = 'Roll em up !';
}

