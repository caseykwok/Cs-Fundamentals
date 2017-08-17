// Insertion sort moves elements into their desired location more quickly.
// It doesn't have to loop through the entire set of numbers each time to move a single element.
// Insertion sort has a quadratic O(n^2) run time

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
// Looks at every element left of a particular position
// If the value at that position is less than the value at that position before it, swap the two
// If not, don't swap the two
// Keep comparing until that position 1) does not get swapped or 2) reaches the beginning of the array
function selectionSort(items) {

	// For each item in the array
	for (var i = 1; i < items.length; i++) {

		var j = i;

		// Compare the item to every item before it
		// If the value of that item is less than the value of that item before it, swap the two
		while (j > 0 && items[j-1] > items[j]) {
			swap(items, j-1, j);
			j--;
		}
	}

	return items;
}

// Example
console.log("Pre Sort: ", array.join(" "));
console.log("---------------------------------");
console.log("Post Sort: ", selectionSort(array).join(" "));