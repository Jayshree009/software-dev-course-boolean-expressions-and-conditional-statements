/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

// Player inventory
let hasTorch = true;
let hasMap = false;
let hasSword = false;
let hasCompass = true;

console.log("You wake up in a dark forest. There are two paths ahead: one leading to the mountains and one to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'? ");

if (choice === "mountains") {
    if (hasTorch) {
        console.log("You safely navigate through the dark mountains.");
        const caveChoice = readline.question("You find a cave. Do you 'enter' or 'continue' your journey? ");
        
        if (caveChoice === "enter") {
            if (hasSword) {
                console.log("A wild beast attacks, but you defeat it with your sword and find treasure!");
            } else {
                console.log("A wild beast attacks! You have no weapon and must flee back to the forest.");
            }
        } else {
            console.log("You continue your journey and reach the mountain peak with a stunning view.");
        }
    } else {
        console.log("It's too dark to proceed. You decide to turn back.");
    }
} else if (choice === "village") {
    console.log("You arrive at a small village.");
    const villageChoice = readline.question("Do you visit the 'market' or the 'tavern'? ");
    
    if (villageChoice === "market") {
        console.log("You buy a sword for protection.");
        hasSword = true;
    } else if (villageChoice === "tavern") {
        console.log("You hear rumors about treasure hidden in the mountains.");
    }
} else {
    if (hasMap || hasCompass) {
        console.log("Using your map or compass, you find your way back to the village.");
    } else {
        console.log("You get lost in the forest and wander aimlessly.");
    }
}


/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/