import City from "../Models/citiesModel.js"

// Define an array where it it will store the cities data
export let cities = []

// #### special checker, if there is a local storage of the cities on the computure, it will import it, if not it will create 3defaut cities in this case

if (localStorage.bands) {
    cities = JSON.parse(localStorage.cities)
} else {
    // it wll set 3 cities for the first time aceseecing this application 
    
   //comments are gonna be an array of objects whit username and the comment and date
   // may need to modify/ add more data to the  3 cities has we progress

    const city1 = new City("Ponta Delgada", "Açores", "1546","31/5/2019","1","0","2","../IMG/Ponta-Delgada-cover.jpg")
    const city2 = new City("Porto","Norte","1112","31/5/2019","1","0","3","../IMG/Porto.jpg")
    const city3 = new City("Lisboa","Área Metropolitana de Lisboa","1147","1/6/2019","1","0","1","../IMG/Lisboa.jpg")
    cities.push(city1,city2,city3)    
    localStorage.setItem("cities", JSON.stringify(cities))
}


// ######################### Functions to be exported by the viewers and adding/manipulating the local storage data ###########################


// city sorting fuction
export function sortCities(order) {
    if (order == "az"){
        cities.sort(City.compareAZ)
    }
    else{
        cities.sort(City.compareZA)
    }
    
    localStorage.setItem("cities", JSON.stringify(cities))
}

// getting the city's name and setting it has current city
export function setCurrentCity(txtCity) {
    localStorage.setItem("city", txtCity)
    location.href = "HTML/CityPage.html"
}

// getting thethe city we set from the Citties list model

export function getCurrentCity() {
    const city = localStorage.getItem("city")
    for (let i = 0; i < cities.length; i++) {
        if (cities[i].name === city) {
            return cities[i]
        }
    }
}