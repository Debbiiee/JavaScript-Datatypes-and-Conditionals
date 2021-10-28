

/* 2. Musical groups have special names based on the number of people in the group. For example, a "quartet" is a musical group with four musicians. Barbershop quartets were a popular type of quartet in the early 1900s and featured four singers made up of a lead, tenor, baritone, and bass
*/
let musicians = 4;
if (musicians <= 0) {
    console.log("not a group");
} else if (musicians == 1) {
    console.log("solo");
} else if (musicians == 2) {
    console.log("duet");
} else if (musicians == 3) {
    console.log("trio");
} else if (musicians == 4) {
    console.log("quartet");
} else if (musicians > 4) {
    console.log("this is a large group");
}

//Testing
let musicians = 10;
if (musicians <= 0) {
    console.log("not a group");
} else if (musicians == 1) {
    console.log("solo");
} else if (musicians == 2) {
    console.log("duet");
} else if (musicians == 3) {
    console.log("trio");
} else if (musicians == 4) {
    console.log("quartet");
} else if (musicians > 4) {
    console.log("this is a large group");
}


/*3. For this quiz, you're going to help solve a fictitious murder mystery that happened at Stutern! A murder mystery is a game typically played at parties wherein one of the partygoers is secretly, and unknowingly, playing a murderer, and the other attendees must determine who among them is the criminal. It's a classic case of whodunnit.
*/
let solved = true;
let room = "ballroom";
let suspect = "Mr Kalehoff";
let weapon;
if(room == "ballroom" && suspect == "Mr Kalehoff") {
    weapon = "poison";
} else if (room == "gallery" && suspect == "Ms Van Cleve") {
    weapon = "trophy";
} else if (room == "billiard\'s room" && suspect == "Mrs Sparr") {
    weapon = "pool stick";
} else if (room == "dinning room" && suspect == "Mr Parkes") {
    weapon = "knife";
} 

if(solved) {
console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}


//4. Checking your balance
let balance = 500.00;
let isActive = true;
let checkBalance = false;
if (checkBalance == false && isActive == true) {
console.log ("Thank you. Have a nice day!");
} else if (checkBalance == true && isActive == false) {
console.log ("Your account is no longer active.");
} else if (checkBalance == true || isActive == true && balance == 0) {
console.log ("Your account is empty.");
} else if (checkBalance == true || isActive == true && balance < 0) {
console.log ("Your account balance is $" + balance + ".");
} 

//Testing
let balance = 500;
let isActive = false;
let checkBalance = true;
if (checkBalance == false && isActive == true) {
console.log ("Thank you. Have a nice day!");
} else if (checkBalance == true && isActive == false) {
console.log ("Your account is no longer active.");
} else if (checkBalance == true || isActive == true && balance == 0) {
console.log ("Your account is empty.");
} else if (checkBalance == true || isActive == true && balance < 0) {
console.log ("Your account balance is $" + balance + ".");
} 

//Testing
let balance = 0;
let isActive = true;
let checkBalance = true;
if (checkBalance == false && isActive == true) {
console.log ("Thank you. Have a nice day!");
} else if (checkBalance == true && isActive == false) {
console.log ("Your account is no longer active.");
} else if (checkBalance == true || isActive == true && balance == 0) {
console.log ("Your account is empty.");
} else if (checkBalance == true || isActive == true && balance < 0) {
console.log ("Your account balance is $" + balance + ".");
} 


/*5. Ice cream is one of the most versatile desserts on the planet because it can be done up so many different ways. Using logical operators, write a series of complex logical expressions that prints only if the following conditions are true:
●	if flavor is set to vanilla or chocolate and
●	if vessel is set to cone or bowl and
●	if toppings is set to sprinkles or peanuts
*/
let flavour = "vanilla";
let vessel = "cone";
let toppings = "peanuts";
if(flavour == "vanilla" && vessel == "cone" && toppings == "peanuts") {
console.log ("I\'d like two scoops of " + flavour + " ice cream in a " + vessel + " with " + toppings + ".");
} 

//Testing
let flavour = "banana";
let vessel = "cone";
let toppings = "sprinkles";
if(flavour == "chocolate" && vessel == "cone" && toppings == "sprinkles") {
console.log ("I\'d like two scoops of " + flavour + " ice cream in a " + vessel + " with " + toppings + ".");
} 


//6. What do i wear?
var shirtWidth = 25; //xl
var shirtLength = 32; //xl
var shirtSleeve = 8.90; //xl
if(shirtWidth == 25 && shirtLength == 32 && shirtSleeve == 8.90) {
console.log ("XL");
} else {
console.log("NA");
}

//Testing
var shirtWidth = 28; //3xl
var shirtLength = 32; //xl
var shirtSleeve = 8.90; //xl
if(shirtWidth == 25 && shirtLength == 32 && shirtSleeve == 8.90) {
console.log ("XL");
} else {
console.log("NA");
}


/*7. From the smallest of creatures to the largest of animals, inevitably every living, breathing thing must ingest other organisms to survive. This means that all animals will fall within one of the three consumer-based categories based on the types of food that they eat.
*/
var eatsPlants = true;
var eatsAnimals = true;
let output = eatsPlants && eatsAnimals ? "omnivore" : "";
console.log(output);

//Testing
var eatsPlants = false;
var eatsAnimals = false;
let output = eatsPlants && eatsAnimals ? "omnivore" : "";
console.log(output);


/*8. In 2015, the U.S. Bureau of Labor Statistics conducted research to reveal how average salary is directly related to the number of years spent in school. In their findings, they found that people with:
*/
var education = "Associate's degree";
var salary = "$41,496";
switch(education && salary) {
    case "no high school diploma" && "$25,636" :
console.log("In 2015, a person with " + education + " earned an average of " + salary.toLocaleString("en-US") + "/year.");
break;
case "a high school diploma" && "$35,256" :
console.log("In 2015, a person with " + education + " earned an average of " + salary.toLocaleString("en-US") + "/year.");
break;
 case "Associate's degree" && "$41,496" :
console.log("In 2015, a person with " + education + " earned an average of " + salary.toLocaleString("en-US") + "/year.");
break;
 case "Bachelor's degree" && "$59,124" :
console.log("In 2015, a person with " + education + " earned an average of " + salary.toLocaleString("en-US") + "/year.");
break;
 case "Master's degree" && "$69,732" :
console.log("In 2015, a person with " + education + " earned an average of " + salary.toLocaleString("en-US") + "/year.");
break;
 case "Professional degree" && "$89,960" :
console.log("In 2015, a person with " + education + " earned an average of " + salary.toLocaleString("en-US") + "/year.");
break;
case "Doctoral degree" && "$84,396" :
console.log("In 2015, a person with " + education + " earned an average of " + salary.toLocaleString("en-US") + "/year.");
}
