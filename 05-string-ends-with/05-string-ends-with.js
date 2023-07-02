function solution(str, ending){
	/*compStr = ending.length;
	 * lastChar = str.substr(compStr-1);
	 * console.log(`comparison str ${ending}`};
	 * console.log(`ending of orginal str ${lastChar}`);
	 * console.log(`length of comparison str ${compStr}`);
	 *
	 * return lastChar == ending ? true : false;*/
	return str.endsWith(ending);
}
