let qNum = 1;
let questNum =0;
let index = 0;
let result = 0;
let score = 0;

console.log(qNum);
console.log(index);
console.log(result);

function handleStartQuiz() {
  //Create an event listener for clicking on "Start Quiz" button.
  //When user clicks it, the user will go to 1st question.
  //generateQuestion();
  $('.main-page').on('click', '.startButton', function(event) {
    $('.main-page').hide();
    $('.question-number').text(qNum);
    renderQuestion();
  });

}

function renderQuestion() {  
  const questionHtml = $(`
      <div class="question">
          <p><strong>Q${qNum}</strong>: ${STORE[index].question}</p>
          <label>
              <input type="radio" name="choice" id="a" required value="${STORE[index].options[0]}"> ${STORE[index].options[0]} </label>
          <label>
              <input type="radio" name="choice" id="b" value="${STORE[index].options[1]}"> ${STORE[index].options[1]} </label>
          <label>
              <input type="radio" name="choice" id="c" value="${STORE[index].options[2]}"> ${STORE[index].options[2]} </label>
          <label>
              <input type="radio" name="choice" id="d" value="${STORE[index].options[3]}"> ${STORE[index].options[3]} </label>
          <input type="button" value="submit" id="answer" class="submitButton button">
          <button type ="button" id="next-question" tabindex="6"> Next </button>
      </div>
  `);

   $('.questionBox').html(questionHtml);
   $('#next-question').hide();
   questNum++;
   $('.question-number').text(questNum);

}

function handleAnswer() {
  $('.questionBox').on('click', '.submitButton', function(event) {
    event.preventDefault();

    let selected = $('input[name=choice]:checked').val();
    console.log(selected);
    let correct = STORE[index].answer;
    
    if (!selected) {
      alert("Choose an option");
      return;
    }
    if(selected === correct) {
      $('input[name=choice]:checked').closest('label').append('<div class="right-answer">You got it right!</div>');
      score++;
      $('.score').text(`${score}/${qNum}`);
    }
    else {
      $('input[name=choice]:checked').closest('label').append(`<div class="wrong-answer">You got it wrong! <br>The answer is "${STORE[index].answer}"</br></div>`);
      $('.score').text(`${score}/${qNum}`);
    }
    $('#answer').hide();
    $("input[type=radio]").attr('disabled', true);
    $('#next-question').show();
 
  });
}


function handleNextQuestion() {
  $('.questionBox').on('click', '#next-question', function(event) {
    if((index === STORE.length - 1)) {
      //This means that the user tried all questions
      //Get the result page
      displayResults();
    }
    else {
      qNum++;
      index++;  
      renderQuestion();
    }
  });
}

function resetVars() {
  qNum = 1;
  questNum = 0;
  index = 0;
  result = 0;
  score = 0;
  $('.question-number').text('0');
  $('.score').text('0/0');
}

function restartQuiz() {
  $('.result-page').on('click', '.restartButton', function(event) {
    resetVars();
    renderQuestion();
  });
}



function displayResults() {
  let grade = score/qNum * 100;
  let resultText = 0;
  if(grade >= 70) {
    resultText = '<p style="color:green;"><b>You passed the quiz!</b></p>';
  }
  else {
    resultText = '<p style="color:red;">You failed. Please retake the quiz!</p>'
  }
  
  let resultHtml = $(`<section class="result-page">
    <p>Your score is: ${score}/${qNum} <b>${score/qNum*100}%</b></p>
    ${resultText}
    <div class="result">
      <button type="button" id="restart" class="restartButton button">Restart Quiz</button>
    </div>  
    </section>`);
  $('.questionBox').html(resultHtml);
  restartQuiz();
}



function makeQuiz() {
  handleStartQuiz();
  handleAnswer();
  handleNextQuestion();
  
}

$(makeQuiz);