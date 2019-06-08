
 //######################## IMPORT and getting the set city item #######
import {
    getCurrentCity
} from "../Controllers/citiesController.js"



const city = getCurrentCity()

//################## fuctions for the JS view content ###################

// button image change and listeners
const imgHeart = document.getElementById("img-heart");
const btnHeart = document.getElementById("btn-Heart");
let keyswitch = 1;
btnHeart.addEventListener("click", function (){
    if(keyswitch == 1){
        imgHeart.src = "../misc/Images/favorite-heart-button.png";
        keyswitch = 0;
    }
    else{
        imgHeart.src = "../misc/Images/favorite-heart-button-click.png"
        keyswitch = 1
    }
    
});

//#################### GOOGLE MAPS API SCRPTS ############################## (ask the teacher about putting the script here)




//############################ city information injection codes ############################
//test

document.querySelector("#cityDate").innerHTML = `<span class="font-weight-bold">Data Fundada: ${city.date} </span>`;
document.querySelector("#cityName").innerHTML = city.name;
document.querySelector("#cityZone").innerHTML = `<span class="font-weight-bold">Zona: ${city.zone} </span>`;
document.querySelector("#cityLevel").innerHTML = `<span class="font-weight-bold">Nivel: ${city.level} </span>`;
document.querySelector("#cityUpload").innerHTML = `<span class="font-weight-bold">Addicionado: ${city.upload} </span>`;
document.querySelector("#cityFave").innerHTML = `<span class="font-weight-bold">Gostos: </span>${city.faves} <button id="btn-Heart" type="button" class="btn btn-outline-danger">
<img id="img-heart" src="../misc/Images/favorite-heart-button.png" style="width: 20px; height: 20px;">
</button>`;
document.querySelector("#cityDesc").innerHTML = city.desc;
document.querySelector("#cityLink").href = city.link;






//########################Galery pic injection js codes ##########################

//####################comments inections codes#################################

