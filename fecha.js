 
    /*export function fecha(){ 
    // Crear un nuevo objeto Date que representa la fecha y hora actuales
const fechaHoraActual = new Date();

// Obtener los componentes de la fecha y hora actuales
const año = fechaHoraActual.getFullYear();
const mes = fechaHoraActual.getMonth() + 1; // Los meses van de 0 a 11, por lo que necesitas sumar 1
const dia = fechaHoraActual.getDate();
const hora = fechaHoraActual.getHours();
const minutos = fechaHoraActual.getMinutes();
const segundos = fechaHoraActual.getSeconds();

// Formatear la salida según sea necesario
const fechaHoraFormateada = `${año}-${mes < 10 ? '0' : ''}${mes}-${dia < 10 ? '0' : ''}${dia} ${hora < 10 ? '0' : ''}${hora}:${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;

console.log("Fecha y hora actual:", fechaHoraFormateada);

    }*/
     let nombre="Alejandro";
     function saludar(){
        console.log(`Hola ${nombre}`);
     }
     module.exports={saludar:saludar,nombre:nombre}; 
    
    