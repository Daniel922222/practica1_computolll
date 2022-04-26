//Escriba un programa el cual reciba un argumento desde la línea de comandos
const name=require ('readline').createInterface({
    input:process.stdin,
    output: process.stdout
})

name.question('Escribe algo;',  name  =>{
    console.log(`Bienvenido ${name}`)
 })

