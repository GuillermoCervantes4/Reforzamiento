'use strict'

//Ejercicio1
console.log('Guillermo Cervantes')

//Ejercicio2
var edad = prompt('Ejercicio2, ingrese su edad:', 0);


if (edad >= 18) {
    console.log('Eres mayor de edad')
}
else {
    console.log('Eres menor de edad')
}

//Ejercicio3
var n = prompt('Ejercicio3, ingrese su numero:', 0);


var cuadrado = n*n;

console.log('El cuadrado de ' + n + ' es: ' + cuadrado);

//Ejercicio4
var num1 = prompt('Ejercicio4, ingrese el primer numero:', 0);
var num2 = prompt('Ejercicio4, ingrese el segundo numero:', 0);

var suma = num1 + num2;

console.log('La suma de ' + num1 + ' y ' + num2 + ' es: ' + suma);

//Ejercicio5
var nA = prompt('Ejercicio5, ingrese un numero:', 0);

if (nA%2 == 0) {
    console.log('El numero ' + nA + ' es par')
}
else {
    console.log('El numero ' + nA + ' es impar')
}

//Ejercicio6
let frutas = ['manzana', 'banana', 'naranja', 'uva', 'pera'];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

//Ejercicio7
let numerosAleatorios = [2,24,5,6,7,8,9,10,11,12];

for (let i = 0; i < numerosAleatorios.length; i++) {
    if (numerosAleatorios<10) {
        console.log('El numero ' + numerosAleatorios[i] + ' es menor a 10')        
    }
}

//Ejercicio8
let palabrita = prompt('Ejercicio8, ingrese una palabra:', 'palabra');
let cantidad = 0;
for (let i = 0; i < palabrita.length; i++) {
    if (palabrita[i] == 'a' || palabrita[i] == 'e' || palabrita[i] == 'i' || palabrita[i] == 'o' || palabrita[i] == 'u') {
        cantidad++;
    }
}
console.log('La cantidad de vocales en la palabra ' + palabrita + ' es: ' + cantidad);


//Ejercicio9
var celsius = prompt('Ejercicio9, ingrese la temperatura en grados Celsius:', 0);

var fahrenheit = (celsius * 9/5) + 32;

console.log('La temperatura en grados Fahrenheit es: ' + fahrenheit);

//Ejercicio10
let nume = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = -1; i < nume.length; i--) {
    console.log(nume[i]);
}

//Ejercicio11
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
}

console.log('Número aleatorio entre 1 y 100: ' + generarNumeroAleatorio(1, 100));

//Ejercicio12
var nam= prompt('Ejercicio12, ingrese un numero:', 0);

let esPrimo = true;

if (nam <= 1) {
    esPrimo = false;
} else {
    for (let i = 2; i < nam; i++) {
        if (nam % i === 0) {
            esPrimo = false;
            break;
        }
    }
}

if (esPrimo) {
    console.log('El número ' + nam + ' es primo');
} else {
    console.log('El número ' + nam + ' no es primo');
}

//Ejercicio13
let numeros = [3, 7, 12, 25, 30, 45, 50];
for (let i = 0; i < numeros.length; i++) {
    if (numeros%2 == 0) {
        console.log('El numero ' + numeros[i] + ' es par')
    }
}

//Ejercicio14


//Ejercicio15
let palabraas =['jaja', 'hola', 'mundo', 'javascript', 'programacion'];

//Ejercicio16
var nm = prompt('Ejercicio16, ingrese un numero:', 0);

let factorial = 1;
for (let i = 1; i <= nm; i++) {
    factorial *= i;
}
console.log('El factorial de ' + nm + ' es: ' + factorial);

//Ejercicio17
let palabrota = prompt('Ejercicio8, ingrese una palabra:', 'palabra');



//Ejercicio18
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sumaTotal = 0;
for (let i = 0; i < numbers.length; i++) {
    sumaTotal += numbers[i];
}
console.log('La suma total de los numeros del array es: ', sumaTotal);

//Ejercicio19
var n1 = prompt('Ejercicio19, ingrese un numero para su tabla de multiplicar:', 0);


for (let i = 1; i <= 10; i++) {
    let resultado = n1 * i;
    console.log(n1 + ' x ' + i + ' = ' + resultado);
}

//Ejercicio20
var persona1 = {
    nombre: 'Guillermo',
    edad: 25,
}

var persona2 = {
    nombre: 'Pepita',
    edad: 40,
}

if (persona1.edad > persona2.edad) {
    console.log('La persona mayor es: ' + persona1.nombre);
}
else{
    console.log('La persona mayor es: ' + persona2.nombre);
}