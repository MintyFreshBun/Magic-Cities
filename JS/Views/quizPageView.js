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

renderNarrative()

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
      document.querySelector("#Buttons").style.visibility = "hidden"
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

function renderNarrative() {
  for (const question of questions) {
    if (question.id == userQuestionId) {
      // Narração
      console.log(question.id)
      console.log(userQuestionId)
      console.log(question.narrative)
      document.querySelector("#QuestionText").innerHTML = `<p style="font-size:30px">${question.narrative}</p>
            
      <button type="button" onclick="${renderCurrentQuestion()}" style="float: center" class="btn btn-primary btn-lg resp">Clica aqui para o ajudar</button>`

    }
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
        alert("CERTO")
        // acrescentar 25 xp ao User quando acerta numa questão
        for (const user of users) {
          if (user.username === sessionStorage.getItem("loggedUser")) {
            if (user.xp >= 75) {
              user.xp = 0
              user.level += 1

              sessionStorage.setItem("userLvl", user.level)
              sessionStorage.setItem("userXP", JSON.stringify(user.xp))

              alert("Parabéns! Passas-te para o próximo nível!")
            } else {

              user.xp += 25
              sessionStorage.setItem("userXP", JSON.stringify(user.xp))
            }
          }

        }
        localStorage.setItem("users", JSON.stringify(users))

        //update da navbar
        updateNavbar()
        userQuestionId++
        renderCurrentQuestion()


      } else {
        alert("ERRADO")

      }
      break
    }

  }

}

// incrementar o userQuestionId sempre que o User acerta numa questão
// userQuestionId++
// Chamar a função renderCurrentQuestion para renderizar a proxima pergunta quando o User acerta numa questão
// renderCurrentQuestion()