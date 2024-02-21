/*1.- Escriba una función flecha que permita comparar si un objeto tiene todas sus 
propiedades contenidas en un segundo objeto. 
Ejemplo: 
contiene({ pelo: 'largo', barba: false },{ edad: 25, pelo: 'largo', barba: true }); // true 
contiene({ edad: 25, pelo: 'largo', barba: true },{ pelo: 'largo', barba: true },); //false 
 Pruebe su funcionamiento en la consola del navegador 
 Agregue la función como un script externo en una página web y pruebe su 
funcionamiento.*/
let personaA={pelo : "largo",barba : false};
let personaB={pelo:"largo",barba:true,edad:25};
let f=(a,b)=>{
    for(let aux in a){
        if(!b.hasOwnProperty(aux)){
            return false;
        }
    }
    return true;
};
console.log(f(personaA,personaB));
console.log(f(personaB,personaA));
