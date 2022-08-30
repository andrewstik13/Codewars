// Sum Numbers
function sum (numbers) {
    "use strict";
  let vSum = 0.0;
    if (numbers.length > 0){
      for (let i = 0; i < numbers.length; i++){
        vSum += numbers[i];
      }
    }
    return vSum;
};