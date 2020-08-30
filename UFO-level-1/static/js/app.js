// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
    data.forEach(data => {
        var row = tbody.append("tr");
        Object.entries(data).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

// use data form and write JS that will listen for events
var button = d3.select("#filter-btn");
button.on("click", runEnter);

// grab datetimevalue
function runEnter() {

    d3.event.preventDefault();
    
    var inputElement = d3.select("datetime");

    var inputValue = inputElement.property("value");
    
    console.log(inputValue);
    console.log(data);

    // filter original data
    var filteredData = data.filter(data => data.datetime === inputValue);
    console.log(filteredData);

//search through date/time to find rows that match input
    tbody.html("");
    if (filteredData.length >= 1) {
        filteredData.forEach(date_data => {
            var row = tbody.append("tr");
            Object.entries(date_data).forEach(function([key, value]) {
                var cell = row.append("td");
                cell.text(value);
        });
    });
    }
}