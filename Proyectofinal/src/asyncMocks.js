const products = [
    {
        id: "1",
        categoria: "Consola",
        nombre: "Playstation 2",
        detalle: "La consola mas vendida",
        imagen: "../public/images/ps2Fat.jpg",
        precio: 7000,
        stock: 5
    },
    {
        id: "2",
        categoria: "Juego",
        nombre: "Elden ring",
        detalle: "Juego mundo abierto",
        imagen: "../public/images/EldenRing.jpg",
        precio: 5000,
        stock: 7
},
{
        id: "3",
        categoria: "Accesorio",
        nombre: "Joystick Xbox",
        detalle: "Joystick de Xbox 360",
        imagen: "../public/images/JoystickXbox.jpg",
        precio: 8000,
        stock: 4
},
{
        id: "4",
        categoria: "Accesorio",
        nombre: "Teclado mecanico",
        detalle: "Teclado gamer con cable",
        imagen: "../public/images/TecladoMecanico.jpg",
        precio: 7500,
        stock: 5
},
{
  id: "5",
        categoria: "Accesorio",
        nombre: "Auricular Gamer",
        detalle: "Auricular gamer con cable",
        imagen: "../public/images/Auriculares-gamer.jpg",
        precio: 6000,
        stock: 3
},
{
  id: "6",
        categoria: "Accesorio",
        nombre: "Placa de video RTX",
        detalle: "Placa de video para PC",
        imagen: "../public/images/Placa-de-video.jpg",
        precio: 120.00,
        stock: 2
},
{
  id: "7",
        categoria: "Juego",
        nombre: "God of War",
        detalle: "Juego de Accion",
        imagen: "../public/images/God-of war.jpg",
        precio: 9000,
        stock: 6
},
{
  id: "8",
        categoria: "Juego",
        nombre: "Metal Gear Solid 3",
        detalle: "Juego de espionaje",
        imagen: "../public/images/Metal-gear.jpg",
        precio: 3000,
        stock: 7
},
{
  id: "9",
        categoria: "Juego",
        nombre: "Zelda breath of the wild",
        detalle: "Juego de mundo abierto de nintendo",
        imagen: "../public/images/Zelda.jpg",
        precio: 9000,
        stock: 3
},
{
  id: "10",
  categoria: "Consola",
  nombre: "PlayStation 5",
  detalle: "La ultima consola de SONY",
  imagen: "../public/images/Play-5.jpg",
  precio: 400.000,
  stock: 5 
},
{
  id: "11",
        categoria: "Consola",
        nombre: "Xbox Series X",
        detalle: "Consola de ultima generacion",
        imagen: "../public/images/Xbox-series-x.jpg",
        precio: 450.000,
        stock: 4
},
{
  id: "12",
        categoria: "Consola",
        nombre: "Nintendo Switch",
        detalle: "Consola Hibrida",
        imagen: "../public/images/Nintendo-Swtich.jpg",
        precio: 300.000,
        stock: 9
}
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
         if(products.length>0) {
            setTimeout(() => {
                resolve(products);
              }, 2000)
         } else {
             reject("No hay productos")
         }
     })
 }

export const getProduct = ( id ) => {
    return new Promise((resolve, reject) => {
      
      const product = products.find( product => product.id === id); 
      setTimeout( () => { 
        if(!product) {
          reject("No se encontro el producto")
        } else {
          resolve(product);
        }
       }, 2000 )
      
    });
  };