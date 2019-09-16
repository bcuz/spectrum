//more than 15 flashcards will return undefined

let flashcards = [
  { id: 0, question: 'Earth', answer: 'Aarde'},
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
  { id: 15, question: 'Money', answer: 'Geld' }
  // { id: 16, questions: 'Banana', answer: 'Banaan' }
  // { id: 17, questions: 'Good morning', answer: 'Goedemorgen' },
  // { id: 18, questions: 'Bread', answer: 'Brood' }
  // { id: 19, questions: 'Work', answer: 'Werk' },
  // { id: 20, question: 'Health', answer: 'Gezondheid' }
]

let randomCardNumber = Math.floor(Math.random() * flashcards.length)
console.log("Random", randomCardNumber)

const mapQuestions = flashcards.map(flashcard => flashcard.question)
console.log("Map Questions", mapQuestions)

const mapAnswers = flashcards.map(flashcard => flashcard.answer)
console.log("Map Answers", mapAnswers)

const word = document.getElementById("word")
const button = document.getElementById("button")

console.log(word)
console.log("Question", flashcards[randomCardNumber].question)

word.innerText = mapQuestions[randomCardNumber]
  
  function returnAnswer() {
      return word.innerText = mapAnswers[randomCardNumber]
  }
  
  function flipBack() {
      return word.innerText = mapQuestions[randomCardNumber]
  }
  
  function reload() {
    location.reload(true)
  }

  const listOfQuestions = document.createElement('li')
  const textNodeQuestions = document.createTextNode(mapQuestions)
  listOfQuestions.appendChild(textNodeQuestions)
  document.querySelector('.questions').appendChild(listOfQuestions)

  const listOfAnswers = document.createElement('li')
  const textNodeAnswers = document.createTextNode(mapAnswers)
  
  const displayList = () => {
    listOfAnswers.appendChild(textNodeAnswers)
    document.querySelector('.answers').appendChild(listOfAnswers)
  }

  function appendNewWord(){
    let randomCardNumber = Math.floor(Math.random() * flashcards.length)
    const newQuestion = document.createElement('h3')
    const textNodeNewQuestion = document.createTextNode(mapQuestions[randomCardNumber])
    newQuestion.appendChild(textNodeNewQuestion)
    newQuestion.style.backgroundColor = 'red'
    newQuestion.style.backgroundPosition = 'center'
    newQuestion.style.height = '75px'
    newQuestion.style.width = '160px'
    newQuestion.style.fontStyle = 'bold'
    document.querySelector('.flashcard').appendChild(newQuestion)
  }

  function returnAnswerAppend() {
    let randomCardNumber = Math.floor(Math.random() * flashcards.length)
    const newAnswer = document.createElement('h3')
    const textNodeNewAnswer = document.createTextNode(mapAnswers[randomCardNumber])
    newAnswer.appendChild(textNodeNewAnswer)
    newAnswer.style.backgroundColor = 'purple'
    newAnswer.style.backgroundPosition = 'center'
    newAnswer.style.height = '75px'
    newAnswer.style.width = '160px'
    newAnswer.style.fontStyle = 'bold'
    document.querySelector('.flashcard').appendChild(newAnswer)
  }

  const addCardForm = document.forms['submitQuestionsAnswers']
  console.log("Form", addCardForm)
  
  addCardForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const valueQuestion = addCardForm.querySelector('.questionForm').value;
    console.log("Value Question Input", valueQuestion)
    const valueAnswer = addCardForm.querySelector('.answerForm').value;
    console.log("Value Answer Input", valueAnswer)
    flashcards.push({id: (flashcards.length + 1), question: valueQuestion, answer: valueAnswer});

    const newCard = document.createElement('h3')
    const textNodeQuestion = document.createTextNode(valueQuestion + " (ENG)" + " " + valueAnswer + " (NL)")
    // const textNodeAnswer = document.createTextNode(valueAnswer)
    newCard.appendChild(textNodeQuestion)
    // newCard.appendChild(textNodeAnswer)
    document.querySelector('.flashcard').appendChild(newCard)
    newCard.style.backgroundColor = 'blue'
    newCard.style.backgroundPosition = 'center'
    newCard.style.height = '75px'
    newCard.style.width = '160px'
    newCard.style.fontStyle = 'bold'


    document.getElementById('submitQuestionsAnswers').reset()
  })
  
  console.log("Flashcards Array", flashcards)