const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = ["whats your name", "how are you", "where do you live"];

function collectAnswers(questions, done) {
  const answers = [];

  const questionsAnswered = (answer) => {
    answers.push(answer.trim());
    if(answers.length < questions.length){
      rl.question(questions[answers.length],questionsAnswered);
    }else{
      return done(answers)
    }
  };
  rl.question(questions[0],questionsAnswered)
}

collectAnswers(questions, (answers) => {
  console.log('Thank you for answers');
  console.log(answers);
  process.exit();
})
