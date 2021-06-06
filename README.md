# Credit Card Validator

Tech test focusing on writing high-quality code, algorithmic understanding, and test driven development (TDD).

## Spec

### Context

The company that you work for suspects that credit card distributors have been mailing out cards that have invalid numbers. In this test, you have the role of a clerk who checks if credit cards are valid. Every other clerk currently checks using pencil and paper, but you’ll be optimizing the verification process using your knowledge of JavaScript to handle multiple credit cards at a time.

The problem can be solved by using Luhn algorithm.

Luhn check or the Mod 10 check, which can be described as follows (for illustration,
consider the card number 4388576018402626):

> - Step 1. Double every second digit from right to left. If doubling of a digit results in a
>   two-digit number, add up the two digits to get a single-digit number (like for 12:1+2, 18=1+8).
> - Step 2. Now add all single-digit numbers from Step 1.
>   4 + 4 + 8 + 2 + 3 + 1 + 7 + 8 = 37
> - Step 3. Add all digits in the odd places from right to left in the card number.
>   6 + 6 + 0 + 8 + 0 + 7 + 8 + 3 = 38
> - Step 4. Sum the results from Step 2 and Step 3.
>   37 + 38 = 75
> - Step 5. If the result from Step 4 is divisible by 10, the card number is valid; otherwise, it is invalid.

### Requirements

- To return true when an array contains digits of a valid credit card number and false when it is invalid. This should NOT mutate the values of the original array.
- To check through the nested array for which numbers are invalid, and return another nested array of invalid cards.
- To check through the nested array of invalid numbers and returns an array of companies.
  Currently, there 4 accepted companies which each have unique first digits. The following table shows which digit is unique to which company:

| First Digit | Company                 |
| ----------- | ----------------------- |
| 3           | Amex (American Express) |
| 4           | Visa                    |
| 5           | Mastercard              |
| 6           | Discover                |

If the number doesn’t start with any of the numbers listed, print out a message like: “Company not found”.

- Return an array of companies that have mailed out cards with invalid numbers. This array should NOT contain duplicates, i.e. even if there are two invalid Visa cards, "Visa" should only appear once in the array.
