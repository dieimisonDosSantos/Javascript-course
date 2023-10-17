let usuario = {
    CNH: true,
    idade: 17,
}

if (usuario.CNH == true && usuario.idade >= 18) {
    console.log('Pode Dirigir')
} else if (usuario.CNH == false && usuario.idade >= 18) {
    console.log('Não Pode Dirigir, faça sua CNH')
} else {
    console.log('Não Pode Dirigir, espere até a conclusão dos 18 anos de idade.')
}