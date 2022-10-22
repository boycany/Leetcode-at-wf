var twoSum = function(nums, target) {
    let obj = {}
    
    for(let i= 0; i < nums.length; i++){
        let diff = target - nums[i]
        console.log('obj :>> ', obj);
        
        if(obj[diff] >= 0){
            return [obj[diff], i]
        }else{
            obj[nums[i]] = i
        }
    }
    return null
};

// twoSum([3, 3], 6)
// twoSum([2,7,11,15], 9)
// twoSum([3, 2, 4], 6)
twoSum([7,2,13,11,4, 9, 1], 0)
// twoSum([7, 3, 5], 8)