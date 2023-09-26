function reverse_of_words(){
 let _str = str.split(" ")
 let new_str = ''
  for(let s of _str ){
    new_str = s   + " " + new_str
    // new_str = new_str + " "+  s.split("").reverse().join("")
  }
  console.log("str", new_str);
}
str = "i love programming very much"
reverse_of_words(str)