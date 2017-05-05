let fs = require ("fs");
let inquirer = require ("inquirer");

function clozeCard(answer, omission){
	"use strict";
	let partial = answer - omission;
	let newCloze = "\r\n-------------- " + partial + " / " + answer + " \r\n---------------------";

	fs.appendFile("clozelog.txt", newCloze, "utf8", function(error){
		if (error){
			return console.log("Something went wrong.");
		}
		else{
			console.log("Card added successfully!");
		}
	});
}

module.exports = clozeCard;