//Variables
let num01:number;
let num02:number;
let num03:number;

let numArray:number[]=[];

type Datos = {
    dt1:number,
    dt2:number,
    dt3:number
}

let datos: Datos =
{
    dt1: 3,
    dt2: 5,
    dt3: 7
}

type DatosStr = {
    dts1:string,
    dts2:string,
    dts3:string
}

interface Nombres{
    nombre:String,
    apellido:String
}

let nombre: Nombres = {
    nombre:"Sònia",
    apellido:"Pujol"
}

type DatosTotales = Datos & DatosStr;

let datosTotales: DatosTotales = {
    dt1: 11,
    dt2: 10,
    dt3: 1982,
    dts1: "-",
    dts2: "-",
    dts3: "Fecha nacimiento: "
}

let Animal: {nombre:string, raza:string, peso:number} = {
    nombre: "Eki",
    raza: "Pastor Alemán",
    peso: 35
}


//funciones
let getAndShowNumbers = () => {

    num01 = parseInt((<HTMLInputElement>document.getElementById("num01")).value); 
    numArray.push(num01);
    num02 = parseInt((<HTMLInputElement>document.getElementById("num02")).value); 
    numArray.push(num02);
    num03 = parseInt((<HTMLInputElement>document.getElementById("num03")).value); 
    numArray.push(num03);

    alert(`Estos son los números que has indicado: ${numArray}`); 
}

let unicaResta = () => {
    let resta = (datos.dt2*4) - (datos.dt1 + datos.dt3);
    alert(`(${datos.dt2} x 4) - (${datos.dt1} + ${datos.dt3}) = ${resta}`); 
}

let unicaMultiplicacion = () => {
    let multiplicacion = (datos.dt2 - datos.dt1)*datos.dt2;
    alert(`(${datos.dt2} - ${datos.dt1}) x ${datos.dt2} = ${multiplicacion}`); 
}

let nombreApellido = () => {
    alert(`${nombre.nombre} ${nombre.apellido}`); 
}

let apellidoNombre = () => {
    alert(`${nombre.apellido}, ${nombre.nombre}`); 
}

let fechaNacimiento = () => {
    alert(`${datosTotales.dts3}:  ${datosTotales.dt1} ${datosTotales.dts1}${datosTotales.dt2} ${datosTotales.dts2}${datosTotales.dt3}`); 
}

let showAnimal = () => {
    alert(`${Animal.nombre} es un ${Animal.raza} de ${Animal.peso} kg.`); 
}