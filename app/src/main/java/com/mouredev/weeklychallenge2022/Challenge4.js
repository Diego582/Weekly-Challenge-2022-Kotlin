/*
 * Reto #4
 * ÁREA DE UN POLÍGONO
 * Fecha publicación enunciado: 24/01/22
 * Fecha publicación resolución: 31/01/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea UNA ÚNICA FUNCIÓN (importante que sólo sea una) que sea capaz de calcular y retornar el
 *  área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const poligono = (poligono, base, altura) => {
  let str = poligono.toLowerCase();
  let b = parseInt(base);
  let h = parseInt(altura);
  let area = 0;
  switch (str) {
    case "triángulo":
      area = (b * h) / 2;
      console.log("El area de un triangulo es : " + area);
      break;
    case "cuadrado":
      area = b * h;
      console.log("El area de un cuadrado es : " + area);
      break;
    case "rectángulo":
      area = b * h;
      console.log("El area de un rectángulo es : " + area);
      break;
    default:
      console.log("Lo lamento " + str + ", no es una opcion valida");
      break;
  }
};

poligono("triángulo", 1, 2);
