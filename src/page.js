"use strict"

/* The Page object script */

const date = module.require('date-and-time');
const now = new Date();
const pattern = date.compile('ddd, MMM DD YYYY');
let pageNum = 0;


function Page(title, paragraph) {
	this.title = title;
	this.paragraph = paragraph;
    this.dateCreated = date.format(now, pattern);
	this.dateModified = date.format(now, pattern);
	this.timeCreated = date.format(now, 'hh:mm A [GMT]Z');
	this.timeModified = date.format(now, pattern);
	this.pageNum = ++pageNum;

}

module.export = Page