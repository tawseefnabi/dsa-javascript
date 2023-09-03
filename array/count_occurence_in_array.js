function occurenceInArray(arr, target) {
  let occ = 0
  for(let a of arr){
    if(a == target){
      occ++
    }
  }
  console.log("occurence is :", occ);
}

occurenceInArray([1, 1, 2, 2, 2, 2, 3],   2)