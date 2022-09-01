function friend(friends){
    //your code here
    let vResult = [];
    for (let i = 0; i < friends.length; i++){
      friends[i].length == 4 ? vResult.push(friends[i]) : 0;
    }
    return vResult;
  }