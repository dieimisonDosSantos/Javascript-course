function saudacao(nome) {
  if (typeof nome != 'string') {
    throw new Error('O parâmetro nome precisa ser string')
  } else {
    console.log(`Olá ${nome}.`)
  }
}

saudacao("Matheus")//Olá Matheus
console.log("<br>")
saudacao(20)//Error
console.log("<br>")