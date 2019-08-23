var askQuestion = document.querySelector('#ask-question');
var getAnswer = document.querySelector('#get-answer');
var eightBall = document.querySelector('#eight-ball');
var question = document.querySelector('#question');
var randomAnswer = document.querySelector('#random-answer');
var clear = document.querySelector('#clear');
var text = document.querySelector('p');

var answersArray = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes - definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful."
]

function getRandomAnswer() {
  var randomIndex = Math.floor(Math.random() * 20);
  eightBall.classList.add('hide');
  text.classList.add('show');
  randomAnswer.innerText = answersArray[randomIndex];
}

function changeQuestion() {
  question.innerText = askQuestion.value
}

askQuestion.addEventListener('click', function() {
  askQuestion.value = "";
})

getAnswer.addEventListener('click', function() {
  getRandomAnswer();
  changeQuestion();
  askQuestion.value = "";
})
