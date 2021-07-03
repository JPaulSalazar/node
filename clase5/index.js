const colors = require('colors/safe')

const args = process.argv.slice(2);

const [nombre = "Amigo"] = args; // es lo mismo que const nombre = args[0];

const hora = new Date().getHours();

if (hora >= 6 && hora < 12){
    console.log(colors.blue(`Buenos dias ${nombre}`))
}else if(hora >= 12 && hora < 18){
    console.log(colors.yellow(`Buenas tardes ${nombre}`))
}else {
    console.log(colors.green(`Buenas noches ${nombre}`))
}