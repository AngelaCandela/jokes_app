const root = document.documentElement;
const setup = document.getElementById("setup");
const startButton = document.querySelector("button");
const revealButton = document.getElementById("reveal-button");
const nextButton = document.getElementById("next-button");
const jokeContainer = document.getElementById("joke-container");
const punchline = document.createElement('p');
punchline.setAttribute('id', 'punchline');

const showRevealButton = () => {
  revealButton.classList.remove('hidden');
};

const showNextButton = () => {
  nextButton.classList.remove('hidden');
};

const hideStartButton = () => {
  startButton.classList.add('hidden');
  showRevealButton();
};

const hideRevealButton = () => {
  revealButton.classList.add('hidden');
  showNextButton();
};

const hideNextButton = () => {
  nextButton.classList.add('hidden');
  showRevealButton();
};

const displaySetup = (data) => {
  setup.innerText = data.setup;
};

const displayPunchline = (data) => {
  root.style.setProperty('--typewriter-characters', data.punchline.length); 
  punchline.innerText = data.punchline;
  jokeContainer.appendChild(punchline);

  showNextButton();
  hideRevealButton();
};

const getRandomJoke = () => {
  fetch('/jokes/random', {
    method: 'GET',
    mode: 'cors',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
  })
  })
  .then(response => response.json())
  .then(data => {
    displaySetup(data);
    hideStartButton();
    revealButton.addEventListener("click", () => displayPunchline(data));
  });
};

const restart = () => {
  setup.innerText = "";
  punchline.remove();
  getRandomJoke();
  hideNextButton();
};

startButton.addEventListener("click", getRandomJoke);
nextButton.addEventListener('click', restart);