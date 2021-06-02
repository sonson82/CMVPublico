var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    /*No serían necesarias:

    //Variables
    private num1:number;
    private num2:number;
    private num3:number;

    //Constructor
    constructor(num1?:number, num2?:number, num3?:number) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
    }
    */
    //Métodos
    Matematica.prototype.mayor = function (num01, num02, num03) {
        if ((num01 > num02) && (num01 > num03)) {
            return num01;
        }
        else {
            return (num02 >= num03) ? num02 : num03;
        }
    };
    Matematica.prototype.sumar = function () {
        var valores = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            valores[_i] = arguments[_i];
        }
        var total = 0;
        for (var i = 0; i < valores.length; i++) {
            total += valores[i];
        }
        return total;
    };
    Matematica.multiplicar = function () {
        var valores = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            valores[_i] = arguments[_i];
        }
        var producto = 1;
        for (var i = 0; i < valores.length; i++) {
            producto *= valores[i];
        }
        return producto;
    };
    Matematica.aleatorio = function (inicio, fin) {
        return Math.floor((Math.random() * (fin + 1 - inicio)) + inicio);
    };
    return Matematica;
}());
function calcular(modo) {
    var resultDiv = document.getElementById("results");
    var resultado = "";
    var num01 = parseInt(document.getElementById("num01").value);
    var num02 = parseInt(document.getElementById("num02").value);
    var num03 = parseInt(document.getElementById("num03").value);
    var matematica = new Matematica();
    switch (modo) {
        case 1:
            resultado += "El número mayor de los tres que has indicado es: " + matematica.mayor(num01, num02, num03);
            break;
        case 2:
            resultado += "La suma de los números que has indicado es: " + matematica.sumar(num01, num02, num03);
            break;
        case 3:
            var numeroVeces = Matematica.aleatorio(10, 20);
            resultado += "Han salido" + numeroVeces + " multiplicaciones aleatorias: <br><br>";
            for (var i = 0; i <= numeroVeces; i++) {
                var numeroAleatorio = Matematica.aleatorio(2, 9);
                var res = Matematica.multiplicar(num01, num02, num03, numeroAleatorio);
                resultado += num01 + " x " + num02 + " x " + num03 + " x " + numeroAleatorio + " = " + res + "<br>";
            }
            break;
    }
    resultDiv.innerHTML = resultado;
}
/*

function calcularM(){

    let resultDiv = (<HTMLInputElement>document.getElementById("results"));
    let resultado:string = "El número mayor de los tres que has indicado es: ";
   
    let num01 = parseInt((<HTMLInputElement>document.getElementById("num01")).value);
    let num02 = parseInt((<HTMLInputElement>document.getElementById("num02")).value);
    let num03 = parseInt((<HTMLInputElement>document.getElementById("num03")).value);

    const matematica = new Matematica();
    resultado += matematica.mayor(num01, num02, num03);

    resultDiv.innerHTML = resultado;
}



function calcularS(){

    let resultDiv = (<HTMLInputElement>document.getElementById("results"));
    let resultado:string = "El número mayor de los tres que has indicado es: ";
   
    let num01 = parseInt((<HTMLInputElement>document.getElementById("num01")).value);
    let num02 = parseInt((<HTMLInputElement>document.getElementById("num02")).value);
    let num03 = parseInt((<HTMLInputElement>document.getElementById("num03")).value);

    const matematica = new Matematica();
    resultado += matematica.sumar(num01, num02, num03);

    resultDiv.innerHTML = resultado;
}



function calcularA() {

    let resultDiv = (<HTMLInputElement>document.getElementById("results"));
    let resultado:string = " ";
   
    let num01 = parseInt((<HTMLInputElement>document.getElementById("num01")).value);
    let num02 = parseInt((<HTMLInputElement>document.getElementById("num02")).value);
    let num03 = parseInt((<HTMLInputElement>document.getElementById("num03")).value);
  
    let numeroVeces = Matematica.aleatorio(10,20);

    var numbers:number[]= [];

    for(var i=0; i<=numeroVeces; i++){
        let numeroAleatorio = Matematica.aleatorio(2,9);
        let res = Matematica.multiplicar(num01,num02,num03,numeroAleatorio)
        resultado += num01 + " x " + num02 + " x " + num03 + " x " + numeroAleatorio  + " = " + res + "<br>";
    }

    resultDiv.innerHTML = resultado;
}
*/ 
