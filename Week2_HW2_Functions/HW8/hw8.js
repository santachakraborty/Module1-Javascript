
let longestArray=[];
// let str,count;

function filterLongWords(str,count){
   for(let i=0; i<str.length; i++){
     if(str[i].length > count){
      //  longestArray+=str[i];
          longestArray.push(str[i]);
     }
    }
  return longestArray;
}

