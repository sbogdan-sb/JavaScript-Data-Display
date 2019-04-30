// from data.js
var tableData = data;

// Set default search filter
var filterSelection = 'datetime';

// Register callback function for search button
d3.select('#filter-btn').on('click', doButtonAction);

// Register callback function for all elements of the filter seletion
// drop down menu
d3.selectAll('.filterOption').on('click', doFilterAction);

// Write all un-filtered sightings given in the data object to table
tableData.forEach(writeTable);

// Writes a row into table from a ufo sighting object 
function writeTable(sighting) {
    var table = d3.select('#ufo-table');
    var row = table.append('tr')

    // Write each value in sighting object to a row cell
    Object.values(sighting).forEach(value => {
        row.append('td').text(value);
    });
}

// Filter ufo sighting data to match user input and update table with 
// matching sightings
function doButtonAction () {
    var table = d3.select('#ufo-table');
    var searchValue = d3.select('#filter').property('value').toLowerCase();
    
    // Clear table
    table.selectAll('td').remove();      
    
    // Create new array of sightings that date matches user search date
    var filtered = data.filter(sighting => { return sighting[filterSelection].toLowerCase() == searchValue});

    // Write filtered sightings to table
    filtered.forEach(writeTable);

    // Clear input textbox after each search
    d3.select('#filter').property('value', '');

    d3.event.preventDefault();
    return;
}

// Sets search filter based on user selection from filter choices on drop down menu
// and changes the label for the drop down menu to reflect the user's filter choice
function doFilterAction (menuSelection) {
    var menuLabel = d3.select('label')
    filterSelection = d3.select(this).attr('value');
    
    menuLabel.text('Enter a ' + d3.select(this).text());
    
    d3.event.preventDefault();
    return;
}
