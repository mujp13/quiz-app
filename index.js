function handleStartQuiz() {
  //Create an event listener for clicking on "Start Quiz" button.
  //When user clicks it, the user will go to 1st question.
  //generateQuestion();
  $('.main-page').on("click", '.startButton', function(event) {
    $('.main-page').hide();
    renderQuestion();
    updateQuestionNum();
  });

}

function renderQuestion() {
  
  let num = 1;
  let currentQuestion = 0;  

  const questionHtml = $(`
      <div class="question">
          <p><strong>Q${num}</strong>: ${STORE[currentQuestion].question}</p>
          <label>
              <input type="radio" name="choice" value="a" required>${STORE[currentQuestion].options[0]}</label>
          <label>
              <input type="radio" name="choice" value="b">${STORE[currentQuestion].options[1]}</label>
          <label>
              <input type="radio" name="choice" value="c">${STORE[currentQuestion].options[2]}</label>
          <label>
              <input type="radio" name="choice" value="d">${STORE[currentQuestion].options[3]}</label>
          <input type="submit" value="Submit" class="submitButton button">
      </div>
  `);
  
  $('.questionBox').html(questionHtml);
  updateQuestionNum();
  currentQuestion += 1;
  num += 1;
}

function updateQuestionNum() {
  // update question number and score
  let clickCount = 1;
  $('.question-number').text(clickCount);
  $('.submitButton').click(function(event) {
    clickCount += 1;
    $('.question-number').text(clickCount);
  });
}

function generateQuestion() {
  //create question
}


function handleAnswer() {
  //user click the radio button to select answer.
  //store that in a variable
  $('.question').on("submit",'.submitButton', function(event) {
    event.preventDefault();
    
    let currentIndex = 0;
    let score = 0;
    let currentQuestion = STORE[currentIndex];
    let selectedAnswer = $("input[name=choice]:checked").val();
    
    //User gets the correct answer
    if(selectedAnswer === currentQuestion.answer) {
      //update score
      $("input[name=choice]:checked").append('<p class=correct-ans>You got it right!</p>');
    }
    else {
      $("input[name=choice]:checked").append(`<p class=wrong-ans>You got it wrong! The answer is ${current.Question.answer}.</p>`);
    }


  });
}


function nextQuestionDecision() {

}


function handleRestartQuiz() {

}

//finalScore()?
//determines final score and feedback at the end of the quiz

function makeQuiz() {
  handleStartQuiz();
  handleAnswer();

}

$(makeQuiz);