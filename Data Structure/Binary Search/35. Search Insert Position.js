function searchInsertOther(nums, target){
    let left = 0
    let right = nums.length
    
    while(left < right){
        let mid = Math.floor(( left + right ) / 2)

        if(nums[mid] >= target){
            right = mid
        }else {
            left = mid + 1
        }
    }
    return left
}

searchInsertOther([1, 3, 4, 7, 8], 5)

var searchInsert = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    
    while(left <= right){
        let mid = Math.floor((left + right) / 2)
        
        if(nums[mid] > target){
            right = mid - 1
        }else if(nums[mid] < target){
            left = mid + 1
        }else{
            return mid
        }
    }
    return left
};

//用以下的Test Case可以推論出，target安插的位置，以左邊界為準

/**
 * Example 1:

   Input: nums = [1,3,5,6], target = 5
   Output: 2
   
   Example 2:

   Input: nums = [1,3,5,6], target = 2
   Output: 1
   
   Example 3:

   Input: nums = [1,3,5,6], target = 7
   Output: 4

 */

//如果有重複的value的，並且找到 >= target 的元素裡面，最小的那個的 index

var searchInsert2 = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    
    while(left <= right){
        let mid = Math.floor((left + right) / 2)
        
        if(nums[mid] >= target){
            right = mid - 1
        }else {  
            //if: nums[mid] < target
            left = mid + 1
        }
    }
    return left
};

searchInsert2([1, 3, 4, 4, 4, 7, 8], 4)


//如果有重複的value的，並且找到 > target 的元素裡面，最小的那個的 index

var searchInsert3 = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    
    while(left <= right){
        let mid = Math.floor((left + right) / 2)
        
        if(nums[mid] <= target){
            left = mid + 1
        }else {  
            //if: nums[mid] > target
            right = mid - 1
        }
    }
    return left
};

searchInsert3([1, 3, 4, 4, 4, 7, 8], 4)