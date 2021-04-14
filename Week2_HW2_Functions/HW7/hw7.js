

let longest="";
function findLongestWord(str){
for(let i=0; i<str.length; i++){
  if(str[i].length>longest.length){
    longest=str[i];
  }
}
return longest.length;
}