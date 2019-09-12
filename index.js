let flashcards = [
  { id: 1, question: 'Good Afternoon', answer: 'Goedemiddag' },
  { id: 2, question: 'Bicycle', answer: 'Fiets' },
  { id: 3, question: 'Vacuum Cleaner', answer: 'Stofzuiger' },
  { id: 4, question: 'Strong', answer: 'Sterk'},
  { id: 5, question: 'Backpack', answer: 'Rugzak'},
  { id: 6, question: 'Guitar', answer: 'Gitar'}
]

let randomCardNumber = Math.floor(Math.random() * flashcards.length)
console.log("Random", randomCardNumber)

const word = document.getElementById("word")
const button = document.getElementById("button")

console.log(word)
console.log(flashcards[1].question)
console.log(button)

word.innerText = flashcards[randomCardNumber].question

function returnAnswer() {
    return word.innerText = flashcards[randomCardNumber].answer
}

function flipBack() {
    return word.innerText = flashcards[randomCardNumber].question
}

