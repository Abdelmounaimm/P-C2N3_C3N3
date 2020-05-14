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
    testBtn.style.display = 'none'
    Préambule.style.display = 'none'
    questionnaire.style.display = 'block'

}

