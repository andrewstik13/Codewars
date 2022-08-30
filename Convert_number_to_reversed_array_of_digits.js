function digitize(n) {
    //code here
    let z = [];
    let vNum = "";
    vNum = String(n);
    for (let i = vNum.length; i != 0; i--) {z.push(Number(vNum[i - 1]))};
    return z;
  }