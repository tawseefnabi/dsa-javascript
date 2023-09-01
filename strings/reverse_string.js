function reverseString (str) {
  let revstr= ''
  for(s of str){    
    revstr = s + revstr
  }
  console.log("reverse of string ", revstr);
}
function reverseOfString (str) {
  console.log("reverse of string ", str.split("").reverse().join(""))
  console.log("reverse of string ", [...str].reverse().join(""))
}
reverseString("hello")
reverseOfString("hello")