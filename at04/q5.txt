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
