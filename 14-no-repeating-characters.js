function solution(str) {
    let count = {};
  for(let s = 0; s < str.length; s++){
    let workingLetter = str[s];  
    if(count[workingLetter]){
        count[workingLetter] = count[workingLetter]+1;
     }else{
        count[workingLetter] = 1;
     }
  }
  
  let highestNumber = Math.max(...Object.values(count));
  if (highestNumber > str.length/2 && str.length%2 == 0) return "";
  
  let first = "", second = [];
  for(let i = 0; i < str.length; i++){
  	if (str[i] != str[i+1]) first+= str[i];
  	else second.push(str[i]);
  }
  let output= "";
  while(second.length != 0){
    for(let i = 0; i < first.length; i++){
        if (first[i] == second[second.length-1]) output+= first[i];
        else {
            if(second[second.length-1] == undefined){
            }else{
                output += first[i] + second[second.length-1];
                second.pop();
            }
        }
    }
  }
  return output;
};

console.log(solution("baaba"));
