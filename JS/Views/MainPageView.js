//################# Import section ###############
import{
    cities,    
    setCurrentCity,
    sortCities,
    sortComments,
    sortLikes,
    sortRecent
} from "../Controllers/citiesController.js"



//######################### Button fuctions ####################
let buttonPerfil = document.getElementById("perfilButton"); 
buttonPerfil.addEventListener("click", function(){
    window.location.href="PerfilPage.html"
})


let quizButton = document.getElementById("quizButton"); 
quizButton.addEventListener("click", function(){
    window.location.href="QuizPage.html"
})

let catalogButton = document.getElementById("btnCatalog"); 
catalogButton.addEventListener("click", function(){
    window.location.href="CatalogPage.html"
})

//##################Top card cities fuctions ######################

function renderTops(filterType = ""){
    const myTops = document.querySelector("#myTopcards")
    let result = ""
    let i = 0 // we only want to show the top 4 cards

    for (const city of cities) {
        // ############# appled filter will sort tops (if conditions)   #######

        if(filterType == "Recent"){sortRecent()}
        else if (filterType == "Votes"){sortLikes()}
        else if (filterType == "Comments"){sortComments()}
        else{sortRecent()}    // when entering the mainpage, the default will be to sort by recent,

        // Create a line
        
        
        // Generate a card
        result += `
        <div class="col-md-3 ">
            <div class="card btn-Hover">    
                <div class="card-body rounded-lg">
                    <img class="card-img-top rounded-lg img-Size" src="${city.cover}">
                    <br><br>
                    <h4 class="card-title font-weight-bold">${city.name}</h4>
                    <p class="card-text"> <spam class="font-weight-bold">Ano Fundada:</spam> ${city.date} </p>
                    <p class="card-text"> <spam class="font-weight-bold">Zona</spam>: ${city.zone} </p>
                    <button type="button" id="${city.name}" class="btn btn-primary view"> Visitar Pagina</button>
                    <div class="row" style="padding-top: 2%">
                        <div class="col"> ${city.faves} <img src="../misc/Images/favorite-heart-button-click.png" style="width: 20px; height: 20px;"></div>
                        <div class="col"> ${city.comments} <img src="../misc/Images/comment-black-oval-bubble-shape.png" style="width: 20px; height: 20px;"></div>
                        <div class="col font-weight-bold"> LV: ${city.level}</div>
                        
                    </div>       
                </div>              
            </div>
        </div>
        `
        
        i++
        

        //breaks from the loop once we print the top 4, in this case i is our counter
        if(i === 4){
            break
        }



    }

    // after the filter sort the cities back to AZ(optional)
    sortCities("az")


    // adding all generated catalongs to the id myCatalog
    myTops.innerHTML = result

    //this is the code of the button to acess the cities page, and we have to make sure the city un acessable if lower lvl
    // Making the buttons work, add a lvl rescriction whit an if codintion (make the buttons disable)
    const btnsCity = document.getElementsByClassName("view")
    for (const elem of btnsCity) {
        elem.addEventListener("click", function () {
            setCurrentCity(this.id)
        })
    }
    

    
}

renderTops()

// fuction for the filter button
document.querySelector("#btnFilter").addEventListener("click", function () {
    const txtFilter = document.querySelector("#sltFilter").value;    
    // render the top cards whit the filter type choosen
    renderCatalog(txtFilter)
})