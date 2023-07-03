/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {

  str=str.toLowerCase();
  str=help(str);
  let ptr1=0;let ptr2=str.length-1;
  while(ptr1<=ptr2){
    let c1=str.charAt(ptr1);
    let c2=str.charAt(ptr2);
    if(c1!=c2)return false;
    ptr1++;ptr2--;
  }
  return true;
 }
 
 function help(str){
 
   let res="";
 
   for(let i=0;i<str.length;i++){
     let c1=str.charAt(i);
     if(c1==' ' || c1=='?' || c1=='!' || c1=='.' || c1==','){}
     else res+=c1;
   }
   return res;
 }
 
 module.exports = isPalindrome;
 