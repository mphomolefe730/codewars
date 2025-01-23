/*
	create a function like the Facebook, Instagram or twitter like feature. Which takes a array containing the names of people that like an item, it must retrun the display text as:

	[] --> "no one like this"
	["Peter"] --> "Peter likes this"
	["Jacob", "Alex"] --> "Jacob and Alex like this"
	["Max","John","Mark"] --> "Max, John and Mark like this"
	["Alex","Jacob","Mark","Max"] --> "Alex, Jacob and 2 others like this"

	NOTE: FOR 4 OR MORE NAMES, THE NUMBER IN "2 others" SIMPLY INCREASES
*/
function likes(names){
let length = names.length;

if (length == 0){
	return `no likes this`;
} else if (length == 1){
	return `${names[0]} likes this`;
} else if (length == 2){
	return `${names[0]} and ${names[1]} like this`;
} else if (length == 3){
	return `${names[0]}, ${names[1]} and ${names[2]} like this`;
} else if (length == 4){
	return `${names[0]}, ${names[1]} and 2 others like`;
} else{
	return `${names[0]}, ${names[1]} and ${length-2} others likes}`;
}

}
