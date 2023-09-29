// K’th Smallest/Largest Element in Unsorted Array

// Practice
// Given an array and a number K where K is smaller than the size of the array.
 //Find the K’th smallest element in the given array. Given that all array elements are distinct.
// Examples:  

// Input: arr[] = {7, 10, 4, 3, 20, 15}, K = 3 
// Output: 7

// Input: arr[] = {7, 10, 4, 3, 20, 15}, K = 4 
// Output: 10 

kthLargestnSmallest = (arr, k) =>{
  asc_sort =  arr.sort((a,b)=>a-b)
  desc_sort =  arr.sort((a,b)=>b-a)
  let kth_smallest = asc_sort[k-1]
  let kth_largest = desc_sort[k-1]
  console.log("asc_sort", asc_sort );
  console.log("kth smallest element in array: ", kth_smallest)
  console.log("desc_sort", desc_sort );
  console.log("kth largest element in array: ", kth_largest)
}
arr = [7, 10, 4, 3, 20, 15], K = 3 
kthLargestnSmallest_v2 = (arr, k) =>{
  for (let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-i-1;j++){
      if(arr[j]>arr[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  console.log("sorted", arr, arr[K]);

}
arr = [7, 10, 4, 3, 20, 15], K = 4 

kthLargestnSmallest(arr, K)