// As a student I want to see the answer to the question so I can see if I was right
// Function that can access the array of objects and display the question
// How can I select the right question

let flashCard = [
  question: ['blabla'],
  answer: ['blabla']
];

let question = 'blabla';

const flashCardOnDisplay = function (question, flashcard) {
  for (let i = 0; i < flashcard.length; i++) {
    if (flashcard.question === question) {
      console.log(flashcard.question);
    }
  }
};
