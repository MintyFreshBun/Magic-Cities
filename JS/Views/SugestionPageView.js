//Import zone
import {
    addSugestion
} from "../Controllers/sugestionController.js"



//###########sectionfor the user part of the suggestion page !
//button fuction and sweet alert

const btnSugestion = document.querySelector("#btnSugest")

btnSugestion.addEventListener("click", function(){
    console.log("entered")
    //get the txt area and  logged user,
    const txtSugestion = document.querySelector("#txtSugestion").value;
    const userSugestion = sessionStorage.getItem("loggedUser");
    addSugestion(txtSugestion,userSugestion)
    

})



/// ##############addmin sujection page part
const adminview = document.querySelector("#adminview")
