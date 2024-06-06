// Задача 1

function parseCount(value) {
	let parseValue = Number.parseFloat(value);
	if (Number.isNaN(parseValue)) {
		throw new Error('Невалидное значение')
	}
	return parseValue
};

function validateCount(value) {
	try {
		return parseCount(value)
	} catch (error) {
		return error
	}
};

// Задача 2

class Triangle {
	constructor(a, b, c) {
		if (a + b < c || a + c < b || b + c < a) {
			throw new Error('Треугольник с такими сторонами не существует')
		};

		this.a = a;
		this.b = b;
		this.c = c;
	};

	get perimeter() {
		return this.a + this.b + this.c
	};

	get area() {
		let p = this.perimeter / 2;
		return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3)
	};
};

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c)
	} catch (error) {
		return {
			perimeter: 'Ошибка! Треугольник не существует',
            area: 'Ошибка! Треугольник не существует',
		}
	}
}