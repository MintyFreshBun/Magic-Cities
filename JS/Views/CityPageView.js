
 //######################## IMPORT and getting the set city item #######
import {
    getCurrentCity,
    cityLike
} from "../Controllers/citiesController.js"



const city = getCurrentCity()







//############################ city information injection codes ############################
//test

document.querySelector("#cityDate").innerHTML = `<span class="font-weight-bold">Data Fundada: ${city.date} </span>`;
document.querySelector("#cityName").innerHTML = city.name;
document.querySelector("#cityZone").innerHTML = `<span class="font-weight-bold">Zona: ${city.zone} </span>`;
document.querySelector("#cityLevel").innerHTML = `<span class="font-weight-bold">Nivel: ${city.level} </span>`;
document.querySelector("#cityUpload").innerHTML = `<span class="font-weight-bold">Addicionado: ${city.upload} </span>`;
document.querySelector("#cityFave").innerHTML = `<span class="font-weight-bold ">Gostos: </span><span id="renderFave">${city.faves}</span> <button id="btn-Heart" type="button" class="btn btn-outline-danger">
<img id="img-heart" src="../misc/Images/favorite-heart-button.png" style="width: 20px; height: 20px;">
</button>`;
//sence likes change whit the button it will need to be in a render fuction
function renderLikes(){
    document.querySelector("#renderFave").innerHTML = `${city.faves}`;
}

document.querySelector("#cityDesc").innerHTML = city.desc;
document.querySelector("#cityLink").href = city.link;


//################## fuctions for the JS view content ###################




//########################Galery pic injection js codes ##########################

//####################comments inections codes#################################




//####################### button Likes change and listeners ##################
const imgHeart = document.getElementById("img-heart");
const btnHeart = document.getElementById("btn-Heart");
let keyswitch = 0;
btnHeart.addEventListener("click", function (){
    if(keyswitch == 1){
        imgHeart.src = "../misc/Images/favorite-heart-button.png"
        keyswitch = 0
        // changing the information on the object
        cityLike(city.name, keyswitch);
        renderLikes();
        
    }
    else{
        imgHeart.src = "../misc/Images/favorite-heart-button-click.png";
        keyswitch = 1
        // changing the information on the object
        cityLike(city.name, keyswitch);
        renderLikes();

    }
    
});

//#################### GOOGLE MAPS API SCRPTS ############################## (ask the teacher about putting the script here)