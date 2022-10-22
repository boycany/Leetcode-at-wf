export function randomLengthArr(){
    let arr = []

    let length = Math.floor(Math.random() * 10)
    console.log(length)

    for(let i = 0; i < length; i++){
        arr.push(Math.floor(Math.random() * 100))
    }
    return arr
}


export function FixLengthRandomValueArr(){
    let arr = []

    let length = 10

    for(let i = 0; i < length; i++){
        arr.push(Math.floor(Math.random() * 100))
    }
    return arr
}

