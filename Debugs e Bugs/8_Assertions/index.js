let arr = [1, 2, 3, 4, 5];
let arr2 = [2, 3, 4];

function interarArray(arr) {
  if (arr.length == 0) {
    throw new Error('O array precisa ter pelo menos um elemento');
  }/*if */else {
    for (let i = 0; i < arr.length; i++) {
      console.log(i)

    }//for
  }//else
}//func

function arrayVazio(arr) {
  if (arr.length > 0) {
    throw new Error("O array não pode ter elementos");
  } else {
    console.log("Agora deu certo");
  }
}
interarArray(arr);//retorna if
interarArray(arr2);//retorna if