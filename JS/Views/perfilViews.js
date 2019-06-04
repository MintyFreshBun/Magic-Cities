document.querySelector("#perfilName").innerHTML=` Aprendiz ${sessionStorage.getItem("loggedUser")}`
document.querySelector("nivel").innerHTML=`Nivel ${sessionStorage.getItem("userLvl")}`
document.querySelector("rank").innerHTML=`Rank: ${sessionStorage.getItem("userRank")}#`