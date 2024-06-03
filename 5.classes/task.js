class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state = 100, type = null) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = state;
		this.type = type;
	};

	fix() {
		this.state *= 1.5
	};

	set state(newState) {
		if (newState < 0) {
			this._state = 0;
		}
		if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	};

	get state() {
		return this.state = this._state;
	}
};

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state = 100, type = "magazine") {
		super(name, releaseDate, pagesCount, state, type);
		this.type = "magazine";
	}
};

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount, state = 100, type = "book") {
		super(name, releaseDate, pagesCount, state, type);
		this.type = "book";
		this.author = author;
	}
};

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state = 100, type = "novel") {
		super(author, name, releaseDate, pagesCount, state, type);
		this.type = "novel";
	}
};

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state = 100, type = "fantastic") {
		super(author, name, releaseDate, pagesCount, state, type);
		this.type = "fantastic";
	}
};

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state = 100, type = "detective") {
		super(author, name, releaseDate, pagesCount, state, type);
		this.type = "detective";
	}
};

class Library {
	constructor(name, books) {
		this.name = name;
		this.books = [];
	};

	addBook(book) {
		if (this.state > 30) {
			this.books.push(book);
		}
	};

	findBookBy(type, value) {
		for (let i = 0; i < this.books.length; i++){
		  if (this.books[i][type] === value) {
			return this.books[i];
		  };
		};
		for (let i = 0; i < this.books.length; i++) {
		  if (this.books[i][type] !== value) {
			return null
		  };
		}
	};

	giveBookByName(bookName) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].name === bookName) {
				this.books.splice(i, 1);
				return this.books[i]
			};
			if (this.books[i].name !== bookName) {
				return null;
			};
		}
	};
};