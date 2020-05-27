function isPalindrome(str){
    if(str.length <= 1){
        return true;
    }
    if(str.charAt(0) !== str.charAt(str.length-1)){
        return false;
    }
    return isPalindrome(str.substring(i, str.length-2));
}

//---------OTHER SOLUTIONS----------

function isPalindromeVer2(str, i){
    if(i >= (str.length-1)/2){
        return true;
    }
    if(str.charAt(i) !== str.charAt(str.length-1-i)){
        return false;
    }
    return isPalindrome(str, i+1);
}
function isPalindrome(str){
    return isPalindrome(str, 0);
}

function isPalindromeRecur(str, i){
    if(str.charAt(i) != str.charAt(str.length-i-1)){
      return false;
    }
    else{
        if(i<(str.length-1)/2){
          return isPalindromeRecur(str, i+1);
        }
        else {
          return true;
        }
    }
}
console.log(p("rabecar", 0));