function isPalindrome(str){
    let right = str.length - 1
    let left = 0

    while(right > left){
        console.log('right :>> ', right);
        console.log('left :>> ', left);
        if(str[right]===str[left]){
            left++
            right--
        }else{
            return false
        }
    }
    return true
}

isPalindrome("baazb")