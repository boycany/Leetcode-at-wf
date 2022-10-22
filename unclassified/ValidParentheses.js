/**
 * 
 * @param {string} s
 * @return {boolean}
 * 
    Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

    An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.
    

    Example 1:

    Input: s = "()"
    Output: true
    Example 2:

    Input: s = "()[]{}"
    Output: true
    Example 3:

    Input: s = "(]"
    Output: false
    

    Constraints:

    1 <= s.length <= 104
    s consists of parentheses only '()[]{}'. 

 */

function isValidParentheses(str){
    const isOpening = (char) => {
        return char === "(" || char === "[" || char === "{"
    }

    const map = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
    }

    // const arr = []
    let result = ""

    for(let i = 0; i < str.length; i++){
        if(isOpening(str[i])){
            // arr.push(str[i])
            result += str[i]
        }else{
            // if(arr.at(-1) === map[str[i]]){
            //     arr.pop()
            if(result.slice(-1) === map[str[i]]){
               result = result.slice(0, -1)
            }else{
                return false
            }
        }
    }
    return result.length === 0
}

isValidParentheses("{[()]}")
isValidParentheses("()[]{}")
isValidParentheses("{()}[]")
isValidParentheses("[")
