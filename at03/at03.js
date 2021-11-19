//Nome: Stefane Adna dos Santos
//Matricula: 403249

function areaQuadrado(lado){
    return lado**2
}

function areaRetangulo(lado1,lado2){
    return lado1*lado2
}

function areaTriangulo(base, altura){
    return (base*altura)/2
}

function areaLosango(diagonal1,diagonal2){
    return  (diagonal1*diagonal2)/2
}

console.log('Area do quadrado é de:'+ areaQuadrado(2) + 'cm')
console.log('Area do retangulo é de:'+ areaRetangulo(2,3) + 'cm')
console.log('Area do triangulo é de:'+ areaTriangulo(2,5) + 'cm')
console.log('Area do losango é de:'+ areaLosango(2,4) + 'cm')
