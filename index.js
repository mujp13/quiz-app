function handleStartQuiz() {
  //Create an event listener for clicking on "Start Quiz" button.
  //When user clicks it, the user will go to 1st question.
  //generateQuestion();
  $('.main-page').on('click', '.startButton', function(event) {
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
              <input type="radio" name="choice" id="a" required>${STORE[currentQuestion].options[0]}</label>
          <label>
              <input type="radio" name="choice" id="b">${STORE[currentQuestion].options[1]}</label>
          <label>
              <input type="radio" name="choice" id="c">${STORE[currentQuestion].options[2]}</label>
          <label>
              <input type="radio" name="choice" id="d">${STORE[currentQuestion].options[3]}</label>
          <input type="button" value="submit" id="answer" class="submitButton button">
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
  
  $('.questionBox').on('click', '.submitButton', function(event) {
    event.preventDefault();
    
    let index = 0;
    let selected = $('input[name=choice]:checked').val();
    let correct = STORE[index].answer;
    
    if (!selected) {
      alert("Choose an option");
      return;
    }
    
    if(selected === correct) {
      $(document.getElementByID(selected)).text('You got it right!');
    }
    else {
      $(document.getElementByID(selected)).text('You got it wrong!');
    }
    $('#answer').hide();
    $("input[type=radio]").attr('disabled', true);
    $('#next-question').show();
  });
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