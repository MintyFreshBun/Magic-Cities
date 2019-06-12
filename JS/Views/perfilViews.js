import{logout} from "../Controllers/usersController.js"

document.querySelector("#perfilName").innerHTML=` Aprendiz ${sessionStorage.getItem("loggedUser")}`
document.querySelector("#nivel").innerHTML=`Nivel ${sessionStorage.getItem("userLvl")}`
document.querySelector("#rank").innerHTML=`Rank: ${sessionStorage.getItem("userRank")}`

//XP progress bar
document.querySelector("#progressBar").style.width=sessionStorage.getItem("userXP") + "%"
document.querySelector("#progressBar").innerHTML=sessionStorage.getItem("userXP") + "%"




updateNavbar()

function updateNavbar(){
    if(sessionStorage.getItem("loggedUser")){

  
        document.querySelector("nav").innerHTML=`
        <div class="col-md-2 justify-content-star d-inline-flex ">
          <!--Add/create ID avater icons,make diferent ones for each rank-->
          <!--Temp one atm-->
          <img src="../misc/Images/DG_favicon-02.png" class="rounded-lg border-secondary" style="width: 22%; height: 22%;">
          <a class="navbar-brand text-white col-md-2" href="#welcomeUser">Welcome ${sessionStorage.getItem("loggedUser")} !</a>
        </div>
        <div class="col-md-3 align-self-center">
          <button type="button" class="btn btn-warning text-white" id="logoutBtn">Log Out</button>
        </div>
                 
        `
    }
}

//Logout button deletes current user info and sends the user back into the landing page
document.querySelector("#logoutBtn").addEventListener("click", function(){
    logout()
    location.href = "../Index.html";
  })

