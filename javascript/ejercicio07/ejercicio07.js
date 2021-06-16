function funcionBasica01 (){
    let num1 = 0;
    let num2 = 0;

    num1 = num1 + 1;
    num2 = num2 + 2;
            
    alert (`El primer numero ahora es ${num1}`);
    alert (`El segundo numero ahora es ${num2}`);
}

/* ------------------------------------------------- */

function funcionBasica02 (){
    let dato, num;

    dato = window.prompt("Introduce un número:" , "");
    num = parseInt(dato);

    num = num*2;

    document.getElementById("content").innerHTML=(`<h3>FUNCIÓN BÁSICA 02</h3><p>El doble es ${num}</p>`);
}

/* ------------------------------------------------- */

function ejercicioC5 (){
    
    let div = document.getElementById("salidaJS");
    let  num01, num02, dato, mensaje;

    alert (`Necesitaremos que ingreses 2 numeros del 1 al 10`);

    do{
        dato = window.prompt("Introduce el primer número:" , "0");
        num01 = parseInt(dato);

        if((num01>10) || (num01<1)){
            alert (`¡Número incorrecto!`);
        }
    
    } while ((num01>10) || (num01<1))

    do{
        dato = window.prompt("Introduce el segundo número:" , "0");
        num02 = parseInt(dato);
        
        if((num02>10) || (num02<1)){
            alert (`¡Número incorrecto!`);
        }
    
    } while ((num02>10) || (num02<1))
    

    if(num01 == num02){
        mensaje = (`Los dos números són iguales: ${num01} = ${num02}`);

    } else if (num01 > num02){
        mensaje = (`El primer número es mayor que el segundo: ${num01} > ${num02}`);

    } else {
        mensaje = (`El primer número es menor que el segundo: ${num01} < ${num02}`);
    }

    div.innerHTML= mensaje;

}

/* ------------------------------------------------- */


function ejercicioC13 (){

    let div = document.getElementById("salidaJS");
    let  dato, mensaje;
    let numbers = [];
    numbers.length = 2;

    alert (`Necesitaremos que ingreses 2 numeros del 1 al 10`);

    for  (let i = 0; i < numbers.length; i++ ){
       num = 0;

       do{
        dato = window.prompt("Introduce el segundo número:" , "0");
        num = parseInt(dato);
        
        if(isNaN(num)){
            alert (`¡No has introducido un número!`);
            num = 0;
            
        } else if((num>10) || (num<1)){
            alert (`¡Número incorrecto!`);
        }
        
        } while ((num>10) || (num<1))

        numbers[i] = num;
    }

    if(numbers[0] == numbers[1]){
        mensaje = (`Los dos números són iguales: ${numbers[0]} = ${numbers[1]}`);

    } else {
        mensaje = (numbers[0] > numbers[1]) ? `El primer número es mayor que el segundo: ${numbers[0]} > ${numbers[1]}` : `El primer número es menor que el segundo: ${numbers[0]} < ${numbers[1]}`;
    } 

    div.innerHTML= mensaje; 
}



/* ------------------------------------------------- */

function domUrl(){

    let div = document.getElementById("salidaJS");
    let location = window.location.href;
    let w = window.innerWidth;
    let h = window.innerHeight;
    let sH = screen.availHeight;
    let sW = screen.availWidth;

    div.innerHTML = `<p> La URL de la pagina actual es: ${location}.</p>
                     <p> El alto del documento es: ${h}.</p>
                     <p> El ancho del documento es: ${w}.</p>
                     <p> El alto de la pantalla es: ${sH}.</p>
                     <p> El ancho de la pantalla es: ${sW}.</p>`;

}

/* ------------------------------------------------- */