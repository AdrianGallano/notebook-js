"use strict"
/* 
	This is the script for page creation
    Book object

	should be able to create books
	should be able to retrieve books
	should be able to update books
	should be able to delete books
	

*/

const date = module.require('date-and-time');
const Page = module.require("./page");

function Book(bookName, category, isGoodRead = true){
    this._bookName = bookName
    this._category = category
    this._isGoodRead = isGoodRead
    this.pages = []
}



module.export = Book


