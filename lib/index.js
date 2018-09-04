try {
 cardValidator(number);
}catch (e){
  console.log("Verificar número digitado")
}
module.exports.cardValidator = function cardValidator(number) {
  const arr = number.split("").reverse();
  const evenIndex = [];
  var oddIndex =[];
  var card = false;
  var sum = 0;
  if(arr.length >=13){
    for (let i = 0; i< arr.length; i++){
      if ( i % 2 === 0){
        evenIndex.push(arr[i]);
      }else{
        oddIndex.push(arr[i]*2).toString();
        for (let j=0; j<oddIndex.length; j++){
          if(oddIndex[j] > 9){
            oddIndex[j] = oddIndex[j]-9;
          }else{
            oddIndex[j] = oddIndex[j];
          }
      oddIndex = oddIndex.join("").split("")
        }
      }
    }
    const newArr = evenIndex.concat(oddIndex);
    for (let k = 0 ; k < newArr.length; k++){
      sum += parseInt((newArr[k]), 10);
    }
    if (sum % 10 === 0){
        card = true;
    }
  }
  return card;
}
