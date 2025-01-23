/*
	Task:
	write a function that remove all vowels from a string (e.g)
	"this website is for losers lol!" 
	will be
	"ths wbst s fr lsrs ll!"
*/
function disemvowel(str){
	let newStr = str.replace(/aeiou/gi, "");
	return newStr;
}
