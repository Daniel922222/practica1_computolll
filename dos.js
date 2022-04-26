//En un archivo cree dos arreglos el primero con nombres y el segundo con edades; deberá
//exportar ambos elementos y leerlos en otro archivo
const{nombres,edades} = require("./functions.js");



nombres.forEach((nombres) => {
    console.log("la lsita de nombre es:",nombres);

}); 
edades.forEach((edades) => {
    console.log("La lista de edades es :",edades);

}); 