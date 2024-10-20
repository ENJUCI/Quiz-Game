function quizGame() {
    let score = 0;


    const questions = [
        { question: "What does HTML stand for?", answer: "HyperText" },
        { question: "Which keyword is used to define a variable in JavaScript?", answer: "let" },
        { question: "What keyword is used to create a function in JavaScript?", answer: "function" },
        { question: "Which programming language is known as the 'language of the web'?", answer: "JavaScript" },
        { question: "Which symbol is used for comments in JavaScript?", answer: "//" },
        { question: "What data type is used to store true or false values?", answer: "boolean" },
        { question: "What is the method used to add an element at the end of an array in JavaScript?", answer: "push" },
        { question: "What keyword is used to return a value from a function?", answer: "return" },
        { question: "What type of loop checks the condition before executing the block?", answer: "while" },
        { question: "Which keyword is used to declare a constant variable in JavaScript?", answer: "const" }
    ];


    for (let i = 0; i < questions.length; i++) {
        let userAnswer = prompt(questions[i].question);


        if (userAnswer.toLowerCase() === questions[i].answer.toLowerCase()) {
            score += 5;
        }
    }

    alert("Quiz over! Your final score is: " + score);
}

quizGame();
