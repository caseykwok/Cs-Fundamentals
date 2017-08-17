// Create the Queue Class

class Queue {

	constructor() {
		this.items = [];
	}

	// Adds an element to the end of the queue
	// Time Complexity: O(1)
	enqueue(element) {
		this.items.push(element);
	}

	// Removes and returns the first element from the queue
	// Time Complexity: O(n)
	dequeue() {
		this.items.shift();
	}

	// Returns the first element from the queue
	getFirst() {
		return this.items[0];
	}

	// Checks whether the queue is empty
	isEmpty() {
		return this.items.length === 0;
	}

	// Returns the size of the queue
	size() {
		return this.items.length;
	}

}

// Example

// Create an instance of the Queue
var newQueue = new Queue();
newQueue.enqueue("Ahmed");
newQueue.enqueue("Roger");
newQueue.enqueue("John");

console.log(newQueue.first);