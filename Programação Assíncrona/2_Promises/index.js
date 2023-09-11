let p = Promise.resolve(5);

console.log('Outros códigos')
console.log(p)

p.then((value) => { console.log(`O valor é ${value}`) })//value = 5
// /
p.then((value) => { return value + 12 })//returns the value = 17
    .then((value) => { console.log(value) }) //17






