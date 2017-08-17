// Create the Stack Class

class Stack {

	constructor() {
		this.items = [];
	}

	// Adds an element to the end of the stack
	// Time Complexity: O(1)
	push(element) {
		this.items.push(element);
	}

	// Removes and returns the last element from the stack
	// Time Complexity: O(1)
	pop(element) {
		this.items.pop(element);
	}

	// Returns the last element from the stack
	// Time Complexity: O(1)
	peek() {
		return this.items[this.items.length - 1];
	}

	// Checks whether the stack is empty
	isEmpty() {
		return this.items.length === 0;
	}

	// Sets the stack to an empty array
	clear() {
		this.items = [];
	}

}

// Example

// Create an instance of the Stack
var newStack = new Stack();
newStack.push(1);
newStack.push(2);
newStack.push(4);

console.log(newStack.peek());