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
