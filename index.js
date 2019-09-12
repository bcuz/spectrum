let flashcards = [
  { id: 1, question: 'Good Afternoon', answer: 'Goedemiddag' },
  { id: 2, question: 'Bicycle', answer: 'Fiets' },
  { id: 3, question: 'Vacuum Cleaner', answer: 'Stofzuiger' },
  { id: 4, question: 'Strong', answer: 'Sterk'},
  { id: 5, question: 'Backpack', answer: 'Rugzak'},
  { id: 6, question: 'Guitar', answer: 'Gitar'},
  { id: 7, question: 'Spinach', answer: 'Spinazie'},
  { id: 8, question: 'House', answer: 'Huis'},
  { id: 9, question: 'Cheese', answer: 'Kaas'},
  { id: 10, question: 'Wine', answer: 'Wijn'}
]

let randomCardNumber = Math.floor(Math.random() * flashcards.length)
console.log("Random", randomCardNumber)

const word = document.getElementById("word")
const button = document.getElementById("button")

console.log(word)
console.log("Question", flashcards[randomCardNumber].question)
console.log(button)

word.innerText = flashcards[randomCardNumber].question

function returnAnswer() {
    return word.innerText = flashcards[randomCardNumber].answer
}

function flipBack() {
    return word.innerText = flashcards[randomCardNumber].question
}

