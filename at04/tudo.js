/*NOME: STEFANE ADNA DOS SANTOS
MATRICULA: 403249
*/


/* 
1- Construa uma estrutura aluno com nome, número de matrícula e curso. Leia do
usuário informação de 5 alunos, armazene em vetor dessa estrutura e imprima os
dados na tela.
*/

class Aluno{
    constructor(nome, matricula,curso){
        this.nome = nome
        this.matricula = matricula
        this.curso = curso
        this.dadosAluno = [this.nome,this.matricula,this.curso]
    }

    exibeAlunos(){
        console.log(this.dadosAluno)
               
    }
}

cond = 0
while(cond<5){
    console.log("Insira os dados dos alunos")
    
    nome = prompt('Qual o nome desse aluno? ')
    matricula = prompt('Qual o matricula desse aluno? ')
    curso = prompt('Qual o curso desse aluno? ')

    aluno = new Aluno(nome,matricula,curso)
    aluno.exibeAlunos()
    cond++
}

/*2) Crie uma estrutura representando os alunos de um determinado curso. A estrutura
deve conter a matrícula do aluno, nome, nota da primeira prova, nota da segunda
prova e nota da terceira prova.
*/
class Aluno{
    constructor(){
        this.nome = []
        this.matricula = []
        this.curso = []
        this.nota1 = []
        this.nota2 = []
        this.nota3 = []
        this.dadosAluno = []
        this.media = []
    }
    inserirAluno(nome, matricula,curso,nota1,nota2,nota3){
        this.nome.push(nome)
        this.matricula.push(matricula)
        this.curso.push(curso)
        this.nota1.push(nota1)
        this.nota2.push(nota2)
        this.nota3.push(nota3)
        this.media.push((nota1+nota2+nota3)/3)
    }

    exibeAlunos(){
        for(let i=0;i<this.nome.length;i++){
            console.log("Aluno: "+this.nome[i]+' matricula: '+this.matricula[i]+' curso: '+ this.curso[i] + ' media: ' + this.media[i])
        }
        
    }
    maiorNota(){
        var max = this.nota1.reduce(function(a, b) {
            return Math.max(a, b);
          });
        console.log("O aluno com maior nota é: " + this.nome[this.nota1.indexOf(max)])
    }
    maiorMedia(){
        var max = this.media.reduce(function(a, b) {
            return Math.max(a, b);
          });
        console.log("O aluno com maior media é: " + this.nome[this.media.indexOf(max)])
    }
    menorMedia(){
        var min = this.media.reduce(function(a, b) {
            return Math.min(a, b);
          });
        console.log("O aluno com menor media é: " + this.nome[this.media.indexOf(min)])
    }
    situacao(){
        for(let i=0;i<this.nome.length;i++){
            if(this.media[i]<6){
                console.log("O aluno "+this.nome[i]+' com média: '+this.media[i]+' foi reprovado')
            }else{
                console.log("O aluno "+this.nome[i]+' com média: '+this.media[i]+' foi aprovado')
            }
        }
    }
}

cond = 0
aluno = new Aluno()
while(cond<5){
    console.log("Insira os dados dos alunos")
    
    nome = prompt('Qual o nome desse aluno? ')
    matricula = prompt('Qual o matricula desse aluno? ')
    curso = prompt('Qual o curso desse aluno? ')
    nota1 = parseFloat(prompt('Qual a nota1? '))
    nota2 = parseFloat(prompt('Qual a nota2? '))
    nota3 = parseFloat(prompt('Qual a nota3? '))

    aluno.inserirAluno(nome, matricula,curso,nota1,nota2,nota3)
    cond++
}

aluno.exibeAlunos()
aluno.maiorNota()
aluno.maiorMedia()
aluno.menorMedia()
aluno.situacao()

/*3) Faça um programa que leia os dados de 10 alunos (Nome, matricula, Media Final),
armazenando em um vetor. Uma vez lidos os dados, divida estes dados em 2 novos
vetores, o vetor dos aprovados e o vetor dos reprovados, considerando a média
mínima para a aprovação como sendo 5.0. Exibir na tela os dados do vetor de
aprovados, seguido dos dados do vetor de reprovados.
*/

class Aluno{
    constructor(){
        this.nome = []
        this.matricula = []
        this.media = []
        this.aprovado = []
        this.reprovado = []
    }
    inserirAluno(nome, matricula,media){
        this.nome.push(nome)
        this.matricula.push(matricula)
        this.media.push(media)
    }

