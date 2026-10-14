//Estructuras de control: CONDICIONALES

//a
let edad = 29

if(edad >= 18)
{
    console.log('Es mayor de edad')
}
else 
{
    console.log('Es menor de edad')
}

//b
let numero = 29

if(numero%2 ==0)
{
    console.log('El numero es par')
}
else 
{
    console.log('El numero es impar')
}

//c
let nota = 3

if(nota > 7)
{
    console.log('Excelente')
}
else if (nota >= 4 && nota < 7)
{
    console.log('Aprobado')
}
else
{
    console.log('Reprobado')
}

//Extructuras de control: BUCLES

//a
for(let i=1; i < 11; i++)
{
    console.log(i)
}

//b
const numeros = [10,9,8,7,6,5,4,3,2,1]
for(let i=0; i < numeros.length; i++)
{
    console.log(numeros[i])
}

//c
let variable = 3
for(let i=0; i < 20; i++)
{
    if(variable%2 == 0)
    {
        console.log('Es par')
    }

    else
    {
        console.log('Es impar')
    }
}

//d
let variable2 = 3
for(let i=0; i < 20; i++)
{
    if(variable%2 == 0)
    {
        console.log( 'El numero ' + variable2 + ' es par')
    }

    else
    {
        console.log('El numero ' + variable2 + ' es impar')
    }
}