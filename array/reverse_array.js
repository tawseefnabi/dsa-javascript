function reverseArray (arr)  {
  let reverse = []
  for(let i=arr.length-1;i>=0;i--){
    reverse.push(arr[i])
  }
  console.log("reverseArray:===", reverse)
}
reverseArray_v2 = (arr) =>{
  let left= 0
  let right = arr.length-1
  while(left<right){
    let temp = arr[left]
    arr[left] =  arr[right]
    arr[right] = temp
    left++
    right--
  }
  console.log("reverseArray_v2:===", arr);
}
function reverseArray_v3(arr)  {
  let rev = []
  for(let i= arr.length-1; i>=0;i-- ){
    rev.push(arr[i])
  }
  console.log("reverseArray_v3:===", rev);
}
// reverseArray([2,3,9,0])
// reverseArray_v2([2,3,9,0])
reverseArray_v3([2,3,9,0])

