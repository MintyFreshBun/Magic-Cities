
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
document.querySelector("#cityName").innerHTML = `<span class="font-weight-bold">Data Fundada: </span>`;