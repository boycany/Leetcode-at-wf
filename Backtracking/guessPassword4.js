//-----------挑戰四位數字，每位數可能包含 1~10，不用公式...一次一次累加

function create(max_depth, password, combinationAmount){
    if(max_depth === 0){
        return combinationAmount + 1
    }

    for(let i = 0; i <= 9; i++){
        password.push(i)
        combinationAmount = create(max_depth - 1, password, combinationAmount)
        password.pop(i)
    }
    return combinationAmount
}

function findAllPasswords(digits){
    return create(digits, [], 0)
}

findAllPasswords(4)