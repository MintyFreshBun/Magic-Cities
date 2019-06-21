import {
  questions
} from "../Controllers/quizController.js";
import {
  users
} from "../Controllers/usersController.js";
import {
  updateNavbar
} from "../Views/navBarView.js"

//criação da navbar
updateNavbar()

// obter ID da questão mediante o nivel atual da criança
let userQuestionId = sessionStorage.getItem("userQuestionId")

// fazer uma função que dê render a tudo
renderCurrentQuestion()
//renderNarrative()

/**
 * Função que renderiza a questão atual
 */
function renderCurrentQuestion() {
  for (const question of questions) {
    if (question.id == userQuestionId) {

      // Nº da pergunta
      document.querySelector("#QuestionNumber").innerHTML = `<p>Pergunta #${+question.id+1}</p>`
      // Narração

      // Questão
      document.querySelector("#narrativeBox").innerHTML= `<p>${question.narrative}</p>`
      document.querySelector("#QuestionText").innerHTML = `<p>${question.description}</p>`
      // Respostas
      let i = 0
      let result = ""
      for (const response of question.responses) {
        result += `<button id="${i}" type="button" class="btn btn-primary btn-lg resp">${response}</button>`
        result += `<div class="row"><hr></div>`
        i++
      }
      document.querySelector("#Buttons").innerHTML = result
    //document.querySelector("#Buttons").style.visibility = "hidden"
    }
  }


  // Obter 4 botões
  const buttons = document.getElementsByClassName("resp")
  for (const button of buttons) {
    button.addEventListener("click", function () {
      checkAnswer(this.id)
    })
  }

}


/**
 * 
 * @param {string} answer Resposta selecionada pelo User
 */
function checkAnswer(answer) {
  for (const question of questions) {
    if (question.id == userQuestionId) {

      if (answer == question.correctResponse) {
        
        

        // acrescentar 25 xp ao User quando acerta numa questão e mover para a próxima pergunta
        for (const user of users) {

          
          user.userQuestionId += 1
          sessionStorage.setItem("userQuestionId", user.userQuestionId)
          if(user.username === sessionStorage.getItem("loggedUser")){
            if(user.xp >= 75){

              user.xp = 0
              user.level += 1
              
              

              sessionStorage.setItem("userLvl", user.level)
              sessionStorage.setItem("userXP", user.xp)
         

              Swal.fire({
                type: 'success',
                title: `Nivel ${user.level}`,
                text: 'Parabéns! Passas-te de nível!',
                buttons:{ confirm:"Próxima pergunta"
      
                },
             // It halts page reload until the "ok" button is clicked
              }).then(val =>{
                if(val){
                  location.reload()
                }
              })
            }else{
            user.xp += 25
            sessionStorage.setItem("userXP", user.xp)
          
          //Correct popup button
            Swal.fire({
              type: 'success',
              title: 'Certo! :D',
              text: 'Parabéns! Agora para a próxima pergunta!',
              buttons:{ confirm:"Próxima pergunta"
    
              },
           // It halts page reload until the "ok" button is clicked
            }).then(val =>{
              if(val){
                location.reload()
              }
            })
            }
          }

        }
        localStorage.setItem("users", JSON.stringify(users))

        //update da navbar
        updateNavbar()
        //Chamar a função renderCurrentQuestion para renderizar a proxima pergunta quando o User acerta numa questão
        renderCurrentQuestion()
        
      } else {
        Swal.fire({
          type: 'error',
          title: 'Errado :(',
          text: 'Boa sorte para a próxima!',
        })

      }
      break
    }

  }

}
