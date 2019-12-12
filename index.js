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
              <div class="hidden"></div>
          <label>
              <input type="radio" name="choice" value="b">${STORE[currentQuestion].options[1]}</label>
              <div class="hidden"></div>
          <label>
              <input type="radio" name="choice" value="c">${STORE[currentQuestion].options[2]}</label>
              <div class="hidden"></div>
          <label>
              <input type="radio" name="choice" value="d">${STORE[currentQuestion].options[3]}</label>
              <div class="hidden"></div>
          <input type="submit" id="answer" class="submitButton button">
          <button type ="button" id="next-question" tabindex="6"> Next Q's</button>
      </div>
  `);
  
  $('.questionBox').html(questionHtml);
  updateQuestionNum();
  $("#next-question").hide();
  currentQuestion++;
  num++;
}

function updateQuestionNum() {
  let count = 0;
  count += 1;
  $('.question-number').text(count);
}


function handleAnswer() {
  //user click the radio button to select answer.
  //store that in a variable
  $('.questionBox').on("submit", '.question', function(event) {
    event.preventDefault();
    
    let selected = $('input:checked').val();
    let correct = currentQuestion.answer;
    
    //User gets the correct answer
    if(selected === correct) {
      $('.hidden').text('You got it right!');
    }
    else {
      $('.hidden').text('You got it right!');
    }
    //$('#answer').hide();
    //$("input[type=radio]").attr('disabled', true);
    //$('#next-question').show();
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