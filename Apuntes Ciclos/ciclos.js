/*

//While - Ejemplo
let contador = 0

while (contador < 10) { //10 no se incluye en la iteración, para ello deberíamos usar <=
    console.log("Iteración número", contador)
    contador += 1
}

//usar while con letras

let nombre = "A"

while (nombre != "Aaaaaaaaa") {
    console.log("Iteración número", nombre)
    nombre += "a"
} 
//hasta que nombre sea igual a "Aaaaaaaaa" no se detiene el bucle


//While - Ejemplo de 0 hasta 100
let numero = 0

while (numero < 100) {
    console.log("Iteración while número", numero)
    numero += 1
}

*/

/*
//Do while - Sirve para ejecutar al menos una vez el bloque de código

let contador = 0

do {
    console.log("Iteración número", contador)
    contador += 1
} while (contador < 100)

//------------- Usar For

for (let i= 0; i<10; i++){
    console.log("iteración for número", i)
} 

//usar variable de for por dentro de console.log

console.log(i)
//i = iteración, es una variable 

*/

//------------- Usar For Of
/*
let nombres = ["Carlos", "Pepe", "Ana", "Luisa"]

for (const nombre of nombres) {
    console.log("Nombre: " + nombre)
}

console.log("Estoy Fuera!")
*/

//------------------Continue y Break

//Break sirve para romper el bucle cuando encuentro lo que estaba buscando, el bucle no termina y solo llega hasta la posición deseada

//Continue sirve para hacer una iteración completa si es necesario y salta a la otra iteración sin terminar el ciclo

//Ejemplo

let estudiantes = [20, 19, 21, 39, 12]

let mayor = 0

for (let i = 0; i<estudiantes.length; i++) {
    if (estudiantes[i] < 18) {
        continue
    }

    if (estudiantes[i] > mayor) {
        mayor = estudiantes[i]
    }
    console.log("El estudiante mayor era", mayor)
}

console.log("El estudiante mayor al final es", mayor)
