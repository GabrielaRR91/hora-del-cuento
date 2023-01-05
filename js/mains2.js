const nombre = prompt( "Ingrese un nombre");
const apellido = prompt( "Ingrese un apellido");
console.log("El nombre es: " + nombre)
console.log(" El apellido es: " + apellido)

alert("Bienvenido/a: " + nombre + " " + apellido);

/** pruba */

const añoActual = 2022;
const añoNacimiento = parseInt(prompt ("Si esta interesado en nuestros cuentos puede adquirirlos por esta misma pagina, para ello por favor ingrese su año de nacimiento"));

const edad = parseInt(añoActual) - parseInt(añoNacimiento);

console.log("Su edad es " + " " + edad);
if (edad >= 18) {
        
        alert("Usted tiene " + " " + edad + "puede continuar con la compra ");
    } else if (edad >= 14) {
        alert("Usted es menor de edad, no puede continuar con la compra");
    } else {
        alert("")
    }
    

let cuento = "";

while  (cuento != "salir") {

    let cuento = prompt("Ingrese el cuento deseado caperucita, cerditos, cigarraHormiga");

    while(cuento !== "caperucita" && cuento !== "cerditos" && cuento !== "cigarraHormiga") {

        cuento = prompt("Ingrese CORRECTAMENTE el nombre del cuento, caperucita, los tres cerditos, la cigarra y la hormiga,");
    }

    const mensaje = prompt("Los valores de los libros son caperucita $100, los tres cerditos $120, la cigarra y la hormiga $150, para continuar pulse aceptar");
    let cantidad = parseInt(prompt("Ingrese la cantidad deseada"));
    const caperucita = 100
    const cerditos = 120
    const cigarraHormiga = 150
    
        const resultadoMultiplicacionC = cantidad * caperucita;
        console.log("El valor a abonar por ejemplar/es de caperucita es de " + resultadoMultiplicacionC);
        alert("El valor a abonar por el/los ejemplar/es del cuento de caperucita es de " + resultadoMultiplicacionC);
    
        const resultadoMultiplicacionCerditos = cantidad * cerditos;
        console.log("El valor a abonar por ejemplar/es de los tres cerditos es de " + resultadoMultiplicacionCerditos);
        alert("El valor a abonar por el/los ejemplar/es del cuento los tres cerditos es de " + resultadoMultiplicacionCerditos);
    
        const resultadoMultiplicacionCigarra = cantidad * cigarraHormiga;
        console.log("El valor a abonar por ejemplar/es de la cigarra y la hormiga es de " + resultadoMultiplicacionCigarra);
        alert("El valor a abonar por el/los ejemplar/es del cuento la cigarra y la hormiga es de " + resultadoMultiplicacionCigarra);
    
    const mediosPago = prompt("A continuacion ingrese cual es su medio de pago, visa, mastercard o mercado pago.");
switch(mediosPago) {
    case "visa":
    mediosPagoVisa = alert("Con este medio puede abonar hasta en 3 cuotas sin interes");
    break;

    case "mastercard":
        mediosPagoMaster = alert("Con este medio de pago puede abonar hasta en 12 cuotas sin interes")
        break;

    case "mercado pago":
            mediosPagoMP = alert("Con este medio de pago las cuotas son las establecidas en la aplicacion segun promociones de la misma");
            break;

    default : 
        mediosPago = prompt("No recibimos ese medio de pago, por favor ingrese visa, mastercard o mercado pago.");
} 
const telefono = parseInt(prompt("Ingrese su telefono"));
console.log("Uno de nuestros operadores se comunicara con usted para finalizar la compra, que tenga un buen dia y hasta pronto!");
    alert("Uno de nuestros operadores se comunicara con usted para finalizar la compra, que tenga un buen dia y hasta pronto!");
}