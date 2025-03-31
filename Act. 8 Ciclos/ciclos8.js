// Actividad 8

let sumaEdades = 0
let cantidadEdades= 0

let pusoNegativo = false 

while(pusoNegativo != true){
    let edadUsuario = parseInt(prompt("Ingrese la edad de uno de sus amigos, ponga un negativo en caso de que quiera terminar"))

    if (edadUsuario < 0) {
        pusoNegativo = true
    }

    sumaEdades += edadUsuario
    cantidadEdades += 1
}

let promedio = sumaEdades/cantidadEdades

console.log(promedio)
