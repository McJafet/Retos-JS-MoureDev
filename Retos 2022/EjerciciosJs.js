/* 1. CONTRASEÑA VÁLIDA
- Escribir una función llamada contrasenaValida que reciba un string y retorne true si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false.
*/

const contrasenaValida = (pw) => {
    if (pw === "2Fj(jjbFsuj" || pw === "eoZiugBf&g9") return true
    else {return false}
}

// console.log(contrasenaValida("2Fj(jjbFsuj")) // true
// console.log(contrasenaValida("eoZiugBf&g9")) // true
// console.log(contrasenaValida("hola")) // false
// console.log(contrasenaValida("")) //

/* 2. CALCULAR IMPUESTOS
- Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos: edad e ingresos. Si edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos * 40%. De lo contrario retornar 0. 
*/

const calcularImpuestos = (edad, ingresos) => {
    if (edad >= 18 && ingresos >= 1000) {
        return ingresos*0.4
    }
    else {return 0}
}
// código de prueba
// console.log(calcularImpuestos(18, 1000)) // 400
// console.log(calcularImpuestos(40, 10000)) // 4000
// console.log(calcularImpuestos(17, 5000)) // 0
// console.log(calcularImpuestos(30, 500)) // 0


/* 3. IMC (ÍNDICE DE MASA CORPORAL)
- El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

El BMI se calcula con la siguiente formula: peso / altura^2

Escribir una función llamada bmi que reciba dos argumentos: peso y altura, y retorne un string con las siguientes posibilidades:

"Bajo de peso" si el BMI < 18.5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30
*/

const bmi = (peso, altura) => {
    const imc = peso / Math.pow(altura, 2)
    console.log(imc)
    switch ( true ) {
        case (imc < 18.5):
            return "Bajo de peso"
            break
        case (imc >= 18.5 && imc <= 24.9):
            return "Normal"
            break
        case (imc >= 25 && imc <= 29.9):
            return "Sobrepeso"
            break
        case (imc >= 30):
            return "Obeso"
            break
        default:
            return "Datos Incorrectos"
            break
    }
}
// console.log(bmi(65, 1.8)) // "Normal"
// console.log(bmi(72, 1.6)) // "Sobrepeso"
// console.log(bmi(52, 1.75)) //  "Bajo de peso"
// console.log(bmi(135, 1.7)) // "Obeso"


/* 4. IMPRIMIR UN ARREGLO
- Escribir una función llamada imprimirArreglo que reciba un arrego e imprima cada elemento en una línea a parte.
*/

const imprimirArreglo = (...array) => {
    array.forEach(e => {
        console.log(e)
    })
}
// console.log(imprimirArreglo(1, "Hola", 2, "Mundo"))

/* 5. NÚMEROS DE LIKES
- Escribe una función llamada likes que reciba un número y retorne un string utilizando el formato de K para miles y M para millones.

Por ejemplo:

1400 se convierte en 1K
34,567 se convierte en 34K
7’456,345 se convierte en 7M.
Si el número es menor a 1000 se debe devolver el mismo número como un string.
*/

const likes = (num) => {
    let numero = 0;
    if (num < 0) {
        return "número de likes inválido"
    }
    switch (true) {
        case (num >= 0 && num < 1000):
            return `${num}`
            break;
        case (num >= 1000 && num < 1000000):
            numero = Math.floor(num/1000)
            return `${numero}K`
            break;
        case (num >= 1000000):
            numero = Math.floor(num/1000000)
            return `${numero}M`
            break;
        default: 
            return "número incorrecto"
            break;
    }
}

// console.log(likes(983)) // "983"
// console.log(likes(1900)) // "1K"
// console.log(likes(54000)) // "54K"
// console.log(likes(120800)) // "120K"
// console.log(likes(25222444)) // "25M"

/* 6. FIZZBUZZ
- Escribir una función llamada fizzBuzz que reciba un número y retorne un string de acuerdo a lo siguiente:

"fizz" si el número es múltiplo de 3.
"buzz" si el número es múltiplo de 5.
"fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
Si no cumple ninguna de las condiciones anteriores debe retornar el mismo número.
*/

const fizzBuzz = (num) => {
    if (num % 3 === 0 && num % 5 === 0) {
        return "fizzbuzz"
    } else if (num % 5 === 0) {
        return "buzz"
    } else if (num % 3 === 0) {
        return "fizz"
    } else {
        return num
    }
}
// console.log(fizzBuzz(6)); // "fizz"
// console.log(fizzBuzz(20)); // "buzz"
// console.log(fizzBuzz(30)); // "fizzbuzz"
// console.log(fizzBuzz(8)); // 8

