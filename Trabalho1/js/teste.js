document.querySelector("[wm-flappy]").style.display = "none"

function novoElemento(tagName, className) {
    const elemento = document.createElement(tagName)
    elemento.className = className
    return elemento
}

function Barreira(reversa = false) {
    this.elemento = novoElemento('div', 'barreira')
    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`

}

function ParDeBarreiras(altura, abertura, popsicaoNaTela) {
    this.elemento = novoElemento('div', 'par-de-barreiras')
    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)


    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }
    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX =  popsicaoNaTela => this.elemento.style.left = `${popsicaoNaTela}px`
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(popsicaoNaTela)
} 


function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
    this.pares = [
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3)
    ]

    const deslocamento = configuracoesJogo.velocidadeJogo
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento)

            if (par.getX() < -par.getLargura()) {
                par.setX(par.getX() + espaco * this.pares.length)
                par.sortearAbertura()
            }
            const meio = largura / 2
            const cruzouMeio = par.getX() + deslocamento >= meio
                && par.getX() < meio
            if (cruzouMeio) {
                notificarPonto()
            }
        })
    }
}


function Passaro(alturaJogo) {
    let voando = false

    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = configuracoes.src

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`

    window.onkeydown = e => voando = true
    window.onkeyup = e => voando = false

    this.animar = () => {
        const novoY = this.getY() + (voando ? configuracoes.velocidadeSubir : configuracoes.velocidadeDescer)
        const alturaMaxima = alturaJogo - this.elemento.clientWidth

        if (novoY <= 0) {
            this.setY(0)
        } else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima)
        } else {
            this.setY(novoY)
        }
    }
    this.setY(alturaJogo / 2)
}

 function Progresso() {

    this.elemento = novoElemento('span', 'progresso')
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos
    }
    this.atualizarPontos(0)
}

 function estaoSobrepostos(elementoA, elementoB) {

    const a = elementoA.getBoundingClientRect()
    const b = elementoB.getBoundingClientRect()
    const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left
    const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top

    return horizontal && vertical
}

function colidiu(passaro, barreiras) {
    let colidiu = false

    barreiras.pares.forEach(parDeBarreiras => {
        if (!colidiu) {
            const superior = parDeBarreiras.superior.elemento
            const inferior = parDeBarreiras.inferior.elemento
            colidiu = estaoSobrepostos(passaro.elemento, superior)
                || estaoSobrepostos(passaro.elemento, inferior)
        }
    })

    return colidiu

}

 function FlappyBird() {
    let pontos = 0
    const areaDoJogo = document.querySelector('[wm-flappy]')
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth

    const progresso = new Progresso()
    const barreiras = new Barreiras(altura, largura, configuracoes.aberturaCanos, configuracoes.distanciaCanos,
        () => progresso.atualizarPontos(pontos+=configuracoes.pontuacao))

    const passaro = new Passaro(altura)

    areaDoJogo.appendChild(progresso.elemento)
    areaDoJogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

    this.start = () => {
        const temporizador = setInterval(() => {
            barreiras.animar()
            passaro.animar()

              if(colidiu(passaro,barreiras)&&configuracoes.tipoJogo){
                 alert("O Jogador "+ configuracoesJogo.nome +" fez "+pontos+ " pontos")
                 clearInterval(temporizador) 
                 document.location.reload(true)
             } 
        }, 20)
    }
}

const configuracoesJogo = {
    nome: "",
    velocidadeJogo: 2,
    personagens: "personagem1",
    cenarioJogoValue:"diurno",
    aberturaCanosValue: "facil",
    velocidadePersonagemValue: "baixa",
    pontuacaoValue: 1,
    tipoJogoValue: "treino"
}

function cenarioJogoFunction(){
    if(configuracoesJogo.cenarioJogoValue=="noturno"){
        document.querySelector("[wm-flappy]").style.backgroundColor = 'MidnightBlue'
        document.querySelector("[wm-flappy]").style.border = 'Indigo'        
    }
}

