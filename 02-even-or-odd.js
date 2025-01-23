//if number number has no remainer | force the result to be positive

function evenOrOdd(number){
	/*if ((Math.abs(number%2)) == 0){
		return "Even"
	}else{
		return "Odd"
	}*/
	return number%2 === 0 ? "Even" : "Odd"
}
