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
            "Enquanto caminhas o distrito  de Viana do Castelo, deparas-te com um camponês, desorientado e confuso, sem saber para onde ir. Ele tem uma carta para ser enviada para Valdevez, mas não conhece o nome completo da cidade", // narrative
            "Qual o nome complete desta cidade?", // description
            [
                "Arcos de Valdevez",
                "Prcos de Valdevez", // responses  
                "Correntes de Valdevez",
                "Braga de Valdevez"
            ],
            1, //correctResponse
            "25" // points
        ],

        [
            "1", // id
            "1", // level
            "Bem vindo... narração", // narrative
            "Descrição da pergunta#2.. etc", // description
            [
                "c",
                "b", // responses
                "a",
                "d"
            ],
            2, // correctResponse
            "25" // points
        ],

        [
            "2", // id
            "1", // level
            "Bem vindo... narração", // narrative
            "Descrição da pergunta#3.. etc", // description
            [
                "1",
                "2", // responses
                "3",
                "4"
            ],
            0, // correctResponse
            "25" // points
        ],

        [
            "3", // id
            "1", // level
            "Bem vindo... narração", // narrative
            "Descrição da pergunta#4.. etc", // description
            [
                "111",
                "22", // responses
                "33asda",
                "4dsda"
            ],
            1, // correctResponse
            "25" // points
        ],
        [
            "6", // id
            "1", // level
            "Bem vindo... narraçãsdsdso", // narrative
            "Descrição da pergunta#4.. etc", // description
            [
                "111",
                "22", // responses
                "33asda",
                "4dsda"
            ],
            1, // correctResponse
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