    situacao(){
        for(let i=0;i<this.nome.length;i++){
            if(this.media[i]<5){
                this.reprovado.push([this.nome[i],this.matricula[i],this.media[i]])
            }else{
                this.aprovado.push([this.nome[i],this.matricula[i],this.media[i]])
            }
        }
    }
    
}

cond = 0
aluno = new Aluno()
while(cond<10){
    console.log("Insira os dados dos alunos")
    
    nome = prompt('Qual o nome desse aluno? ')
    matricula = prompt('Qual o matricula desse aluno? ')
    media = parseFloat(prompt('Qual a media desse aluno? '))

    aluno.inserirAluno(nome, matricula,media)
    cond++
}

aluno.situacao()
console.log(aluno.aprovado)
console.log(aluno.reprovado)


/*
4) Faça um programa que gerencie o estoque de um mercado e:
a) Crie e leia um vetor de 5 produtos, com os dados: código (inteiro), nome (máximo
15 letras), preço e quantidade.
b) Leia um pedido, composto por um código de produto e a quantidade. Localize este
código no vetor e, se houver quantidade suficiente para atender ao pedido
integralmente, atualize o estoque e informe o usuário. Repita este processo até ler um
código igual a zero.
Se por algum motivo não for possível atender ao pedido, mostre uma mensagem
informando qual erro ocorreu.
*/

class Produto{
    constructor(codigo,nome,preco, quantidade){
        this.nome = nome
        this.quantidade = quantidade
        this.codigo = codigo
        this.preco = preco

    }
    setQuantidade(loss_quantidade){
        if(loss_quantidade>this.quantidade){
            console.log("O produto não tem estoque para essa quantidade")
        }else{
            console.log("O pedido do produto "+this.nome+" de quantidade " +loss_quantidade +" unidades, foi realizado com sucesso"+ "o valor do pedido foi: " + loss_quantidade*this.preco)
            this.quantidade = this.quantidade - loss_quantidade
        }
    }
}

produtos = []

for(let i = 0;i<2;i++){
    while(1){
        nome = prompt('Qual o nome do produto?')
        if(nome.length<1 || nome.length>15){
            console.log("O nome é maior ou menor q o permitido")
        }
        else{
            console.log("NOME PERMITIDO")
            break
        }
    }
    quantidade = parseInt(prompt('Qual a quantidade de produto?'))
    codigo = parseInt(prompt('Qual o codigo do produto?'))
    preco = parseFloat(prompt('Qual o preço do produto?'))
    produtos.push(new Produto(codigo,nome,preco,quantidade))
}

while(1){
    console.log("Compra do produto!!!")
    codigo_usuario = parseInt(prompt('Qual o codigo do produto desejado?'))
    if(codigo_usuario==0){
        console.log("Fim da compra!")
        break
    }
    quantidade_usuario = parseInt(prompt('Qual a quantidade de produto desejado?'))
    for(let i = 0;i<produtos.length; i++){
        if(produtos[i].codigo == codigo_usuario){
            produtos[i].setQuantidade(quantidade_usuario)
            break
        }else{
            console.log('Este código não existe !!!')
        }
    }
}



/*
5) Fazer um programa para simular uma agenda de telefones. Para cada pessoa devem-se
ter os seguintes dados:
*/
class Datanascimento{
    constructor({dia_niver,mes_niver,ano_niver}){
        this.dia_niver = dia_niver
        this.mes_niver = mes_niver
        this.ano_niver = ano_niver
    }
}
class Endereco{
    constructor({rua_end, num_end, complemento_end,bairro_end, cep_end,cidade_end,estado_end,pais_end}){
        this.rua_end = rua_end
        this.num_end = num_end
        this.complemento_end = complemento_end
        this.bairro_end = bairro_end
        this.cep_end = cep_end
        this.cidade_end = cidade_end
        this.estado_end = estado_end
        this.pais_end = pais_end
    }
}
class Telefone{
    constructor({ddd,numero}){
        this.ddd = ddd
        this.numero = numero
    }
}
class Pessoa{
    constructor({nome, email,endereco,aniversario,telefone, obs}){
        this.nome = nome
        this.email = email
        this.endereco = new Endereco(endereco)
        this.aniversario = new Datanascimento(aniversario)
        this.telefone = new Telefone(telefone)
        this.obs = obs
    }
    printDados(){
        console.log(this.nome)
        console.log(this.email)
        console.log(this.endereco)
        console.log(this.aniversario)
        console.log(this.telefone)
        console.log(this.obs)
    }
}

