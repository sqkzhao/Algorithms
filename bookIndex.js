// [1,13,14,15,37,38,70] => "1, 13-15, 37-38, 70"

function bookIndex(arr){
    var returnArr = []
    for(let i = 0; i < arr.length; i++){
        // IF CONSECUTIVE NUMBERS ARE FOUND
        if((arr[i+1] - arr[i]) == 1){
            var dash = '';
            dash += arr[i];
            while((arr[i+1] - arr[i]) == 1){
                i++;
            }
            dash = dash + "-" + arr[i];
            returnArr.push(dash);
        }
        else{
            returnArr.push(arr[i]);
        }
    }
    console.log(returnArr);
}
