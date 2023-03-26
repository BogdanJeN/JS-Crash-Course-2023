/* 

TOPIC: Logic Operators. Selection Statements. Loops
Task 1:

You should decide which selection operator is better to use for each task: if, switch or
?: ternary operator.

1. Ask the user for a number from 0 to 9 and display the special character located on
this key (1-!, 2-@, 3-#, etc.).

*/


let number = prompt("Enter a number 0 to 9");

let num = parseInt(number);

switch (num) {
    case 0:
        alert(")");
        break;
    case 1:
        alert("!");
        break;
    case 2:
        alert("@");
        break;
    case 3:
        alert("#");
        break;
    case 4:
        alert("$");
        break;
    case 5:
        alert("%");
        break;
    case 6:
        alert("^");
        break;        
    case 7:
        alert("&");
        break;
    case 8:
        alert("*");
        break;
    case 9:
        alert("(");    
    default:
        alert("Invalid input.");
}

