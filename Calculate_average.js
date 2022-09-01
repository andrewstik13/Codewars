function find_average(array) {
    // your code here
    let vResult = 0.0;
    if (array.length > 0){
    for (let i = 0; i < array.length; i++){
      vResult += array[i];
    } 
    vResult /= array.length;
      }
    return vResult;
  }