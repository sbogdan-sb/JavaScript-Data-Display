// from data.js
var tableData = data;

// Register callback function for search button
d3.select("#filter-btn").on("click", doButtonAction);

// Write each sighting given in the initial data object to table
data.forEach(writeTable);

// Writes a row into table from a ufo sighting object 
function writeTable(sighting) {
    var table = d3.select("#ufo-table");
    var row = table.append("tr")

    // Write each value in sighting object to a table row/cell
    Object.values(sighting).forEach(value => {
        row.append("td").text(value);
    });
}

// Filter ufo sighting data to match user input and update table with 
//matching sightings
function doButtonAction () {
    var table = d3.select("#ufo-table");
    var searchDate = d3.select("#datetime").property("value");

    // Clear table
    table.selectAll('td').remove();      
    
    // Create new array of sightings that date matches user search date
    var filtered = data.filter(sighting => { return sighting.datetime == searchDate});
    
    // Write filtered sightings to table
    filtered.forEach(writeTable);

    return;
}
