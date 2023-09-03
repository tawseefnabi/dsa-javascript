class Stack  {
  size
  top
  a = []
  constructor(n){
    this.top = -1
    this.size = n
    this.a = new Array(this.size)
  }
  push(x){
    this.a[++this.top] = x
    return true
  }
  pop(){
    let x = this.a[this.top--]
    return x
  }
}
let reverseString = (str) => {
  //Create a new stack
  n = str.length
  let stack = new Stack(n);
  
  //Add each character to the stack
  for(let char of str){
      stack.push(char);
  }
  console.log("s", stack);
  for(let i=0;i<n;i++){
    let ch = stack.pop();
    str[i] = ch;
  }
  console.log("a", str);
  let reversed = '';
 
  //Form the reversed string by accessing each character from the stack
  // while(!stack.isEmpty()){
  //    reversed += stack.pop();
  // }
  
  //Return the reversed string
  return reversed;
}

reverseString("helo")