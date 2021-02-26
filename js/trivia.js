

// function to build the quiz
function buildQuiz() {
    
    // variable to store the HTML output
    const output = [];
    
    // for each question...
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            // variable to store the list of possible answers
            const answers = [];

            // and for each available answer...
            for(letter in currentQuestion.answers) {

                // add an HTML radio button
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                            ${currentQuestion.answers[letter]}
                    </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="slide">
                <div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>
                </div>`
            );
        }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
}

// function to show one question at a time
function showSlide(n) {
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  currentSlide = n;
  if(currentSlide === 0){
    previousButton.style.display = 'none';
  }
  else{
    previousButton.style.display = 'inline-block';
  }
  if(currentSlide === slides.length-1){
    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
  }
  else{
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
  }
}

// function to change slides
function showNextSlide() {
  showSlide(currentSlide + 1);
}

function showPreviousSlide() {
  showSlide(currentSlide - 1);
}

// function to calculate quiz results
function showResults() {
  
  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;

  // for each question..
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      // answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      // answerContainers[questionNumber].style.color = 'red';
    }
  
    }
  );
  
  const percentage = Math.round(numCorrect / myQuestions.length * 100);
  quizContainer.style.display = 'none';
  resultsContainer.innerHTML = `Result:<br>${percentage}%<br>You got ${numCorrect} out of ${myQuestions.length}!`;

}

// variables to write in text to html elements
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
    {
      question: "1.	Where did Peter and Lauren go on their first backpacking trip?",
      answers: {
        a: "Glacier National Park",
        b: "White Mountains, NH",
        c: "Green Mountains, VT",
        d: "The Adirondacks, NY"
      },
      correctAnswer: "c"
    },
    {
      question: "2.	What did Peter and Lauren do for their first date?",
      answers: {
        a: "Ice skating at Yost Ice Arena",
        b: "Saw a Midnight Book Club improv show",
        c: "Studied for a ME320 exam"
      },
      correctAnswer: "a"
    },
    {
      question: "3.	What is their favorite New Haven pizza place?",
      answers: {
        a: "Modern Apizza",
        b: "Frank Pepe's",
        c: "Sally's"
      },
      correctAnswer: "b"
    }
  ];

  // Call buildQuiz function to display quiz immediately
buildQuiz();

// Pagination
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

showSlide(currentSlide);

// on submit, show results
submitButton.addEventListener('click', showResults);

// more event listeners
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);