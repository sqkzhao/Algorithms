function binarySearch(arr, tar){
    var left = 0;
    var right = arr.length - 1;
    var mid = Math.floor((left+right)/2);

    while(left < right){
        if(arr[mid] == tar){
            return true;
        }

        if(arr[mid] > tar){
            right = mid -1;
        }
        else if(arr[mid] < tar){
            left = mid + 1;
        }
        mid = Math.floor((left+right)/2);
    }
    return false;
}

var arr = [2, 6, 7, 8, 9, 11, 12, 13, 18, 19, 20, 40];
console.log(binarySearch(arr, 8))

