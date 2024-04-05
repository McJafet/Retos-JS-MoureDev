/* 1. FIZZBUZZ
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

for (let i = 1; i <= 100; i++) {
    let num = i;
    
    if (num % 15 == 0) {
        num = "fizzbuzz";        
    } else if (num % 5 == 0) {
        num = "buzz";
    } else if (num % 3 == 0) {
        num = "fizz";
    }
    console.log(num + "\n");
}

// <==============================================>

/* 2. ANAGRAMA
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */
const inicia = document.getElementById("inicia");

inicia.addEventListener("click", () => {
    let word1 = prompt("Ingresa la 1era palabra");
    let word2 = prompt("Ingresa la 2da palabra");

    // function anagramaControl(w1,w2) {
        
    //     if (w1.lenght !== w2.lenght && w1 === w2 && w1.lenght < 2 && w2.lenght < 2) {
    //         return false
    //     }  else {
    //         return w1.includes(w2);
    //     }
        
    // }
    // let w1 = word1.toLowerCase().split('').sort();
    // let w2 = word2.toLowerCase().split('').sort();
    // console.log(anagramaControl(w1,w2))

    // console.log(w1.includes(w2));
    

    function evaluarString() {
        if ((typeof(word1) && typeof(word2)) !== 'String' ) {
            return console.log("No es una palabra");
        } 
    }
    
    function compareStrings () {
        let letras1 = word1.toLowerCase().split('').sort();
        let letras2 = word2.toLowerCase().split('').sort();
        if (letras1.length !== letras2.length && letras1 === letras2 ) 
            return false;
        const elements = new Set([...letras1, ...letras2]);
        console.log(elements);
        for (const x of elements) {
            const count1 = letras1.filter(e => e === x).length;
            const count2 = letras2.filter(e => e === x).length;
            console.log(count1);
            console.log(count2);
            if (count1 !== count2) return false;
        }
        return true;
    }
    
    console.log(compareStrings());
    evaluarString();
});

// <==============================================>
/* 3. FIBONACCI
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */
let numeros = [];
let anterior = 0;
let actual = 1;

for (let i = 0; i <= 50; i++) {
    numeros.push(i);
}

// console.log(numeros);
// numeros.forEach( () => {
//     console.log(anterior);
//     let fibonacci = anterior + actual;
//     anterior = actual;
//     actual = fibonacci;
// });
for (index in numeros) {
    console.log(anterior);
    let fibonacci = anterior + actual;
    anterior = actual;
    actual = fibonacci;
};

