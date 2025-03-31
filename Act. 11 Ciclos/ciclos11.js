//Actividad 11

let numero = parseInt(prompt("Ingresa el número: "))
let fibonacci = [0,1]
for (let i = 2; i < numero; i++){
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]
}
console.log("Los primeros números de: "+numero+" Son: "+ fibonacci.slice (0,numero))