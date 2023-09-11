const p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(15)//assigns value 15
    }, 5000);
})

const p2 = Promise.resolve(12);//assigns value 12

const p3 = new Promise((resolve, reject) => {
    resolve(11)//assigns value 10
});

Promise.all([p1, p2, p3]).then((value) => console.log(value))//(3)