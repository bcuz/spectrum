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
  // { id: 16, questions: 'Banana', answer: 'Banaan' },
  // { id: 17, questions: 'Good morning', answer: 'Goedemorgen' },
  // { id: 18, questions: 'Bread', answer: 'Brood' },
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
console.log(button)

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

  const listOfAnswers = document.querySelector('.answers')
  const textNodeAnswers = document.createTextNode(mapAnswers)
  
  const displayList = () => {
    listOfAnswers.appendChild(textNodeAnswers)
    document.querySelector('.answers').appendChild(listOfAnswers)
  }

  console.log("List of answers", listOfAnswers)

  console.log("List of Questions", mapQuestions[randomCardNumber])
