function* criadorDeId() {
    let id = 0;
    while (true) {
        yield id++;
    }
}

let CriarID = criadorDeId()

console.log(CriarID.next().value);//0
console.log(CriarID.next().value);//1
console.log(CriarID.next().value);
console.log(CriarID.next().value);
console.log(CriarID.next().value);
console.log(CriarID.next().value);//5
console.log(CriarID.next());//6