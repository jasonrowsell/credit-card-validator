class Validator {
  validateCred(cardArr) {
    var sum = cardArr[cardArr.length - 1];
    let nDigits = cardArr.length;
    let parity = nDigits % 2;

    for (let i = 0; i < nDigits - 1; i++) {
      var digit = cardArr[i];
      if (i % 2 == parity) {
        digit *= 2;
      }
      if (digit > 9) {
        digit -= 9;
      }
      sum += digit;
    }
    return sum % 10 === 0;
  }

  findInvalidCards = (cards) => {
    return cards;
  };
}

module.exports = Validator;
