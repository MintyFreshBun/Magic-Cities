import{
    login,
    register
}from "../Controllers/usersController.js"


document.querySelector("#frmSignUp").addEventListener("submit", function (event) {

    const pass = document.querySelector("#passwordRegister").value
    const confirmPass = document.querySelector("#passwordRegisterConfirm").value

    if(pass!==confirmPass){
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'As passwords Têm de ser iguais',
          })
      
    }else{
        const registerResult = register(
            document.querySelector("#usernameRegister").value,
            document.querySelector("#passwordRegister").value,
             0, // xp
             1, // lvl
             0,// userQuestionID
             " ",// userLikes
             false,)//Admin check

        if(registerResult == true){
            //Close modal window
            $('#signupModal').modal('hide')
            //Present the authentication of the user
            Swal.fire(`Olá ${sessionStorage.getItem("loggedUser")}`).then(val =>{
                if(val){
                    //Sends the user to the mainPage
                    location.href = "HTML/MainPage.html";
                }
              })
            
            
           
        }else{
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Credenciais já existentes',
              })
        }
    }
    //Prevenção da submissão do formulário
    event.preventDefault()
})


document.querySelector("#frmLogin").addEventListener("submit", function (event){

    const loginResult= login(
         document.querySelector("#usernameLogin").value,
         document.querySelector("#passwordLogin").value
    )
    event.preventDefault()
    if(loginResult === true){
          //Sends the user to the mainPage
          Swal.fire(`Olá ${sessionStorage.getItem("loggedUser")}`).then(val =>{
            if(val){
                location.href = "HTML/MainPage.html";
            }
          })
        
    }else{
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Username ou password está inválido. Tenta novamente',
          })
        
    }

})