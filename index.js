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
  
  const num = 1;
  const questionHtml = $(`
      <div class="question">
          <p><strong>Q${num}</strong>: Which of the following is the best aerosolized bronchodilator for a patient with an acute asthma attack?</p>
          <label>
              <input type="radio" name="one" value="a">albuterol (proventil)</label>
          <label>
              <input type="radio" name="one" value="b">ipratropium bromide (Atrovent)</label>
          <label>
              <input type="radio" name="one" value="c">cromolyn sodium (Intal)</label>
          <label>
              <input type="radio" name="one" value="d">budesonide/formoterol (Symbicort)</label>
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
  generateQuestion();
  submitAnswer();
  nextQuestion();
  handleRestartQuiz();
}

$(makeQuiz);