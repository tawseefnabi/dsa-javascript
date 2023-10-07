unionnIntersectionof2Array = (arr1, arr2) =>{
  let arrUnion = new Set(arr1.concat(...arr2))
  console.log("arr", ...arrUnion);
  let interarr = new Set(arr1.filter(a => arr2.includes(a)))
  console.log("arr", interarr);
  
}
let arr1 = [1, 3, 4, 5, 7]
let arr2 = [2, 3, 5, 6]
// unionnIntersectionof2Array(arr1,arr2)

function union_of_array_v1(arr1, arr2) {
  let arr = new Set(arr1.concat(...arr2))
  return arr
}
function union_of_array_v2(arr1, arr2) {
  let union = []
  for(let i=0;i<arr1.length;i++){
    if(!union.includes(arr1[i])){
      union.push(arr1[i])
    }
  }
  for(let i=0;i<arr2.length;i++){
    if(!union.includes(arr2[i])){
      union.push(arr2[i])
    }
  }
  return union
}

// console.log("union_of_array v1", union_of_array_v1(arr1, arr2));
// console.log("union_of_array v2", union_of_array_v2(arr1, arr2));

function intersection_of_array(arr1, arr2) {
  console.log("arr1", arr1, " arr2", arr2);
  let inter_arr = []
  for(let i =0 ;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
      if(arr1[i] == arr2[j] && !inter_arr.includes(arr1[i])){
        inter_arr.push(arr1[i])
      }
    }
  }
  return inter_arr
}
console.log("union_of_array v2", intersection_of_array(arr1, arr2));