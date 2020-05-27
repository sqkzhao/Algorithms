function twoNumSum(arr, target) {
    let numObject = {};
    for (var i = 0; i < arr.length; i++) {
        var currentNum = arr[i];
        numObject[currentNum] = i;
    }
    for (var i = 0; i < arr.length; i++) {
        var diff = target - arr[i];
        if (numObject[diff] !== i) {
            return [arr[i], diff];
        }
    }
}
// console.log(twoNumSum([2, 7, 11, 15], 9));
//O(n2)

function twoNumSum(arr, tar) {
    var dict = {};
    for (var i = 0; i < arr.length; i++) {
      var diff = tar - arr[i];
  
      if (arr[i] in dict) {
        return [arr[i], dict[arr[i]]];
      }else{
        dict[diff] = arr[i];
      }
    }
    return [];
  }
  // console.log(twoNumSum([2, 7, 6, 4, 11, 15], 15));
  //O(2n) = O(n)