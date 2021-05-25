const module2 = require('./module2_digitos')
let info = module2.readNum(100)

if(info == true){
    console.log('el numero es de tres digitos')
}else{
    console.log('el numero no es de tres digitos')
}