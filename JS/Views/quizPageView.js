import { questions } from "../Controllers/quizController.js";
import { users } from "../Controllers/usersController.js";

// obter ID da questão mediante o nivel atual da criança
let userQuestionId = sessionStorage.getItem("userQuestionId")

// fazer uma função que dê render a tudo
renderCurrentQuestion()

/**
 * Função que renderiza a questão atual
 */
function renderCurrentQuestion() {  
  for (const question of questions) {
    if (question.id == userQuestionId){
      // Nº da pergunta
      document.querySelector("#QuestionNumber").innerHTML = `<p>Pergunta #${question.id}</p>`
      // Questão
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
    }
  } 
  
  // Obter 4 botõoes
  const buttons = document.getElementsByClassName("resp")
  for (const button of buttons) {
    button.addEventListener("click", function() {
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
    if (question.id == userQuestionId){ 
           
      if(answer == question.correctResponse) {
        alert("CERTO")
        // acrescentar 25 xp ao User quando acerta numa questão
        for (const user of users) {
          if(user.username === sessionStorage("loggedUser")){
            user.xp += 25
          }
        }

        localStorage.setItem("users", users)
  
             
      } else {
        alert("ERRADO")
      }
    }

  }

}



// incrementar o userQuestionId sempre que o User acerta numa questão

//userQuestionId++
sessionStorage.setItem("userQuestionId", userQuestionId)

// chamar a função renderCurrentQuestion para renderizar a proxima pergunta quando o User acerta numa questão