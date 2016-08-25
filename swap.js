'use strict'

let swap = (array, i, j) => {
	let tmp = array[i]
	array[i] = array[j]
	array[j] = tmp
}

module.exports = swap;