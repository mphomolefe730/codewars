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
