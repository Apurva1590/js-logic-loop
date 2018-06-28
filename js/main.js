console.log("Yeah!");

var myFname = "Apurva"; //string
let toes = 10; //number
const codes = true;   // boolen   you cannot overwrite because it is const
var interests = ['food', 10, false]; //array
 moreInfo = {  //object
    color: 'red',
    cars: 1,
    interest: ['cheese', 'ham']
};


//function that returns something to do with later on 

function topSpeed() {
    return 75;
}

console.log(topSpeed() * 2);


//functions can accept arguments that are then used as variables inside the function
function addTen(numberOne) {
    return numberOne + 10 ;
}

console.log(addTen(4));  //invoking addTen, with a value of numberOne argument

//function that does something immediately
function updateHeading(randomString) {
    document.getElementById('head').innerText = randomString;
}

updateHeading('I love cheese');

//function taking two argument

function fullName (fname, lname) {
  //  console.log(fname + lname);
  document.getElementById('full-name').innerText = fname + ' ' + lname;
}

fullName('Apurva', 'Porwal');

//Anon function stored in a variable
var myGreatFunction = function() {
    return 'Steve';
}

//console.log(myGreatFunction());

document.getElementById('friends-name').innerText = myGreatFunction();

//Declare a function that takes no arguments but outputs something to the console or DOM. Invoke it after it has been declared

function getData(){
    return 'Nik';
}
console.log(getData());
document.getElementById('abc').innerText = getData();


/* Declare a function that takes your first name as an argument and console.log's or updates the DOM with your name. Invoke it after it has been declared */

function firstName(fName){
    return fName;
}

console.log(firstName('Apurva')); 
document.getElementById('first-name').innerText = firstName('Apurva');

//conducts test using if statement
if (5 > 2) {
    //you will end up here if the result is true
    console.log('its true');
}

if (topSpeed() > 100) {
    //you will end up here if the result is true
    console.log('its true');
}
else {
    console.log('we are here b/s the above condition is not true');
}

/* Write javascript that checks if a variable is less than 10. If it is, alert() that the variable is less than 10. If it is not, alert() what the variable was and that it was greater than 10. */


var num = 20;
    if (num < 10) {
       console.log("Variable is less than 10");
    }
    else {
        //es6 inroduces 'templates'
        //console.log('you entered ${num} and it is greater than 10');
       console.log(  "The variable was " + num + " and it was greater than 10 ");
    }

  // write a similar program to check if a string stored in a variable is the same as another string    
  var str = 'abc';
    if (str === 'efg') {
       console.log("Same string");
    }
    else {
       console.log(  "The string  " + str + " not equal to efg ");
    }

//if else-if else
var cheese = 'swiss';
if(cheese === 'cheddar') {
    console.log('In if ');
}
else if(cheese === 'chat') {
    console.log('In else-if ');
}
else {
    console.log('In else '); 
}

//accessing items in am array, using their index #
var cartoons = ['garfield', 'snoopy', 'popeye'];
console.log(cartoons[1]);
console.log(cartoons.length);

// Getting an items index If you're unsure of an items index

var snoopyPosition = cartoons.indexOf('snoopy');
console.log(snoopyPosition);
console.log(cartoons[snoopyPosition]);