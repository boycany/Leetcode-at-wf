/**
 * Given a string s, find the length of the longest substring without repeating characters.

    Example 1:

    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.
    
    --------------------------------------------------------
    Example 2:

    Input: s = "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.

    --------------------------------------------------------
    Example 3:

    Input: s = "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3.
    Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
    
    --------------------------------------------------------
    Constraints:

    0 <= s.length <= 5 * 104
    s consists of English letters, digits, symbols and spaces.

 */


//sliding window
// https://www.youtube.com/watch?v=EbemoR4LooA

function lengthOfLongestSubstring(str){
    let start = 0
    let end = 0
    let max = 0
    let obj = {}

    while(end < str.length){
        console.log(str[end]);
        if(!obj[str[end]]){
            obj[str[end]] = 1
            console.log('obj :>> ', obj);
            max = Math.max(max, Object.keys(obj).length)
            end++
        }else{
            console.log('str[start] :>> ', str[start]);
            delete obj[str[start]]
            start++
        }
    }
    return max
}


lengthOfLongestSubstring("baa")
// lengthOfLongestSubstring("bbbbb")
// lengthOfLongestSubstring("pwwkew")
// lengthOfLongestSubstring("")

//----寫第二遍--------------------------------

function longestSub(str){
    let start = 0
    let end = 0
    let max = 0
    let counter = {}

    while(end < str.length){
        if(!counter[str[end]]){
            counter[str[end]] = 1
            end++
            max = Math.max(max, Object.keys(counter).length)
            console.log(counter)
        }else{
            delete counter[str[start]]
            start++
        }
    }
    return max
}

longestSub("abcabcaa")
// longestSub("pwwkew")