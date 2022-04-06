const listScoreAPI = async () => {
  const gameID = localStorage.getItem('gameID');
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const newResponse = await response.json();
  return newResponse;
};

const listScore = async () => {
  const scoreList = await listScoreAPI();
  let displayList = '';
  scoreList.result.forEach((score) => {
    displayList += `<tr>
        <td class="data-name">${score.user}:</td>
        <td>${score.score}</td>
      </tr>`;
  });
  return displayList;
};

export default listScore;