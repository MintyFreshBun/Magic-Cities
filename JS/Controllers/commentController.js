import Comment from "../Models/commentModel.js";

//Defines an array to save user Objects
export let comments=[]

// In case a user key exists in LocalStorage, this one is loaded into the array
//Otherwise, they are saved into the array with several objects User are inserted manualy
if(localStorage.users){
    comments = JSON.parse(localStorage.users)
}else{
    const comment1= new Comment("Ponta Delgada", "AnaBella", "...","Quero visitar os Açores!")
    const comment2= new Comment("Porto", "João14-6","...","Cidade Linda, gosto muito!")
    const comment3= new Comment("Lisboa", "JorgeBlaze ","...","Que cidade tão grande e movimentada!")
    users.push(comment1,comment2,comment3);
    localStorage.setItem("comments", JSON.stringify(comments))
}