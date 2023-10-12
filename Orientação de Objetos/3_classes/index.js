//CLASSES
var cachorro = {
    patas: 4,
    raca: 'SRD',
    latir: function () {
        console.log('Au AU AU')
    }
}

let pastorAlemao = Object.create(cachorro)

pastorAlemao.latir();//au AU AU

pastorAlemao.raca = 'Labrador'

console.log(cachorro.raca)//SRD
console.log(pastorAlemao.raca)//Labrador

let pastorAlemao2 = Object.create(cachorro)//vazio

pastorAlemao2.raca = 'Viralata'
console.log(pastorAlemao2.raca)//viralata