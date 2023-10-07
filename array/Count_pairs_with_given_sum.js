function Countpairswithgivensum(arr, sum){
_arr = []
  for(let i=0;i<arr.length;i++){
    for(let j=1;j<arr.length;j++){
      if(arr[i]+arr[j] == sum){ 
        _arr.push(arr[i],arr[j])
      }
    }
  }
  console.log("pair for sum: ", _arr);


}  
Countpairswithgivensum([1, 5, 7, -1, 5], 6)
function Countpairswithgivensum_v2(arr, sum){
  let pairs =  []
  let count = 0
  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]+arr[j] === sum){
        pairs.push(arr[i], arr[j])
        console.log("pairs", arr[i], arr[j]);
        count++
      }
    }
  }
  console.log("pairs", pairs, "total_pairs; ", count)
}
Countpairswithgivensum_v2([1, 5, 7, -1, 5], 6)