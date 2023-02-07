"use strict"
/* 
	This is the script for page creation
    Book object

	should be able to create notebook
	should be able to retrieve notebook
	should be able to update notebook
	should be able to delete notebook
	

*/

const date = module.require('date-and-time');
const Page = module.require("./page");

function Notebook(notebookName, category, isGoodRead = true){
    this.notebookName = notebookName
    this.category = category
    this.isGoodRead = isGoodRead
    this.dateCreated = date.format(now, pattern);
	this.dateModified = date.format(now, pattern);
	this.timeCreated = date.format(now, 'hh:mm A [GMT]Z');
	this.timeModified = date.format(now, pattern);
    this.pages = []
}



module.export = Notebook



