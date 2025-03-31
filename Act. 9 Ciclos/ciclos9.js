//Actividad 9

let digitos = prompt("Ingrese un número que desee contar los digitos")

let listaDigitos = digitos.split("")

console.log(listaDigitos)

let contador = 0

while (contador != listaDigitos.length){
    contador += 1
}
console.log("Digitos", contador)