/* 7. CONTAR RANGO DE NÚMEROS
- Escribir una función llamada contarRango que reciba dos números y retorne cuántos números hay entre ellos(excluyéndolos).
NOTA: Utilizar un ciclo en tu solución. Puedes asumir que el primer número va a ser menor que el segundo 
*/

const contarRango = (num1, num2) => {
    let rango = []
    let resta = 0
    if (num1 < num2) {
        resta = num2 - num1
        for (let i = 0; i < resta - 1; i++) {
            rango = [...rango, num1 + 1 ]
            num1 = num1 +1
        }
        return rango.length
    } else {
        resta = num1 - num2
        for (let i = 0; i < resta - 1; i++) {
            rango = [...rango, num1 + 1 ]
            num1 = num1 +1
        }
        return rango.length
    }
}
// console.log(contarRango(1, 9)) // 7
// console.log(contarRango(1332, 8743)) // 7410
// console.log(contarRango(5, 6)) // 0

/* 8. SUMAR RANGO DE NÚMEROS
- Escribir una función llamada sumarRango que reciba dos argumentos: número inicial y número final. La función debe retornar la suma de los números en ese rango (incluyéndolos).

Nota: puedes asumir que el número inicial va a ser menor o igual que el número final.
*/
const sumarRango = (num1, num2) => {
    let rango = []
    let resta = 0
    let suma = 0
    if (num1 < num2) {
        resta = num2 - num1
        for (let i = 0; i <= resta; i++) {
            rango = [...rango, num1]
            num1 = num1 + 1
            suma = suma + rango[i]
        }
        return suma
    } else if (num2 < num1) {
        resta = num1 - num2
        for (let i = 0; i <= resta; i++) {
            rango = [...rango, num1]
            num1 = num1 + 1
            suma = suma + rango[i]

        }
        return suma
    } else if (num1 = num2) {
        return 0
    }
    else { return "no es un número o dato válido."}
}

// console.log(sumarRango(0, 10)) // 55
// console.log(sumarRango(12, 14)) // 39
// console.log(sumarRango(5, 5)) // 0

/* 9. NÚMERO DE AES (LETRA "A")
- Escribir una función llamada numeroDeAes que reciba un string y retome el número de veces que aparece la letra "a":
*/

const numeroDeAes = (string) => {
    let frase = string.toLowerCase().replace(/\s+/, "").split("")
    let suma = 0;
    for (const letra of frase){
        if (letra === "a") {
            suma += 1
        }
    }
    return suma
}

// console.log(numeroDeAes("abracadabra")) // 5
// console.log(numeroDeAes("etinol")) // 0
// console.log(numeroDeAes("")) // 0

/* 10. NÚMERO DE CARÁCTERES
- Escribir una función llamada numeroCaracteres que reciba un string y un caracter (un string de un caracter). La función debe retornar el número de veces que aparece el caracter en el string.
*/

const numeroDeCaracteres = (string, char) => {
    let frase = string.replace(/\s+/, "").split("")
    let suma = 0;
    for (const letra of frase){
        if (letra === char) {
            suma += 1
        }
    }
    return suma
}
// console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
// console.log(numeroDeCaracteres("MMMMM", "m")) // 0
// console.log(numeroDeCaracteres("eeee", "e")) // 4

/* 11. SUMAR ARREGLO 
- Escribir una función llamada sumarArreglo que reciba un arreglo de números y retorne la suma de todos los elementos.
*/

// const sumarArreglo = (array) => {
//     let suma = 0;
//     for (const element of array) {
//         suma = suma + element
//     }
//     return suma
// }

// console.log(sumarArreglo([3, 1, 2])) // 6
// console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
// console.log(sumarArreglo([])) // 0

/* 12. MULTIPLICAR ARREGLO
- Escribir una función llamada multiplicarArreglo que reciba un arreglo de números y retorne la multiplicación de todos los elementos.
*/
const multiplicarArreglo = (array) => {
    let producto = 1;
    for (const element of array) {
        producto = producto * element
    }
    return producto
}
// console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
// console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
// console.log(multiplicarArreglo([])) // 1

