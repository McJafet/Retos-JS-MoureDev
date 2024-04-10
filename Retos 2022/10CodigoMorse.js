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
    if (frase.includes("  ")){
        let dosEspacios = frase.split("  ")
        console.log(dosEspacios)
        for (let i=0; i < dosEspacios.length; i++){
            let word = dosEspacios[i]
            let cadaLetra = word.split(" ")
            cadaLetraMorse = [...cadaLetraMorse," ", ...cadaLetra]
            console.log(cadaLetra)
        }
        return cadaLetraMorse
    }else if (frase.includes(" ")) {
        let dosEspacios = frase.split(" ")
        console.log(dosEspacios)
        for (let i=0; i < dosEspacios.length; i++){
            let word = dosEspacios[i]
            let cadaLetra = word.split("")
            cadaLetraMorse = [...cadaLetraMorse, ...cadaLetra]
            console.log(cadaLetra)
        }
        return cadaLetraMorse
    }
}
const codigo = noTieneEspacio("Amo ALianza!");
console.log(codigo)
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
console.log(mensaje)

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

