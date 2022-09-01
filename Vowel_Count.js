function getCount(str) {
    let vResult = 0;
    for (let i = 0; i < str.length; i++){
      switch (str[i]){
        case "a":
        vResult++;
          break;
        case "e":
        vResult++;
          break;
        case "i":
        vResult++;
          break;
        case "o":
        vResult++;
          break;
        case "u":
        vResult++;
          break;
      default:0;
      }
    }
    return vResult;
  }