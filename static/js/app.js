// from data.js
var sightings = data;

// Reference to table body
let tbody = d3.select("tbody")

// Log current data from data.js
console.log(sightings)

//Grab full sightings data and append to table
sightings.forEach((sighting) => {
    const row = tbody.append("tr")
    for (key in sighting) {
        const cell = tbody.append("td")
        cell.text(sighting[key])
    }
})

// Filter table by date

const filter = d3.select("#filter-btn");

filter.on("click", function () {

    // Prevent the page from refreshing
    d3.event.preventDefault()

    // Select the input elements and get the raw HTML node
    const dateElement = d3.select("#datetime")
    const cityElement = d3.select("#city")
    const stateElement = d3.select("#state")
    const countryElement = d3.select("#country")
    const shapeElement = d3.select("#shape")

    // Get the value property of the input elements
    const dateValue = dateElement.property("value")
    const cityValue = cityElement.property("value")
    const stateValue = stateElement.property("value")
    const countryValue = countryElement.property("value")
    const shapeValue = shapeElement.property("value")

    //Clear user inputs
    dateElement.html("")
    cityElement.html("")
    stateElement.html("")
    countryElement.html("")
    shapeElement.html("")

    // Filter data on user inputs
    const filteredData = sightings.filter((sighting) => {
        if (
            (sighting.datetime === dateValue || dateValue === "") &&
            (sighting.city === cityValue || cityValue === "") &&
            (sighting.state === stateValue || stateValue === "") &&
            (sighting.country === countryValue || countryValue === "") &&
            (sighting.shape === shapeValue || shapeValue === "")
        ) {
            return true;
        } else {
            return false;
        }
    })

    console.log(filteredData)

    //Clear table, update with filteredData
    tbody.html("")
    filteredData.forEach((sighting) => {
        const row = tbody.append("tr")
        for (key in sighting) {
            const cell = tbody.append("td")
            cell.text(sighting[key])
        }
    })
})