/* 13. REMOVER CEROS
- Escribir una función llamada removerCeros que reciba un arreglo de números y retorne un nuevo arreglo excluyendo los ceros (0).
*/

const removerCeros = (numeros) => {
    const removed = numeros.filter(num => num !== 0)
    return removed
}
// console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
// console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
// console.log(removerCeros([0, 0, 0])) // []

/* 14. SUMAR ARREGLO ENTRE EL RANGO
- Escribir una función llamada sumarArreglo que reciba tres argumentos: un arreglo de números, la posición inicial y la posición final. La función debe retornar la suma de todos los números dentro del rango (la posición inicial y la posición final, incluyéndolas).

Nota: puedes asumir que la posición inicial va a ser menor o igual a la posición final, y que están dentro de los límites del arreglo.
*/

const sumarArreglo = (array, ini, fin) => {
    let suma = 0;
    if (ini < fin){
        for (let i = ini; i <= fin; i++){
            suma = suma + array[i];
        }   
        return suma
    } else if (fin < ini){
        for (let i = fin; i <= ini; i++){
            suma = suma + array[i];
        } 
        return suma
    } else {
        return array [ini]
    }
}
// console.log(sumarArreglo([1, 2, 3], 1, 2)) // 5
// console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
// console.log(sumarArreglo([7, 8, 9], 0, 0)) // 0

/* 15. TRANSCRIBIR ADN A ARN
- Escribir una función llamada transcribir que reciba un string (una cadena de ADN) y retorne otro string (su complemento ARN).

Los complementos son los siguientes:

G -> C
C -> G
T -> A
A -> U
*/

const complementos = {
    "G": "C",
    "C": "G",
    "T": "A",
    "A": "U"
}
const transcribir = (string) => {
    let message = ""
    for (let i = 0; i < string.length; i++) {
        let word = string.split("")
        for (const adn in complementos) {
            if (adn === word[i]) {
                let mes = complementos[adn]
                message = `${message}${mes}`
            }
        }
    }
    return message
}
// código de prueba
// console.log(transcribir("ACGT")) // "UGCA"
// console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"

/* 16. CAPITALIZAR PALABRA
- Escribir una función llamda capitalizar que reciba un string y capitalice la primera letra
*/

const capitalizar = (string) => {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
}
// console.log(capitalizar("pedro")) // "Pedro"
// console.log(capitalizar("hola mundo")) // "Hola mundo"
// console.log(capitalizar("")) // ""

/* 17. CAPITALIZAR CADA PALABRA
- Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra de cada palabra
*/

const capitalizarFrase = (string) => {
    let fraseCapitalizada = ""
    let frase = string.replace(/\s+/, " ").split(" ")
    for (const word of frase) {
        let capitalizaded = `${word.charAt(0).toUpperCase()}${word.slice(1)}`
        fraseCapitalizada = `${fraseCapitalizada} ${capitalizaded}`
    }
    return fraseCapitalizada
}

// console.log(capitalizarFrase("hola mundo")) // "Hola Mundo"
// console.log(capitalizarFrase("make it real")) // "Make It Real"
// console.log(capitalizarFrase("")) // ""

/* 18. ENCONTRAR EL NÚMERO MÁXIMO
- Escribir una función llamada max que reciba un arreglo de números y retorne el número máximo:

Nota: Intentarlo hacer sin el método Math.max de JavaScript.
*/

const max = (array) => {
    let numMax = 0;
    for (const num of array) {
        if (numMax < num) {
            numMax = num
        }
    }
    return numMax;
}
// código de prueba
// console.log(max([3, 9, 6])) // 9
// console.log(max([67, 35, 54, 26])) // 67
// console.log(max([5, 9, 2, 4, 5, 7])) // 9

/* 19. ENCONTRAR EL NÚMERO MÍNIMO
- Escribir una función llamada min que reciba un arreglo de números y retorne el número mínimo:

Nota: Intentarlo hacer sin el método Math.min de JavaScript.
*/
const min = (array) => {
    let numMin = Math.pow(999,99999999);
    for (const num of array) {
        if (numMin > num) {
            numMin = num
        }
    }
    return numMin;
}
// código de prueba
// console.log(min([3, 9, 6])) // 3
// console.log(min([67, 35, 54, 26])) // 26
// console.log(min([5, 9, 2, 4, 5, 7])) // 2

