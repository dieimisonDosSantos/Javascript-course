let x = 5;
let y = 4;

if (x > y) {
    let z = 6;
    console.log(z);
    if (z > x) {
        console.log("Loop");
        for (let i = 0; i < 5; i = i + 1) {
            console.log(i);//0,1,...
            if (i == 2) {
                console.log("i é = 2")//...2,3,4..
            }

        }
    }
}