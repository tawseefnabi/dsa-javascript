function non_repeating_element_in_array(arr){
  for(let i=0;i<arr.length;i++){
    for(let j= i+1;j<arr.length; j++){
      if(arr[i] != arr[j]){
        return console.log("this elmenent is non repeating", arr[i]);
      }
    }
  }
  return console.log("no element ");
}
arr =[10, 5, 3, 4, 3, 5, 6]


non_repeating_element_in_array(arr)
arr1 = [-1, 2, -1, 3, 0]
non_repeating_element_in_array(arr1)