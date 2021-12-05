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