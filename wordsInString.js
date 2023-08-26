wordsInString = (str) =>{
  s = str.split(" ")
  console.log(s.filter((s1)=> s1 !== ''))
}
s = "Hello World"
wordsInString(s)
s= "   fly me   to   the moon  "
wordsInString(s)

lengthOfLastWordsInString = (str) => {
  s = str.split(" ")
  arr = s.filter((s1)=> s1 !== '')
  console.log(  `length of last word  ${str}  is `, lastWord = arr[arr.length-1].length)
}
s= "   fly me   to   the moon  "
lengthOfLastWordsInString(s)
s = "Hello World"
lengthOfLastWordsInString(s)
s = "luffy is still joyboy"
lengthOfLastWordsInString(s)