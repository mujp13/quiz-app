function handleStartQuiz() {
  //Create an event listener for clicking on "Start Quiz" button.
  //When user clicks it, the user will go to 1st question.
  //generateQuestion();

  $('.main-page').on("click", '.startButton', function(event) {
    $('.main-page').hide();
    renderQuestion();
  });

}

function renderQuestion() {
  
  let num = 1;
  let currentQuestion = 0;
  let answerNum = 0;
  const questionHtml = $(`
      <div class="question">
          <p><strong>Q${num}</strong>: ${STORE[currentQuestion].question}</p>
          <label>
              <input type="radio" name="one" value="a">${STORE[currentQuestion].options[answerNum]}</label>
          <label>
              <input type="radio" name="one" value="b">${STORE[currentQuestion].options[answerNum+1]}</label>
          <label>
              <input type="radio" name="one" value="c">${STORE[currentQuestion].options[answerNum+2]}</label>
          <label>
              <input type="radio" name="one" value="d">${STORE[currentQuestion].options[answerNum+3]}</label>
          <button type="submit" class="submitButton button"> Submit </button>
      </div>
  `);
  
  $('.questionBox').html(questionHtml);
  updateQuestionScore();

  

}

function updateQuestionScore() {
  // update question number and score

}

function generateQuestion() {
  //create question
}

function submitAnswer() {
  //user click the radio button to select answer.
  //store that in a variable
  $('body').on("submit",'#js-questions', function(event) {
    event.preventDefault();

    let currentQ = STORE.questions[]
  
}

function nextQuestion() {

}

//wrongAnswer()?
//resulting feedback if a selected answer is incorrect

function handleRestartQuiz() {

}

//finalScore()?
//determines final score and feedback at the end of the quiz

function makeQuiz() {
  handleStartQuiz();
  submitAnswer();
  nextQuestion();
  handleRestartQuiz();
}

$(makeQuiz);