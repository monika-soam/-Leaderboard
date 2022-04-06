const addScoreAPI = (gameID, name, score) => fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`, {
  method: 'POST',
  body: JSON.stringify({
    user: name,
    score,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

const addScore = async (name, score) => {
  const gameID = localStorage.getItem('gameID');
  await addScoreAPI(gameID, name, score);
};

export default addScore;