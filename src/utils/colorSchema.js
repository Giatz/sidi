export const colorSchema = [
  {
    // Fondo Oscuro, Texto Claro
    fondo: '2C3E50', // Azul Petróleo (Oscuro)
    texto: 'F9E79F' // Amarillo Suave (Claro)
  },
  {
    // Fondo Claro, Texto Oscuro
    fondo: 'E8DAEF', // Lavanda Pálida (Claro)
    texto: '8E44AD' // Púrpura Intenso (Oscuro)
  },
  {
    // Fondo Oscuro, Texto Claro
    fondo: '145A32', // Verde Bosque (Oscuro)
    texto: 'A9DFBF' // Menta Pálida (Claro)
  },
  {
    // Fondo Claro, Texto Oscuro
    fondo: 'FCF3CF', // Crema (Claro)
    texto: 'D35400' // Naranja Calabaza (Oscuro)
  },
  {
    // Fondo Oscuro, Texto Claro
    fondo: '626567', // Gris Carbón (Oscuro)
    texto: 'FFFFFF' // Blanco Puro (Claro)
  },
  {
    // Fondo Claro, Texto Oscuro
    fondo: 'BBDEFB', // Azul Cielo Claro (Claro)
    texto: '2980B9' // Azul Brillante (Oscuro)
  }
]

export function randomColor(array) {
  const indiceAleatorio = Math.floor(Math.random() * array.length);
  return array[indiceAleatorio];
}