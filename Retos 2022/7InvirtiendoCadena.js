/* 7. INVIRTIENDO CADENAS
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */


const invertirCadena = () => {
    let cadenaOriginal = document.getElementById("frase").value
    console.log(cadenaOriginal)
    let cadena = cadenaOriginal;
    let n = cadena.length;
    console.log(n);
    // let cadenaInvertida = [];
    // for (i = n - 1; i >= 0; i--) {
    //     cadenaInvertida.push(cadena[i]);
        
    // }
    // console.log(cadenaInvertida.join(''));

    // Concatenando sería
    let cadenaInvertida = "";
    for (i = n - 1; i>= 0; i--) {
        cadenaInvertida += cadena[i];
    }
    console.log(cadenaInvertida);
}

// <==============================================>

/* 8. CONTANDO PALABRAS
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

/* Estas expresiones siempre van entre dos slash / / todo dentro de los slash son las expresiones a considerar ya sea para quitar tildes o separar solo las palabras.*/

/* FUNCIÓN QUITAR TILDES =====> normalize("NFD").replace(/[\u0300-\u036f]/g, "")
* - normalize("NFD") normaliza la cadena de texto unidcode "Forma Canónica Decompositora"
 descompone la letra de la tilde luego:
* - [\u0300-\u036f] => es el rango de caracteres unicode, elimina también letras
* - [^\u0000-\u007F] => solo elimina los diacríticos, no las letras
* - /g => indica que sea global, no a la primera coincidencia, si no, toda la cadena o frase
* - , "") => significa que lo reemplace por vacío es decir lo elimina.
*/
function quitarTildes(palabra) {
    return palabra.normalize("NFD").replace(/[^\u0000-\u007F\u00C0-\u00FF]/g, "");
}

/* FUNCIÓN SEPARAR PALABRAS ====> replace.(/[^\w\s]|_/g, "")
* - [^...] => define clase de caracteres negados, cualquier carácter que no esté incluido dentro de esta clase será coincidente
* - \w => Representa cualquier carácter de palabra(letras,números y guiones bajos)
* - \s => Representa cualquier espacio en blanco
* - | => operador OR
* - _ => guión abajo
* - g, "") => lo mismo, global y lo reemplaza por vacío
*/
function separarPalabras(frase) {
    // Eliminar los signos de puntuación utilizando una expresión regular
    let palabras = frase.split(/\s+/);//\s+ => para que considere 1 o más espacios en blanco.
    //quitamos las tildes
    return palabras
}
let frase = "En esta función veremos cuántas veces se repiten las palabras determinadas, lo malo que si pones palabras con tildes el programa se rompe, es algo que falta corregir"

// let fraseSeparada = separarPalabras(frase);
// console.log(fraseSeparada);
// let frase = "¡Hola, mundo! Esto es una prueba con tildes: á.";
// console.log(separarPalabras(frase));
function countWords(text) {
    const words = new Map();
    console.log(words)
    text.toLowerCase().replace(/[^a-z0-9]/g, " ").split(" ").forEach(key => {
        if (key === "") {
        return;
        }
        if (words.has(key)) {
        words.set(key, words.get(key) + 1);
        } else {
        words.set(key, 1);
        }
    });
    for (const [word, count] of words) {
        console.log(`${word} se ha repetido ${count} ${count === 1 ? "vez" : "veces"}`);
    }
}
// console.log(countWords(frase))

// <==============================================>

/* 9. TRANSFORMAR A BINARIO
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */

const decimalToBinary = (decimal) => {
    let number = decimal;
    let binary = "";
    while (number !== 0) {
        const reminder = number % 2;
        number = Math.floor(number / 2);
        binary = `${reminder}${binary}`;
        console.log(reminder)
        console.log(number)
        console.log(binary)
        console.log(`<========>`)
    }
    return binary.length === 0 ? "0" : binary
}
console.log(decimalToBinary(10));