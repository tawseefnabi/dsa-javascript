// Sort an array of 0s, 1s and 2s | Dutch National Flag problem
// Given an array A[] consisting of only 0s, 1s, and 2s. The task is to write a function that sorts the given array. The functions should put all 0s first, then all 1s and all 2s in last.

// This problem is also the same as the famous “Dutch National Flag problem”. The problem was proposed by Edsger Dijkstra. The problem is as follows:

// Given N balls of colour red, white or blue arranged in a line in random order. You have to arrange all the balls such that the balls with the same colours are adjacent with the order of the balls, with the order of the colours being red, white and blue (i.e., all red coloured balls come first then the white coloured balls and then the blue coloured balls). 
let swap= (arr, first, second) =>{
  [arr[first] , arr[second]] = [arr[second], arr[first] ]
}
dutch_national_flag = (arr) =>{
   
    let low =0
    let mid =0
    let high =arr.length-1
    while(mid<= high){
      if( arr[mid]===0 ){
         swap(arr, low++, mid++)
      }else if( arr[mid] === 2){ 
        swap(arr, mid, high--)
      } else if (arr[mid] === 1){
        mid++
      }
  }
  console.log("----dutch_national_flag:----", arr)
}
dutch_national_flag([2, 2, 2, 0, 0, 0, 1, 1])