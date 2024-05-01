"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;

	if (d < 0) {
		return arr;
	} else if (d === 0) {
		arr = [-b / (2 * a)];
	} else if (d > 0) {
		arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
	};
	return arr;
	console.log(arr);
};

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let p = percent / 100 / 12;
	let s = amount - contribution;
	let paymet = s * (p + (p / (((1 + p) ** countMonths) - 1)));
	let totalAmount = paymet * countMonths;
	return +totalAmount.toFixed(2);
}5