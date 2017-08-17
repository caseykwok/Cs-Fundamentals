// Selection sort has a quadratic O(n^2) run time

// Case 1 - Small Set
var arraySize = 40;

// Case 2 - Large Set
// var arraySize = 40000;

// Push random elements into the array
// Number of elements in array is equivalent to arraySize
// Each element is any number from 0 to the arraySize
var array = [];
for (var i = 0; i < arraySize; i++) {
	var randomNumber = Math.floor(Math.random() * arraySize);
	array.push(randomNumber);
}

// First argument is an array
// Swapping the value of two elements in the array that are adjacent to each other 
function swap(items, firstIndex, secondIndex) {
	var temp = items[firstIndex];
	items[firstIndex] = items[secondIndex];
	items[secondIndex] = temp;
}

// Argument is an array
function selectionSort(items) {

	var len = items.length;
	var min;

	for (var i = 0; i < len; i++) {

		// Set index of minimum to this position (current index)
		min = i;

		// Check the rest of the array to see if anything is smaller
		// Trying to find the smallest number after this position (current index)
		for (var j = i + 1; j < len; j++) {
			if (items[j] < items[min]) {
				min = j;
			}
		}

		// If the current position isn't the minimum, swap it and the minimum so the minimum goes before the current position
		if (i !== min) {
			swap(items, i, min);
		}
	}

	return items;
}

// Example
console.log("Pre Sort: ", array.join(" "));
console.log("---------------------------------");
console.log("Post Sort: ", selectionSort(array).join(" "));