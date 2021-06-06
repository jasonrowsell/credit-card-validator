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

  findInvalidCards(batch) {
    return batch.filter((card) => !this.validateCred(card));
  }

  idInvalidCardCompanies(invalidBatch) {
    const companies = [];
    for (let i = 0; i < invalidBatch.length; i++) {
      switch (invalidBatch[i][0]) {
        case 3:
          if (companies.indexOf('Amex') === -1) {
            companies.push('Amex');
          }
          break;
        case 4:
          if (companies.indexOf('Visa') === -1) {
            companies.push('Visa');
          }
          break;
        case 5:
          if (companies.indexOf('Mastercard') === -1) {
            companies.push('Mastercard');
          }
          break;
        case 6:
          if (companies.indexOf('Discover') === -1) {
            companies.push('Discover');
          }
          break;
        default:
          return 'Company not found';
      }
    }
    return companies;
  }
}

module.exports = Validator;
