// sortArray([5, 2, 7, 1, 0])

sortArray = ( arr) =>{
  for(let i=0;i<arr.length-1;i++){
    for(let j=0;j<arr.length-i-1;j++){
      if(arr[j] > arr[j+1]){ // check here for ascending order
        [arr[j] , arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  console.log("arr in ascending order:-", arr);
}
sortArray_descending_order = (arr) =>{
  for(let i=0;i<arr.length;i++){
    for(j=0;j<arr.length-i-1;j++){
      if(arr[j]< arr[j+1]){ // checl here for descending order
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  console.log("arr in descending order:--", arr);
}

sortArray([5, 2, 7, 1, 0])
sortArray_descending_order([5, 2, 7, 1, 0])
sortArray([0 ,23, 14, 12, 9 ])
sortArray_descending_order([0 ,23, 14, 12, 9 ])
