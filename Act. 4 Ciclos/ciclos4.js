//Actividad 4

let totalNota = 0

for (let i=0; i<= 5; i++){
    let nota = parseInt(prompt ("Ingresa la Nota " + i))
    totalNota += nota
}
let promedio = totalNota/5
console.log("Promedio es: " + promedio)