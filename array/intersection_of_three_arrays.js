// Find common elements in three sorted arrays
// Given three Sorted arrays in non-decreasing order, print all common elements in these arrays.
Input: 
ar1 = [1, 5, 10, 20, 40, 80]
ar2 = [6, 7, 20, 80, 100]
ar3 = [3, 4, 15, 20, 30, 70, 80, 120]
// Output: 20, 80
function intersection(arr1, arr2){
  let inter_arr = []
  for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
      if(arr1[i]== arr2[j] && !inter_arr.includes(arr1[i])){
        inter_arr.push(arr1[i])
      }
    }
  }
  return inter_arr
}
function intersection_of_three_arrays(arr1, arr2, arr3){

  let temp = intersection(arr1, arr2)
  let _t=  intersection(temp, arr3)
  console.log("intersected arrays is :", _t);
}
intersection_of_three_arrays(ar1, ar2, ar3)


ar11 = [1, 5, 5]
ar22 = [3, 4, 5, 5, 10]
ar33 = [5, 5, 10, 20]
// Output: 5, 5
intersection_of_three_arrays(ar11, ar22, ar33)