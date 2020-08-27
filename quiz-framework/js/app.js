const questionNo = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const explainText = document.querySelector(".explain-text");
const answerIndicatorContainer = document.querySelector(".answer-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;


// push the questions into availableQuestions Array
function setAvailableQuestions() {
    const totalQuestion = 5;
    for (let i = 0; i < quiz.length; i++) {
        availableQuestions.push(quiz[i])
    }
    //console.log(availableQuestions)
}

// set question number and question and options
function getNewQuestion() {
    explainText.innerHTML = '';
    // set question number
    questionNo.innerHTML = "Question " + (questionCounter + 1) + " of 5";
    // set question text
    // get random question
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;
    // console.log(questionIndex)

    // get the position of 'questionIndex' from the availableQuestion Array
    const index1 = availableQuestions.indexOf(questionIndex);
    // remove the 'questionIndex' from the availableQuestion Array so that the question does not repeat
    availableQuestions.splice(index1, 1);
    console.log(availableQuestions)

    // set options
    // get the length of options
    const optionLen = currentQuestion.options.length
    // push options into availableOptions array
    for (let i = 0; i < optionLen; i++) {
        availableOptions.push(i)
    }

    optionContainer.innerHTML = '';
    let animationDelay = 0.15;
    // create options in html
    for (let i = 0; i < optionLen; i++) {
        // random option
        const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
        // get the position of 'optionIndex' from availableOptions
        const index2 = availableOptions.indexOf(optionIndex);
        // remove the 'optionIndex' from availableOptions, so that the option does not repeat
        availableOptions.splice(index2, 1);
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[optionIndex];
        option.id = optionIndex;
        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.15;
        option.className = "option";
        optionContainer.appendChild(option)
        option.setAttribute("onclick", "getResult(this)");
    }
    questionCounter++
}

// get the result of current attempt question
function getResult(element) {
    const id = parseInt(element.id);
    // get the answer by comparing the if of clicked option
    if (id === currentQuestion.answer) {
        // set the green color to the correct answer
        element.classList.add("correct");
        // add the indicator to correct mark
        updateAnswerIndicator("correct");
        correctAnswers++;
        console.log("correct:" + correctAnswers)
        explainText.innerHTML = "You've got the correct one! " + currentQuestion.explain;
    }
    else {
        // set the red color to the wrong answer
        element.classList.add("wrong");
        // add the indicator to wrong mark
        updateAnswerIndicator("wrong");

        // if the answer is incorrect, add the green color to the correct answer
        const optionLen = optionContainer.children.length;
        for (let i = 0; i < optionLen; i++) {
            if (parseInt(optionContainer.children[i].id) === currentQuestion.answer) {
                optionContainer.children[i].classList.add("correct");
            }
        }
        explainText.innerHTML = "Oops give it another try next time! " + currentQuestion.explain;
    }
    attempt++;
    unclickableOption();
}

// make all the options unclickable when the user selects an option
// this step restricts the user to change the choice or select any other options
function unclickableOption() {
    const optionLen = optionContainer.children.length;
    for (let i = 0; i < optionLen; i++) {
        optionContainer.children[i].classList.add("already-answered");
    }

}

function answerIndicator() {
    answerIndicatorContainer.innerHTML = '';
    const totalQuestion = 5;
    for (let i = 0; i < totalQuestion; i++) {
        const indicator = document.createElement("div");
        answerIndicatorContainer.appendChild(indicator);
    }
}

function updateAnswerIndicator(markType) {
    answerIndicatorContainer.children[questionCounter - 1].classList.add(markType)

}

function next() {
    if (questionCounter == 5) {
        console.log("quiz over");
        quizOver();
    }
    else {
        getNewQuestion();
    }
}

function back() {
    if (questionCounter == 1){
        // hide quiz box
        quizBox.classList.add("hide");
        // show home box
        homeBox.classList.remove("hide");
        resetQuiz();
    }
    else {
        

    }
}

function quizOver() {
    // hide quiz box
    quizBox.classList.add("hide");
    // show result box
    resultBox.classList.remove("hide");
    quizResult();

}

// get the results
function quizResult() {
    resultBox.querySelector(".total-question").innerHTML = 5;
    resultBox.querySelector(".total-attempt").innerHTML = attempt;
    resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
    resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;
    const percentage = (correctAnswers / 5) * 100;
    resultBox.querySelector(".percentage").innerHTML = percentage.toFixed(2) + "%";
    resultBox.querySelector(".total-score").innerHTML = correctAnswers + " / " + 5;

}

function resetQuiz() {
    questionCounter = 0;
    correctAnswers = 0;
    attempt = 0;
}

// try the quiz again
function tryAgainQuiz() {
    // hide the result box
    resultBox.classList.add("hide");
    // show the quiz box
    quizBox.classList.remove("hide");
    resetQuiz();
    startQuiz();
}

function goToHome(){
    // TEMPORARY SHOW THE INSTRUCTION PAGE - NEEDS TO GO BACK TO QUIZ HOME ON MAIN WEBSITE
    // hide result box 
    resultBox.classList.add("hide");
    // show home box
    homeBox.classList.remove("hide");
    resetQuiz();
}


// ##### STARTING POINT #####

function startQuiz(){
    // hide home box
    homeBox.classList.add("hide");
    // show quiz box
    quizBox.classList.remove("hide");
    // first we will set all questions in availableQuestions Array
    setAvailableQuestions();
    // second we will call getNewQuestion(); function
    getNewQuestion();
    // create indicator of answers
    answerIndicator();
}

window.onload = function (){
    homeBox.querySelector(".total-questions").innerHTML = 5;
}