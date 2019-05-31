import City from "../Models/citiesModel.js"

// Define an array where it it will store the cities data
export let cities = []

// #### special checker, if there is a local storage of the cities on the computure, it will import it, if not it will create 3defaut cities in this case

if (localStorage.bands) {
    cities = JSON.parse(localStorage.cities)
} else {
    // it wll set 3 cities for the first time aceseecing this application 
    /* modify this whit the cities, acording to the models blueprint
    const band1 = new Band("Muse", "Pop-Rock", "http://www.planckmachine.com/wp-content/uploads/2016/09/hysteria-muse-meaning-song.jpg", "The best band ever", "xxx")
    const band2 = new Band("RadioHead", "Pop-Rock", "https://ep01.epimg.net/elpais/imagenes/2017/05/17/icon/1495017818_647155_1495125183_noticia_normal.jpg", "The best band ever", "xxx")
    const band3 = new Band("James", "Pop-Rock", "http://ksassets.timeincuk.net/wp/uploads/sites/55/2013/01/2012JamesBandPress181212-2.jpg", "The best band ever", "xxx")
    */
   //comments are gonna be an array of objects whit username and the comment and date

    const city1 = new City("Ponta Delgada", "Açores", "1546","31/5/2019","1","0","2","../IMG/Ponta-Delgada-cover.jpg")
    const city2 = new City("Porto","Norte","1112","31/5/2019","1","0","3","../IMG/Porto.jpg")
    const city3 = new City("Lisboa","Área Metropolitana de Lisboa","1147","1/6/2019","1","0","1","../IMG/Lisboa.jpg")
    cities.push(city1,city2,city3)    
    localStorage.setItem("cities", JSON.stringify(cities))
}


// ######################### Functions to be exported by the viewers and adding/manipulating the local storage data ###########################

