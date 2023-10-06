// function twoSum(arr , sum) {
//   for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//       if(arr[i]+arr[j]== sum){
//         return console.log(`indexes for sum ${sum }: `, i, " ", j);
//       }
//     }
//   }
//   if(arr.length == 2){
//     console.log("no sum");
//   }

// }
// twoSum([2,7,11,15, 10, 3, ], 30)

// twoSum([2,3,4], 6)


// function subArray(arr, sum) {
//   for(let i=0;i<arr.length;i++){
//     let currentSum = arr[i]
//     if(currentSum == sum){
//       console.log("sub array is", i);
//       return 
//     } else{
//       for(j=i+1;j<arr.length;j++){
//         currentSum +=arr[j]
//         if(currentSum == sum){
//           console.log("sub array is", i, " ", j);
//           return 
//         }
//       }
//     }

//   }

// }

// let arr = [15, 2, 4, 8, 9, 5, 10, 23 ];
// let sum = 23;
// subArray(arr, sum);


func(1, "Hello", true);

function func() {
  for (let key in arguments) {
    console.log(arguments[key]);
  }
}
 
print()

// console.log(name)
// ReferenceError: name is not defined

function print() {
  var name = "Dillion"
}

var  name = 11
var  name = 10