const configuracoes = {
    aberturaCanos: 200,
    distanciaCanos: 400,
    src:'img/passaro.png',
    velocidadeSubir: 8,
    velocidadeDescer:-5,
    pontuacao:1,
    tipoJogo: true
}

function aberturaCanosFunction () {
    if(configuracoesJogo.aberturaCanosValue =="facil"){
        configuracoes.aberturaCanos = 300
    }else if(configuracoesJogo.aberturaCanosValue =="medio"){
        configuracoes.aberturaCanos = 200
    }else if(configuracoesJogo.aberturaCanosValue =="dificil"){
        configuracoes.aberturaCanos = 140
    }
    
}

function distanciaCanosFunction () {
    if(configuracoesJogo.distanciaCanosValue =="facil"){
        configuracoes.distanciaCanos = 500
    }else if(configuracoesJogo.distanciaCanosValue =="medio"){
        configuracoes.distanciaCanos = 400
    }else if(configuracoesJogo.distanciaCanosValue =="dificil"){
        configuracoes.distanciaCanos = 200
    }
    
}

function velocidadePersonagemFunction () {
    if(configuracoesJogo.velocidadePersonagemValue =="baixa"){
        configuracoes.velocidadeSubir = 3
        configuracoes.velocidadeDescer = -2
    }else if(configuracoesJogo.velocidadePersonagemValue =="media"){
        configuracoes.velocidadeSubir = 8
        configuracoes.velocidadeDescer = -5
    }else if(configuracoesJogo.velocidadePersonagemValue =="rapida"){
        configuracoes.velocidadeSubir = 11
        configuracoes.velocidadeDescer = -9
    }
    
}

function personagensFunction () {
    if(configuracoesJogo.personagens =="flappy"){
        configuracoes.src = 'img/passaro.png'
    }else if(configuracoesJogo.personagens =="miranha"){
        configuracoes.src = 'img/miranha.png'
    }else if(configuracoesJogo.personagens =="fogo"){
        configuracoes.src = 'img/fogo.jpg'
    }
    
}

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

btn.onclick = function (event) {

    event.preventDefault()
    configuracoesJogo.nome = document.querySelector("#nome").value
    configuracoesJogo.velocidadeJogo = Number(document.querySelector("#velocidadeJogo").value)
    configuracoesJogo.personagens = document.querySelector("#personagens").value
    configuracoesJogo.cenarioJogoValue = selecionaValue(document.querySelectorAll('input[name="cenarioJogo"]'))
    configuracoesJogo.aberturaCanosValue = selecionaValue(document.querySelectorAll('input[name="aberturaCanos"]'))
    configuracoesJogo.distanciaCanosValue = selecionaValue(document.querySelectorAll('input[name="distacniaCanos"]')) 
    configuracoesJogo.velocidadePersonagemValue = selecionaValue(document.querySelectorAll('input[name="velocidadePersonagem"]'))  
    configuracoesJogo.pontuacaoValue = Number(selecionaValue(document.querySelectorAll('input[name="pontuacao"]')))
    configuracoesJogo.tipoJogoValue = selecionaValue(document.querySelectorAll('input[name="tipoJogo"]'))
    
    cenarioJogoFunction()
    aberturaCanosFunction()
    distanciaCanosFunction()
    personagensFunction()
    velocidadePersonagemFunction()
    
    if(!isNaN(configuracoesJogo.pontuacaoValue)){
        configuracoes.pontuacao = configuracoesJogo.pontuacaoValue
    }

    if(configuracoesJogo.velocidadeJogo>10 || configuracoesJogo.velocidadeJogo < 1 || isNaN(configuracoesJogo.velocidadeJogo)){
        alert("O jogo não pode ter essa velocidade. Redefina as configurações")
        document.location.reload(true)
    }
    
    if(configuracoesJogo.tipoJogoValue == "treino"){
        configuracoes.tipoJogo = false
    }

    //alert(configuracoesJogo.pontuacaoValue)
    document.querySelector("#insert_form").style.display = "none"
    document.querySelector("[wm-flappy]").style.display = "block"

    new FlappyBird().start()
    
};

