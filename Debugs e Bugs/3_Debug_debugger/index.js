let b = 2;
let a = 1;
let c = 3

if (c > a) {
    a = b
    debugger//a == b
}

//let a became 2
for (let i = 5; i > 0; i--) {
    b++;
    a = a + c + 1
    c += 2;
    console.log(c)
    debugger//5 /7 /9 /11 /13
}

if (b == a) {
    a++
} else {
    a = a + b + c
    console.log(a)
    debugger
}

a = a * b

debugger
console.log(a)