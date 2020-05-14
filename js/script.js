// DOM

const testBtn = document.querySelector('.start-btn')//
const questionnaire = document.querySelector('.questionnaire')//
const Préambule = document.querySelector('.Préambule')//
const stepper = document.querySelectorAll('.stepper h1')
const nextBtn = document.querySelector('.next')//
const previousBtn = document.querySelector('.previous')//
const currentQuestion = document.querySelector('.question')
const answerInputs = document.querySelector('.answer-inputs')
const progressBar = document.querySelector('.bar')
const questionNumber = document.querySelector('.question-number')
const animateBox = document.querySelector('.animation')


//      Event Listener


testBtn.addEventListener('click', startTest)

function startTest() {
     stepper[0]
        .classList
        .remove('select')
    stepper[1]
        .classList
        .add('select')
    testBtn.style.display = 'none'
    Préambule.style.display = 'none'
    questionnaire.style.display = 'block'
    

}

