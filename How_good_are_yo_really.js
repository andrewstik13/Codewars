function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    return (classPoints.reduce((sum, cur)=>  sum + cur , 0) + yourPoints) / classPoints.length <= yourPoints ? true : false;
  }