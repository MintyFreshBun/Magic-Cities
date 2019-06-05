document.querySelector("#perfilName").innerHTML=` Aprendiz ${sessionStorage.getItem("loggedUser")}`
document.querySelector("#nivel").innerHTML=`Nivel ${sessionStorage.getItem("userLvl")}`
document.querySelector("#rank").innerHTML=`Rank: ${sessionStorage.getItem("userRank")}`

//XP progress bar
document.querySelector("#progressBar").style.width=sessionStorage.getItem("userXP") + "%"
document.querySelector("#progressBar").innerHTML=sessionStorage.getItem("userXP") + "%"