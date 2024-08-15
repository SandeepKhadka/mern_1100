/* 
    a) Arithmetic Operator
        +, -, *, /, %, (), **

    b) Increment and Decrement operator
        ++, --
    
    c) Assignment Operator
        =, +=, -=, *=, /=, %=, **=
    
    d) Concatenation operator
        + , ``

    e) Comparison operator
        ==, ===, !=, !==, >, <, >=, <=
    
    f) Logical Operator
        && , !, ||

    g) Conditional Operator or Ternary Operator

        (expression) ? true : false
        eg..
            let a = 10
            a > 10 ? "Print a is greater" : a > 5 ? "Print a is greater than 5 but less that 10" : "Print a is more smaller than 5"

    Task - 
        let percentage = 45;

        >=80 => First Div with Distinction
        >=60 && <80 => First Div
        >=45 && <60 => Second Div
        >=35 && <45 => Third Div
        <35 => Sorry! You are failed.

    Task Answer -

        let percentage = 37;
        percentage >=80 ? "First Div with Distinction" : (percentage >=60 && percentage <80) ? "First Div" : (percentage >=45 && percentage <60 ) ? "Second Div" : (percentage >=35 && percentage < 45) ? "Third Div" : "You are failed"



*/

// output - ram sharma
let first = "ram";
let last = "sharma";

let fullName = first + " " + last; // prints ramsharma

let fullName2 = `${first} ${last}`

console.log(fullName2);

// Assignment Operator Example
// let a = 10
// a += 2 // 12
// a = a + 2 // 14

// a -= 3 // 11
// a = a - 3 // 8

// Increment and Decrement Operator example
// let a = 10
// a++ // 11
// ++a // 12

// a-- // 11
// --a // 10
// console.log(a);
