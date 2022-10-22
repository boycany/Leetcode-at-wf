//https://medium.com/appworks-school/%E9%80%B2%E5%85%A5%E9%81%9E%E8%BF%B4-recursion-%E7%9A%84%E4%B8%96%E7%95%8C-%E4%B8%80-59fa4b394ef6

function sum_1_to_n(x){
    if(x === 1) return 1
    return x + sum_1_to_n(x-1)
}

sum_1_to_n(5)


//----河內塔的移動步數
//https://zh.wikipedia.org/zh-tw/%E6%B1%89%E8%AF%BA%E5%A1%94

function hanoi_tower_step(x){
    if(x == 1) return 1
    return 2 * hanoi_tower_step(x-1) + 1
}

hanoi_tower_step(2)
hanoi_tower_step(3)
hanoi_tower_step(4)

