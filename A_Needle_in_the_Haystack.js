function findNeedle(haystack) {
    // your code here
    let vResult = haystack.findIndex((element) => element == 'needle');
    return !vResult ? "Your function didn't return anything" : 'found the needle at position ' + vResult;
  }