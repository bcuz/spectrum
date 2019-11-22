let flashcards = [
  { id: 0, question: 'Earth', answer: 'Aarde' },
  { id: 1, question: 'Good Afternoon', answer: 'Goedemiddag' },
  { id: 2, question: 'Bicycle', answer: 'Fiets' },
  { id: 3, question: 'Vacuum Cleaner', answer: 'Stofzuiger' },
  { id: 4, question: 'Strong', answer: 'Sterk' },
  { id: 5, question: 'Backpack', answer: 'Rugzak' },
  { id: 6, question: 'Guitar', answer: 'Gitar' },
  { id: 7, question: 'Spinach', answer: 'Spinazie' },
  { id: 8, question: 'House', answer: 'Huis' },
  { id: 9, question: 'Cheese', answer: 'Kaas' },
  { id: 10, question: 'Wine', answer: 'Wijn' },
  { id: 11, question: 'Onions', answer: 'Uien' },
  { id: 12, question: 'Office', answer: 'Kantoor' },
  { id: 13, question: 'University', answer: 'Universiteit' },
  { id: 14, question: 'Beer', answer: 'Bier' },
  { id: 15, question: 'Money', answer: 'Geld' },
  { id: 16, question: 'Banana', answer: 'Banaan' },
  { id: 17, question: 'Good morning', answer: 'Goedemorgen' },
  { id: 18, question: 'Bread', answer: 'Brood' },
  { id: 19, question: 'Work', answer: 'Werk' },
  { id: 20, question: 'Health', answer: 'Gezondheid' },
  { id: 21, question: 'Peanut Butter', answer: 'Pindakaas' },
  { id: 22, question: 'Good', answer: 'Goed' },
  { id: 23, question: 'Summer', answer: 'Zommer' },
  { id: 24, question: 'Spring', answer: 'Lente' },
  { id: 25, question: 'Tea', answer: 'Thee' },
  { id: 26, question: 'Dog', answer: 'Honde' }
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
  word.innerText = flashcards[randomCardNumber].question

  const showAnswer = document.getElementById("button11")
  showAnswer.addEventListener('click', function () {
    word.innerText = flashcards[randomCardNumber].answer
  })

  const flipBackNewQuestion = document.getElementById('button12')
  flipBackNewQuestion.addEventListener('click', function () {
    word.innerText = flashcards[randomCardNumber].question
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