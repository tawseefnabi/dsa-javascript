function quick_sort(arr){
  if (arr.length <= 1) {
    return arr; // Base case: an array with 0 or 1 elements is already sorted
  }
  const pivot = arr[0]
  const lessThanPivot = []
  const greaterThanPivot = []
  for(let i=1;i<arr.length;i++){
    if(arr[i]<pivot){
      lessThanPivot.push(arr[i])
    } else{
      greaterThanPivot.push(arr[i])
    }
  }
  return [...quick_sort(lessThanPivot), pivot, ...quick_sort(greaterThanPivot)]

}
const unsortedArrayOdd = [5, 2, 9, 3, 6, 1, 8, 7];
console.log("sort odd array:", quick_sort(unsortedArrayOdd))
const unsortedArrayEven = [4, 5, 3, 7, 2, 1];
console.log("sort even array:", quick_sort(unsortedArrayEven))
