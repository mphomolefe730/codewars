/*Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the leftmost digit and skipping any digit with a value of zero. There cannot be more than 3 identical symbols in a row.

In Roman numerals:

    1990 is rendered: 1000=M + 900=CM + 90=XC; resulting in MCMXC.
    2008 is written as 2000=MM, 8=VIII; or MMVIII.
    1666 uses each Roman symbol in descending order: MDCLXVI.

Example:
///////////////////////////////////
Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000

solution(1000), 'M'
solution(1001), 'MI'
solution(1990), 'MCMXC'
solution(2007), 'MMVII'
solution(2008), 'MMVIII'

link: https://www.codewars.com/kata/51b62bf6a9c58071c600001b/train/javascript
*/
function solution(number) {

  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" }
  ];

  let output = "";

  for ({ value, numeral } of romanNumerals) {
    while (number >= value) {
      output += numeral;
      number -= value;
    }
  }

  return output;
}

