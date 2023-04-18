// ------------- classes -------------
// OOP - Object-Oriented Programming
// class = object prototype


class ExtendedDate extends Date {

    getFormattedDate() {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
  
      const day = this.getDate();
      const month = monthNames[this.getMonth()];
  
      return `${day} ${month}`;
    }
  
    
    isFutureDate() {
      const currentDate = new Date();
      return this > currentDate;
    }
  
   
    isLeapYear() {
      const year = this.getFullYear();
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }
  
    
    getNextDate() {
      const currentDate = this.getDate();
      this.setDate(currentDate + 1);
      return this;
    }
  }
  
  
  const currentDate = new ExtendedDate();
  
  console.log("Current local time: " + currentDate.getFormattedDate());
  console.log("Is future date? " + currentDate.isFutureDate());
  console.log("Is leap year? " + currentDate.isLeapYear());
  
  const nextDate = currentDate.getNextDate();
  console.log("Next date: " + nextDate);
  