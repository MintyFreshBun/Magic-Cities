import{
    login,
    logout,
    register
}from "../Controllers/usersController"

document.querySelector("#frmSignUp").addEventListener("submit", function (event) {

    const pass = document.querySelector("#passwordRegister").value
    const confirmPass = document.querySelector("#passwordRegisterConfirm").value

    if(pass!==confirmPass){
        alert("As passwords Têm de ser iguais")
    }else{
        const registerResult = register(
            document.querySelector("#usernameRegister").value,
            document.querySelector("#passwordRegister").value)
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