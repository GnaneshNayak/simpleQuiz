const opt1 = document.getElementById('opt1');
const opt2 = document.getElementById('opt2');
const opt3 = document.getElementById('opt3');
const opt4 = document.getElementById('opt4');

const quiz = document.getElementById('quiz');
const questionTitle = document.getElementById('question');
const answersInput = document.querySelectorAll('.answer');

const submitBtn = document.querySelector('button');

let currentQuizIndex = 0;
let score = 0;

const quizData = [
  {
    question:
      'Which data type is used to represent true or false values in JavaScript?',
    a: 'Number',
    b: 'Boolean',
    c: 'String',
    d: 'Array',
    correct: 'b',
  },
  {
    question:
      'Which programming language is known for its use in web development?',
    a: 'Java',
    b: 'Python',
    c: 'Ruby',
    d: 'JavaScript',
    correct: 'd',
  },
  {
    question: 'What is the result of 2 + 2 in JavaScript?',
    a: '3',
    b: '4',
    c: '5',
    d: '6',
    correct: 'b',
  },
  {
    question:
      'Which of the following is a valid way to declare a variable in JavaScript?',
    a: 'var x = 10;',
    b: 'let x = 10;',
    c: 'const x = 10;',
    d: 'All of the above',
    correct: 'd',
  },
  {
    question:
      'Which symbol is used for comments in many programming languages?',
    a: '//',
    b: '/* ... */',
    c: '#',
    d: '--',
    correct: 'a',
  },
];

loadQuiz();

function loadQuiz() {
  deselectQuiz();
  const currentQuiz = quizData[currentQuizIndex];
  questionTitle.innerText = currentQuiz.question;
  opt1.innerText = currentQuiz.a;
  opt2.innerText = currentQuiz.b;
  opt3.innerText = currentQuiz.c;
  opt4.innerText = currentQuiz.d;
}

function deselectQuiz() {
  answersInput.forEach((ans) => {
    ans.checked = false;
  });
}

function getSelectedAnswer() {
  let answer;

  answersInput.forEach((ans) => {
    if (ans.checked) {
      answer = ans.id;
    }
  });

  return answer;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelectedAnswer();

  if (answer) {
    if (answer === quizData[currentQuizIndex].correct) {
      score++;
    }
    currentQuizIndex++;
    if (currentQuizIndex < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
