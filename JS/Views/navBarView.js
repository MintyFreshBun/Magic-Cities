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
      
      <div class="justify-content-end d-inline-flex col-md-4 " >
        <div class="col-md-2 align-self-center text-white  font-weight-bold" >Nivel</div>

        <div class="col-md-7 align-self-center" >
          <div class="progress" style="height: 25px" > <!--the z-index not working, ask the teacher-->
            
            <div class="progress-bar bg-warning " role="progressbar" style="width: 50% ;"
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>  
          </div>
        </div>

        <div class="col-md-3 align-self-center">
          <button type="button" class="btn btn-warning text-white" id="logoutBtn">Log Out</button>
        </div>
      </div>            
        `
    }
}