agenda = []
if(agenda.length>100){
    console.log("Agenda lotada")
}

dados = {
    nome: "Ana",
    email: "stefane@gmail.com",
    endereco:{
        rua_end : "lá acula",
        complemento_end : 'num tem',
        bairro_end: 'center',
        cidade_end: 'sobral',
        estado_end: 'ceara',
        pais_end: 'disneylandia'
    },
    aniversario:{
        dia_niver: 05,
        mes_niver: 05,
        ano_niver: 2004
    },
    telefone: {
        ddd: 88,
        numero: 89877676
    },
    obs: "lalalala"
}

dados1 = {
    nome: "Beatriz",
    email: "LALALALA@gmail.com",
    endereco:{
        rua_end : "lá acula",
        complemento_end : 'num tem',
        bairro_end: 'center',
        cidade_end: 'sobral',
        estado_end: 'ceara',
        pais_end: 'disneylandia'
    },
    aniversario:{
        dia_niver: 07,
        mes_niver: 07,
        ano_niver: 2009
    },
    telefone: {
        ddd: 88,
        numero: 89877676
    },
    obs: "lalalala"
}

dados2 = {
    nome: "AAAAA",
    email: "LALALALA@gmail.com",
    endereco:{
        rua_end : "lá acula",
        complemento_end : 'num tem',
        bairro_end: 'center',
        cidade_end: 'sobral',
        estado_end: 'ceara',
        pais_end: 'disneylandia'
    },
    aniversario:{
        dia_niver: 07,
        mes_niver: 07,
        ano_niver: 2009
    },
    telefone: {
        ddd: 88,
        numero: 89877676
    },
    obs: "lalalala"
}


pessoas = []
pessoas.push(new Pessoa(dados))
pessoas.push(new Pessoa(dados2))

cond = true
while(cond){
    item = parseInt(prompt("Suas opções são:\n1-busca por nome de pessoa\n2-busca por mes de aniversario\n3-busca por dia e mes de aniversario\n4-inserir pessoa5-remover pessoa\n6-imprimr informações\n7-Encerrar"))
switch(item){
    case 1:
        nome_busca = prompt("Nome para busca")
        for(let i=0; i<pessoas.length;i++){
            if(pessoas[i].nome==nome_busca){
                console.log(pessoas[i].nome)
                pessoas[i].printDados()
            }
        }
        break;
    case 2:
        mes_busca = prompt("mes de busca")
        for(let i=0; i<pessoas.length;i++){
            if(pessoas[i].aniversario.mes_niver==mes_busca){
                console.log(pessoas[i].nome)
                pessoas[i].printDados()
            }
        }
        break;
    case 3: 
        mes_busca = prompt("mes de busca")
        dia_busca = prompt("dia de busca")
        for(let i=0; i<pessoas.length;i++){
            if(pessoas[i].aniversario.dia_niver==dia_busca && pessoas[i].aniversario.mes_niver==mes_busca){
                console.log(pessoas[i].nome)
                pessoas[i].printDados()
            }
        }
        break;
    case 4: 
        pessoas.push(new Pessoa(dados1))
        pessoas = pessoas.sort(function (a, b) {	
            return (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0);             
        });
        break;
    case 5:
        nome_busca = prompt("Nome para remover pessoa")
        pessoas_aux = []
        cont_aux = 0
        for(let i=0; i<pessoas.length;i++){
            if(pessoas[i].nome==nome_busca){
                console.log("Removendo Pessoa " + nome_busca)
                for(let j=0; j<pessoas.length;j++){
                    if(pessoas[j].nome==nome_busca){
                        continue
                    }else{
                        pessoas_aux.push(pessoas[j])
                    }
                }
            }else{
                cont_aux++
            }
        }
        if(cont_aux==pessoas.length){
            console.log("pessoa não existe")
        }
        break
    case 6:
        item2 = parseInt(prompt("Suas opções de impressão são:\n1-nome\n2-nome+email+telefone\n3-todos os dados"))
        switch(item2){
            case 1:
                for(let i=0; i<pessoas.length;i++){
                    console.log(pessoas[i].nome)  
                }
                break
            case 2:
                for(let i=0; i<pessoas.length;i++){
                    console.log(pessoas[i].nome)  
                    console.log(pessoas[i].telefone)
                    console.log(pessoas[i].email)
                    console.log('\n')
                }
                break
            case 3: 
            for(let i=0; i<pessoas.length;i++){
                console.log(pessoas[i])
                console.log('\n')
            }
            break
        }
        case 7:
            cond = false

    }



}
