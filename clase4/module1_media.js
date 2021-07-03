exports.media = function(nums){
    let positive = []
    let negative = []
    nums.forEach(element => {
        if(element > 0){
            positive.push(Number(element))
        }else{
            negative.push(Number(element))
        }
    });
    let negativeResult = mediaNegative(negative)
    let positivetiveResult = mediaPositive(positive)
    let result = `la media de los numeros positivos es ${positivetiveResult} y de los numeros negativos es ${negativeResult}`
    return result
}

function mediaNegative(negative){
    let suma = negative.reduce((previous, current) => current += previous)
    let average = suma / negative.length
    return average
}

function mediaPositive(positive){
    let suma = positive.reduce((previous, current) => current += previous)
    let average = suma / positive.length
    return average
}

