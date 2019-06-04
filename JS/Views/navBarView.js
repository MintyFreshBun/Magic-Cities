import{
   logout} from "../Controllers/usersController.js"

updateNavbar()

//Logout button deletes current user info and sends the user back into the landing page
document.querySelector("#logoutBtn").addEventListener("click", function(){
  logout()
  location.href = "../Index.html";
})

//Function builds a dynamic navBar that adds the name,xp and level of the user
function updateNavbar(){
    if(sessionStorage.getItem("loggedUser")){

  
        document.querySelector("nav").innerHTML=`
        <div class="col-md-2 justify-content-star d-inline-flex ">
        <!--Add/create ID avater icons,make diferent ones for each rank-->
        <!--Temp one atm-->
        <img src="../misc/Images/DG_favicon-02.png" class="rounded-lg border-secondary" style="width: 22%; height: 22%;">
        <a class="navbar-brand text-white col-md-2" href="#welcomeUser">Welcome ${sessionStorage.getItem("loggedUser")} !</a>
      </div>
      
      <div class="justify-content-end d-inline-flex col-md-6 " >
        <div class="col-md-2 align-self-center text-white  font-weight-bold" >Nivel ${sessionStorage.getItem("userLvl")}</div>

        <div class="col-md-7 align-self-center" >
          <div class="progress" style="height: 25px" > <!--the z-index not working, ask the teacher-->
            
            <div class="progress-bar bg-warning text-dark " role="progressbar" style="width: ${sessionStorage.getItem("userXP")}% ;"
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${sessionStorage.getItem("userXP")}%</div>  
          </div>
        </div>

        <div class="col-md-3 align-self-center">
          <button type="button" class="btn btn-warning text-white" id="logoutBtn">Log Out</button>
        </div>
      </div>            
        `
    }
}