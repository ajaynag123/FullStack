const readline = require('readline');
const rl = readline.createInterface({
  input:process.stdin,
  output: process.stdout  
});

rl.question('Howw are you feeling \n',(ans) => {
  console.log(`oh you are feeling like ${ans}`);
})