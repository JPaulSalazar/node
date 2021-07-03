const fs = require('fs')
let path = process.cwd();

const user = {
    "id": 1,
    "name": "John Doe",
    "age":22
};
// convierte el Json a string
const data = JSON.stringify(user);

/*fs.writeFile(`${path}/Holamundo.json`, data, function(err,data){
    if(err)
        return console.error(err)
    console.log("Archivo creado y salvado")

})

// crear si no existe y si existe entoces agrega el contenido al final
fs.appendFile(`${path}/Holamundo.txt`, "hola Mundo \n Esteban", function(err,data){
    if(err)
        return console.error(err)
    console.log("Se actualizado el archivo")

})*/

fs.readFile(`${path}/holamundo.txt`, "utf8", function(err, data) {
    if(err)
        return console.error(err)
    console.log(JSON.stringify(data))
    console.log(data)
})

fs.open(`${path}/nuevoarchivo.txt`, "w", function(err, fd) {
    if(err)
        return console.error(err)
    fs.write(fd, "Esta es mi primera linea", "utf8", function(err){
        if(err)
        return console.error(err)
    })

})

fs.unlink(`${path}/nuevoarchivo.txt`,function(err){
    if(err)
        return console.error(err)
        console.log("Se ha eliminado el archivo")
})