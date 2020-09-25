
// Primero declaro un arreglo bidimensional con cada módulo para armar las frases. 
const data = [
    [ 'La inflación', 'La corrupción', 'La inseguridad', 'La desocupación', 'La devaluación', 'El narcotráfico' ],
    [ 'es un invento', 'es un montaje', 'es una maniobra', 'es una mentira', 'es una falsedad', 'es un ardid' ],
    [ 'de los golpistas', 'de la oposición', 'del Grupo Clarín', 'de los fascistas', 'del capitalismo', 'de una minoría' ],
    [ 'para sabotear', 'para destruir', 'para perjudicar', 'para debilitar', 'para desgastar', 'para anular' ],
    [ 'al Pueblo.', 'al Modelo.', 'al Gobierno.', 'la Democracia.', 'a La Patria.', 'el crecimiento.' ]
];
// Defino la función para luego llamarla desde el HTML.
const generate = () => {
    // Defino un arreglo vacío.
    const phrase = [];
    // Itero el arreglo de módulos.
    data.map(i => {
        /**
         * Genero un número aleatorio entre 0 y la cantidad de 
         * posibilidades que tenga el item.
         */
        const random = Math.floor(Math.random()*i.length);
        // Agrego un elemento aleatorio del item al arreglo "phrase".
        phrase.push(i[random]);
    });
    // Concateno el arreglo para formar una única cadena de texto.
    const result = phrase.join(' ');
    // Finalmente devuelvo la frase lista para ser mostrada.
    return result;
};