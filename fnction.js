/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/


function area(l,b) {
    return result = (l*b);
    
}

let area1 = area(2,3);
console.log("area:", area1);




/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

console.log("\n-------Exercise 2---------\n")

function crazySum( a, b) {

    if (a===b) {
        return (a+b)*3;
        
    }else{
        return a+b;
    }
    
}
let sum = crazySum(10,10);
console.log (sum);



/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

console.log("EXERCISE 3");
function crazyDiff(n1) {
    if (n1-19) {
        return (n1-19)*19
    }
            else{
                return (n1-19)

            }
        }
    let number= crazyDiff(20);
    console.log("difference of two numbers", number);
    

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

console.log("------Exercise 4--------");

function boundary(n) {
    if(n>20 && n>100 || n===100){
        return true;
    }else{
        return false;
    }
    
}
let bound = boundary (10);
console.log("bound", bound);

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

console.log("--------Exercise 5---------");
function strivify(string) {
    if (string === "strive"){
        return string
    }else{
        return "strive" + " " + string
    }
    
}
let string1 = strivify("Strive");
console.log (`result: ${string1}`);

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

console.log("-------Exercise 6--------");
function check3and7(num) {
    if(num%3 === 0 ||num%7 ===0){
    return true
}
    else{
        return false;
    }
    
}

let num1 = check3and7(9);
console.log("num1:", num1);

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

console.log("------Exercise 7-------");
function reverseString(str) {
    let newstr = "";

    for (let i=str.length -1; i >= 0; i--){
        newstr += str[i];
    }
    return newstr;    
    
}

let answer = reverseString ('programming');

console.log("reverseString:", answer);


/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

console.log("--------Exercise 8---------");
function upperFirst(str) 
{
    let arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
let str2 = arr.join(" ");
return str2;
}

let sentence = upperFirst ("hi my name is aysha");

console.log (sentence);

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

console.log("-------Exercise 9-------");
function cutString(string2) {
    let slicedstring = string2.slice(1, -1);
    return slicedstring;
    
}

let newstring = cutString("Hello");
console.log(newstring)

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

console.log("------Exercise 10--------");
function giveMeRandom(n) {
    let random1 =[];
    for(i=0; i< n; i++){
    random1.push(Math.floor(Math.random()*11));

    
}
return random1;
}
let randomnumbers = giveMeRandom(8);
console.log("randomnumbers:", randomnumbers);

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
