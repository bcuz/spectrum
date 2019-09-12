let flashcards = [
    { id: 1, question: 'good afternoon', answer: 'goedemiddag' },
    { id: 2, question: 'bicycle', answer: 'fiets' },
    { id: 3, question: 'vacuum cleaner', answer: 'stofzuiger' },
]

let randomCardNumber = Math.floor(Math.random() * flashcards.length)

console.log(randomCardNumber)

