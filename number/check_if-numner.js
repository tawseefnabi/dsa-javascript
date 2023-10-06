// Write a function which returns true if given value of number is an integer without using any inbuilt functions

// check number is integer

// console.log(isNaN(10.0))
// console.log(isNaN(10))

function isInteger(value){
  
  if(typeof(value) !== 'number'){
    return false
  }
  return value === Math.floor(value)
}
console.log(isInteger(2.1))