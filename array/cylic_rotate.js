function cyclic_rotate(arr) {
  // create new array and add last element at 0 place
  newArray = [arr[arr.length-1]]
  // push rest of elements to array except last one
  for(let i=0;i<arr.length-1;i++){
    newArray.push(arr[i])
  }
  console.log("cyclic rotate1: ", newArray);
}
function cyclic_rotate_v2(arr){
  let lastElement = arr.pop()
  arr.unshift(lastElement)
  console.log("cyclic rotate2 : ", arr);

}
cyclic_rotate([1,2,3,4, 5, 6], 4)

// cyclic_rotate_v2([1,2,3,4])

// Input: arr[] = {1, 2, 3, 4, 5}
// Output: arr[] = {5, 1, 2, 3, 4}

function cyclic_rotate_v3(arr) {
  let firstElement = arr[arr.length -1]
  let newArray = []
  newArray.push(firstElement)
  for(let i=0;i<arr.length-1;i++){
    newArray.push(arr[i])
  }
  console.log("rotatedArray", newArray);
}
function cyclic_rotate_v4(arr, n){  
  let temp  = []
  let k = 0
  for(let i=n;i<arr.length;i++){ 
    temp[k] = arr[i]
    k++
  }
  for(let i=0;i<n;i++){
    temp[k] = arr[i]
    k++
  }
  console.log("cyclic rotate array", temp)
}
cyclic_rotate_v4([1,7,3,4,8,2,6], 3)


cyclic_rotate_v5 = (arr, rotateAt) =>{
  let rotatedArray = arr.slice(rotateAt, arr.length).concat(arr.slice(0, rotateAt))
  console.log("rotatedArray", rotatedArray);
  return rotatedArray
}
// cyclic_rotate_v5([1,7,3,4,8,2,6], 3)
