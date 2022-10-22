/**
 * Min Sub Array Length
 * 
 * Write a function called minSubLength which accepts two parameters,
 * an array of positive integers and a positive integer. This function
 * should return the minimal length of a continuous subarray - the sum
 * of elements inside this subarray has to be greater than or equal to 
 * the positive integer parameter. If Subarray not found, then return 0.
 */

function minSubLength(arr, sum){
    let start = 0
    let end = 0
    let total = 0
    let minLength = Infinity

    while(start < arr.length){
        if(total < sum && end < arr.length){
            total += arr[end]
            end++
        }else if(total >= sum){
            let currentLength = end - start
            if(minLength > currentLength){
                minLength = currentLength
            }
            total -= arr[start]
            start++
        }else if(end >= arr.length){
            break
        }
    }
    if(minLength === Infinity){
        return null
    }
    return minLength
}

const input = [3, 2, 4, 5]
const num = 6

// const input = [8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12]
// const num = 60

// const input = [2, 3, 4, 5, 6, 6, 7]
// const num = 11

minSubLength(input, num)