/*
 * Reto #1
 * ¿ES UN ANAGRAMA?
 * Fecha publicación enunciado: 03/01/22
 * Fecha publicación resolución: 10/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no
 * anagramas.
 * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
 * NO hace falta comprobar que ambas palabras existan.
 * Dos palabras exactamente iguales no son anagrama.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar
 *  ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const anagrama = (word1, word2) => {
  let str1 = word1;
  let str2 = word2;

  // compara que no sean iguales
  if (str1 === str2) {
    return console.log(false);
  }
  // split para separar por letras + sort para ordenar las letras
  let arrayStr1 = str1.split("").sort();
  let arrayStr2 = str2.split("").sort();

  // compara letra por letra para comprobar que puede ser anagramas
  if (arrayStr1.length === arrayStr2.length) {
    for (i = 0; i < arrayStr1.length; i++) {
      if (arrayStr1[i] != arrayStr2[i]) {
        return console.log(false);
      }
    }
    console.log(true);
  }
};

anagrama("planta", "tanpla");
