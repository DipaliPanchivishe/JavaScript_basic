const Name="Ram";
const lastName= "charam"

console.log(Name+lastName)
console.log(`My name is ${Name} and last name is ${lastName}`);  //use backspace and ${} to print value

/*------methods-------*/

const accountName = new String('ICICI') //new way to declare string 
console.log(accountName.length)           //return index it will return key value pair 
console.log(accountName.toUpperCase())  // print upper case
console.log(accountName.charAt(1))      //return which chat at 1 position
console.log(accountName.indexOf('C'));  // it will return index of c

const ame = accountName.substring(1,4)
console.log(ame)

const anotherName = new String("    Raj  ")
console.log(anotherName)
console.log(anotherName.trimEnd())   // it will work on white spaces and /n 

///replace

const url="https://dipali.com/dipali%20panch"
console.log(url);
console.log(url.replace('%20','-')) //replace %20 with -

//split

const namesSplit = new String('as-hsa-arf')  // split in array remove - from string
console.log(namesSplit.split('-')) 





