'use strict'

let swap = require('./swap');

// Best Case: O(n) - (nodes are already in order, checks each pair once)
// Worst & Average Cases: O(n^2) - (each value needs swapping with each other value for worst case)

let bubbleSort = (array) => {
	let swaps = 0
	for (let i=0; i<array.length - 1; i++) {
		if (array[i] > array[i + 1]) {
			swap(array, i, i + 1)
			swaps++
		}
	}

	// If the number of swaps is greater than zero, then the list is definitely not in the correct order yet, so we need to make recursive call to bubbleSort
	if (swaps > 0) {
		return bubbleSort(array)
	}
	return array
}

module.exports = bubbleSort;