// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all 
// non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.


validPalindrome = (str) =>{
    let s = str.replace(/[^a-z0-9]/gi, "").toLowerCase()
   console.log("isPalindrom: ", s.split("").reverse().join("") === s ? true : false);


}
let  s = "A man, a plan, a canal: Panama"
validPalindrome(s)
s = "race a car"
validPalindrome(s)
s = " "
validPalindrome(s)