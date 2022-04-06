import addScore from './modules/addscore.js';
import listScore from './modules/listscore.js';
import './style.css';

const nameInput = document.getElementById('name');
const scoreInput = document.getElementById('score');
const buttonSubmit = document.getElementById('submit');
const displayData = document.getElementById('tableData');
const buttonRefresh = document.getElementById('refresh');

const getGameID = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    body: JSON.stringify({
      name: 'my new game',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.json();
};
const refresh = () => {
  const myHTML = listScore();
  myHTML.then((html) => {
    displayData.innerHTML = html;
  });
};
window.onload = async () => {
  const storage = localStorage.getItem('gameID');
  if (storage === null) {
    let gameID = await getGameID();
    gameID = gameID.result.split(' ')[3].trim();
    localStorage.setItem('gameID', gameID);
  }

  refresh();
};

buttonSubmit.addEventListener('click', (e) => {
  e.stopImmediatePropagation();
  addScore(nameInput.value, scoreInput.value);
  nameInput.value = '';
  scoreInput.value = '';
  refresh();
});
buttonRefresh.addEventListener('click', (e) => {
  e.stopImmediatePropagation();
  refresh();
});