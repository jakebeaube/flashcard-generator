//CLI

let inquirer = require("inquirer");
let basicCard = require("./basic.js");
let clozeCard = require("./cloze.js");

//using inquirer to make a main menu
function mainMenu(){
	"use strict";
	inquirer.prompt([
	{
		name: "option",
		type: "list",
		message: "What do you want to do?",
		choices: ["Make a new card", "Exit"]
	}
]).then(function(answers){
	if (answers.option === "Make a new card"){
		inquirer.prompt([
		{
			name: "type",
			type: "list",
			message: "What kind of card would you like to make?",
			choices: ["Regular Flash Card", "Cloze Flash Card"]

		}
	]).then(function(answers){
		if (answers.type === "Regular Flash Card"){
			makeBasicCard();
		}
		else if (answers.type === "Cloze Flash Card"){
			makeClozeCard();
		}
		else{
			return console.log("Something went wrong.");
		}
	});
	}
	 else if (answers.commandSelect === "Exit"){
        return console.log("See you later, generator!");
    }
    else{
        return console.log("See you later, generator!");
    }
});
}

function makeBasicCard(){
	"use strict";
	inquirer.prompt([
	{
		name: "front",
		type: "input",
		message: "What's the question?"
	},
	{
		name: "back",
		type: "input",
		message: "What's the answer?"
	}
]).then(function(answers){
	basicCard(answers.front, answers.back);

	mainMenu();
});
}

function makeClozeCard(){
	"use strict";
	inquirer.prompt([
	{
		name: "clozeFront",
		type: "input",
		message: "Enter the entire phrase"
	},
	{
		name: "clozeBack",
		type: "input",
		message: "What do you want to omit?"
	}
	]).then(function(answers){
		if (answers.clozeFront.includes(answers.clozeBack) === true){
			console.log("Section omitted.");
			clozeCard(answers.clozeFront, answers.clozeBack);
		}
		else{
			console.log("Something went wrong.");
		}
	mainMenu();
	});
}

mainMenu();