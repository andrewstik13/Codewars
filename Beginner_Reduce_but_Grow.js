function grow(x){
    let vReturn = 1;
     for (let i = 0; i < x.length; i++){
       vReturn *= x[i];
     }
    return vReturn;
  }