var dataSet = [
    [ "Abbott", "Laura", "Lyndeborough", "N.H.", "1829", "18", "Illness at 1 1/2 years", "", "N. Hamp.", "4 yrs.", "Married a deaf mute."],
    [ "Abell", "Chloe", "St. Albans", "Vt.", "1829", "18", "Dis. in the head at 8 mo.", "", "Vermont", "4 yrs.", "Married a deaf mute; dead" ],
    [ "Aiken", "Mary", "Londonderry", "Vt.", "1827", "15", "Scarlet fever at 4 years", "", "Vermont", "4 yrs.", "" ],
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