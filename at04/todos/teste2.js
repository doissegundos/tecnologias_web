a = [2,3,5,78]
var max = a.reduce(function(a, b) {
    return Math.max(a, b);
  });
console.log(max)
console.log(a.indexOf(max))

cond = 0
aluno = new Aluno()
while(cond<2){
    console.log("Insira os dados dos alunos")
    
    nome = prompt('Qual o nome desse aluno? ')
    matricula = prompt('Qual o matricula desse aluno? ')
    curso = prompt('Qual o curso desse aluno? ')
    nota1 = prompt('Qual a nota1? ')
    nota2 = prompt('Qual a nota2? ')
    nota3 = prompt('Qual a nota3? ')

    aluno.inserirAluno(nome, matricula,curso,nota1,nota2,nota3)
    aluno.exibeAlunos()
    cond++
}


cond = 0
aluno = new Aluno()
nome = "carla"
matricula = "2345"
curso = "eng quimica"
nota1 = 5
nota2 = 8
nota3 = 10

nome1 = "joana"
matricula1 = "457"
curso1 = "medica"
nota11 = 7
nota21 = 2
nota31 = 9

aluno.inserirAluno(nome, matricula,curso,nota1,nota2,nota3)
aluno.inserirAluno(nome1, matricula1,curso1,nota11,nota21,nota31)
aluno.exibeAlunos()
cond++

cond = 0
aluno = new Aluno()
nome = "carla"
matricula = "2345"
curso = "eng quimica"
nota1 = 2
nota2 = 5
nota3 = 0

nome1 = "joana"
matricula1 = "457"
curso1 = "medica"
nota11 = 7
nota21 = 2
nota31 = 9

aluno.inserirAluno(nome, matricula,curso,nota1,nota2,nota3)
aluno.inserirAluno(nome1, matricula1,curso1,nota11,nota21,nota31)
//aluno.exibeAlunos()
aluno.maiorNota()
aluno.maiorMedia()
aluno.menorMedia()
aluno.apr()
cond++


cond = 0
aluno = new Aluno()
while(cond<2){
    console.log("Insira os dados dos alunos")
    
    nome = prompt('Qual o nome desse aluno? ')
    matricula = prompt('Qual o matricula desse aluno? ')
    curso = prompt('Qual o curso desse aluno? ')
    nota1 = prompt('Qual a nota1? ')
    nota2 = prompt('Qual a nota2? ')
    nota3 = prompt('Qual a nota3? ')

    aluno.inserirAluno(nome, matricula,curso,nota1,nota2,nota3)
    cond++
}

aluno.exibeAlunos()
aluno.maiorNota()
aluno.maiorMedia()
aluno.menorMedia()
aluno.situacao()


if(pessoas[i].nome==nome_busca){
    console.log(pessoas[i].nome)
    pessoas[i].printDados()
}
if(pessoas[i].aniversario.dia_niver==dia_busca){
    console.log(pessoas[i].nome)
    pessoas[i].printDados()
}
if(pessoas[i].aniversario.dia_niver==dia_busca && pessoas[i].aniversario.mes_niver==mes_busca){
    console.log(pessoas[i].nome)
    pessoas[i].printDados()
}



function dadosPessoas(){
    dados = {}
    endereco = {}
    data = {}
    telefone = {}

    nome = prompt("Nome")
    email = prompt("email")
    rua = prompt("rua")
    complemento = prompt('complementos')
    bairro_end = prompt('bairro')
    cep = prompt('cep')
    cidade = prompt('cidade')
    estado = prompt('estado')
    pais = prompt('pais')
    ddd = prompt('ddd')
    numero = prompt('numero')
    obs = prompt("obs")

    dados.nome = nome
    dados.email = email

    endereco.rua_end = rua
    endereco.complemento_end = complemento
    endereco.bairro_end = bairro
    endereco.cidade_end = cidade
    endereco.estado_end = estado
    endereco.pais_end = pais    

    dados.endereco = endereco
    


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


for(let i=0; i<pessoas.length;i++){
    switch(item){
        case 1:
            if(pessoas[i].nome==nome_busca){
                console.log(pessoas[i].nome)
                pessoas[i].printDados()
            }
            break;
        case 2:
            if(pessoas[i].aniversario.dia_niver==dia_busca){
                console.log(pessoas[i].nome)
                pessoas[i].printDados()
            }
            break;
        case 3: 
            if(pessoas[i].aniversario.dia_niver==dia_busca && pessoas[i].aniversario.mes_niver==mes_busca){
                console.log(pessoas[i].nome)
                pessoas[i].printDados()
            }
            break;
        case 4: 
            console.log('entrou')
            pessoas.push(new Pessoa(dados1))
            pessoas = pessoas.sort(function (a, b) {	
                return (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0);             
            });
            break;
    }
    
}