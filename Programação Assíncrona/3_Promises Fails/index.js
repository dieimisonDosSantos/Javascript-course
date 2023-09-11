let p = Promise.resolve(new Error("Não deu certo"));

console.log('lálálá')

p.then(value => {console.log(value)})
  .catch(reason => console.log('Falhou: '+ reason))//failed = catch| reason error dedicated to let p

  