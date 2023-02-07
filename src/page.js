"use strict"

/* The Page object script */

const date = module.require('date-and-time');
const now = new Date();
const pattern = date.compile('ddd, MMM DD YYYY');
let pageNum = 0;


function Page(title, paragraph) {
	this.title = title;
	this.paragraph = paragraph;
	this.date_created = date.format(now, pattern);
	this.date_modified = date.format(now, pattern);
	this.time_created = date.format(now, 'hh:mm A [GMT]Z');
	this.time_modified = date.format(now, pattern);
	this.pageNum = ++pageNum;


/* 		Page ${this.pageNum}
		Title: ${this.title}
		Date created: ${this.date_created}
		Date modified: ${this.date_modified}
		Time created: ${this.time_created}
		Time modified: ${this.time_modified}
		
		${this.paragraph} */
}

module.export = Page