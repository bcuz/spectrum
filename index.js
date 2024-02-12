let flashcards = [
  { id: 0, question: 'beige', answer: 'age', backgroundColor: '#eee5b1' },
  { id: 1, question: 'light orange', answer: 'gender', backgroundColor: '#ffca33' },
  { id: 2, question: 'light blue', answer: 'race', backgroundColor: '#9cdaea' },
  { id: 3, question: 'grey blue', answer: 'ethnicity', backgroundColor: '#6f91be' },
  { id: 4, question: 'blue', answer: 'socioeconomic status', backgroundColor: '#1b9fd9' },
  { id: 5, question: 'dark blue', answer: 'native & foreign language', backgroundColor: '#4a53a2' },
  { id: 6, question: 'light green', answer: 'national origin', backgroundColor: '#b4d548' },
  { id: 7, question: 'green', answer: 'national region', backgroundColor: '#20b155' },
  { id: 8, question: 'light purple', answer: 'political ideology & thought', backgroundColor: '#a2499a' },
  { id: 9, question: 'pink', answer: 'religion', backgroundColor: '#f7acc7' },
  { id: 10, question: 'red', answer: 'sexual orientation', backgroundColor: '#ef1e28' },
  { id: 11, question: 'dark red', answer: 'physical health/illness', backgroundColor: '#89161a' },
  { id: 12, question: 'dark purple', answer: 'mental & emotional health/illness', backgroundColor: '#67288e' },
  { id: 13, question: 'brown', answer: 'global awareness', backgroundColor: '#754d2c' },
  { id: 14, question: 'orange', answer: 'international studies', backgroundColor: '#f67e34' },
  { id: 15, question: 'light gray', answer: 'international art & aesthetics', backgroundColor: '#c2c3c3' },
  { id: 16, question: 'dark gray', answer: 'law & social justice', backgroundColor: '#807e7e' },
  { id: 17, question: 'yellow', answer: 'family & community studies', backgroundColor: '#fbf044' },
]

const flashcardsClass = document.querySelector('.flashcard')
const cardsLenght = flashcards.length

let randomCardNumber = Math.floor(Math.random() * flashcards.length)
console.log("Random", randomCardNumber)

const mapQuestions = flashcards.map(flashcard => flashcard.question)
console.log("Map Questions", mapQuestions)

const mapAnswers = flashcards.map(flashcard => flashcard.answer)
console.log("Map Answers", mapAnswers)

const filterQuestions = flashcards.filter(flashcard => flashcard.question)
console.log("Filter Questions", filterQuestions)

const word = document.getElementById("word")
const button = document.getElementById("button")

console.log(word)
console.log("Question", flashcards[randomCardNumber].question)

word.innerText = mapQuestions[randomCardNumber]

const newQuestion = () => {
  console.log("Word", word)
  let randomCardNumber = Math.floor(Math.random() * flashcards.length)
  document.getElementsByClassName('flashcard')[0].style.backgroundColor = flashcards[randomCardNumber].backgroundColor
  word.innerText = flashcards[randomCardNumber].question
  
  
  const showAnswer = document.getElementById("button11")
  showAnswer.addEventListener('click', function () {
    word.innerText = flashcards[randomCardNumber].answer
    document.getElementsByClassName('flashcard')[0].style.backgroundColor = '#fff'
  })

  const flipBackNewQuestion = document.getElementById('button12')
  flipBackNewQuestion.addEventListener('click', function () {
    word.innerText = flashcards[randomCardNumber].question
  document.getElementsByClassName('flashcard')[0].style.backgroundColor = flashcards[randomCardNumber].backgroundColor

  })

  const removeQuestion = document.getElementById('button13')
  removeQuestion.addEventListener('click', function () {
    const filterQuestion = flashcards.filter(flashcard => flashcard.question !== flashcards[randomCardNumber].question)
    console.log("filterQuestion", filterQuestion)
    flashcards = filterQuestion
    console.log(flashcards)
  })
}

console.log(newQuestion())

function returnAnswer() {
  return word.innerText = mapAnswers[randomCardNumber]
}

