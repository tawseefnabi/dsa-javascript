reverseOfWords = (words) =>{
  reverse = ''
  _words = words.split(" ")
  for(let word of _words){
    reverse = reverse + " " +word.split('').reverse().join('') 
  }
  console.log("rev", reverse);
}
reverseOfWords_v2 = (words) =>{
  _words = words.split(" ").map(word => word.split('').reverse().join(""))
   console.log("revers of words ", _words.join(' '))

}
word = "alpha male"
// reverseOfWords(word)
reverseOfWords_v2(word)

