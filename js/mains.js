function obtenerAnoDeNacimiento (){
    const anoDeNacimiento = parseInt(prompt("Ingrese su año de nacimiento"));
    console.log("Su año de nacimiento es: " + " " + anoDeNacimiento);
    obtenerEdad(anoDeNacimiento);
}
function obtenerEdad(anoDeNacimiento){
    const edad = 2023 - anoDeNacimiento;
    console.log("Su edad es " +" " + edad);
    alert("Su edad es" +" " + edad);
}

obtenerAnoDeNacimiento();
obtenerEdad();

const nombre = prompt("Inserte su nombre")
const apellido = prompt("Inserte su apellido")

console.log("Bienvenido " + nombre + " " + apellido + " a este magico mundo del cuento");
alert("Bienvenido " + nombre + " " + apellido + " a este mundo magico del cuento, estas listo para empezar?");

const respuesta = prompt("si o no");
if (respuesta === "si" || respuesta === "SI" || respuesta === "Si") 
{
    for(let i=0; i<5; i++){
    
        const ticket = prompt("Hoy hay una promo especial, ingresa el nombre de un amigo al que te gustaria regalarle uno de nuestros cuentos, tienes 5 ticket");
        
        const ticketedad = parseInt(prompt("Ingresa la edad de tu amigo"));
        

    console.log("La persona que participa " + " " + i + "se llama " + ticket + " y su edad es " + ticketedad); 
    
    alert("El participante numero " + " " + i + "se llama " + ticket + "y su edad es " + ticketedad);

    } 
}else{
    console.log("Adios, y gracias por acceder a la pagina.");
    alert("Gracias por acceder a la pagina, que tengas un buen dia!");
}