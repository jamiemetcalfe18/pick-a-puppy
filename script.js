// Defines what category we're choosing and updates the webpage with this. 
// ********************************
// 1. Customize these with your own category and items! 
// ********************************
//Jamie Metcalfe 3/1/2023 - 3/8/2023

let what = "puppy"; //CATEGORY - Change me!
document.querySelector("#what").innerText = what;

// Defines our options to choose from - change these Strings in the array to something you want to choose from!
let options = [
  "labrador retriever",
  "pitbull",
  "dalmatian",
  "german shepard",
  "siberian husky",
  "bloodhound",
  "poodle"
];
const optionsList = document.querySelector("#options");

// ********************************
// 2. Alphabetize the options list 
// ********************************
// Your code here:
options.sort();

// ********************************
// 3. Make the options list use title case 
// ********************************
// The first letter of each word should be capitalized. For 2 bonus points: Make it skip words like "and", "a", "the", "to", etc.
// Your code here:
const capOptions = options.map(word => word.charAt(0).toUpperCase() + word.slice(1));
// console.log(capOptions); <- just extra code to test

// Don't code #3 past this point.
// This forEach loop renders our options in the webpage. It creates <li></li> elements, assigns them an id,
capOptions.forEach((option, index) => {
  const listItem = document.createElement("li");
  listItem.innerText = option;
  listItem.id = `item-${index}`;
  optionsList.append(listItem);
});

// ********************************
// 4. Write a function that accepts a max numbers as a parameter and returns a random number between 0 and that number. This function used properly will help you in part five! 
// ********************************
// Your code here:
function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

// ********************************
// 5. Make it so that when someone clicks the "choose" button, a random item in the list gets highlighted with a different background color. Hint: you might want to keep in mind #4, take a peak at the forEach loop and how it renders our options 
// ********************************
// Your code here:
            //commented out so # 6 works
//const chooseButton = document.querySelector("button");
//chooseButton.addEventListener("click", highlightRandomOption);
  //function that highlights a random option from the list
//function highlightRandomOption() {
  //const randomIndex = getRandomNumber(options.length);
 //const listItem = document.querySelector(`#item-${randomIndex}`);
  //highlighterr
  //listItem.classList.add("highlighted");
//}

// ********************************
// 6. (Optional Bonus) Oops! Refactor your code to not update the background color directly but to instead add/remove the class "choice" so that each time the button is clicked, the previously chosen item returns to normal, and a new item is selected (10 bonus points).
// ********************************
// Your code here:

const chooseBtn = document.querySelector("button");
const listItems = optionsList.querySelectorAll("li");

chooseBtn.addEventListener("click", () => {
  const previousChoice = optionsList.querySelector(".choice");
  if (previousChoice) {
    previousChoice.classList.remove("choice");
  }
  const randomIndex = getRandomNumber(options.length - 1);
  const randomListItem = optionsList.querySelector(`#item-${randomIndex}`);
  randomListItem.classList.add("choice");
});