/* 20. GENERAR CONTRASEÑA
- Escribir una función llamada password que reciba un string y retorne un nuevo string realizando los siguientes cambios:

Las mayúsculas se reemplazan por minúsculas.
Se eliminan los espacios en blanco.
Reemplaza el caracter “a” por “4”.
Reemplaza el caracter “e” por “3”.
Reemplaza el caracter “i” por “1”.
Reemplaza el carater “o” por “0”.
*/

const reemplazos = {
    "a": "4",
    "e": "3",
    "i": "1",
    "o": "0"
}
const upperToLower = (string) => {
    return string.toLowerCase()
}
const eliminarEspacios = (string) => {
    return string.replace(/\s+/g, "").split("")
}
const password = (string) => {
    let lower = upperToLower(string);
    let sinEspacios = eliminarEspacios(lower);
    let password = ""
    for (const element of sinEspacios ) {
        let letra = element
        for (const property in reemplazos) {
            if (property === letra) {
                letra = reemplazos[property];
            }
        }
        password = `${password}${letra}`
    }
    return password
}

// console.log(password("hola")) // "h0l4"
// console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
// console.log(password("")) // ""


/* 21. ENCONTRAR NÚMEROS PARA UN ARREGLO
- Escribir una función llamada pares que reciba un arreglo de números y retorne un nuevo arreglo con los números pares únicamente.
*/

const pares = (array) => {
    let pares = array.filter(e => e % 2 === 0)
    return pares
}

// console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
// console.log(pares([])) // []

/* 22. ENCONTRAR POSICIONES DE NÚMEROS PARES
- Escribir una función llamada posiciones que reciba un arreglo de números y retorne un nuevo arreglo con las posiciones donde se encuentran números pares
*/

const posiciones = (array) => {
    let posPares = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            let pos = array.indexOf(array[i])
            posPares = [...posPares, pos]
        }
    }
    return posPares
}

// console.log(posiciones([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
// console.log(posiciones([])) // []

/* 23. DUPLICAR ELEMENTOS DE UN ARREGLO
- Escribir una función llamada duplicar que reciba un arreglo de números y retorne un nuevo arreglo donde cada número esté multiplicado por dos.
*/

const duplicar = (numeros) => {
    let duplicados = []
    for (const num of numeros) {
        duplicados = [...duplicados, num*2]
    }
    return duplicados
}

// console.log(duplicar([1, 2, 3])) // [2, 4, 6]
// console.log(duplicar([])) // []

/* 24. ENCONTRAR PALABRAS QUE EMPIECEN POR "A"
- Escribir una función llamada empiezanConA que reciba un arreglo de strings y retorne un nuevo arreglo con todas las palabras que empiecen por "a" (mayúscula o minúscula).
*/

const empiezanConA = (array) => {
    let palabrasA = []
    for (const palabra of array) {
        if (palabra.charAt(0) === 'A' || palabra.charAt(0) === 'a') {
            palabrasA = [...palabrasA, palabra];
        }
    }
    return palabrasA
}
// console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
// console.log(empiezanConA(["beta", "delta", "gama"])) // []
// console.log(empiezanConA([])) // []

/* 25. ENCONTRAR PALABRAS QUE TERMINAN EN "S"
- Escribir una función llamada terminanConS que reciba un arreglo de strings y retorne un nuevo arreglo con todas las palabras que terminan con "s" (mayúscula o minúscula).
*/

const terminanConS = (array) => {
    let palabrasS = []
    let indice = 0
    for (const palabra of array) {
        indice = palabra.length - 1
        if (palabra.charAt(indice) === 'S' || palabra.charAt(indice) === 's') {
            palabrasS = [...palabrasS, palabra];
        }
    }
    return palabrasS
}
// console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
// console.log(terminanConS(["beta", "delta", "gama"])) // []
// console.log(terminanConS([])) // []

/* 26. IMPRIMIR UNA MATRIZ
Escribir una función llamada imprimirMatriz que reciba una matriz (un arreglo de arreglos) e imprima todos los elementos del arreglo.
*/

const imprimirMatriz = (matriz) => {
    let resultado = "";
    for (let i = 0; i < matriz.length; i++) {   
        for (let j = 0; j < matriz[i].length; j++) {
            resultado = resultado + matriz[i][j] + "\n"
        }
    }
    return resultado
}

// console.log(imprimirMatriz([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ]))

/* 27. TRADUCIR NÚMEROS A PALABRAS
- Escribir una función llamada numerosAPalabras que reciba un arreglo de números (cada número en el rango de 0 a 0) y retorne un nuevo arreglo convirtiendo cada número a su versión en palabras.
*/

