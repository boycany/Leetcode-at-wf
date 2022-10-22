/**
 * 河內塔問題也有一個進階挑戰，就是如何靠遞迴把最佳移動步驟也都印出來
 */
function countStep(n){
    if(n == 0) return 0
    return 2 * countStep(n - 1) + 1
}

function printStepDetail(start, buffer, end, n){
    console.log('start :>> ', start, 'buffer :>> ', buffer, 'end: >> ', end, "n: >> ", n);
    if(n === 1){
        console.log(start, end)
    }else{
        printStepDetail(start, end, buffer, n - 1)
        printStepDetail(start, buffer, end, 1)
        printStepDetail(buffer, start, end, n - 1)
    }
}

function towerOfHanoi(n){
    console.log("step: >> ", countStep(n))
    printStepDetail(1, 2, 3, n)
}

towerOfHanoi(3)