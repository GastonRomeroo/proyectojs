
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
};

alert("Vamos a realizar el cobro por ARS $10.000,00");

alert("Ingrese la cantidad de cuotas que desea.\n CUOTAS 1= INTERES 0%.\n CUOTAS 2= INTERES 20%.\n CUOTAS 3= INTERES 50%.");

let numerox = parseInt(prompt(" Ingrese la cantidad de cuota en numero"));
let precio = 10000;
let cuota1 = 1;
let cuota2 = 1.2;
let cuota3 = 1.5;

      function multiplicar(precio,numerox){
  
        var resultado= precio * numerox;
        return(" Usted abonara $" + resultado );
      }


      if(numerox == "1"){
      alert(multiplicar(precio,cuota1)+ "en 1 pago.");
      }
      if(numerox == "2"){
      alert(multiplicar(precio,cuota2)+" en 2 cuotas.");
      }
      if( numerox == "3"){
      alert(multiplicar(precio,cuota3)+" en 3 cuotas.");
      }


alert("MUCHAS GRACIAS POR SU COMPRA LO ESPERAMOS NUEVAMENTE!");