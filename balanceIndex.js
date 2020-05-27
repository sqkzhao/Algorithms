function balanceindex(arr){
    var L = 0;
    var R = arr.length - 1;
    var sumL = 0;
    var sumR = 0;
    while(L < R){
        if(sumL > sumR){
            sumR += arr[R];
            R -= 1;
        } else {
            sumL += arr[L];
            L += 1;
        }
    }
    if(sumL == sumR){
        return L;
    } else {
        return -1;
    }
}