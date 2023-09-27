try {//1
  //let b = 2;
  let a = 2 + b;
} catch (e) {//2
  console.log(e);
} finally {//3
  console.log("executou");
}

console.log('teste');