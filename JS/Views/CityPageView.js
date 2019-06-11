
 //######################## IMPORT and getting the set city item #######
import {
    getCurrentCity,
    cityLike
} from "../Controllers/citiesController.js"

import{
    userLikeAdd,
    userLikeRemove
} from "../Controllers/usersController.js"




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
function renderComment(){
    const myComment = document.querySelector("#myComment")
    let result = ""

    
}



//####################### button Likes fucntions and listeners ##################
const imgHeart = document.getElementById("img-heart");
const btnHeart = document.getElementById("btn-Heart");
let keyswitch = 0;

// check if the user has liked the city before, not allowing him to like more then 1 time (remember its gonna be an array of items, so its a for cycle)
// if the user has liked it then the keyswitch will be 1 and the heart pic will be red
for(const cityLike of sessionStorage.getItem("userLikes")){
    if(city.name == cityLike){
        imgHeart.src = "../misc/Images/favorite-heart-button-click.png";
        keyswitch = 1

    }
}


btnHeart.addEventListener("click", function (){

    
    //key conditions to set what kind of like and alow to add and remove 1 like 
    if(keyswitch == 1){
        // this condition will remove the like
        imgHeart.src = "../misc/Images/favorite-heart-button.png"
        keyswitch = 0
        // changing the information on the object, removing the city from the userLikes
        cityLike(city.name, keyswitch);
        userLikeAdd(city.name);
        renderLikes();
        
    }
    else{
        //this condition will add a like, adding the city to the userLikes
        imgHeart.src = "../misc/Images/favorite-heart-button-click.png";
        keyswitch = 1
        // changing the information on the object
        cityLike(city.name, keyswitch);
        userLikeRemove(city.name);
        renderLikes();

    }
    
});

//#################### GOOGLE MAPS API SCRPTS ############################## (ask the teacher about putting the script here)