const numeros = {
    0: "cero",
    1: "uno",
    2: "dos",
    3: "tres",
    4: "cuatro",
    5: "cinco",
    6: "seis",
    7: "siete",
    8: "ocho",
    9: "nueve"    
}
const numerosAPalabras = (numbers) => {
    let palabras = []
    for (const num of numbers) {
        if (num < 0 || num > 9) {
            return "Hay un número inválido"
        }
        for (const property in numeros) {
            if (num == property) {
                palabras = [...palabras, numeros[property]]
            }
        }
    }
    return palabras
}

// console.log(numerosAPalabras([0, 1, 2, 3, 4])) // ["cero", "uno", "dos", "tres", "cuatro"]
// console.log(numerosAPalabras([5, 6, 7, 8, 9])) // ["cinco", "seis", "siete", "ocho", "nueve"]

/* 28. TRADUCIR NÚMEROS A PALABRAS
- Escribir una función llamada palabrasANumeros que reciba un arreglo de strings y retorne un nuevo arreglo traduciendo cada palabra a su versión numérica (del 0 al 9). Si la palabra no es un número traducir a -1.
*/
const palabras = {
    "cero":     0,
    "uno":      1,
    "dos":      2,
    "tres":     3,
    "cuatro":   4,
    "cinco":    5,
    "seis":     6,
    "siete":    7,
    "ocho":     8,
    "nueve":    9   
}
const palabrasANumeros = (words) => {
    let convertido = []
    for (const word of words) {
        let encontrado = false
        for (const property in palabras) {
            if (word === property) {
                convertido = [...convertido, palabras[property]]
                encontrado = true;
                break;
            }
        }
        if (!encontrado) {
            convertido.push(-1);
        }
    }
    return convertido
}


// console.log(palabrasANumeros(["cero", "uno", "dos", "tres", "what?", "cuatro"])) // [0, 1, 2, 3, -1, 4]
// console.log(palabrasANumeros(["cinco", "seis", "siete", "ocho", "nueve"])) // [5, 6, 7, 8, 9]

/* 29. NÚMERO DE ASTERISCOS EN UN ARREGLO
- Escribir una función llamada numAsteriscos que reciba un arreglo y retorne el número de asteriscos:
*/

// const numAsteriscos = (array) => {
//     let numAsteriscos = 0
//     for (const e of array) {
//         if (e === '*') {
//             numAsteriscos += 1
//         }
//     }
//     return numAsteriscos
// }
// console.log(numAsteriscos(['', '*', '', '*'])) // 2
// console.log(numAsteriscos(['*', '*', '*'])) // 3
// console.log(numAsteriscos([])) // 0

/* 30. NÚMERO DE ASTERISCOS EN UNA MATRIZ
- Escribir una función llamada numAsteriscos que reciba una matriz (un arreglo de arreglos) y retorne el número de asteriscos:
*/
const numAsteriscos = (matriz) => {
    let suma = 0;
    for (let i = 0; i < matriz.length; i++) {   
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] === '*') {
                suma += 1
            }
        }
    }
    return suma
}
// console.log(numAsteriscos([
//     ['*', '', '*'],
//     ['', '*', ''],
//     ['*', '', '*']
//   ]))
//   // 5

/* 31. DISTANCIA ENTRE DOS STRINGS
- Escribir una función llamada distancia que reciba dos strings y retorne el número de caracteres diferentes (comparando posición por posición).

Nota: Puedes asumir que los strings siempre tienen la misma longitud. Sin embargo, si quieres agregarle más dificultad puedes pensar cómo solucionarlo si un string es más largo que el otro (la diferencia entre las longitudes agregaría al resultado).
*/

const distancia = (string1, string2) => {
    let word1 = string1.split("")
    let word2 = string2.split("")
    let suma = 0;
    if (word1.length <= word2.length){
        for (let i = 0; i < word2.length; i++) {
            if (word1[i] !== word2[i]){
                suma += 1
            }
        }
    } else if (word2.length < word1.length) {
        for (let i = 0; i < word1.length; i++) {
            if (word1[i] !== word2[i]){
                suma += 1
            }
        }
    }
    return suma
}
// console.log(distancia("hola", "hola")) // 0
// console.log(distancia("sol", "tol")) // 1
// console.log(distancia("carro", "correr")) // 3