import{
    login,
    register
}from "../Controllers/usersController.js"


document.querySelector("#frmSignUp").addEventListener("submit", function (event) {

    const pass = document.querySelector("#passwordRegister").value
    const confirmPass = document.querySelector("#passwordRegisterConfirm").value

    if(pass!==confirmPass){
        alert("As passwords Têm de ser iguais")
    }else{
        const registerResult = register(
            document.querySelector("#usernameRegister").value,
            document.querySelector("#passwordRegister").value,
             0, // xp
             1, // lvl
             100,)// maxLvl

        if(registerResult == true){
            //Close modal window
            $('#signupModal').modal('hide')
            //Present the authentication of the user
            alert(`Olá ${sessionStorage.getItem("loggedUser")}`)
           
        }else{
            alert("Credenciais já existentes")
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
        alert(`Welcome ${sessionStorage.getItem("loggedUser")}`)
        location.href = "HTML/MainPage.html";
    }else{
        
        alert("Username ou password está inválido. Tente novamente")
    }

})