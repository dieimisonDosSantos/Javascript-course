function SomaComDelay(a, b) {
    return new Promise(resolve => {
        setTimeout(function () {
            resolve(a + b)
        }, 4000);
    })
}

async function resSoma(a, b, c) {
    let x = SomaComDelay(a, b);
    let y = c;

    return await x + y;

}

resSoma(2, 2, 3).then(value => console.log(value))//7