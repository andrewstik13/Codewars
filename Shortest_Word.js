function findShort(s){
    let vResult = 0;
    let vMin = s.length;
    for (let i = 0; i < s.length + 1; i++){
      if (s[i] == " " || i == s.length){
        vResult <= vMin ? vMin = vResult : false;
        vResult = 0;
      } else vResult++;
    }
    return vMin;
  }