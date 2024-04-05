class BookRepository {
    constructor(bookFactory, dataKey) {
        this.bookFactory = bookFactory;
        this.dataKey = dataKey;

        this.booksStorageUrl = 'example://api.books-storage/books';
    }

    async getBooks() {
        const booksData = await fetch(this.booksStorageUrl)[this.dataKey];
        const books = booksData.map(this.bookFactory.createBook);
        return books;
    }
}

module.exports = BookRepository;
