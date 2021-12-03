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