import City from "../Models/citiesModel.js"

// Define an array where it it will store the cities data
export let cities = []

// #### special checker, if there is a local storage of the cities on the computure, it will import it, if not it will create 3defaut cities in this case

if (localStorage.cities) {
    cities = JSON.parse(localStorage.cities)
} else {
    // it wll set 3 cities for the first time aceseecing this application 
    
   //comments are gonna be an array of objects whit username and the comment and date in a seperate model
   // may need to modify/ add more data to the cities has we progress
   // we will add 10 predefined cities
   // bigger data or an array of objects whit in an object are seperate then added to the city

  
   //##################### Array Gallery whit picture urls #########################
   //Ponta Delgada
   const pdlGallery = [
       "https://d1oe1fd4hqfth9.cloudfront.net/wp-content/uploads/Ponta-Delgada-3.jpg",
       "http://comercioenoticias.pt/wp-content/uploads/2018/09/Ponta-Delgada-2.jpg",
       "https://ahresp.com/app/uploads/2019/02/Ponta-Delgada_edited.jpg",
       "https://www.planetware.com/photos-large/P/portugal-ponta-delgada-city-view-with-harbor-sao-miguel-azores.jpg"
    ]

   //Porto
   const prtGallery = []

   //Lisboa
   const lsbGallery = []

   //Vila do Conde
   const vdcGallery = []

   //Funchal
   const fncGallery = []

   //############################ Google map scr (there long so we keep them in variable to keep it short) ##########################
   //Ponta Delgada
   const pdlMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25239.416897237556!2d-25.696059305736423!3d37.74485415493512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb432acc76b00e97%3A0x765580f24e6fc416!2sPonta+Delgada!5e0!3m2!1spt-PT!2spt!4v1560768945950!5m2!1spt-PT!2spt";
   //Porto
   const prtMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48061.84192467006!2d-8.6288206583127!3d41.15929440933758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2465abc4e153c1%3A0xa648d95640b114bc!2sPorto!5e0!3m2!1spt-PT!2spt!4v1560771822723!5m2!1spt-PT!2spt";
   
   //Lisboa
   const lsbMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99580.03468299573!2d-9.230243382264508!3d38.743605703601276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a61e4f33b%3A0x400ebbde49036d0!2sLisboa!5e0!3m2!1spt-PT!2spt!4v1560771869288!5m2!1spt-PT!2spt";
   //Vila do Conde 
   const vdcMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23958.92354587857!2d-8.761721148313045!3d41.35527832307782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24441d30f3cc2b%3A0xf35fd2261be6b72f!2sVila+do+Conde!5e0!3m2!1spt-PT!2spt!4v1560771902551!5m2!1spt-PT!2spt";
   
   //#### LVL 2 cities
   //Funchal (nivel 2)
   const fncMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53743.643668332144!2d-16.95969009006523!3d32.660036787752205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc605fc3501f8bab%3A0xffd84d2c15cda139!2sFunchal!5e0!3m2!1spt-PT!2spt!4v1560771763998!5m2!1spt-PT!2spt";



// adding the information to the 3 cities

    const city1 = new City("Ponta Delgada", "Açores", "1546","31/5/2019",1,1,0,0,"../IMG/Ponta-Delgada-cover.jpg","../IMG/PDL-Brasao.png","https://pt.wikipedia.org/wiki/Ponta_Delgada","Cidade central da Ilha São Miguel",pdlGallery,pdlMap)
    const city2 = new City("Porto","Norte","1112","31/5/2019",2,1,0,0,"../IMG/Porto.jpg","../IMG/Porto-Brasao.png","https://pt.wikipedia.org/wiki/Porto","Cidade Linda e boa para visitar"," ",prtMap)
    const city3 = new City("Lisboa","Área Metropolitana de Lisboa","1147","1/6/2019",3,1,0,0,"../IMG/Lisboa.jpg","../IMG/LSB-Brasao.png" ,"https://pt.wikipedia.org/wiki/Lisboa","Cidade Grande e metropolitana e Capital"," ",lsbMap)
    const city4 = new City("Vila do Conde","Norte","1988","17/6/2019",4,1,0,0,"../IMG/Vdc-cover.jpg","../IMG/VDC-Brasao.png","https://pt.wikipedia.org/wiki/Vila_do_Conde","Cidade perto do mar!"," ",vdcMap) 
    const city5 = new City("Funchal","Madeira","1508","17/6/2019",5,2,0,0,"../IMG/Funchal-cover.jpg","../IMG/FNC-Brasao.png","https://pt.wikipedia.org/wiki/Funchal","Cidade principal da ilha da Madeia"," ",fncMap)
    const city6 = new City()
    const city7 = new City()
    const city8 = new City()
    const city9 = new City()
    const city10 = new City()

    
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

// fuctions to add and Remove cities

//Add city
export function addCity(txtCity,txtLevel,sltZone,txtDate,txtCover,txtBrasao,txtMap,txtLink,txtDescription,txtImg1,txtImg2,txtImg3){
    // current note issuies, at the view you have to put them in seperate parts and then check if each individual part is orrect her in order 
    let existCity = false
    let citynew = txtCity;
    citynew = citynew.toLowerCase();
    //search if the city already exists
    for (const city of cities) {

        let cityLow = city.name;        
        cityLow = cityLow.toLowerCase();
        

        
        if (cityLow == citynew) {            
            existCity = true
        }
    }
    if (!existCity) {
        
        //if the city doesnt exists then it will push all the information in to the cities object
        //default information , idDate , likes, comments count, upload date,
        const idDate = cities.length + 1;
        const faves = 0;
        const comments = 0 ;
        const upload = currentDate();
        const galleryArray = [txtImg1, txtImg2, txtImg3]
        cities.push(new City(txtCity, sltZone, txtDate, upload, idDate,txtLevel,comments,faves,txtCover,txtBrasao,txtLink,txtDescription,galleryArray,txtMap))
        localStorage.setItem("cities", JSON.stringify(cities))
        //add a sweet alert 2*/

        Swal.fire({            
            title:'Cidade adicionada!',
            text:`${txtCity}  foi adicionada.`,            
            type: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok!'
          }).then((result) => {
            if (result.value) {
                // Goes back to the Cities catalog to check the newly added city
                location.href = "CatalogPage.html"
            }
        })
        
        
    } else {
        Swal.fire({
            title:'..oops.',
            text:`${txtCity} ja existe.`,            
            type:'error'
          })        
    }

}

//## fuction to get the current date of creation
function currentDate() {
    let fulldate = "";
    let today = new Date();

    //fuction to add a 0 to minutes and months so it has a two digit format
    function addZero(i){
        if (i < 10) {
            i = "0" + i;
          }
          return i;
    }


    let time = today.getHours() + ":" + addZero(today.getMinutes());
    let date = +today.getDate()+'-'+ addZero((today.getMonth()+1))+'-'+today.getFullYear();
    
    fulldate =  time + " " + date ;

    return fulldate;
}

//#### fuction to remove a city

export function removeCity(txtCity){
    //sweet alrt confirmation
    for (let i = 0; i < cities.length; i++) {
        if (cities[i].name === txtCity) {
            cities.splice(i, 1)
        }
    }
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

//########### Function to turn the pictures in to an array