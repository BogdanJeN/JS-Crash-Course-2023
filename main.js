/* 
// Subject Data Types.Operators
// Task 1
// Request user’s data and show the results by using prompt() and alert() dialogs.

    // question 1 ------------------------------- 
// 1. Request the birth year from the user and show his age. Use a constant in this code.


const CURRENT_YEAR = 2023; // set a constant for the current year
let birthYear = prompt("What year were you born in?"); // prompt the user for their birth year
let age = CURRENT_YEAR - birthYear; // calculate the user's age
console.log("You are " + age + " years old."); // display the result in the console


    // question 2 ------------------------------- 
// 2. Ask the user for the radius of a circle and display its area.


let radius = prompt("Enter the radius of the circle:");
let area = Math.PI * radius ** 2;
console.log("The area of the circle is: " + area);


    // question 3 ------------------------------- 
// 3. Ask the user for the distance in km between two cities and the amount of time they have to reach their destination. Calculate the speed they need to travel to arrive on time.


let distance = prompt("Enter the distance between the two cities in kilometers:");
let time = prompt("Enter the amount of time you have to reach your destination in hours:");
let speed = distance / time;
console.log("You need to travel at a speed of " + speed + " km/hour to arrive on time.");


    // question 4 ------------------------------- 
// Implement a currency converter. The user inputs dollars and the program converts it to euros. Store the currency rate in a constant.


const USD_TO_EUR_RATE = 0.85; // exchange rate from USD to EUR

function convertCurrency() {
  const dollars = parseFloat(prompt("Enter the amount in dollars:"));
  let euros = dollars * USD_TO_EUR_RATE;
  euros = euros.toFixed(2); // round to 2 decimal places
  console.log(`${dollars} USD = ${euros} EUR`);
}

convertCurrency();


    // question 5 ------------------------------- 
// The user enters the capacity of a flash drive in GB. The program should calculate how many files of size 820 MB can be saved on the flash drive.
    

const FILE_SIZE_MB = 820; // file size in MB

function calculateFilesOnFlashDrive() {
  const flashDriveCapacityGB = parseFloat(prompt("Enter the capacity of the flash drive in GB:"));
  const flashDriveCapacityMB = flashDriveCapacityGB * 1024; // convert GB to MB
  const numFiles = Math.floor(flashDriveCapacityMB / FILE_SIZE_MB);
  console.log(`A flash drive with ${flashDriveCapacityGB} GB capacity can hold ${numFiles} files of size ${FILE_SIZE_MB} MB.`);
}

calculateFilesOnFlashDrive();
*/ 

    // additional question 1 ------------------------------- 
// Implement the kilometers to miles unit converter. The user inputs a value in km, and then the app displays this value in miles (1 km = 0,621371 miles). Use a constant here.


const KM_TO_MILES = 0.621371; // conversion factor

// ask user for input
const kmInput = prompt("Enter a distance in kilometers:");

// convert input to miles
const milesOutput = kmInput * KM_TO_MILES;

// display result to user
alert(`${kmInput} kilometers is equal to ${milesOutput} miles.`);

    // additional question 2 -------------------------------
// Ask the user for the current time (hours, minutes). Calculate how many hours and minutes are left until the end of the day. 


// Ask the user for the current time
const currentHours = parseInt(prompt("Please enter the current hours (0-23):"));
const currentMinutes = parseInt(prompt("Please enter the current minutes (0-59):"));

// Calculate the time left until the end of the day
const hoursLeft = 23 - currentHours;
const minutesLeft = 59 - currentMinutes;

// Output the result to the console
console.log(`There are ${hoursLeft} hours and ${minutesLeft} minutes left until the end of the day.`);

    // additional question 3 -------------------------------
// Ask the user for the 3-digit number and display it backwards. Try to use the % (division remainder) operator.
 

// Ask the user for a 3-digit number
const number = parseInt(prompt("Please enter a 3-digit number:"));

// Extract the digits using the % operator
const digit1 = number % 10;
const digit2 = Math.floor((number % 100) / 10);
const digit3 = Math.floor(number / 100);

// Concatenate the digits in reverse order
const reversedNumber = digit1.toString() + digit2.toString() + digit3.toString();

// Output the result to the console
console.log(`The number ${number} backwards is ${reversedNumber}.`);