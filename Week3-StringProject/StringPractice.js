//String
//PRINT NAME USING FOR LOOP
let fullName= 'John Smith';
for(let i=0 ; i<(fullName.length) ; i++){
  process.stdout.write(fullName[i] + '  ');
}
console.log();
console.log('character at: ' + fullName.charAt(5));

// INDEXOF
console.log(fullName.indexOf('S'));
console.log(fullName.lastIndexOf('i'));

//CONCAT
let st1='Hello';
console.log(st1.concat(' World' , ' All'));

// TOUPPER & TOLOWER
let st2='hello';
console.log(st2.toUpperCase());
let st3='TOLOWER';
console.log(st3.toLowerCase());

//             HOW MANY VOWELS ARE THERE IN A STRING
let count=0, str='Count how many VOWELS are there in the sentence.';

for(let i=0 ; i<(str.length) ; i++){
  if(str.charAt(i)=='a' || str.charAt(i)=='e' || str.charAt(i)=='i' || str.charAt(i)=='o' || str.charAt(i)=='u' 
     || str.charAt(i)=='A' || str.charAt(i)=='E' || str.charAt(i)=='I' || str.charAt(i)=='O' || str.charAt(i)=='U'){
        console.log('Vowel found :' + str.charAt(i));
        count++;
  }
}
console.log(count + ' vowels are there.');
// .....................................................................................
//                   STRING REVERSE

let str1='Hello World', str2='';
for(let i=str1.length-1; i>=0; i--){
  str2= str2+str1.charAt(i);
}
console.log(str2);

//INCLUDES()
let str6 = 'I like hot coffee';
console.log(str6.includes('cold'));

//STARTSWITH &ENDSWITH
let str7= 'I like hot chocolate';
console.log(str7.endsWith('chocolate'));
console.log(str7.startsWith('i'));

//PADEND()  PADSTART()
let str4= 'tom and ';
let str5=str4.padEnd(13,'jerry');
console.log(str5);
let str6=str5.padStart(19,'hello ');
console.log(str6);

//TRIM()
let str1=' tom and jerry  ';
 str1.trim();
 console.log(str1);

//REPLACE()
let str2="I like hot chocolate and hot coffee";
 let str3=str2.replace("hot","cold");
console.log(str3);

