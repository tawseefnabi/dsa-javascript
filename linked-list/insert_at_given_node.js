// 
// To insert a node after a given node in a Linked List, we need to:

// Check if the given node exists or not. 
// If it do not exists, 
// terminate the process.
// If the given node exists,
// Make the element to be inserted as a new node
// Change the next pointer of given node to the new node
// Now shift the original next pointer of given node to the next pointer of new node


class Node{
  constructor(data){
    this.data = data
    this.next = null
  }
}
// Class to insert elements in LL
class LinkedList {
  constructor() {
    this.head = null;
  }
  insertAfter(pre_node, new_data){
    if(!pre_node){
      console.log("The given previous node cannot be NULL");
      return 
    }
    const new_node = new Node(new_data)

    new_node.next = pre_node.next
    pre_node.next = new_node
  }
  push(new_data){
    const new_node = new Node(new_data)
    new_node.next = this.head
    this.head = new_node
  }
  printList(){
    let current = this.head
    while(current != null){
      console.log(" ", current.data)
      current = current.next
    }
  }
}

const llist = new LinkedList();

llist.push(6)
llist.push(6)
llist.push(4)
llist.push(5)
llist.push(3)

console.log("Created Linked list is:");
llist.printList();

llist.insertAfter(llist.head, 1)
console.log("After inserting Linked list is:");
llist.printList();