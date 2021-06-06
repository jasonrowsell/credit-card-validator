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
          this._includeCompany(companies, 'Amex');
          break;
        case 4:
          this._includeCompany(companies, 'Visa');
          break;
        case 5:
          this._includeCompany(companies, 'Mastercard');
          break;
        case 6:
          this._includeCompany(companies, 'Discover');
          break;
        default:
          return 'Company not found';
      }
    }
    return companies;
  }

  _includeCompany(arr, company) {
    if (arr.indexOf(company) === -1) {
      arr.push(company);
    }
  }
}

module.exports = Validator;
