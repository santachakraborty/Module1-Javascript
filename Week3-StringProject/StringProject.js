
//Bank transaction
let userName="      Santa Chakraborty    ";
let phNo="123-456-7898";
let minBalance=1000;
let transferAmount=500;
let transactionType='deposit';
let msg1='login successful';
let depositType='check';

let depositAmount=300;
let str="Your transaction completed";

//email
process.stdout.write('Enter email : ');
let email='santa@gmail.com';
console.log(email);
if(email.includes('@')){
  process.stdout.write('');
}else{
  console.log('Please enter correct email.');
}
console.log();

//password
let psw='123456';
process.stdout.write("Enter password :");
let psw1=[];
for(let i=0 ; i<(psw.length) ; i++){
     psw1.push('*');   
}
for(let i=0;i<psw1.length;i++){
  process.stdout.write(psw1[i]);
}
console.log();

//usename and phone no display
let userName1=userName.trim().padStart(userName.trim().length, ' ');
let phNo1=phNo.replace(/-/g, '').trim().padStart(phNo.trim().length-2, ' ');
console.log(msg1.toUpperCase());
console.log('User Name : ' + userName1);
console.log('Phone no : ' + phNo1);


//transaction
if( transactionType === 'transfer')
    if(minbalance>=transferAmount){
      minBalance=minBalance-transferAmount;
      console.log(str.concat(" Account balance is updated"));
    }else{
       console.log('You do not enough money to transfer.');
}else if(transactionType==='deposit' && depositType==='check'){
    console.log(str.concat(", Deposit Amount will be updated after 3 working days."));
    minBalance+=depositAmount;
}else{
    console.log();
}



