function century(year) {
    // Finish this :)
    let vReturn = 0;
    if (year%100!=0){
      vReturn = Math.floor((year/100)+1);
    } else {
      vReturn = year/100;
    }
    console.log(vReturn)
    return vReturn;
  }