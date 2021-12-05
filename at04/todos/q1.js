/* 
1- Construa uma estrutura aluno com nome, número de matrícula e curso. Leia do
usuário informação de 5 alunos, armazene em vetor dessa estrutura e imprima os
dados na tela.
*/

const prompt = require('prompt-sync')();

class Aluno{
    constructor(nome, matricula,curso){
        this.nome = nome
        this.matricula = matricula
        this.curso = curso
        this.dadosAluno = [this.nome,this.matricula,this.curso]
    }


    exibeAlunos(){
        for(let i =0; i <= this.dadosAluno.length; i++){
            console.log('Aluno:\n Nome: ${this.dadosAluno[i][0]} Matricula: ${this.dadosAluno[i][1]} Curso: ${this.dadosAluno[i][2]}')
        }
        
    }
}

cond = 1
while(cond<=5){
    console.log("Insira os dados dos alunos")
    
    nome = prompt('Qual o nome desse aluno? ')
    matricula = prompt('Qual o matricula desse aluno? ')
    curso = prompt('Qual o curso desse aluno? ')
    console.log(cond)

}

