
const fs = require("fs");


//Reading data from file
const data = fs.readFileSync("data/cities.json", "utf-8")

//Converting JSON to JS-array
const cities = JSON.parse(data)

//Displaying data
for(const city of cities) {
    console.log(city.name)
}