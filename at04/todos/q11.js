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