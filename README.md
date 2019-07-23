# sftd-listings

This is a long-term project intended to recreate searchable, filterable School for the Deaf pupil lists based on original 19th century asylum and school publications.

These lists are long and bulky but filled with helpful data about student retention, school development, mobility and movement, and genealogical connections. 

Goals of this project:
* Create simplified text documents (.csv, .json, .js array, etc.) that can be uploaded into a viewer; v.1 will be documents that I curate but a v.2 could be documents that others cultivate from their materials and upload.
* Provide a hint of visual design that portrays the tables in their historical context but clean up information (archaic abbreviations, hidden semantics) that help
* Make documents as sortable and searchable as possible. Datatables ([https://datatables.net](https://datatables.net)) is a fairly robust and extensible .js solution to this issue.
* Consider how to make visualizations of this data. Cloropleths would be helpful; what else? What plays well with d3.js?

Current work:
* [http://intrpr.info/sftd-listings/asd-1817-1837-04.html](http://intrpr.info/sftd-listings/asd-1817-1837-04.html). Using datatables.net to read a .js array ([https://github.com/intrpr/sftd-listings/blob/master/1851-1817-american-asylum.js](https://github.com/intrpr/sftd-listings/blob/master/1851-1817-american-asylum.js)) and using CSS to mark up table and Bootstrap. Need to figure out how to disable pagination.
* [http://intrpr.info/sftd-listings/asd-1817-1837-03.html](http://intrpr.info/sftd-listings/asd-1817-1837-03.html). Using datatables.net to read a .csv file ([https://github.com/intrpr/sftd-listings/blob/master/1851-1817-american-asylum.csv](https://github.com/intrpr/sftd-listings/blob/master/1851-1817-american-asylum.csv)) and using CSS to mark up table and Bootstrap. Problem in that datatables.net does not read .csv natively, only .json and .js array. Need another solution.
* [http://intrpr.info/sftd-listings/asd-1817-1837-01.html](http://intrpr.info/sftd-listings/asd-1817-1837-01.html). Using datatables.net but raw HTML table, tr, td markup with inline data. Not sustainable, but good first step.