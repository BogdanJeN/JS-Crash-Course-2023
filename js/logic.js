// TOPIC: Logic Operators. Selection Statements. Loops
// Task 1:
// You should decide which selection operator is better to use for each task: if, switch or ?: ternary operator.

// 1. Ask the user for a number from 0 to 9 and display the special character located on this key (1-!, 2-@, 3-#, etc.).

/*
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
/*

// 2. Ask the user for the year and check whether it is a leap year or not. A leap year is either a multiple of 400 or a multiple of 4 but not a multiple of 100.


// Ask user for input
let userInput = prompt("Enter a year:");

// Convert input to integer
let year = parseInt(userInput);

// Check if year is a leap year
if (year % 400 === 0) {
  alert(year + " is a leap year.");
} else if (year % 4 === 0 && year % 100 !== 0) {
  alert(year + " is a leap year.");
} else {
  alert(year + " is not a leap year.");
}


// 3. Request a date (day, month, year) and display the next date. Consider the possibility of moving to the next month, year, as well as leap year.

/*

// Prompt the user to enter a date
const dateStr = prompt('Enter a date (DD/MM/YYYY format):');

// Parse the date string into day, month, and year
const [day, month, year] = dateStr.split('/').map(Number);

// Calculate the number of days in the current month
const daysInMonth = new Date(year, month, 0).getDate();

// Check if the date is valid
if (day < 1 || day > daysInMonth || month < 1 || month > 12 || year < 1) {
  alert('Invalid date!');
} else {
  // Calculate the next day
  let nextDay = day + 1;
  let nextMonth = month;
  let nextYear = year;

  // Check if the next day is in the next month or year
  if (nextDay > daysInMonth) {
    nextDay = 1;
    nextMonth++;

    // Check if the next month is in the next year
    if (nextMonth > 12) {
      nextMonth = 1;
      nextYear++;
    }
  }

  // Check if the current year is a leap year
  const isLeapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

  // Check if the next day is Feb 29 in a leap year
  if (nextDay === 29 && nextMonth === 2 && !isLeapYear) {
    nextDay = 1;
    nextMonth = 3;
  }

  // Convert the next day, month, and year to a string in DD/MM/YYYY format
  const nextDateStr = `${nextDay.toString().padStart(2, '0')}/${nextMonth.toString().padStart(2, '0')}/${nextYear}`;

  // Display the next date to the user
  alert(`The next date is ${nextDateStr}`);
}

*/

// Task 2
// You should decide which type of a loop is better to use for each task: while , do while or for .

// 1. Calculate the sum of all numbers in the range specified by the user.

/*
// Prompt the user to enter the range
const start = Number(prompt('Enter the starting number:'));
const end = Number(prompt('Enter the ending number:'));

// Initialize the sum to zero
let sum = 0;

// Calculate the sum using a for loop
for (let i = start; i <= end; i++) {
  sum += i;
}

// Display the sum to the user
alert(`The sum of numbers from ${start} to ${end} is ${sum}.`);
*/

// 2. Determine the number of digits in the entered number.

// Prompt the user to enter a number
const number = Number(prompt('Enter a number:'));

// Initialize the digit counter to zero
let digits = 0;

// Calculate the number of digits using a while loop
let temp = number;
while (temp !== 0) {
  digits++;
  temp = Math.floor(temp / 10);
}

// Display the number of digits to the user
alert(`The number of digits in ${number} is ${digits}.`);

// question 3 coming soon                              :)
