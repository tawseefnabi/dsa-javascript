function bubble_sort_asc(){
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<(arr.length-i-1);j++){
      // Checking if the item at present iteration 
            // is greater than the next iteration
      if(arr[j]>arr[j+1]){
        [arr[j], arr[j+1]]= [arr[j+1], arr[j]]
      }
    }
  }
  console.log("arr", arr);
}
function bubble_sort_dsc(){
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<(arr.length-1);j++){
      if(arr[j]>arr[j-1]){
        [arr[j], arr[j-1]]= [arr[j-1], arr[j]]
      }
    }
  }
  console.log("arr", arr);
}
arr = [5, 2, 7, 1, 0]
bubble_sort_asc([5, 2, 7, 1, 0])
// bubble_sort_dsc([5, 2, 7, 1, 0])