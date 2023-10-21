// Insert a Node at Front/Beginning of a Linked List

// Input: LinkedList = 2->3->4->5, NewNode = 1
// Output: LinkedList = 1->2->3->4->5

// Input: LinkedList = , NewNode = 1
// Output: LinkedList = 1
class Node{
  constructor(data){
    this.data = data
    this.next = this.next
  }
}

// Given a reference (pointer to pointer)
// to the head of a list and an int, inserts
// a new node on the front of the list.

function insertAtFront(head_ref, new_data){
  // create a new node
  const new_node = new Node(new_data)
  // console.log("new+node",new_node);

  // 2. Make the new node point to the current head
  new_node.next = head_ref[0]
  
  head_ref[0] = new_node

}
function printList(node){
  let current = node
  while(current !== null){
    console.log(" ", current.data);
    current = current.next
  }
  console.log("\n");
}



// Driver code
function main() {
	// Start with an empty list
	const head = [null]; // Use an array to simulate a pointer to pointer

	// Insert elements at the beginning
	insertAtFront(head, 1);
	insertAtFront(head, 2);
	insertAtFront(head, 3);
	insertAtFront(head, 4);
	insertAtFront(head, 5);
	insertAtFront(head, 6);

	console.log("After inserting Nodes at their front:", );
	// The nodes will be: 6 5 4 3 2 1
	printList(head[0]);
}

main();