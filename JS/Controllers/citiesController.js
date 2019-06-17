import City from "../Models/citiesModel.js"

// Define an array where it it will store the cities data
export let cities = []

// #### special checker, if there is a local storage of the cities on the computure, it will import it, if not it will create 3defaut cities in this case

if (localStorage.cities) {
    cities = JSON.parse(localStorage.cities)
} else {
    // it wll set 3 cities for the first time aceseecing this application 
    
   //comments are gonna be an array of objects whit username and the comment and date
   // may need to modify/ add more data to the  3 cities has we progress
   // bigger data or an array of objects whit in an object are seperate then added to the city

  
   //##################### Gallery #########################
   //Ponta Delgada
   //Porto
   //Lisboa
   
   //############################ Coordinates (latitude, Longitude) ##########################
   //Ponta Delgada
   const pdlLati = 37.73333;
   const pdlLong = -25.66667;
   //Porto
   const prtLati = 41.15794; 
   const prtLong = -8.62910;
   //Lisboa
   const lsdLati =38.722256;
   const lsdLong = -9.139341;
   //Vila do Conde (nivel 2)
   const vdcLati = 41.351775; 
   const vdcLong = -8.747849;

   //Funchal (nivel 5)
   const fncLati = 32.660606; 
   const fncLong = -16.924918;



// adding the information to the 3 cities

    const city1 = new City("Ponta Delgada", "Açores", "1546","31/5/2019",1,1,0,0,"../IMG/Ponta-Delgada-cover.jpg","../IMG/PDL-Brasao.png","https://pt.wikipedia.org/wiki/Ponta_Delgada","Cidade central da Ilha São Miguel"," ",pdlLati,pdlLong)
    const city2 = new City("Porto","Norte","1112","31/5/2019",2,1,0,0,"../IMG/Porto.jpg","../IMG/Porto-Brasao.png","https://pt.wikipedia.org/wiki/Porto","Cidade Linda e boa para visitar"," ",prtLati,prtLong)
    const city3 = new City("Lisboa","Área Metropolitana de Lisboa","1147","1/6/2019",3,1,0,0,"../IMG/Lisboa.jpg","../IMG/LSB-Brasao.png" ,"https://pt.wikipedia.org/wiki/Lisboa","Cidade Grande e metropolitana e Capital"," ",lsdLati,lsdLong)
    const city4 = new City("Vila do Conde","Norte","1988","17/6/2019",4,2,0,0,"../IMG/Vdc-cover.jpg","../IMG/VDC-Brasao.png","https://pt.wikipedia.org/wiki/Vila_do_Conde","Cidade perto do mar!"," ",vdcLati,vdcLong) 
    const city5 = new City("Funchal","Madeira","1508","17/6/2019",5,5,0,0,"../IMG/Funchal-cover.jpg","../IMG/FNC-Brasao.png","https://pt.wikipedia.org/wiki/Funchal","Cidade principal da ilha da Madeia"," ",fncLati,fncLong)
    
    cities.push(city1,city2,city3,city4,city5)    
    localStorage.setItem("cities", JSON.stringify(cities))
}


// ######################### Functions to be exported by the viewers and adding/manipulating the local storage data ###########################

//###########################Filter Fuctions####################
// city sorting  by AZ and ZA fuctions
export function sortCities(order) {
    if (order == "az"){
        cities.sort(City.compareAZ)
    }
    else{
        cities.sort(City.compareZA)
    }
    
    localStorage.setItem("cities", JSON.stringify(cities))
}

// city sorting by most Liked
export function sortLikes(){
    cities.sort(City.compareLikes)
    localStorage.setItem("cities", JSON.stringify(cities))
}

// city sorting by most commented
export function sortComments(){
    cities.sort(City.compareComment)
    localStorage.setItem("cities", JSON.stringify(cities))
}

export function sortRecent(){
    cities.sort(City.compareRecent)
    localStorage.setItem("cities", JSON.stringify(cities))
}








//####################### getting the city's name and setting it has current city#########################
export function setCurrentCity(txtCity) {
    localStorage.setItem("city", txtCity)
    location.href = "CityPage.html"
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

export function getCurrentLvl(txtcity){
//look up the city's index position on the object class 
    for (let i = 0; i < cities.length; i++) {
        if (cities[i].name === txtcity) {
            //once found , return the cities lvl
            return cities[i].level;
        }
    }
}

export function cityLike(txtName, keyLike){

    if (keyLike == 1){

        for (let i = 0; i < cities.length; i++) {
            if (cities[i].name === txtName) {
                cities[i].faves ++;                
                localStorage.setItem("cities", JSON.stringify(cities))
            }
        }
        
        

    }

    else if(keyLike == 0){

        for (let i = 0; i < cities.length; i++) {
            if (cities[i].name === txtName) {
                cities[i].faves --;
                localStorage.setItem("cities", JSON.stringify(cities))
            }
        }
        
        


    }

    

}