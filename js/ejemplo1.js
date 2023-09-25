/**
 * DWEC: Ejemplo 1. Encontrar los errores del script
 * @author Mario B.L.
 * 
 * Realiza un script que se encargue de leer 10 nombres por pantalla y los inserte en un array. 
 * Posteriormente, los nombres se mostrarán una unica ventana emergente
 */

/* Encontrar los errores que tiene el siguiente script, usando las herramientas de depuración de Google Chrome */

var nombres=[];
var NUMERO_NOMBRES=10;
var sumaNombres = "";
for(var i =0;i<NUMERO_NOMBRES;i++){
    nombres[i]=prompt("Dimne un nombre");
    sumaNombres += nombres[i]+", ";
}
console.warn(sumaNombres)
/* AVISOS (WARNING) */
console.warn("Mensaje warn");
/* ERRORES */
console.error("Mensaje error");
/* INFORMACIÓN (LOG) */
console.log("Mensaje log");
/* DEPURACIÓN (DEBUG) */
console.debug("Mensaje debug");
 

