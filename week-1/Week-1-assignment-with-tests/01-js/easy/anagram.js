/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
    
  str1=str1.toLowerCase();
  str2=str2.toLowerCase();
  if(str1.length!=str2.length)return false;
  str1=sort(str1);
  str2=sort(str2);
  return str1===str2;
}

function sort(str){
    let arr=str.split("");
    arr=arr.sort();
    arr=arr.join(",")
    return arr;

}

module.exports = isAnagram;
