//------QuickSort (開頭為 Pivot)

var quickSort = function(nums){
    function quickSortHelper(nums, start, end){
        if(start >= end) return nums

        let pivotValue = nums[start]
        let smaller = start

        for(let i = start + 1; i <= end; i++){
            let bigger = i
            if(nums[bigger] < pivotValue){
                smaller++ 
                nums = Swap(nums, smaller, bigger)
            }
        }
        nums = Swap(nums, smaller, start)
       
        quickSortHelper(nums, start, smaller - 1)
        quickSortHelper(nums, smaller + 1, end)
        
        return nums
    }
    return quickSortHelper(nums, 0, nums.length - 1)
}

quickSort([5, 2, 3, 1])


//------QuickSort (尾數為 Pivot)

function Swap(nums, idx1, idx2){
    let temp = nums[idx1]
    nums[idx1] = nums[idx2]
    nums[idx2] = temp
    return nums
}

function Partition(nums, start, end){
    if(start >= end) return nums
    
    let pivot = nums[end]
    let i = start - 1
    
    for(let j = start; j < end; j++){
        if(nums[j] <= pivot){
            i++
            nums = Swap(nums, i, j)
        }
    }
    nums = Swap(nums, i + 1, end)
    
    Partition(nums, start, i)
    Partition(nums, i + 2, end)
    
    return nums
}

var sortArray = function(nums) {
    return Partition(nums, 0, nums.length - 1)
};

sortArray([5, 2, 3, 1])


//----------Merge Sort--------------

function Merge(left_array, right_array){
    let left_idx = 0
    let right_idx = 0
    let result = []
    
    while(left_idx < left_array.length && right_idx < right_array.length){
        if(left_array[left_idx] < right_array[right_idx]){
            result.push(left_array[left_idx])
            left_idx++
        }else{
            result.push(right_array[right_idx])
            right_idx++
        }
    }
    
    while(left_idx < left_array.length){
        result.push(left_array[left_idx])
        left_idx++
    }
    
    while(right_idx < right_array.length){
        result.push(right_array[right_idx])
        right_idx++
    }
    return result
}

var MergeSort = function(nums){
    if(nums.length <= 1) return nums
    
    let mid = Math.floor((nums.length) / 2)
    let left_array = MergeSort(nums.slice(0, mid))
    let right_array = MergeSort(nums.slice(mid, nums.length))
    
    return Merge(left_array, right_array)
}

MergeSort([5, 2, 3, 1])
