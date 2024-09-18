/* 10. CÓDIGO MORSE
 * Crea un programa que sea capaz de transformar texto natural a código
 * morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar
 *   la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras
 *   o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en
 *   https://es.wikipedia.org/wiki/Código_morse.
 */

const MORSE_CODE = {  
    "-----":"0",
    ".----":"1",
    "..---":"2",
    "...--":"3",
    "....-":"4",
    ".....":"5",
    "-....":"6",
    "--...":"7",
    "---..":"8",
    "----.":"9",
    ".-":"A",
    "-...":"B",
    "-.-.":"C",
    "-..":"D",
    ".":"E",
    "..-.":"F",
    "--.":"G",
    "....":"H",
    "..":"I",
    ".---":"J",
    "-.-":"K",
    ".-..":"L",
    "--":"M",
    "-.":"N",
    "---":"O",
    ".--.":"P",
    "--.-":"Q",
    ".-.":"R",
    "...":"S",
    "-":"T",
    "..-":"U",
    "...-":"V",
    ".--":"W",
    "-..-":"X",
    "-.--":"Y",
    "--..":"Z",
    "-.-.--":"!",
    ".-.-.-":".",
    "--..--":",",
    " ": " "
};
let frase = ".- -- ---  .- .-.. .. .- -. --.. .-"
let mensaje = "";
let cadaLetraMorse = []
const noTieneEspacio = (frase) => {
    let message = frase.toUpperCase()
    // console.log(message)
    if (message.includes("  ")){
        let dosEspacios = message.split("  ")
        // console.log(dosEspacios)
        for (let i=0; i < dosEspacios.length; i++){
            let word = dosEspacios[i]
            let cadaLetra = word.split(" ")
            cadaLetraMorse = [...cadaLetraMorse," ", ...cadaLetra]
            // console.log(cadaLetra)
        }
        return cadaLetraMorse
    }else if (message.includes(" ")) {
        let dosEspacios = message.split(" ")
        // console.log(dosEspacios)
        for (let i=0; i < dosEspacios.length; i++){
            let word = dosEspacios[i]
            let cadaLetra = word.split("")
            cadaLetraMorse = [...cadaLetraMorse, ...cadaLetra]
            // console.log(cadaLetra)
        }
        return cadaLetraMorse
    }
}
const codigo = noTieneEspacio(".- -- ---  .- .-.. .. .- -. --.. .-");
// console.log(codigo)
for (let i=0; i < codigo.length; i++){
    for (const property in MORSE_CODE){
        if (property === codigo[i]) {
            let mes = MORSE_CODE[property]
            mensaje = `${mensaje}${mes}`
        } else if (MORSE_CODE[property] === codigo[i]) {
            let mes = property
            mensaje = `${mensaje} ${mes}`
        }
    }
}
// console.log(mensaje)

// entries.forEach(entry => {
//     const morse = entry[0];
//     const letra = entry[1];
    
// })
// for (const code in MORSE_CODE){
//     if (frase !== code && frase !== MORSE_CODE[code]) {
//         console.log("Código Erróneo")
//     } else if (frase === code) {
//         console.log(MORSE_CODE[code])
//     } else if (frase === MORSE_CODE[code]){
//         console.log(code)
//     }
// }

// // <==============================================>

/* 11. EXPRESIONES EQUILIBRADAS
 * Crea un programa que comprueba si los paréntesis, llaves y corchetes
 * de una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cieran
 *   en orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios.
 *   No hay uno más importante que otro.
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
 */


// let parentesis = 0;
// let corchetes = 0;
// let llaves = 0;
// const balanceExpresion = (expresion) => {
//     for (let i=0; i < expresion.length; i++){
//         if (expresion[i] === "("){
//             parentesis++
//         } else if (expresion[i] === ")"){
//             parentesis--
//         } else if (expresion[i] === "["){
//             corchetes++
//         } else if (expresion[i] === "]"){
//             corchetes--
//         } else if (expresion[i] === "{"){
//             llaves++
//         } else if (expresion[i] === "}"){
//             llaves--
//         }
//     }
//     if (parentesis === 0 && corchetes === 0 && llaves === 0){
//         return "Expresión Balanceada"
//     } else {
//         return "Expresión No Balanceada"
//     }
// }
// console.log(balanceExpresion("{[ a * ( c + d ) ] - 5 }"))

// // <==============================================>
 
/* 12. ELIMINAR CARACTERES
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.
 */

const deleteCaracter = (str1, str2) => {
    let newStr1 = str1.normalize("NFD").toLowerCase().replace(/[^a-z]/g, "")
    let newStr2 = str2.normalize("NFD").toLowerCase().replace(/[^a-z]/g, "")
    newStr1 = newStr1.split("")
    newStr2 = newStr2.split("")
    let out1 = ""
    let out2 = ""
    for (letter of newStr1){
        if (!newStr2.includes(letter)){
            out1 = `${out1}${letter}`
        }
    }
    for (letter of newStr2){
        if (!newStr1.includes(letter)){
            out2 = `${out2}${letter}`
        }
    }
    return (`
        first string: ${out1}
        second palabra:${out2}`)
}

console.log(deleteCaracter("hola Pedro", "perro calzón"))