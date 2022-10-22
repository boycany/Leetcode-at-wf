/**
 * 只有 3 位數的密碼，且每一位數只有 1～3 三種數字。所以我們所有可能的密碼就是

    111, 112, 113, 121, 122, … , 331, 332, 333（共 27 種）
 */

/**
 * 首先，我們將這個 function 暫且稱作 create，他會需要以下三個參數

    現在層數（深度）：depth（一開始等於 0）
    最大層數（深度）：max_depth（這個目前等於 3，因為是 3 位數密碼）
    到這一層時的密碼：password（一開始是一個空 Array）
 */

function create(max_depth, password){
    if(max_depth === 0){
        console.log(password)
        return 
    }

    for(let i = 1; i <= 3; i++){
        password.push(i)
        create(max_depth - 1, password)
        password.pop(i)
    }
}

function findAllPasswords(digits){
    return create(digits, [])
}

findAllPasswords(3)


/**
 * 覺得自己有看懂，想挑戰一下的讀者，也可以思考看看以下三個問題：
 * 
   基本問題：原本的問題（4 位數密碼，數字可以是 0~9）該怎麼做呢？
   進階問題：如果想找到所有 digit 的和小於 10 的密碼，又該怎樣改呢？（e.g. [1,3,2,1] 符合條件，因為相加為 7。[4,3,7,2] 不符合條件，因為相加為 16）
   相似問題：用上面的概念，寫出遞迴版本的 99 乘法表
 */





