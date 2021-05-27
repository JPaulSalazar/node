const module2 = require('./module2_cilindro')
let myArgv = process.argv.slice(2)
console.log(module2.cilindro(Number(myArgv[0]), Number(myArgv[1])))


