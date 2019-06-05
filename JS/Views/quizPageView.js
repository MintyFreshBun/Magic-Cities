import { questions } from "../Controllers/quizController.js";



// obter ID da questão mediante o nivel atual da criança


renderQuestionNumber()
function renderQuestionNumber(){
  const renderQuestionNumber = document.querySelector("#QuestionNumber")
  let result =`
  <p>${questions[0].id}</p>  
  `
  renderQuestionNumber.innerHTML = result 
}

renderQuestion()
function renderQuestion(){
  const renderQuestion = document.querySelector("#QuestionText")
  let result = `
  <p>${questions[0].description}</p>

  `
renderQuestion.innerHTML = result 
}
renderResponses()

function renderResponses(id){
  let i = 1
  for (const question of questions) {
    if (question.id == id){
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