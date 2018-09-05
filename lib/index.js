function cardValidator(num) {
  if (num === undefined) {
    throw new Error('O campo não pode ser vazio');
  }
  let number = num.toString();
  const arr = number.split('').reverse();
  const evenIndex = [];
  let oddIndex = [];
  let sum = 0;
  let card = false;
  let i;
  if (typeof num === 'string') {
    throw new Error('O campo precisa ser apenas números');
  } else if (number.length < 13 || number.length > 16) {
    throw new Error('O campo precisa ser preenchido com o numero inteiro do cartao maior que 13 digitos ou menor que 16 digitos');
  } else {
    for (i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        evenIndex.push(arr[i]);
      } else {
        oddIndex.push(arr[i] * 2).toString();
        for (j = 0; j < oddIndex.length; j++) {
          if (oddIndex[j] > 9) {
            oddIndex[j] = oddIndex[j] - 9;
          } else {
            oddIndex[j] = oddIndex[j];
          }
          oddIndex = oddIndex.join('').split('');
        }
      }
    }
    const newArr = evenIndex.concat(oddIndex);
    for (let num = 0 ; num < newArr.length; num++) {
      sum += parseInt((newArr[num]), 10);
    }
    if (sum % 10 === 0) {
      card = true;
    }
  }
  return card;
};

module.exports = cardValidator;
// cardValidator()
