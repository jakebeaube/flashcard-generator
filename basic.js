let fs = require("fs");
let inquirer = require("inquirer");

function basicCard (question, answer){
	"use strict";
	let newBasic = "\r\n-------------- " + question + " / " + answer + " \r\n----------------------------------";


	fs.appendFile("basiclog.txt", newBasic, "utf8", function(error){
		if (error){
			return console.log("Something went wrong.");
		}
		else{
			console.log("Card added successfully!");
		}
	});
}
module.exports = basicCard;