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

function Notebook(Notebook, category, isGoodRead = true){
    this._Notebook = Notebook
    this._category = category
    this._isGoodRead = isGoodRead
    this.pages = []
}



module.export = Notebook



