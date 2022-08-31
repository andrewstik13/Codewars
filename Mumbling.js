function accum(s) {
    // your code
    let vStr = "";
    for (let i = 0; i < s.length; i++){
      for (let j = 0; j < i+1; j++){
        vStr += j == 0 ? s[i].toUpperCase() : s[i].toLowerCase();
      }
      vStr += i != s.length - 1 ? "-" : "";
    }
    return vStr;
  }