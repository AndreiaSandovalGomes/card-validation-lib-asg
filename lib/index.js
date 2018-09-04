module.exports.cardValidator = function cardValidator(number) {
  const arr = number.split('').reverse();
  const evenIndex = [];
  let oddIndex = [];
  let sum = 0;
  let card = false;
  let i;
  if (arr.length >= 13) {
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
    for (k = 0 ; k < newArr.length; k++) {
      sum += parseInt((newArr[k]), 10);
    }
    if (sum % 10 === 0) {
      card = true;
    }
  }
  return card;
};
