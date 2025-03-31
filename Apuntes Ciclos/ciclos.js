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

//Do while - Sirve para ejecutar al menos una vez el bloque de código

let contador = 0

do {
    console.log("Iteración número", contador)
    contador += 1
} while (contador < 100)


