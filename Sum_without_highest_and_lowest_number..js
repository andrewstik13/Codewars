function sumArray(array) {
    console.log(array);
      if (!array || array.length < 3){
        return 0;
      } else {
        let mA = array[0];
        let miA = array[0];
        let sumA = 0;
        for (let i = 0; i < array.length; i++){
          if (array[i] < miA){
            miA = array[i];
          } else if (array[i] >= mA){
            mA = array[i];
          } 
          sumA += array[i];
        }
        return (sumA - miA - mA);
      }
    
  }