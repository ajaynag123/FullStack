const waitTime = 3000;
console.log(`will be executed after ${waitTime / 1000} seconds`);
const timerFinished = () => {
  clearInterval(interval);
  console.log("timer finished");
};

setTimeout(timerFinished, waitTime);

const waitInterval = 500;
let currentTime = 0;
const incTime = () => {
  currentTime += waitInterval;
  console.log(`waiting ${currentTime / 1000} seconds`);
};

const interval = setInterval(incTime, waitTime);