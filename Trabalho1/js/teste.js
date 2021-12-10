function selecionaValue(nameForm){
    let nameFormValue;
    for (const rb of nameForm) {
        if (rb.checked) {
            nameFormValue = rb.value;
            break;
        }
    }
    return nameFormValue
}


const btn = document.querySelector('#botao');

btn.onclick = function () {

    nome = document.querySelector("#nome").value
    velocidadeJogo = document.querySelector("#velocidadeJogo").value
    personagens = document.querySelector("#personagens").value

    const cenarioJogo = document.querySelectorAll('input[name="cenarioJogo"]');
    let cenarioJogoValue = selecionaValue(cenarioJogo)

    const aberturaCanos = document.querySelectorAll('input[name="aberturaCanos"]');
    let aberturaCanosValue = selecionaValue(aberturaCanos)

    const distanciaCanos = document.querySelectorAll('input[name="distacniaCanos"]');
    let distanciaCanosValue = selecionaValue(distanciaCanos)

    const velocidadePersonagem = document.querySelectorAll('input[name="velocidadePersonagem"]');
    let velocidadePersonagemValue = selecionaValue(velocidadePersonagem)

    const pontuacao = document.querySelectorAll('input[name="pontuacao"]');
    let pontuacaoValue = selecionaValue(pontuacao)

    const tipoJogo = document.querySelectorAll('input[name="tipoJogo"]');
    let tipoJogoValue = selecionaValue(tipoJogo)
    
   
    alert(nome)
};

 /*  
 nome = document.querySelector("#nome")
teste = document.querySelectorAll('input[name="inlineRadioOptions"]')
botao = document.querySelector("#botao") 
 
 botao.addEventListener("click", function(event) {
        event.preventDefault();
        
        var form = document.querySelector("#insert_form");
        
        var nome1= teste.value;
        
        var DeltaSp = document.createElement("p");
        //Definindo o pai do elemento criado.
        form.appendChild(DeltaSp);
        
        DeltaSp.textContent = nome1
        
        });*/

/*const valuesForm = {
    nome: '' ,
    velocidadeJogo = 1,
    personagens = 'personagem1',
    cenarioJogo = 'diurno',
    aberturaCanos = 'facil',
    distanciaCanos = 'facil',
    velocidadePersonagem = 'baixa',
    pontuacao = 100,
    tipoJogo = 'treino',
}*/