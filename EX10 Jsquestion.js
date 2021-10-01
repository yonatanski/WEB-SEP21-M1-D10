// JS EXERCISES

//         21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"
            console.log("\n----------------->Excercise 21 JS<-----------------")
            let x = "john"
            let y = " Doe"
            console.log( x + "<>" + y)
//         22) Create an object with properties such name, surname, email
console.log("\n----------------->Excercise 22 JS<-----------------")
              let myObject ={
                  name :"Yonatan",
                  surname :"Deribe",
                  emial: "phpcodeyg@gmail.com"
              }
              console.log('This "My Object" object',myObject)

//         23) Delete the email property from the previously created object
console.log("\n----------------->Excercise 23 JS<-----------------")
     delete myObject.emial
     console.log(`This "My Object" object after deleting the Email property:${myObject}`)
//         24) Create an array with 10 strings in it
console.log("\n----------------->Excercise 24 JS<-----------------")
       let arrayTenString =["one","two","three","four","five","six","Seven","Eight","Nine","ten"]
       console.log (arrayTenString)
       // with for loop
       let myArray = [];

       for (let i = 0; i < 10; i++) {
         myArray.push("New value: " + i);
       }
          // with for loop
    
//         25) Print in the console every string from the previous array
console.log("\n----------------->Excercise 25 JS<-----------------")
    for (let i = 0; i < arrayTenString.length; i++) {
        text = arrayTenString[i] + "<br>";
        console.log(text)
    }
  
      //         26) Create an array with 100 random numbers in it
      console.log("\n----------------->Excercise 26 JS<-----------------")
      let randomNumbers = [];
      for (let i = 0; i < 100; i++) {
        randomNumbers.push(Math.round(Math.random() * 100));
      }

      console.log("Here its the 100 random Array",randomNumbers);
//         27) Write a function to get the maximum and minimum values from the previously created array
console.log("\n----------------->Excercise 27 JS<-----------------")
        // Bit cpomplicated
          // Bit cpomplicated
            // Bit cpomplicated
            console.log("\n----------------->I will figer out later may be<-----------------")



//         28) Create an array of arrays, in which every array has 10 random numbers
console.log("\n----------------->Excercise 28 JS<-----------------")
let arrayOfArrays = [];

      for (let i = 0; i < 10; i++) {
        let innerArray = [];
        for (let j = 0; j < 10; j++) {
          innerArray.push(Math.round(Math.random() * 10));
        }
        arrayOfArrays.push(innerArray);
      }

      console.log(arrayOfArrays)
//         29) Create a function that gets 2 arrays as parameters and returns the longest one
console.log("\n----------------->Excercise 28 JS<-----------------")
    // Bit cpomplicated
          // Bit cpomplicated
            // Bit cpomplicated
            console.log("\n----------------->I will figer out later may be<-----------------")
//         30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values
console.log("\n----------------->Excercise 28 JS<-----------------")
  // Bit cpomplicated
          // Bit cpomplicated
            // Bit cpomplicated
            console.log("\n----------------->I will figer out later may be<-----------------")

//         DOM EXERCISES
console.log("\n-----------------> DOM EXERCISES<-----------------")

//         31) Get the element with an id of "container" from the page
console.log("\n----------------->Excercise 31 DOM<-----------------")
   let divparagraph = document.getElementsByClassName('container')[0]
//         32) Get every <td> element from the page
console.log("\n----------------->Excercise 31 DOM<-----------------")
    let tableData = document.querySelectorAll('td')
//         33) Use a loop for printing the text inside of every <td> element in the page

//         34) Write a function to change the heading of the page
//         35) Write a function to add an extra row to the table
//         36) Write a function to add a class of "test" to each row in the table
//         37) Write a function to add a red background to every link in the page
//         38) Console log "Page loaded" when the page is correctly loaded
//         39) Write a function to add new items to a unordered list
//         40) Write a function to empty a list

//         EXTRA EXERCISES

//         41) Add an eventListener to show an alert when the cursor hovers a link, displaying its href property
//         42) Create a button that will hide every image on the page when clicked
//         43) Create a button that will hide or show the table on the page when clicked
//         44) Write a function for calculating the sum of every number inside all the table cells (if their content is numeric)
//         45) Delete the last letter from the heading each time the user clicks on it
//         46) Change the background color of a <td> if the user clicks on it
//         47) Add a delete button at the bottom of the table, when clicked it should delete a random <td>
//         48) Add automatically a pink border to a cell when the mouse hovers it
//         49) Write a function to create a table with 4 rows and 3 columns programmatically and add it to the bottom of the page
//         50) Write a function to remove the last table from the page

        