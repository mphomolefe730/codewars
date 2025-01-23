/*
 A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, 
 each raised to the power of the number of digits in a given base.

 For example, take 153 (3 digits), which is narcissistic:
 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
 and 1652 (4 digits), which isn't:
 1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
 
 Your code must return true or false (not 'true' and 'false') depending upon whether the given number 
 is a Narcissistic number in base 10
*/

function narcissistic(value){
	let sum_value=0;
	value = String(value);

	for (let i=0;i<value.length;i++){
		console.log(`loop value: ${i}`);
		sum_value+=Number(value[i])**value.length;
	}
	if (sum_value==Number(value)) return true;
	else return false;
}
