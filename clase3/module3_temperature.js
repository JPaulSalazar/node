exports.temperature = function(g){
    let quote = ''
    if(g < 10){
        quote = 'hace mucho frio'
        return quote
    }else if(g >= 10 && g <= 15){
        quote = 'hace poco frio'
        return quote
    }else if(g >= 16 && g <= 24){
        quote = 'hace una temperatura normal'
        return quote
    }else if(g >= 25 && g <= 30){
        quote = 'hace poco calor'
        return quote
    }else if(g > 30){
        quote = 'hace mucho calor'
        return quote
    }
}