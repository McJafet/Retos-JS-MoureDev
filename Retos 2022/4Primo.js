/* 4. NÚMERO PRIMO
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

const esPrimo = (n) => {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}   
const imprimirPrimo = () => {
    for (let i = 1; i <= 100; i++) {
        if (esPrimo(i)) {
            console.log(i);
        };
    };
};
imprimirPrimo();

// <==============================================>

/* 5. ÁREA DE UN POLÍGONO
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

const areaPoligono = (poligono, base, altura) => {
    let tipo = poligono.toString().normalize("NFD").toLowerCase();
    // if (typeof(tipo) != String || typeof(base) != Number || typeof(altura) != Number){
    //     console.log("uno de los datos es incorrecto");
    // }
    switch (tipo) {
        case "triangulo":
            area = (base * altura)/2;
            console.log(`el área del polígono ${tipo} es ${area}`);
            break;

        case "cuadrado":
            area = (base * altura);
            console.log(`el área del polígono ${tipo} es ${area}`);
            break;

        case "rectangulo":
            area = base * altura;
            console.log(`el área del polígono ${tipo} es ${area}`);
            break;
        default: 
            console.log("no es un polígono válido o soportado");
            break;
    }
    
}
areaPoligono("triangulo", 4, 5);

// <==============================================>
/* 6. ASPECT RATIO DE UNA IMAGEN
 * Crea un programa que se encargue de calcular el aspect ratio de una
 * imagen a partir de una url.
 * - Url de ejemplo: https://raw.githubusercontent.com/mouredev/
 *   mouredev/master/mouredev_github_profile.png
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una
 *   imagen de 1920*1080px.
 */

const calcularAspectRatio = () => {
    const urlImg = document.getElementById("urlImg");
    const resultadoElement = document.getElementById("resultado");
    const url = urlImg.value;

    console.log(url);
    if (!url) {
        resultadoElement.innerText = "Ingrese una URL válida";
        return;
    } else if(url) resultadoElement.innerText = "";

    const img = new Image();
    
    img.onload = () => {
        const aspectRatio = img.width / img.height;
        resultadoElement.innerText = `Aspect Ratio: ${aspectRatio.toFixed(2)}`;
    };

    img.onerror = () => {
        resultadoElement.innerText = "No se pudo cargar la imagen. Verifique la URL.";
    };

    img.src = url;
}

calcularAspectRatio();