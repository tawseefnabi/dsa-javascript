function cyclic_rotate(arr) {
  // create new array and add last element at 0 place
  newArray = [arr[arr.length-1]]
  // push rest of elements to array except last one
  for(let i=0;i<arr.length-1;i++){
    newArray.push(arr[i])
  }
  console.log("cyclic rotate: ", newArray);
}
function cyclic_rotate_v2(arr){
  let lastElement = arr.pop()
  arr.unshift(lastElement)
  console.log("cyclic rotate: ", arr);

}
cyclic_rotate([1,2,3,4])
cyclic_rotate_v2([1,2,3,4])