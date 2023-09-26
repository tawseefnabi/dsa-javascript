isAnagram= (str1, str2)=>{
  if(str1.length != str2.length){
    return false
  }
  _str1 = str1.split('').sort().join('')
  _str2 = str2.split('').sort().join('')
  return _str1 === _str2
}

console.log("isAnagram", isAnagram("Deepak","Aman") );
console.log("isAnagram", isAnagram("hackathon","achcthoon") );
console.log("isAnagram", isAnagram("indian","ndiani") );
