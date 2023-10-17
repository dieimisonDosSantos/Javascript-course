for (let i = 0; i < 7; i = i + 2) {
    let name = "Ex1";

    if (i == 2) {
        name = "Ex3"
        console.log(name)
    };

    if (i == 6 && name != "Ex3") {
        name = "Ex5"
        console.log(name)
        console.log("The name is Ex5, can stop")
    }
    console.log(i)
}