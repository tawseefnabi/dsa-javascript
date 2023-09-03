function isPalindrome(str) {
  let rev= ""
  for(let s of str){
    rev =s + rev
  }
  if(rev == str){
    console.log(" is palindrome");
  } else{
    console.log("Not palindrome");
  }
}
checkPalindrome = (str) =>{
  return str == [...str].reverse().join("") ? true : false
}
isPalindrome('abba')

console.log("is palindrome; ",checkPalindrome('abbab'))