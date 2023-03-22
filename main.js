// Subject Data Types.Operators
// Task 1
// Request user’s data and show the results by using prompt() and alert() dialogs.

    // question 1
// 1. Request the birth year from the user and show his age. Use a constant in this code.


const CURRENT_YEAR = 2023; // set a constant for the current year
let birthYear = prompt("What year were you born in?"); // prompt the user for their birth year
let age = CURRENT_YEAR - birthYear; // calculate the user's age
console.log("You are " + age + " years old."); // display the result in the console


    // question 2
// 2. Ask the user for the radius of a circle and display its area.


let radius = prompt("Enter the radius of the circle:");
let area = Math.PI * radius ** 2;
console.log("The area of the circle is: " + area);


    // qustion 3
// 3. Ask the user for the distance in km between two cities and the amount of time they have to reach their destination. Calculate the speed they need to travel to arrive on time.


let distance = prompt("Enter the distance between the two cities in kilometers:");
let time = prompt("Enter the amount of time you have to reach your destination in hours:");
let speed = distance / time;
console.log("You need to travel at a speed of " + speed + " km/hour to arrive on time.");


    // qustion 4
// Implement a currency converter. The user inputs dollars and the program converts it to euros. Store the currency rate in a constant.


const USD_TO_EUR_RATE = 0.85; // exchange rate from USD to EUR

function convertCurrency() {
  const dollars = parseFloat(prompt("Enter the amount in dollars:"));
  let euros = dollars * USD_TO_EUR_RATE;
  euros = euros.toFixed(2); // round to 2 decimal places
  console.log(`${dollars} USD = ${euros} EUR`);
}

convertCurrency();


    // qustion 5
// *The user enters the capacity of a flash drive in GB. The program should calculate how many files of size 820 MB can be saved on the flash drive.
    

const FILE_SIZE_MB = 820; // file size in MB

function calculateFilesOnFlashDrive() {
  const flashDriveCapacityGB = parseFloat(prompt("Enter the capacity of the flash drive in GB:"));
  const flashDriveCapacityMB = flashDriveCapacityGB * 1024; // convert GB to MB
  const numFiles = Math.floor(flashDriveCapacityMB / FILE_SIZE_MB);
  console.log(`A flash drive with ${flashDriveCapacityGB} GB capacity can hold ${numFiles} files of size ${FILE_SIZE_MB} MB.`);
}

calculateFilesOnFlashDrive();

