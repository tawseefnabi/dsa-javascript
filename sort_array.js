// sortArray([5, 2, 7, 1, 0])

sortArray = ( arr) =>{
  for(let i=0;i<arr.length-1;i++){
    for(let j=0;j<arr.length-i-1;j++){
      if(arr[j] > arr[j+1]){
        let temp =arr[j]
        arr[j] = arr[j+1]
         arr[j+1] = temp
      }
    }
  }
  console.log("arr", arr);
}
// sortArray = (arr) => {
//   for(let i=0;i<arr.length-1; i++){
//     for(let j=0;j<arr.length-i-1;j++){
//       if(arr[j]>arr[j+1]){
//         let temp = arr[j]
//         arr[j] = arr[j+1]
//         arr[j+1] = temp
//       }
//     }
//   }
//   console.log("array sort", arr);

// }

sortArray([5, 2, 7, 1, 0])