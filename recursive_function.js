function risingSQR(n){
    if(n===1){
      var arr = [];
      arr.push(1);
      return arr;
    }
    var returnArr;
    returnArr = risingSQR(n-1);
    returnArr.push(n*n);
    return returnArr;
}
// console.log(risingSQR(3));

function risingSquare(n, arr=null){
    if(arr===null || arr===undefined){
      arr = [];
    }
    if(n < 0){
      return arr;
    }
    arr[n-1] = n * n;
    return risingSquare(n-1, arr);
}
// console.log(risingSquare(8));