function flipBack() {
  return word.innerText = mapQuestions[randomCardNumber]
  document.getElementsByClassName('flashcard')[0].style.backgroundColor = '#c5d4ed'
}

function reload() {
  location.reload(true)
}

const listOfQuestions = document.createElement('ul')
document.querySelector('.questionsDiv').appendChild(listOfQuestions)

mapQuestions.forEach(function (mapQuestions) {
  const listQuestions = document.createElement('li');
  listOfQuestions.appendChild(listQuestions);
  listQuestions.innerHTML += mapQuestions;
})

const listOfAnswers = document.createElement('ul')
document.querySelector('.answersDiv').appendChild(listOfAnswers)

const displayList = () => {
  mapAnswers.forEach(function (mapAnswers) {
    const listAnswers = document.createElement('li');
    listOfAnswers.appendChild(listAnswers);
    listAnswers.innerHTML += mapAnswers
  })
}

const appendNewWord = () => {
  let randomCardNumber = Math.floor(Math.random() * flashcards.length)
  const newQuestion = document.createElement('h3')
  const textNodeNewQuestion = document.createTextNode(flashcards[randomCardNumber].question)
  newQuestion.appendChild(textNodeNewQuestion)
  newQuestion.style.backgroundColor = 'red'
  newQuestion.style.backgroundPosition = 'center'
  newQuestion.style.height = '75px'
  newQuestion.style.width = '160px'
  newQuestion.style.fontStyle = 'bold'
  newQuestion.style.border = 'solid'
  newQuestion.setAttribute("id", "newQuestionAppended")
  flashcardsClass.appendChild(newQuestion)
}

function returnAnswerAppend() {
  let randomCardNumber = Math.floor(Math.random() * flashcards.length)
  const newAnswer = document.createElement('h3')
  const textNodeNewAnswer = document.createTextNode(flashcards[randomCardNumber].answer)
  newAnswer.appendChild(textNodeNewAnswer)
  newAnswer.style.backgroundColor = 'blue'
  newAnswer.style.backgroundPosition = 'center'
  newAnswer.style.height = '75px'
  newAnswer.style.width = '160px'
  newAnswer.style.fontStyle = 'bold'
  newAnswer.style.border = 'solid'
  newAnswer.setAttribute("id", "newAnswerAppended")
  flashcardsClass.appendChild(newAnswer)
}

const addCardForm = document.forms['submitQuestionsAnswers']
console.log("Form", addCardForm)

addCardForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const valueQuestion = addCardForm.querySelector('.questionForm').value;
  console.log("Value Question Input", valueQuestion)
  const valueAnswer = addCardForm.querySelector('.answerForm').value;
  console.log("Value Answer Input", valueAnswer)
  flashcards.push({ id: (flashcards.length + 1), question: valueQuestion, answer: valueAnswer });

  const newCard = document.createElement('h3')
  const textNodeQuestion = document.createTextNode(valueQuestion + " (ENG)" + " " + valueAnswer + " (NL)")
  newCard.appendChild(textNodeQuestion)
  flashcardsClass.appendChild(newCard)
  newCard.style.backgroundColor = '#f2ff9e'
  newCard.style.backgroundPosition = 'center'
  newCard.style.height = '85px'
  newCard.style.width = '160px'
  newCard.style.fontStyle = 'bold'
  newCard.style.border = 'solid'
  newCard.setAttribute("id", "newAddedCard")

  document.getElementById('submitQuestionsAnswers').reset()
})

console.log("Flashcards Array", flashcards)

function removeCard() {
  flashcards.filter()
  console.log("Flashcards After Pop", flashcards)
}

const removeLastQuestion = () => {
  const newQuestionAppended = document.getElementById("newQuestionAppended")
  newQuestionAppended.parentNode.removeChild(newQuestionAppended)
}

const removeLastAnswer = () => {
  const newAnswerAppended = document.getElementById("newAnswerAppended")
  newAnswerAppended.parentNode.removeChild(newAnswerAppended)
}

const removeNewAddedCard = () => {
  const newAddedCard = document.getElementById("newAddedCard")
  newAddedCard.parentNode.removeChild(newAddedCard)
}