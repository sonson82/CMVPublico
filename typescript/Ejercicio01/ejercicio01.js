//Variables
var num01;
var num02;
var num03;
var numArray = [];
var datos = {
    dt1: 3,
    dt2: 5,
    dt3: 7
};
var nombre = {
    nombre: "Sònia",
    apellido: "Pujol"
};
var datosTotales = {
    dt1: 11,
    dt2: 10,
    dt3: 1982,
    dts1: "-",
    dts2: "-",
    dts3: "Fecha nacimiento: "
};
var Animal = {
    nombre: "Eki",
    raza: "Pastor Alemán",
    peso: 35
};
//funciones
var getAndShowNumbers = function () {
    num01 = parseInt(document.getElementById("num01").value);
    numArray.push(num01);
    num02 = parseInt(document.getElementById("num02").value);
    numArray.push(num02);
    num03 = parseInt(document.getElementById("num03").value);
    numArray.push(num03);
    alert("Estos son los n\u00FAmeros que has indicado: " + numArray);
};
var unicaResta = function () {
    var resta = (datos.dt2 * 4) - (datos.dt1 + datos.dt3);
    alert("(" + datos.dt2 + " x 4) - (" + datos.dt1 + " + " + datos.dt3 + ") = " + resta);
};
var unicaMultiplicacion = function () {
    var multiplicacion = (datos.dt2 - datos.dt1) * datos.dt2;
    alert("(" + datos.dt2 + " - " + datos.dt1 + ") x " + datos.dt2 + " = " + multiplicacion);
};
var nombreApellido = function () {
    alert(nombre.nombre + " " + nombre.apellido);
};
var apellidoNombre = function () {
    alert(nombre.apellido + ", " + nombre.nombre);
};
var fechaNacimiento = function () {
    alert(datosTotales.dts3 + ":  " + datosTotales.dt1 + " " + datosTotales.dts1 + datosTotales.dt2 + " " + datosTotales.dts2 + datosTotales.dt3);
};
var showAnimal = function () {
    alert(Animal.nombre + " es un " + Animal.raza + " de " + Animal.peso + " kg.");
};
