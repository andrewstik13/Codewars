function descendingOrder(n){
    //...
    let vStr = String(n);
    let vReturn = "";
    let vTemp = "";
    let myFunc = num => Number(num);
    let vArr = Array.from(String(n), myFunc);
    
    for (let i = 0; i < vArr.length; i++){
      for (let j = 0; j < vArr.length; j++){
         if (vArr[i] > vArr[j]){
          vTemp = vArr[j];
          vArr[j] = vArr[i];
          vArr[i] = vTemp;
          console.log(vArr);
        }
      }
    }
    vStr = "";
      for (let i = 0; i < vArr.length; i++){
        vStr += vArr[i];
      }
    return Number(vStr);
  }