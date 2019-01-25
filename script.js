// const myPet = {
//     name: "Scout",
//     species: "Black Labrador",
//     age: 11,
//     disposition: "dumb love",
//     likesToEat: ["dog food", "wood doors and floors", "lots of table scraps"],
//     nicknames: ["fuzzball", "chow hound", "idjit"],
//     hairLength: "medium",
//     onePersonDog: true 
// }

const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (mealParam){
        if (mealParam.fries) {
        // orders.push = orders `${mealParam}`
        console.log(`Here is your ${mealParam.sandwichType}, ${mealParam.drinkSize} drink, and fries.`);
        } else {
        console.log(`Here is your ${mealParam.sandwichType} and ${mealParam.drinkSize} drink.`)
        }
        // console.log(orders)
    }
}

const chickenComboMeal = 
{
    // mealType: "ChickenComboMeal",
    sandwichType: "Grilled Chicken Sandwich",
    fries: true,
    drinkSize: "medium",
}

const whopperComboMeal = 
{
    // mealType: "whopperComboMeal",
    sandwichType: "Whopper",
    fries: true,
    drinkSize: "medium",
}

const veggieBurgerMeal = 
{
    // mealType: "veggieBurgerMeal",
    sandwichType: "Veggie Burger",
    fries: false,
    drinkSize: "medium",
}

// // Place an order

restaurant.placeOrder(chickenComboMeal)
restaurant.placeOrder(whopperComboMeal)
restaurant.placeOrder(veggieBurgerMeal)


// Invoke the function to return the list of all orders

// Output all orders to the console using console.table()

// The object should have a property named orders that is an array. You will need to define this.

// Define a function to represent the behavior of placing an order. It should accept one argument named meal. This argument will be an object. There is starter code provided.

// Define a function to represent the behavior of getting all orders. It should return the order property (hint: this). You will need to define this.

// Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.

// Output all orders to the console using console.table()

// 1. Build three objects. Each one should represent an employee at the coffee shop.

// const jon = {
//     name: "Jon",
//     startDate: "01/02/2013",
//     fullOrPartTime: "Part Time",
//     jobTitle: "Cashier",
//     payRate: "$8.75/hr",
//     favoriteDrink: "Tea",
//     knownDrinks: "Tea"
// }
// const chad = {
//     name: "Chad",
//     startDate: "01/02/2012",
//     fullOrPartTime: "Full Time",
//     jobTitle: "CFO",
//     payRate: "$35,000/yr",
//     favoriteDrink: "Bourbon",
//     knownDrinks: "Whiskey Rocks"
// }
// const starbuck = {
//     name: "Starbucks",
//     startDate: "Long time ago",
//     fullOrPartTime: "Full Time",
//     jobTitle: "Coffee Destroyer",
//     payRate: "Billions per year",
//     favoriteDrink: "Anything with sugar",
//     knownDrinks: ["Capp", "Frapp", "Mocha", "Tea",],
//     makeCoffeeDrink: function (drinkParam) {
//         let sentenceToReturn = "No can do!"
//         for (let i = 0; i < this.knownDrinks.length; i++) {
//         if (drinkParam === this.knownDrinks[i]) {
//             sentenceToReturn = (`Here, ${this.name} made this ${drinkParam} just for you!`)
//         }   
//         console.log(sentenceToReturn)
//     }
// }}

// starbuck.makeCoffeeDrink("Yuengling")
// starbuck.makeCoffeeDrink("Capp")

// // 2. Each employee object should have the following properties:
// // - a name
// // - a startDate
// // - a jobTitle
// // - a payRate
// // - a favoriteDrink
// // - an array of drinks they know how to make

// // 2. Build another object called coffeeShopStaff

// const coffeeShopStaff = {
//     partTime: [jon, chad],
//     fullTime: [starbuck],
// }

// console.log (coffeeShopStaff)

// 3. This object should have two properties:
// - a property of fullTime that holds an array of full time staff members
// - a property of partTime that holds an array of part time staff members
// - Put two of your employee objects from steps 1 & 2 into the part time array. Put one of them in the full time array.


// 1. Remember your employee objects from up there? Give one of them a method called makeCoffeDrink
// 2. This method should accept a parameter of drink and return a string of "Here's your [drink]!" 
// 3. Call the method and pass in any drink (string) you want
// 4. Call the method (be sure to catch the returned string in a variable!)
// Bous: If you have time, refactor your method so that it checks to see if the employee knows how to make the drink (i.e. if it's in the array of drinks they know how to make). If they do, you should return the string from step 2. If not, you should return a string that says "No can do!"



// Your job is to define the different objects and arrays, their structure, and the corresponding properties for each, to represent the following information about Elizabeth's campaign.

// Her congressional district (you can use yours here)

const congDistr = "WV 2nd";

// Her platform statements for the following issues.
// Taxes
// Jobs
// Infrastructure
// Health care
// Crime and enforcement

let platTaxes = "";
let platJobs = "";
let platInfrastructure = "";
let platHealthCare = "";
let platCrime = "";

taxesStatement = (taxesParam) => {
    platTaxes += taxesParam
    console.log(platTaxes)
}
taxesStatement ("Taxes are too high!!!");

jobsStatement = (jobsParam) => {
    platJobs += jobsParam
    console.log(jobsParam)
}
jobsStatement ("We need more and better jeorghbs!"
)
infraStatement = (infraParam) => {
    platInfrastructure += infraParam
    console.log(platInfrastructure)
}
infraStatement ("Our roads and bridges are crumbling and putting you in danger!")

taxesStatement = (taxesParam) => {
    platTaxes += taxesParam
    console.log(platTaxes)
}
taxesStatement = (taxesParam) => {
    platTaxes += taxesParam
    console.log(platTaxes)
}
// URL for donation form

const donationURL = "";

// Calendar of events


// Volunteer information
// Name
// Address
// Email
// Phone number
// Availability
// What activities each one is willing to do (e.g. answering phone calls, taking polls, etc.)

let volArray = [
{   
    volName:"",
    volAddress:"",
    volEmail:"",
    volPhone:"",
    volAvail:"",
    volTasks:[],
}]

// Biography

const candBio = ""
// Image gallery
// Head shot
// Picture of family
// Picture of constituents
let imgGallery = [
{
    headShot:"",
    familyPic:"",
    constPics: [],
}]

// Mission statement

const missionStatement = "";

// URL for registering to vote

const voteRegURL = "";