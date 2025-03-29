//Actividad 2

//inicio del array

let numeros = [1, 2, 6, 3, 45, 0, 22, 7] //agregamos números aleatorios

let numerosPares = numeros.filter(numero => numero % 2 === 0) //filtramos los números pares usando el método filter
//se muestran los números que son divisibles entre 2, es decir, que su división es exacta o igual a residuo 0.

console.log("original: " + numeros) //se muestra el array original
console.log ("NUMEROS PARES: " + numerosPares) //se muestra el array de números pares