
var str1="";
function reverseString(str){
for (var i = str.length - 1; i >= 0; i--) { 
  str1 += str[i]; 
}
return str1;
}