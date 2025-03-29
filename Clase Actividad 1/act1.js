// Actividad 1

//Inicio el array
let compras = ["leche", "pan", "huevos"]; //lista inicial de compras


console.log("Lista inicial de compras: " + compras);

compras.push("frutas") //agregamos un elemento al final de la lista
compras.splice(1,1) //eliminamos el elemento "pan" de la lista

console.log("Lista final de compras: " + compras); //imprimimos lista final de compras ["leche", "huevos", "frutas"]