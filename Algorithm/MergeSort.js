function MergeSort(arr){
    if(arr.length > 1){
        let mid = Math.floor(arr.length / 2)
        let left_array = arr.slice(0, mid)
        let right_array = arr.slice(mid, arr.length)

        MergeSort(left_array)
        MergeSort(right_array)
        // let left_array = MergeSort(arr.slice(0, mid))
        // let right_array = MergeSort(arr.slice(mid, arr.length))

        let right_index = 0
        let left_index = 0
        let merged_index = 0

        while(right_index < right_array.length && left_index < left_array.length){
            if(right_array[right_index] < left_array[left_index]){
                arr[merged_index] = right_array[right_index]
                right_index++
            }else{
                arr[merged_index] = left_array[left_index]
                left_index++
            }
            merged_index++
        }
        while(right_index < right_array.length){
            arr[merged_index] = right_array[right_index]
            right_index++
            merged_index++
        }
        while(left_index < left_array.length){
            arr[merged_index] = left_array[left_index]
            left_index++
            merged_index++
        }
    }
    return arr
}

// MergeSort([41, 121, 1, 3, 2, 25, 8, 73 ])

///---------另一種寫法

function Merge(arr1, arr2){
    let i = 0 
    let j = 0
    let result = []

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i])
            i++
        }else{
            result.push(arr2[j])
            j++
        }
    }

    while(i < arr1.length){
        result.push(arr1[i])
        i++
    }
    while(j < arr2.length){
        result.push(arr2[j])
        j++
    }
    return result
}

function MergeSort2(arr){
    if(arr.length <= 1) return arr

    let mid = Math.floor((0 + arr.length) / 2)
    let arr1 = arr.slice(0, mid)
    let arr2 = arr.slice(mid, arr.length)

    return Merge(MergeSort2(arr1), MergeSort2(arr2))
}

MergeSort2([41, 121, 1, 3, 2, 25, 8, 73 ])