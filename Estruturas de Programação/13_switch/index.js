let nome = 'Ex1'

switch (nome) {
    case 'Ex1':
        console.log('O nome é Ex1')
        break//Para o código
    case 'Ex2':
        console.log('O nome é Ex2')
        break
    default:
        console.log('O nome não foi encontrado')
} //OR

let nome2 = 'Ex2'
if (nome2 == 'Ex1') {
    console.log('O nome é Ex1')
} else if (nome2 == 'Ex2') {
    console.log('O nome é Ex2')
} else {
    console.log('O nome não foi encontrado')
}