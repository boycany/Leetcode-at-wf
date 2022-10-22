/**
 * 定義：在排序好的數列裡，找某 target，找到就回傳其 index，否則回傳 -1
 */

import { FixLengthRandomValueArr} from "../../Array/TestFunction/Fn"

function BinarySearch(nums, target){
    nums = nums.sort((a, b)=> a-b)

    let left = 0
    let right = nums.length - 1
    console.log('nums :>> ', nums);

    while(left <= right){
        let mid = Math.floor((left + right) / 2)

        console.log('mid :>> ', mid, "left: >>", left, "right: >> ", right);
        console.log('target :>> ', target);
        console.log('nums[mid] :>> ', nums[mid]);
        
        if(nums[mid] > target){
            right = mid - 1
        }else if(nums[mid] < target){
            left = mid + 1
        }else{
            return mid
        }
    }
    return -1
}

const testArr = FixLengthRandomValueArr()

BinarySearch(testArr, 42)