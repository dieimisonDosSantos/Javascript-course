let b = 2;
let a = 1;
let c = 3

if (c > a) {
    a = b
}
console.log(a)//2

for (let i = 5; i > 0; i--) {
    b++;
    a = a + c + 1;
    c += 2;
    console.log(a)//6
}


if (b == a) {
    a++
} else {
    a = a + b + c
}
console.log(a)//62


a = a * b

console.log(a)//434