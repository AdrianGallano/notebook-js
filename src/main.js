"use strict"
/* 
	This is the main script for interaction

	should be able to create books
	should be able to retrieve books
	should be able to update books
	should be able to delete books
	

*/


const Book = module.require("./book")


function start() {

	main:while (true) {
		alert(`
		1: create a book
		2: display books
		3: pick a book
		4: delete a book
		5: exit app`)

		let decision = prompt(">")

		switch(decision){
			case 1: // create a book
				
				break;
			case 2: // display books

				break;
			case 3:
				break;
			case 4:
				
				break;
			case 5:

				break;
			default:
				console.log("please enter a valid option")
				continue main;
			
		}
	}

}


start()

