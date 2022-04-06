const addScoreAPI = async(gameID, name, score) => {
  return await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`, {
    method: 'POST',
    body: JSON.stringify({
      "user": name,
      "score": score
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
}

const addScore = async(name, score) => {
  let gameID = localStorage.getItem('gameID');
  await addScoreAPI(gameID, name, score);
}


export default addScore;