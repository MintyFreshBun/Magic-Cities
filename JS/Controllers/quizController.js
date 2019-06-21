import Question from "../models/quizModel.js"

// Define um array para guardar os objetos Question
export let questions = []

// Caso já exista uma chave questions na LocalStorage é carregado tudo para o array
// Caso contrário são guardadas no array, vários objetos questions inseridos manualmente
if (localStorage.questions) {
    questions = JSON.parse(localStorage.questions)
} else {
    let questionsTempArray = [
        [
            "0", // id
            "1", // level
            "Enquanto caminhas pelo norte de Portugal, deparas-te com um camponês, desorientado e confuso, sem saber para onde ir. Ele tem uma carta para ser enviada para uma cidade, mas não conhece o nome completo. Só sabe que começa por Vila...e que foi fundada em 1988.", // narrative
            "Qual o nome completo desta cidade?", // description
            [
                "Vila do Conde",
                "Vila do Minho", // responses  
                "Vila do Camponês",
                "Vila do Tejo"
            ],
            0, //correctResponse
            "25" // points
        ],

        [
            "1", // id
            "1", // level
            "Segues para sul, continuando ainda no norte do país e acabas numa cidade cheia de cores, nesta, atravessa o Rio Douro. Mas também lá, vagueiam pessoas confusas, cheias de dúvidas sobre onde estão. Vês um placar com a data da fundação: ano 1112", // narrative
            "Qual é o nome desta cidade?", // description
            [
                "Coimbra",
                "Braga", // responses
                "Porto",
                "Lisboa",
            ],
            2, // correctResponse
            "25" // points
        ],

        [
            "2", // id
            "1", // level
            "Continuas para sul e encontras-te agora no centro do país. Vês vários mercadores à procura do que devia ser a capital. Mais uma vês procuras por pistas e descobres que esta foi fundada no ano 1147", // narrative
            "Qual o nome desta cidade?", // description
            [
                "Porto",
                "Lisboa", // responses
                "Setúbal",
                "Tejo"
            ],
            1, // correctResponse
            "25" // points
        ],

        [
            "3", // id
            "1", // level
            "Encontras um portal que te leva para uma das ilhas dos açores. Encontras-te agora numa praia com pescadores que se preparavam para pescar, mas agora não sabiam se estavam no lugar certo. Vêm ter contigo para perguntar aonde estão. Sabem que estão num lugar chamado de ponta, mas não sabem o resto. Mais pistas que descobres levam-te a concluir que esta cidade foi fundada no ano 1546", // narrative
            "Qual o nome desta cidade?", // description
            [
                "Ponte do Lima",
                "Ponta do Minho", // responses
                "Ponta de Setúbal",
                "Ponta Delgada"
            ],
            3, // correctResponse
            "25" // points
        ],

        [
            "4", // id
            "2", // level
            "Voltas ao portal de onde vieste mas não voltas-te ao continente. Continuas numa das ilhas, desta vez numa das ilhas da Madeira. Sabes que estás na capital deste arquipélago. Várias pessoas vêm ter contigo a perguntar onde estão. As tuas pistas indicam que esta cidade foi fundada no ano de 1508", // narrative
            "Qual o nome desta cidade?", // description
            [
                "Funchal",
                "Camacha", // responses
                "Deserta Grande",
                "Porto Santo"
            ],
            0, // correctResponse
            "25" // points
        ]

        [
            "5", // id
            "2", // level
            "Ouves boatos de que o malvado que está por detrás desta maldição que confunde a população portuguesa tem causado problemas no norte. Abres um portal que te leva para uma cidade no norte. Moradores locais pedem-te ajuda sobre o nome da cidade e dizem-te que o 1º rei de Portugal tinha o seu castelo nesta cidade.", // narrative
            "Qual o nome desta cidade?", // description
            [
                "Aveiro",
                "Faro", // responses
                "Guimarães",
                "Porto"
            ],
            0, // correctResponse
            "25" // points
        ]
        
        
    ];

    
    for (let i = 0; i < questionsTempArray.length; i++) {
        let tempQuestion = new Question(
            questionsTempArray[i][0],
            questionsTempArray[i][1],
            questionsTempArray[i][2],
            questionsTempArray[i][3],
            questionsTempArray[i][4],
            questionsTempArray[i][5],
            questionsTempArray[i][6]
        )

        questions.push(tempQuestion);
    }
    localStorage.setItem("questions", JSON.stringify(questions))
}




//############################### Back oFFICE fuctions
//############# Removing a question
export function removeQuestion(questionId){
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].id == questionId) {
            questions.splice(i, 1)
        }
    }
    localStorage.setItem("questions", JSON.stringify(questions))

    quizzSorting()

    //after removing we need to reaasign all the questions ID's so we dont havea  gap

    for (let i = 0; i < questions.length; i++) {
        questions[i].id = i + 1        
    }
    localStorage.setItem("questions", JSON.stringify(questions))




}

//############# adding a new question 
export function addQuestion(correctAnswer, txtNarrative, txtDescription, firstAnswer, secondAnswer, thirdAnswer, fourthAnswer, questionLevel){
    
    const points = 25;
    const id = questions.length;
    
    const responses=[
        firstAnswer,secondAnswer,thirdAnswer,fourthAnswer
    ]
    questions.push(new Question(id,questionLevel,txtNarrative,txtDescription,responses,correctAnswer,points))
    localStorage.setItem("questions", JSON.stringify(questions))
    console.log("entered")
    Swal.fire({            
        title:'Pergunta adicionada',         
        type: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK!'
    }).then((result) => {
        if (result.value) {
            // Goes back to the Cities catalog to check the newly added city
            location.href = "manageQuestionBackOffice.html"
        }
    })
    quizzSorting()

    
}


//############ Sorting quizzes by adding new ids

export function quizzSorting(){
    questions.sort(Question.compareId)
    localStorage.setItem("questions", JSON.stringify(questions))
}