function longestMotif (seq) {                                                      // #1
    let vResult = [];                                                                // finish array
    let vTempResult = [];                                                            // master temp array
    let vFinish = 0;                                                                 // flag for cycle
    let maxCount = seq.length >= 10 ? Math.floor((seq.length) / 2) : seq.length + 1; // max parth for search
    while (vFinish == 0){                                                            // loop select path for search
      vTempResult = cutStr(seq, maxCount);                                           // start #2
      vFinish = vTempResult.length > 0 ? 1 : 0;                                      // find?
       maxCount--;                                                                   // set new path
    }
    for (let i = 0; i < vTempResult.length; i++){                                    // find duplicate in master temp array
      if (vTempResult[i] != "0"){                                                    // only interest in the value that makes sense
        vResult.push(vTempResult[i]);                                                // push master array
        if (vTempResult.length > 1) {                                                // all values that make sense are included in the sample
          for (let j = i + 1; j < vTempResult.length + 1; j++){                      
            if (vTempResult[i] == vTempResult[j]){                                   // find duplicates in master temp array
            vTempResult[j] = "0";                                                    // removing duplicates in master temp array
            }
          }
        }   
      } 
    }
   return vResult;                                                                   // finish #1
  }
    
  
  function cutStr (str, vCount){                                                     // #2 cut the main line into pieces
    let vResult = [];                                                                // finish array
    let vTempResult = [];                                                            // master temp array
    let vStrTemp = "";                                                               // var for piece
    let vSc = 1;
    for (let i = 0; i < str.length - vCount + 1; i++){                               // walk along the main line
      for (let j = i; j < vCount + i; j++){                                          // walk along the line
        vStrTemp += str[j];                                                          // collect a piece into a var
      }
      vTempResult = searchStr(str, vStrTemp, vCount, i);                             // #3
      vTempResult.length != 0 ? vResult.push(vTempResult[0]) : 0;                    // add match to array
      vStrTemp = "";                                                                 // clear var for piece
    }
    return vResult;                                                                  // finish #2
  }
  
  function searchStr (str, searchStr, vI, vICount){                                  // #3 creating an array based on a piece
    let vTempStr = "";                                                               
    let vResult = [];
    for (let i = searchStr.length + vICount; i < str.length - searchStr.length + 1; i++){
      for (let j = i; j < i+vI; j++){
        vTempStr += str[j];
      }
      vResult.push(vTempStr);
      vTempStr = ""
    }
    return (searchArr(vResult, searchStr));                                          // finish #3 / start #4
  }
  
  function searchArr(sArr, str){                                                    // #4 search for matches in the main line
    let vResult = [];
    for (let i = 0; i < sArr.length; i++){
      if (sArr[i] == str){
        vResult.push(sArr[i]);
        break;
      }
    }
    return vResult;                                                                 // finish #4
  }