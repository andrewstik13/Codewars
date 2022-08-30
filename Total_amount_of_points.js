function points(games) {
    // your code here
    let vSum = 0;
    for (let i = 0; i < games.length; i++){
      if (Number(games[i][0]) > Number(games[i][2])) {
        vSum += 3
      } else if (Number(games[i][0]) == Number(games[i][2])){
        vSum += 1
      }
    }
    return vSum;
  }