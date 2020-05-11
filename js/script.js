const questionnaire =[
    {
        "Q":'sii',
        "element":["label", ],
        "text":["age"],
        "input":"input",
        "type":'radio',
        "value":[],
        "name":"Q3",
        "R":""
    },
    {
        "Q":'Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, su' +
        'eurs) ?',
        "element":["label", "label"],
        "text": ["NON", "OUI"]
        "input": "input",
        "type":'radio',
        "value":[1,2],
        "name":"Q1",
        "R": ""
    },
    {
        "Q":'',
        "element":["label","label","label","label"],
        "text":[],
        "input":"input",
        "type":"radio",
        "value":[1, 2, 1, 1],
        "name":"Q2",
        "R":""
    },
    {
        "Q":'sii',
        "element":["label", ],
        "text":["age"],
        "input":"input",
        "type":'radio',
        "value":[],
        "name":"Q3",
        "R":""
    },
];
//////selector/////
const testBtn = document.querySelector('.start-btn')
const questionnaire = document.querySelector('.questionnaire')
const Préambule = document.querySelector('.Préambule')
const stepper = document.querySelectorAll('.stepper h1')
const nextBtn = document.querySelector('.next')
const previousBtn = document.querySelector('.previous')
const currentquestion = document.querySelector('.question')
const answerInputs = document.querySelector('.answer-inputs')
const progressBar = document.querySelector('.bar')
const questionNumber = document.querySelector('.question-number')
const animateBox = document.querySelector('.animation')



counter = -1;

console.log(resultMessage[0]);
