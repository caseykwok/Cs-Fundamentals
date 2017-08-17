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

function quickSort(items) {

	// Base Case
	// Remember: All recursive functions have base case
	if (items.length <= 1) {
		return items;
	}

	// Get random pivot element and remove from array to add back later
	var pivot = items.splice(Math.floor(Math.random() * items.length), 1);

	// Create left array which will contain elements less than or equal to pivot
	// Create right array which will contain elements greater than pivot
	var left = [];
	var right = [];

	// Loop through the array and sort each element either to the left or right array
	items.forEach(function(item) {
		if (item <= pivot) {
			left.push(item);
		} else {
			right.push(item);
		}
	})

	// Get the result of recursively sorting the left array using quickSort (i.e. quickSort(left))
	// Join that with the pivot and the result of recursively sorting the right array using quickSort (i.e. quickSort(right))
	// Equivalent of `return quickSort(left) + pivot + quickSort(right)`
	return quickSort(left).concat(pivot, quickSort(right));

}

// Example
console.log("Pre Sort: ", array.join(" "));
console.log("---------------------------------");
console.log("Post Sort: ", quickSort(array).join(" "));


