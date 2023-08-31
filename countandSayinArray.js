


countAndSayinArray= (str) =>{
  a = []
  for (i of str){
    // console.log("===",i)
    ss = str.filter(s => s==i).length
    console.log("ss",i, ss);
  }
}
str = '112222555'
countAndSayinArray(str)