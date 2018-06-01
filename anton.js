let questionButton = document.getElementById("questionButton");
let questionShowH4 = document.getElementById("questionShowH4");
let showQuestionDiv = document.getElementById("showQuestionDiv");

let flashCards = [
  { refNum: 1, question: "What is a <div>?", answer: "<div> is an HTML element allocating space on a webpage." },
  { refNum: 2, question: "The capital of Sweden?", answer: "Stockholm." },
  { refNum: 3, question: "Where is Codaisseur located?", answer: "Codaisseur is located in Amsterdam, NL." },
  { refNum: 4, question: "What makes a good coder?", answer: "Asking the right questions." },
  { refNum: 5, question: "What is JavaScript?", answer: "It's THE programming language for the web." },
  { refNum: 6, question: "What does localStorage do?", answer: "It allows the user to access his/her information from a previous session." },
  { refNum: 7, question: "Who built 'git'?", answer: "Linus Torvalds, the creator of the Linux kernel." },
];

let myStorage = [];
var userStorage = localStorage.getItem('userStorage'); // a variable temporarily storing the localStorage

/* function addToLocalStorage(aString) { // the localStorage functionality which will work on later when the main part of the code is ready

  if (!localStorage.getItem('userStorage')) { // check if localStorage is NOT empty, i.e. if page was NOT visited before
    myStorage.push(aString);
    localStorage.setItem('userStorage', aString); // if NOT visited before, add the user input to localStorage
  } else { //
    if (localStorage.getItem('userStorage') === aString) { // checks IF the user input is the same as what's in the localStorage
      // IF it's the same, do nothing (or...???)
    } else {
      myStorage.push(aString);
      var JSONstr = JSON.stringify(myStorage); // if not the same, add it
      localStorage.setItem('userStorage', JSONstr);
    };
  };
}; */

function randomizer(anArray) { // Here the randomizing function begins

  let allQuestions = [];

  for (var i = 0; i < anArray.length; i++) {
    allQuestions.push(anArray[i].question);
  };

  console.log("allQuestions test: ", allQuestions);
  let finalResult = allQuestions.splice(Math.floor(Math.random() * allQuestions.length), 1)[0];
  console.log("finalResult test:", finalResult);
  return finalResult;

};

questionButton.addEventListener("click", function(event) { // a button with event listener for basic testing purposes
  console.log(flashCards[0].question);
  let someQuestion = randomizer(flashCards);
  questionShowH4.innerText = someQuestion;
  showQuestionDiv.appendChild(questionShowH4);
});
