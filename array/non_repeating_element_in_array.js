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


// non_repeating_element_in_array(arr)
arr1 = [-1, 2, -1, 3, 0]
// non_repeating_element_in_array(arr1)


function non_repeating_element_in_array_v2(arr){
  console.log("arr", arr);
  const elementCount = {}
  arr.forEach(element => {
    if(elementCount[element]){
      elementCount[element]++
    }else{
      elementCount[element] =1
    }
  });
  for(let i=0;i<arr.length;i++){
    if(elementCount[arr[i]] ==1){
      return console.log(arr[i])
    }
  }
  return console.log("no element ");
}
 arr = [9, 4, 9, 6, 7, 4];
non_repeating_element_in_array_v2(arr)