// Binary search only works when the array of interest is sorted (alphabetically, numerically)

function binarySearch(arr, searchElement) {

	// Set starting values
	var currentElement;
	var currentIndex;
	var maxIndex = arr.length - 1;
	var minIndex = 0;

	while (minIndex <= maxIndex) {

		// Get a position near the middle
		currentIndex = Math.floor((minIndex + maxIndex) / 2);

		// Get the element at that index
		currentElement = arr[currentIndex];
		console.log("Start Index: ", minIndex);
		console.log("End Index: ", maxIndex);
		console.log("Current Element: ", currentElement);

		// If the search element is greater than the current element, look above this value
		if (currentElement < searchElement) {
			minIndex = currentIndex + 1;
		// If the search element is less than the current element, look below this value
		} else if (currentElement > searchElement) {
			maxIndex = currentIndex - 1;
		// If the search element is equal to the current element, we found the element we are looking for
		} else {
			console.log("Current Index: ", currentIndex);
			console.log("Current Element: ", currentElement);
			console.log("-----------");
			return currentIndex;
		}
	}
	return false;
}

// Example
var arr = [1, 23, 43, 56, 77, 89, 211, 212, 789, 972, 1001, 4567, 4599, 83784];
var searchElement = 77;

binarySearch(arr, searchElement);
