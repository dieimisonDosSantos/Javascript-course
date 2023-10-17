let Ex1 = {//user1
    nome: "Ex1",
    idade: 19,
    bilhete: true
}

let Ex2 = {//user2
    nome: "Ex2",
    idade: 19,
    bilhete: false
}

function valIdade(idade, bilhete, nome) {//func
    if (idade >= 18 && bilhete == true) {//if
        console.log(`Sr. ${nome} pode entrar.`)
    } else {//else
        console.log(`Sr. ${nome} você não pode entrar.`)
    }
}

valIdade(Ex1.idade, Ex1.bilhete, Ex1.nome); //true (Ex1)
valIdade(17, true, "User0"); //false/idade
valIdade(Ex2.idade, Ex2.bilhete, Ex2.nome); //false (Ex2)