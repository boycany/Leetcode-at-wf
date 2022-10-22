/**
 * Max and Min Sum
 * 
 * Write two functions that calculate the max and min sum of 
 * n consecutive numbers in an array.
 * 
 * Ex: 
 * maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3)  //12
 * minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3)  //-28
 * 
 */

const input = [2, 7, 3, 0, 6, 1, -5, -12, -11]
const size = 5

function maxSum(arr, i){
    let l = 0
    let r = i - 1
    let max = -Infinity
 
    while(r < arr.length){
        let temp = arr.slice(l, r + 1)
        let sum = 0

        for(let i = 0; i < temp.length; i++){
            sum += temp[i]
        }

        if(sum > max){
            max = sum
        }
        l++
        r++
    }
    return max
}

maxSum(input, size)


function betterMaxSum(arr, size){
    if(size > arr.length) return null

    let max = 0

    for(let i = 0; i < size; i++){
        max += arr[i]
    }

    let temp = max
    for(let j = size; j < arr.length; j++){
        temp += arr[j] - (arr[j - size])
        
        if(temp > max){
            max = temp
        }
    }

    return max
}

betterMaxSum(input, size)