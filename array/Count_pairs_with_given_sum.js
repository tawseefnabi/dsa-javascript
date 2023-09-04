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