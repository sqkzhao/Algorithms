function isPrime(num){
    var arr=[];
    prime = true;
    arr.push(1);
    arr.push(2);
    if(num<2){
        return arr;
    }
    for(var i=0; i<=num; i++){
        for(var j=i-1; i>1; i--){
            if(i%j === 0){
                prime = false;
            }
        }
        if(prime == ture){
            arr.push(i);
        }
    }
    return arr;
}


function isPrime(num){
    var arr=[];
    for(var i=0; i<num; i++){
        arr[i] = true;
    }
    for(var i=2; i<sqrt(num); i++){
        if(arr[i] != ture){
            continue;
        }
        for(j=i*i; j<num; j+=i){
            arr[i] = false;
        }
    }
}
    

