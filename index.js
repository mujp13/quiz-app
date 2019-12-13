let qNum = 1;
let index = 0;
let result = 0;

console.log(qNum);
console.log(index);
console.log(result);

function handleStartQuiz() {
  //Create an event listener for clicking on "Start Quiz" button.
  //When user clicks it, the user will go to 1st question.
  //generateQuestion();
  $('.main-page').on('click', '.startButton', function(event) {
    $('.main-page').hide();
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
          <button type ="button" id="next-question" tabindex="6"> Next Q's</button>
      </div>
  `);
   $('.questionBox').html(questionHtml);
   $("#next-question").hide();
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
    }
    else {
      $('input[name=choice]:checked').closest('label').append(`<div class="wrong-answer">You got it wrong! <br>The answer is "${STORE[index].answer}"</br></div>`);
    }
    $('#answer').hide();
    $("input[type=radio]").attr('disabled', true);
    $('#next-question').show();
  });
}


function handleNextQuestion() {
  $('.questionBox').on('click', '#next-question', function(event) {
    if((index != STORE.length)) {
      //This means that the user tried all questions
      //Get the result page
      displayResults();
    }
    else {
      //This means that we are moving to next question
      qNum++;
      index++;
      renderQuestion();
    }
  });
}


function makeQuiz() {
  handleStartQuiz();
  handleAnswer();
  handleNextQuestion();

}

$(makeQuiz);