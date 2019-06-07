import { questions } from "../Controllers/quizController.js";
import { User } from "../Models/usersModel.js";


// obter ID da questão mediante o nivel atual da criança


// fazer uma função que dê render a tudo
renderCurrentQuestion()
function renderCurrentQuestion(userQuestionId){
  const renderQuestionNumber = document.querySelector("#QuestionNumber")
  let result =`
  <p>${questions[id].id}</p>
  `
  renderQuestionNumber.innerHTML = result 

  const renderQuestion = document.querySelector("#QuestionText")
  let result2 = `
  <p>${questions[id].description}</p>
  `
  renderQuestion.innerHTML = result2
  let i = 1
  for (const question of questions) {
    if (question.id == id){
    for (const response3 of question.responses) {
       document.querySelector("#Button"+i).innerHTML = response3
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