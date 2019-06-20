//Import zone
import {
    addSugestion
} from "../Controllers/sugestionController.js"


//button fuction and sweet alert

const btnSugestion = document.querySelector("#btnSugest")

btnSugestion.addEventListener("click", function(){
    console.log("entered")
    //get the txt area and  logged user,
    const txtSugestion = document.querySelector("#txtSugestion").value;
    const userSugestion = sessionStorage.getItem("loggedUser");
    addSugestion(txtSugestion,userSugestion)
    

})
