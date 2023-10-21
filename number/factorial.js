// factorial using for loop
function factorial(number){
  let res = 1
  for(let n=2;n<=number;n++){
    res *=n
  }
  console.log("factorial",res)
}
function factorial_v1(number){
  if(number == 0 || number ==1){
    return 1
  }
   return number * factorial_v1(number-1)
}
factorial_v3 = (number)=>{
  return (number==1 || number) ===0 ? 1 : (number * factorial_v3(number-1))
}
factorial(4)
console.log(factorial_v1(5))
console.log(factorial_v3(5))