var titulo = document.querySelector(".titulo");
titulo.textContent = "Apareida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var imc = peso / (altura * altura);

    var tdImc = paciente.querySelector(".info-imc");
    
    var pesovalido = validaPeso(peso);
    var alturavalida = validaAltura(altura);

    if(!pesovalido){
        console.log("Peso inválido");
        pesovalido = false;
        tdImc.textContent = "Peso inválido.";
        paciente.classList.add("paciente-invalido");
    }

    if(!alturavalida){
        console.log("Altura inválida");
        alturavalida = false;
        tdImc.textContent = "Altura inválida.";
        paciente.classList.add("paciente-invalido");
    }

    if(pesovalido && alturavalida){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }

}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

//exemplo funções
titulo.addEventListener("click", function(){
    console.log("Olha, função anonima.");
});
//titulo.addEventListener("click", mostraMensagem);
function mostraMensagem(){
    console.log("Olá, eu fui clicado!");
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura > 0 && altura <= 3.00){
        return true;
    }else{
        return false;
    }
}

