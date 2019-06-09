import User from "../Models/usersModel.js";

//Defines an array to save user Objects
export let users=[]

// In case a user key exists in LocalStorage, this one is loaded into the array
//Otherwise, they are saved into the array with several objects User are inserted manualy
if(localStorage.users){
    users = JSON.parse(localStorage.users)
}else{
    const user1= new User("JohnWink", "12345", "0","1","0","")
    const user2= new User("Mint", "54321","0","1","0","")
    const user3= new User("Tiago", "15234","0","1","0","")
    users.push(user1,user2,user3);
    localStorage.setItem("users", JSON.stringify(users))
}

//Function that checks a user (update of the key on the session storage), returns "true" if credentials exist.
export function login(usernameLogin, passwordLogin){
    let existUser = false
    for(const user of users){
        if(user.username === usernameLogin && user.password == passwordLogin){
            sessionStorage.setItem("loggedUser", usernameLogin)
            sessionStorage.setItem("userXP", user.xp)
            sessionStorage.setItem("userLvl", user.level)
            sessionStorage.setItem("userQuestionId", user.userQuestionId)
            sessionStorage.setItem("userLikes", user.userLikes)
            existUser = true
        }
    }
    return existUser
}

//Logout function
export function logout(){
    sessionStorage.removeItem("loggedUser")
}

// Function that registers a user(update of the key in SessionStorage)
export function register(usernameRegister, passwordRegister, xp, level, userQuestionId){
    let existUser = false
    for(const user of users){
        if(user.username === usernameRegister && user.password === passwordRegister){
            existUser= true
        }
    }
    if(!existUser){
        users.push(new User(usernameRegister, passwordRegister, xp , level, userQuestionId))
        localStorage.setItem("users", JSON.stringify(users))
        sessionStorage.setItem("loggedUser", usernameRegister)
        sessionStorage.setItem("userXP",xp)
        sessionStorage.setItem("userLvl", level)
        sessionStorage.setItem("userQuestionId",userQuestionId)
        sessionStorage.setItem("userLikes", user.userLikes)
        return true
    }
    return false
}


