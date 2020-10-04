// Local storage class
class Store {
  // recupere la liste des livres du local storage
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }

  // display books
  static displayBooks() {
    const books = Store.getBooks();

    // Add book to UI
    books.forEach(function (book) {
      const ui = new UI();

      ui.addBookToList(book);
    });
  }

  // Add
  static addBook(book) {
    console.log("Store.addBook()");
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  // delete book
  static removeBook(isbn) {
    const books = Store.getBooks();

    // Add book to UI
    books.forEach(function (book, index) {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
  }
}
