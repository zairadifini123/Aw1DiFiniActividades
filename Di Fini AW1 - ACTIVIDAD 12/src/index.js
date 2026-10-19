// //Arreglos

// //a
// const numerosA = [];

// for (let i = 1; i <= 5; i++){
//     let numeroA = Number(prompt("Ingrese un numero")); //Number() para convertir el valor ingresado a tipo number
//     numerosA.push(numeroA);
// }
// console.log(numerosA);

// //b
// const numerosB = [];

// for (let i = 1; i <= 5; i++){
//     let numeroB = Number(prompt("Ingrese un numero"));
//     if(numeroB % 2 != 0){
//         numerosB.push(numeroB);
//     }
// }
// console.log(numerosB);

//c
const frutas = ["pera", "manzana", "banana", "durazno"];

frutas.forEach((fruta, indice, arreglo) => {
    arreglo[indice] = fruta.toUpperCase(); //Convierte los nombres en mayuscula
});

console.log(frutas);

//d
const frutasD = ["pera", "manzana", "banana", "durazno"];

const frutasMayusculas = frutas.map((fruta) => {
    return fruta.toUpperCase();
});

console.log(frutasMayusculas);

//e
const frutasE = ["pera", "manzana", "banana", "durazno"];
const frutasConNa = frutasE.filter((fruta) => {
    if (fruta.includes("na")) {
        return true;  
    } else {
        return false; 
    }
});

console.log(frutasConNa);

//Objetos

//a 
const productosIndumentaria = [
    {
        nombre: "Remera Básica",
        precio: 15000,
        stock: 25,
        talles: ["S", "M", "L"]
    },
    {
        nombre: "Pantalón Jean",
        precio: 35000,
        stock: 1,
        talles: ["M", "L", "XL"]
    },
    {
        nombre: "Buzo Oversize",
        precio: 42000,
        stock: 15,
        talles: ["S", "M", "L"]
    },
    {
        nombre: "Campera de Cuero",
        precio: 85000,
        stock: 5,
        talles: ["M", "L"]
    }
];

// b
productosIndumentaria.forEach((producto) => {
    if (producto.stock < 5) {
        console.log("Stock bajo:", producto);
    }
});

// c
const productosDescuento = productosIndumentaria.map((producto) => {
    return {
        ...producto, // Spread operator: para copiar todas las propiedades del objeto original
        precio: producto.precio * 0.90 
    };
});

console.log("Productos con descuento:", productosDescuento);

//d
const productosStockAlto = productosIndumentaria.filter((producto) => {
    return producto.stock > 10;
});

console.log("Productos con stock mayor a 10:", productosStockAlto);