/* ################### Import section ################# */





/* ######################### Fucntion CALLER  section ################### */
renderCatalog()

/* ########################### Fuction code section ######################## */

function renderCatalog (filterName = "", filterGenre = ""){
    const myCatalog = document.querySelector("#myCatalog")
    let result = ""
    let i = 0 // 4 cards per line so max i = 4

    // test on adding the cards
    for (let g = 0; g<5; g++){

        // Criação de linha
        if (i % 4 === 0) {
            result += `<div class="row  align-self-center" style="padding: 3%">`
        }
        // Geração do card
        result += `
        <div class="col-md-3 ">
            <div class="card btn-Hover">    
                <div class="card-body rounded-lg">
                    <img class="card-img-top rounded-lg" src="../misc/Images/cidade test image.jpg" alt="cidadeImg">
                    <br><br>
                    <h4 class="card-title">Cidade</h4>
                    <p class="card-text">Data Implementada: </p>
                    <p class="card-text">Zona: </p>
                    <button type="button" class="btn btn-primary view"> Visitar Pagina</button>           
                </div>              
            </div>
        </div>

        `
        
        i++
        // Criação do fecho da linha
        if (i % 4 === 0) {
            result += `</div>`
        }

    }




    /* will need the model and controller set before adding this part of the code 
    for (const city of cities) {
        // Aplicação do filtro (currently wont work due to not having the model and controler set so im giving some placeholders)
        if ((filterName !== "" && !city.name.startsWith(filterName)) ||
            (filterGenre !== "" && city.zone !== filterGenre)
        ) {
            continue;
        }
        // Criação de linha
        if (i % 4 === 0) {
            result += `<div class="row">`
        }
        // Geração do card
        result += `
        <div class="col-sm-4">

        </div>
            
        `
        
        i++
        // Criação do fecho da linha
        if (i % 4 === 0) {
            result += `</div>`
        }
    }
    */



    // adding all generated catalongs to the id myCatalog
    myCatalog.innerHTML = result

    // Making the buttons work
    const btnsCity = document.getElementsByClassName("view")
    for (const elem of btnsCity) {
        elem.addEventListener("click", function () {
            //setCurrentBand(this.id)
        })
    }

    
}

