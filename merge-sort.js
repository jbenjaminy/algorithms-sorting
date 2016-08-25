'use strict'

// Best, Average and Worst Cases: O(nlog(n)) - (significantly better than bubble sort's O(n^2))

let mergeSort = (array) => {
	if (array.length <=1) {
		return array
	}

	// divide and conquer approach
	let middle = Math.floor(array.length / 2)
	let left = array.slice(0, middle)
	let right = array.slice(middle, array.length)

	left = mergeSort(left)
	right = mergeSort(right)
	return merge(left, right, array)
}

let merge = (left, right, array) => {
	let leftIndex = 0
	let rightIndex = 0
	let outputIndex = 0

	// To merge the two lists you just keep choosing the lowest value from the left or right arrays which hasn't already been added to the output array. When one of the arrays is empty then you just add all of the remaining values from the other to the array.
	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			array[outputIndex++] = left[leftIndex++]
		} else {
			array[outputIndex++] = right[rightIndex++]
		}
	}

	for (let i=leftIndex; i<left.length; i++) {
		array[outputIndex++] = left[i]
	}

	for (let i=rightIndex; i<right.length: i++) {
		array[outputIndex++] = right[i]
	}
	return array
}

module.exports = mergeSort;