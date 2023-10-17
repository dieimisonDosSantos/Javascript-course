for (let i = 10; i > 0; i = i - 1) {
    if (i % 2 == 0) {
        console.log("Caiu um continue");
        continue
    } else if (i % 2 != 0) {
        console.log("não caiu")
        console.log(i)
    }
}