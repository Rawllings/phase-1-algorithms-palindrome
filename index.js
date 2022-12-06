function isPalindrome(word) {
  // Write your algorithm here
  const wordsplit = word.split("");
  const wordReverse = wordsplit.reverse();
  const wordJoin = wordReverse.join("");

  if (word === wordJoin){
    return true;
  }
  else {
    return false;
  }
}

/* 
  Add your pseudocode here
1. create a variable and convert a string to an Array.
2. reverse the array values which were converted from the string.
3. convert the reversed array values to string.
4. use the if statement to compare the new reversed string and the old string
and return the value.
*/



/*
  Add written explanation of your solution here
  First I converted our existing string to an array so we can iterate it. we use a split function to do the work.
  After converting, I use a reverse function to reverse the array values. Finally I converted back my array
  to string using a join function. Then I use the if statement to compare my old string to my new reversed string.
  The return was Boolean(True or False)
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
