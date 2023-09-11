//MÉTODOS
const cachorro1 = {
    uivar: function () {
        console.log("Auuuuuu")
    },
    rosnar: function () {
        console.log("Grrrrr")
    }
}
cachorro1.uivar() //Auuuuuu
cachorro1.rosnar() //Grrrrr



const cachorro2 = {
    raca: 'SRD',

    uivar: function () {
        console.log("Auuuuuu");
    },
    rosnar: function () {
        console.log("Grrrrr");
    },
    setRaca: function (raca) {
        this.raca = raca;
    },
    getRaca: function () {
        return "A raça é " + this.raca;
    }
}

cachorro2.setRaca("Pastor")//setting breed for dog2
console.log(cachorro2.raca)//Pastor
console.log(cachorro2.getRaca())//getRaca+Pastor