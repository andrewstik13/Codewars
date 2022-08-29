function countBy(x, n) {
    let z = [];
    console.log(x + ' ' + n);
    let iz = 0;
    let i = 1;
    
    while (n != 0) {
      if (i % x == 0){
          z.push(i);
        n--;
        };
      i++;
    }
    console.log(z);
    return z;
  }