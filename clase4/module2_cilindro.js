exports.cilindro = function(d, h){
    let radio = d/2
    let volumen = Math.PI *(radio * radio)*h
    let result =`el volumen del cilindro es = ${volumen}`
    return result
}