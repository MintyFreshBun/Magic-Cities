import { questions } from "../Controllers/quizController.js";


function renderQuestionNumber(){
  const renderQuestionNumber = document.querySelector("#QuestionNumber")
  let result =`
  <p>${questions[0].id}</p>  
  `
  renderQuestionNumber.innerHTML = result 
}
renderQuestionNumber()
function renderQuestion(){
  const renderQuestion = document.querySelector("#QuestionText")
  let result = `
  <p>${questions[0].description}</p>  
  `
renderQuestion.innerHTML = result 
}
renderQuestion()





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