function evenOrOdd(number){
	//if number number has no remainer | force the result to be positive
	if ((Math.abs(number%2)) == 0){
		return "Even"
	}else{
		return "Odd"
	}
}
