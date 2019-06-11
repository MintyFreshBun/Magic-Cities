import { questions } from "../Controllers/quizController.js";

// obter ID da questão mediante o nivel atual da criança
let userQuestionId = sessionStorage.getItem("userQuestionId")

// fazer uma função que dê render a tudo
renderCurrentQuestion(userQuestionId)

function renderCurrentQuestion(){
  const renderQuestionNumber = document.querySelector("#QuestionNumber")
  let result =`
  <p>Pergunta #${questions[userQuestionId +1].id}</p>
  `
  renderQuestionNumber.innerHTML = result 

  const renderQuestion = document.querySelector("#QuestionText")
  let result2 = `
  <p>${questions[userQuestionId].description}</p>
  `
  renderQuestion.innerHTML = result2
  let i = 1
  for (const question of questions) {
    if (question.id == userQuestionId){
    for (const response of question.responses) {
       document.querySelector("#Button"+i).innerHTML = response
       i++
    }
  }
}
}


document.getElementById("Button1").addEventListener("click", function () {
  alert("hello");
});

document.getElementById("Button2").addEventListener("click", function () {
  alert("hello");
});

document.getElementById("Button3").addEventListener("click", function () {
  alert("hello");
});

document.getElementById("Button4").addEventListener("click", function () {
  alert("hello");
});