/*
create a function reverse the string entered to it
*/

function rev(str){
	//create a array to store every letter
	reverseStr = [];
	//get length of entered
	length = str.length;
	//run loop to go through very letter
	for(let i = length; i > 0; i--){
		//start at the end of , and letter to reverseStr array and str decrease index number
		reverseStr.push(str[i-1]);
	}
	//return the array as one thing, not seperated
	return reverseStr.join;
}
