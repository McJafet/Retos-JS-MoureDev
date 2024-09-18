/* 13. ¿Es un Palíndromo?
 * Escribe una función que reciba un texto y retorne verdadero o
 * falso (Boolean) según sean o no palíndromos.
 * Un Palíndromo es una palabra o expresión que es igual si se lee
  * de izquierda a derecha que de derecha a izquierda.
 * NO se tienen en cuenta los espacios, signos de puntuación y tildes.
 * Ejemplo: Ana lleva al oso la avellana.
 */

const isPalindromo = (str) => {
    str = str.normalize("NFD").toLowerCase().replace(/[^a-z]/g, "")
    let reversed = str.split("").reverse().join("")
    return str === reversed ? true : false
}
console.log(isPalindromo("Anita lava la tinta"))

