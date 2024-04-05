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
