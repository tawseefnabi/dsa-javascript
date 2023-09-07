function selection_sort(){
  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      // Find the minimum element in unsorted array
      if(arr[j]<arr[i]){
        temp = arr[j]
        arr[j]= arr[i]
        arr[i] = temp
      }
    }
  }
  console.log("arr", arr);
}
arr = [5, 2, 7, 1, 0]
selection_sort(arr)