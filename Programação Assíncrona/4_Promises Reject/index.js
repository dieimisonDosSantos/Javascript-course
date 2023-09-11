function verificaNumber(num) {
    return new Promise((resolve, reject) => {
        if (num == 3) {
            resolve(console.log(`The number is ${num}`))
        } else {
            reject(new Error("Falhouuu"))
        }
    })
}

verificaNumber(3)//resolve
verificaNumber(2)//reject