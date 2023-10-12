//METHOD

//method 1
const cachorro = {
    uivar: function () {
        console.log("Auuuuuu")
    },
    rosnar: function () {
        console.log("Grrrrr")
    }
}
cachorro.uivar() //Auuuuuu
cachorro.rosnar() //Grrrrr


//method 2
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

cachorro2.setRaca("Pastor")
console.log(cachorro2.raca)
console.log(cachorro2.getRaca())