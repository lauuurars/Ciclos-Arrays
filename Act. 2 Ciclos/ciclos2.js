//Actividad 2 ----------- While

/* 
let contador = 10 

while (contador != 1) {
    contador -= 1 //no se muestra el 10 porque se le restó 1 antes de mostrarlo en consola
    console.log(contador)

    if (contador == 1) {
        console.log("Terminé") //pregunta y acciona
    }
} 
*/

//-------------- Do While

let contador = 10 //incio en 10

do{
    contador -= 1 //se muestra el resultado de 10 - 1
    console.log(contador)

    if (contador == 1) {
        console.log("Terminé") //cuando el resultado llega hasta 1, se muestra el "terminé"
    }
} while (contador != 1) //acciona y pregunta