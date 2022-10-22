function longestPalindrome(str){
    let leftBoundary = 0
    let rightBoundary = 0
    
    for(let i = 0; i < str.length; i++){
        let left = i
        let right = i
        
        while(str[left] === str[right + 1]){
            right++
        }

        while(str[left-1] && str[left-1] === str[right+1]){
            left--
            right++
        }

        if(right - left > rightBoundary - leftBoundary){
            [rightBoundary, leftBoundary] = [right, left]
        }
    }
    return str.substring(leftBoundary, rightBoundary + 1)
}

longestPalindrome("eabcb") 
longestPalindrome2("eabcb") 
// longestPalindrome2("babad")
// longestPalindrome2("aacabdkacaa")
// longestPalindrome2("ac")
// longestPalindrome2("a")

function getDrome(left, right, s){
    while(left >=0 && right < s.length){
        if(s[left] !== s[right]){
            break
        }
        left--
        right++
    }
    //因為 left-- 跟 right++ 的邊界擴張到 str 兩邊出現不相等的字後才結束 while 迴圈
    //這時候我們需要 return 回去的邊界值，因為要拿去做 slice() ，左邊界需加 1 才會回復到起始點。
    //(右邊界本來就要多一位，所以不用回復)
    return [left + 1, right]
}

function longestPalindrome2(s){
    let max = [0, 1]

    for(let i = 0; i < s.length; i++){
        let even = getDrome(i - 1, i, s)
        let odd = getDrome(i - 1, i + 1, s)
        let currentMax = (odd[1] - odd[0] > even[1] - even[0]) ? odd : even

        max = (max[1] - max[0]) > (currentMax[1] - currentMax[0]) ? max : currentMax
    }
    return s.slice(max[0], max[1])
}   