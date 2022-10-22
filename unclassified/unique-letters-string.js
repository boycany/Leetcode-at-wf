function uniqueLetterString(str){
    let start = 0
    let end = 0
    let counter = {}
    let maxLength = 0

    while(end < str.length){
        
        if(!counter[str[end]]){
            counter[str[end]] = 1
            end++
            console.log('counter in if :>> ', counter);
        }else{
          
            delete counter[str[start]]
            console.log('counter in else :>> ', counter);

            start++
        }
        let currentLength = Object.keys(counter).length
        if(currentLength > maxLength){
            maxLength = currentLength
        }
     
    }
    return maxLength
}

uniqueLetterString("thisishowwedoit")
// uniqueLetterString("isthis")