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


