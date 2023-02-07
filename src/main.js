"use strict"
/* 
	This is the main script for interaction

	should be able to create books
	should be able to retrieve books
	should be able to update books
	should be able to delete books
	

*/


const Book = module.require("./notebook")


function start() {

	main:while (true) {
		alert(`
		1: create a notebook
		2: retrieve a notebook
		3: update a notebook
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

