import Comment from "../Models/commentModel.js";

//Defines an array to save user Objects
export let comments=[]

// In case a user key exists in LocalStorage, this one is loaded into the array
//Otherwise, they are saved into the array with several objects User are inserted manualy
//question whit date now is the format it wil present, in the end it will effect the sorting date
if(localStorage.comments){
    comments = JSON.parse(localStorage.comments)
}else{
    const comment1= new Comment("Ponta Delgada", "AnaBella", "...","Quero visitar os Açores!")
    const comment2= new Comment("Porto", "João14-6","...","Cidade Linda, gosto muito!")
    const comment3= new Comment("Lisboa", "JorgeBlaze ","...","Que cidade tão grande e movimentada!")
    comments.push(comment1,comment2,comment3);
    localStorage.setItem("comments", JSON.stringify(comments))
}


//########### fuctions to add a comment ########

export function addComment(cityName,userName,date,stringTxt){
    const newComment = new Comment (cityName,userName,date,stringTxt)
    comments.push(newComment);
    localStorage.setItem("comments", JSON.stringify(comments))

}