//Funciones de declaracion


//a
function saludar(a){
    console.log(a)
}


const resultadoA = saludar('Hola, bienvenidos')
console.log(resultadoA)


//b
function saludarPersona(nombre){
    console.log(nombre)
}


const nombre = 'Juan'
const resultadoB = saludar('Hola ' + nombre + ', bienvenido')
console.log(resultadoB)


//c
function esMayorDeEdad(edad){
    if (edad > 18){
        return true
    }
    else{
        return false
    }
}


const edad = 24
const resultadoC = esMayorDeEdad(edad)
console.log(resultadoC)


//Funciones de flecha


//a
const esMayorDeEdad2 = (edad2)=>{
    if (edad2 > 18){
        return true
    }
    else{
        return false
    }
}


const edad2 = 6
const resultadoEdad = esMayorDeEdad2(edad2)
console.log(resultadoEdad)


//b
const esMayor = (a,b)=>{
    if (a > b){
        console.log('El numero ' + a + ' es mayor a ' + b)
    }
    else if(a == b){
        console.log('El numero ' + a + ' es igual a ' + b)
    }
    else{
        console.log('El numero ' + a + ' es menor a ' + b)
    }
};
for (let i = 1; i<=10; i++){
    esMayor(i,5);
}


//Funciones callback

//a
// const operacionA = (num1, num2, callback) => {
//     callback(num1, num2);
// };

// const suma = (f, g) => {
//     const resultado = f + g;
//     console.log(`El resultado de la suma es ${resultado}`);
// };

// const resta = (f, g) => {
//     const resultado = f - g;
//     console.log(`El resultado de la resta es ${resultado}`);
// };

// operacionA(10, 5, suma); 
// operacionA(10, 5, resta); 

//b
const operacion = (d, e, callback)=>{
    if (typeof d === "number" && typeof e === "number"){
        callback (d,e);
    }
    else{
        console.log("Debe ingresar solo numeros");
    }
};


function suma (f,g){
    console.log(`El resultado de la suma es ${f+ g}`)
}


function resta(f,g){
    console.log(`El resultado de la resta es ${f-g}`)
}

operacion(10,5, suma)
operacion(10,5, resta)
operacion("Hola", 5, suma)
