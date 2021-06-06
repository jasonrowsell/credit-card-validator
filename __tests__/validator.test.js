const Validator = require('../src/validator');

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];
const invalid6 = [2, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
];

describe('Validator', () => {
  let validator;

  beforeEach(() => {
    validator = new Validator();
  });

  describe('#validateCred', () => {
    it('returns true for a valid card', () => {
      expect(validator.validateCred(valid1)).toBeTruthy();
    });
    it('returns false for an invalid card', () => {
      expect(validator.validateCred(invalid1)).toBeFalsy();
    });
  });

  describe('#findInvalidCards', () => {
    it('returns an empty array if no invalid cards', () => {
      expect(validator.findInvalidCards([valid1])).toEqual([]);
    });
    it('returns an array of invalid cards', () => {
      const invalidArr = [invalid1, invalid2, invalid3, invalid4, invalid5];
      expect(validator.findInvalidCards(batch)).toEqual(invalidArr);
    });
  });

  describe('#idInvalidCardCompanies', () => {
    it('return companies that have mailed out cards with invalid numbers', () => {
      const companiesArr = ['Visa', 'Mastercard', 'Amex', 'Discover'];
      expect(validator.idInvalidCardCompanies(batch)).toEqual(companiesArr);
    });
    it('return no companies when companies are not included', () => {
      expect(validator.idInvalidCardCompanies([invalid6])).toEqual(
        'Company not found'
      );
    });
  });
});
