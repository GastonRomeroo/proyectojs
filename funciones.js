//TP ENTREGABLE

alert("Bienvenidos a la simulación de cobro por tarjeta de crédito, rogamos por favor no ingresar datos personales reales.");
alert("A continuación, vamos a solicitar algunos datos, por favor completar para continuar.");

let nombre = prompt("ingrese nombre del titular");
let apellido = prompt("ingrese apellido del titular");
let nroTarj = parseInt(prompt("ingrese los 16 numeros de la tarjeta"));
let vencimiento = prompt("ingrese fehca de vencimineto mm/yy");
let ccv = parseInt(prompt("ingrese su codigo de seguridad"));

while (nombre == ""|| apellido == "" || isNaN(nroTarj) || isNaN(vencimiento) || isNaN(ccv)) {
  alert("algunos datos no fueron cargados correctamente");
  nombre = prompt("ingrese nombre del titular");
  apellido = prompt("ingrese apellido del titular");
  nroTarj = parseInt(prompt("ingrese los 16 numeros de la tarjeta"));
  vencimiento = parseInt(prompt("ingrese fehca de vencimiento mm/yy"));
  ccv = parseInt(prompt("ingrese su codigo de seguridad"));
}

alert("Vamos a realizar el cobro por ARS $10.000,00");
alert("Ingrese la cantidad de cuotas que desea.\n CUOTAS 1= INTERES 0%.\n CUOTAS 3= INTERES 2%.\n CUOTAS 6= INTERES 5%.");
let numero=parseInt(prompt("Ingrese cantidad de cuotas"));
let precio = 10000;

while(numero){
   switch(numero) {
     case "1":
      alert("$" + precio + " Este es su monto a pagar");
         break;
     case "3":
      alert("$" + precio * 1.02 + " Este es su monto a pagar");
         break;
     case "6":
      alert("$" + precio * 1.05 + " Este es su monto a pagar");
         break;
     default:
       alert("ERROR NUMERO DE CUOTA INVALIDA");
       numero=parseInt(prompt("Ingrese cantidad de cuotas"));
         break;
   }
 numero = prompt("Ingrese un numero");
}
