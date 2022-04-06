const addScoreAPI = async (gameID, name, score, refresh) => {
  await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`, {
    method: 'POST',
    body: JSON.stringify({
      user: name,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  refresh();
};

const addScore = async (name, score, refresh) => {
  const gameID = localStorage.getItem('gameID');
  await addScoreAPI(gameID, name, score, refresh);
};

export default addScore;