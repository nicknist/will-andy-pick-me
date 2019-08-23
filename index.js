var askQuestion = document.querySelector('#ask-question');
var getAnswer = document.querySelector('#get-answer');
var eightBall = document.querySelector('#eight-ball');
var question = document.querySelector('#question');
var randomAnswer = document.querySelector('#random-answer');
var clear = document.querySelector('#clear');
var text = document.querySelector('p');
var favorite = document.querySelector('#favorite');
var favoriteList = document.querySelector('#favorite-list');
var questionAndAnswer = document.querySelector('#question-and-answer');
var addHere = document.querySelector('#add-here');

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

function resetPage() {
  clear.disabled = true;
  getAnswer.disabled = true;
  favorite.disabled = true;
  askQuestion.value = "Ask your question here!";
}

function getRandomAnswer() {
  var randomIndex = Math.floor(Math.random() * 20);
  eightBall.classList.add('hide');
  text.classList.add('show');
  randomAnswer.innerText = answersArray[randomIndex];
}

function changeQuestion() {
  question.innerText = askQuestion.value
}

resetPage();

askQuestion.addEventListener('click', function() {
  askQuestion.value = "";
})

askQuestion.addEventListener('change', function() {
  if (askQuestion.value == "" || askQuestion.value == "Ask your question here!") {
    getAnswer.disabled = true;
  } else {
    getAnswer.disabled = false;
  }
})

getAnswer.addEventListener('click', function() {
    getRandomAnswer();
    changeQuestion();
    askQuestion.value = "";
    clear.disabled = false;
    favorite.disabled = false;
})

clear.addEventListener('click', function() {
  eightBall.classList.remove('hide');
  text.classList.remove('show');
  resetPage();
})

function addItem() {
  var li = document.createElement('LI');
  li.innerHTML = questionAndAnswer.innerHTML;
  addHere.appendChild(li);
}

favorite.addEventListener('click', function() {
  favoriteList.classList.remove('hide');
})
