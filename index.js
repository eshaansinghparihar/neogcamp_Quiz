var scores = [];
var highScorer={
  scorerName:'',
  score:0
};
var chalk = require('chalk');
const questionBg = chalk.bold.yellow;
var readlineSync = require("readline-sync");
for(var k=0;k>=0;k++)
{
var gamescore = 0;
var name = readlineSync.question("Hey, What's your name? ");
console.log("\nWelcome to neog.camp Quiz "+name+". Let's see your knowledge about neog.camp ! Sounds fun, yeah? Let's dive straight into it then \n");

var questions = [
  {
  question: "\nIs levelZero free and open for all irrespective of your experience? Answer in Yes/No \n",
  answer: "Yes",
  score:1
  },
  {
  question: "\nHow many candidates would be selected for levelOne? \n",
  answer: "100",
  score:1
  }, 
  {
  question: "\nWhat's the duration of levelZero in weeks? \n",
  answer: "4",
  score:2
  }, 
  {
  question: "\nIs levelOne free for all? Answer in Yes/No\n ",
  answer: "No",
  score:2
  }, 
  {
  question: "\nIs it okay to spam Live Session Chats with irrelevant questions? Answer in Yes/No \n",
  answer: "No",
  score:3
  },
  {
  question: "\nWhich question is the most relevant to ask during a Live session ? \n a.) Angular vs Vue.js vs React \n b.) Flutter vs React Native \n c.) ML vs AI vs Web Development \n d.)How much time should you invest in 1 Web Development project & How to know if the level of concepts used in it is just apt for a Fresher? Answer in a/b/c/d\n" ,
  answer: "d",
  score:3
  },  
  ];
for (var i=0; i<questions.length; i++) {
  play(questions[i].question, questions[i].answer, questions[i].score)
}

function play(question, answer , score) {
  var userAnswer = readlineSync.question(questionBg(question));

  if (userAnswer.toUpperCase() === answer.toUpperCase()) 
  {
    console.log(chalk.bgGreen.bold.blue("Right!"));
    gamescore = gamescore + score ;
    
  } else {
    console.log(chalk.bgRed.bold("Wrong! \n"));
    console.log("The correct answer is: "+answer+"\n");
    console.log("You missed "+score +" points "+chalk.bold.bgYellow(":(")+ "\n");
   
  }

  
  console.log("You scored: ", gamescore);
  console.log("-------------\n")
}
if(gamescore>highScorer.score)
{
  highScorer.scorerName=name;
  highScorer.score=gamescore;
  console.log(chalk.bold.bgMagenta("--------New High Score--------"));
}
scores.push({name:name,score:gamescore});
console.log(chalk.bold.bgMagenta("Highest Scorer is "+highScorer.scorerName+" with "+highScorer.score+" points "));
console.log(chalk.bold.bgMagenta("--------Scoreboard--------"));
for (var j=0; j<scores.length; j++) {
  console.log(chalk.bold.bgMagenta(scores[j].name+" | "+scores[j].score));
}
}
