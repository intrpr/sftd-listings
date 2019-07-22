var dataSet = [
	[ "Abbott", "Laura", "Lyndeborough", "N.H.", "1829", "18", "Illness at 1 1/2 years", "", "N. Hamp.", "4 yrs.", "Married a deaf mute." ],
	[ "Abell", "Chloe", "St. Albans", "Vt.", "1829", "18", "Dis. in the head at 8 mo.", "", "Vermont.", "4 yrs.", "Married a deaf mute; dead." ],
	[ "Aiken", "Mary", "Londonderry", "Vt.", "1827", "15", "Scarlet fever at 4 years", "", "Vermont.", "4 yrs.", "" ],
	[ "Alcorn", "William", "Boston", "Mass.", "1849", "23", "Unknown", "", "Mass.", "", "Now a pupil" ],
	[ "Alexander", "Albert", "Brattlesboro", "Vt.", "1826", "15", "Congenital", "", "Vermont.", "4 yrs.", "" ],
	[ "Alexander", "William, Jr.", "Cavendish", "Vt.", "1833", "24", "Unknown", "", "Vermont.", "1 1/4 yrs", "" ],
	[ "Allard", "Alonzo", "Newark", "Vt.", "1849", "14", "Congenital", "1 brother", "Vermont.", "", "Now a pupil" ],
	[ "Allard", "Jonathan", "Newark", "Vt.", "1841", "16", "Congenital", "1 brother", "Vermont.", "5 yrs", "" ],
	[ "Allen", "Adoniram J.", "Raynham", "Mass.", "1847", "12", "Congenital", "1 brother", "Mass.", "", "Now a pupil" ],
	[ "Allen", "Asa", "Canterbury", "Conn.", "1845", "9", "Congenital", "Father & moth.", "Conn.", "5 yrs", "" ],
	[ "Allen", "Delia A.", "Westfield", "Mass.", "1839", "10", "Congenital", "", "Mass.", "5 yrs.", "" ],
	[ "Allen", "Eliza", "Canterbury", "Conn.", "1849", "9", "Congenital", "Father & moth. [1 bro & 1 sis.]", "Conn.", "", "Now a pupil" ],
	[ "Allen", "George W.", "Canterbury", "Conn.", "1817", "14", "Congenital", "3 children.", "Friends.", "1 mo.", "A farmer; married a deaf mute." ],
	[ "Allen", "Helena P.", "Lynn", "Mass.", "1846", "13", "Whooping Cough at 6 mo.", "", "Mass.", "", "Now a pupil" ],
	[ "Allen", "Irenus", "Hartland", "Vt.", "1848", "9", "Dropsy in head at 1 1/2 yrs.", "1 sister.", "Vermont.", "", "Now a pupil" ],
	[ "Allen", "James M.", "East Windsor", "Conn.", "1840", "13", "Congenital", "2 sisters.", "Conn.", "6 yrs.", "" ],
	[ "Allen", "Margaret", "East Windsor", "Conn.", "1850", "11", "Congenital", "1 bro. and sis.", "Conn.", "", "Now a pupil" ],
	[ "Allen", "Mary M.", "East Windsor", "Conn.", "1840", "10", "Congenital", "1 bro. and sis.", "Fd's & Conn.", "6 yrs.", "" ],
];
 
$(document).ready(function() {
	$('#example').DataTable( {
		data: dataSet,
		columns: [
			{ title: "Last" },
			{ title: "First" },
			{ title: "Residence" },
			{ title: "State" },
			{ title: "Time of admission" },
			{ title: "Age" },
			{ title: "Cause of deafness" },
			{ title: "Deaf and Dumb relatives" },
			{ title: "How supported" },
			{ title: "Time under instruction" },
			{ title: "Remarks" },
		]
	} );
} );