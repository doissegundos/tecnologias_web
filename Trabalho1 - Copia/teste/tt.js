var si = document.querySelector("#distancia-inicial");
var sf = document.querySelector("#distancia-final");

var botaodeltaS = document.querySelector("#calcule-deltaS");

botaodeltaS.addEventListener("click", function(event) {
event.preventDefault();

var form = document.querySelector("#Dados-deltaS");

var distanciaInicial = si.value;
var distanciaFinal = sf.value;

var DeltaS = distanciaFinal - distanciaInicial;

var DeltaSp = document.createElement("p");
//Definindo o pai do elemento criado.
form.appendChild(DeltaSp);

DeltaSp.textContent = DeltaS;

});