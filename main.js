const peliculas = ["Avengers","Martes 13", "Titanic", "Avatar", "Monster Inc"]
const descuentoJubilado = 0.15;
const descuentoMenor = 0.30;
const precios = [5000,6000,5500,6500,4000];

let total = 0;

let nombre = prompt("Ingrese su nombre:");
let edad = parseInt(prompt("Ingrese su edad:"));


function peliculasDisponibles(){
    console.log("Aca podes elegir que pelicula queres ver")
    for (let i = 0; i < peliculas.length; i++) {
    console.log(i + 1 + " - " + peliculas[i] + " $ " + precios[i]);
  }

}

peliculasDisponibles();

let opcion = parseInt(prompt("Elegí una película por número:"));
total = precios[opcion - 1];


if (edad < 18) {
  let descuento = total * descuentoMenor;
  total -= descuento;
  alert("Tenés 30% de descuento por ser menor de edad");
} else if (edad >= 60) {
  let descuento = total * descuentoJubilado;
  total -= descuento;
  alert("Tenés 15% de descuento por jubilado");
} else {
  alert("No tenés descuento disponible");
}
  
alert("Gracias " + nombre + ", el total a pagar es: $" + total);
console.log("Total final:", total);
alert("Que disfrutes la pelicula "+ nombre);