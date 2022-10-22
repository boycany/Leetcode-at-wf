/**
 * 快速排序法的核心思維：Partition

    1. 在 Array 中找到一個元素 Pivot 當中間點
    2. 將 Array 元素重新排列，讓左半邊元素都小於 Pivot，右半邊元素都大於 Pivot
    3. 以上這兩件事可以在 O(N) 時間內做到

    通常我們寫 Quick Sort 時，會希望可以做到 in-place 排序，也就是不再浪費額外的暫存用記憶體，
    直接對原始的 Array 做改動，因為這是 Quick Sort 演算法的一大優點。因此僅將要處理的範圍資訊
    傳進遞迴的過程之中，且由於修改時是直接改動原始的 Array，因此也不需要回傳值了。

    整個 QuickSort 的時間複雜度是 O(n log n)。
    因為他們的遞迴深度都是 O(logN)（每次都是切一半，所以只需要 logN 步就會切到最小單位），
    而 Merge Sort 的後處理與 Quick Sort 的預處理都是 O(N)，所以最終乘起來就是 O(NlogN) 啦。
 */

let arr = [15, 3, 17, -17, 3.1415, 18, 20, 2, 12]
QuickSort(0, arr.length - 1)
console.log(arr)

function QuickSort(p, r){
    if(p < r){
        let q = Partition(p, r)
        QuickSort(p, q - 1)
        QuickSort(q + 1, r)
    }
}

function Partition(p, r){
    let x = arr[r]  //pivot
    let i = p - 1

    for(let j = p; j < r; j++){
        if(arr[j] <= x){
            i++
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
    let temp = arr[i + 1]
    arr[i + 1] = arr[r]
    arr[r] = temp

    return i + 1
}



/**
 * Pseudocode of Partition
 */