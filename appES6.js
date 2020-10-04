// DOM load event
document.addEventListener("DOMContentLoaded", Store.displayBooks);

// Event Listener for add a book
const bookForm = getOneElement("#book-form");
bookForm.addEventListener("submit", function (e) {
  const title = getOneElement("#title").value;
  const author = getOneElement("#author").value;
  const isbn = getOneElement("#isbn").value;

  // on cree un book
  const book = new Book(title, author, isbn);

  // On cree un objet UI
  const ui = new UI();

  //validation UI
  if (title === "" || author === "" || isbn === "") {
    // erreur
    let errorMsg = "Please fill in all fields";
    ui.showAlert(errorMsg, "error");
  } else {
    // add book to list
    ui.addBookToList(book);

    // add book to Local storage
    // Store n'a que des methodes statiques
    console.log("Store.addBook()");
    Store.addBook(book);

    // show success
    ui.showAlert("Book Added!", "success");

    // clear list
    ui.clearFields();
  }

  e.preventDefault();
});

// Event Listener for delete
const bookList = getOneElement("#book-list");
bookList.addEventListener("click", function (e) {
  // instantiate UI
  const ui = new UI();

  // delete book
  ui.deleteBook(e.target);
  // console.log(e.target);

  // remove from LS. la cle c'est l'ISBN
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // show message
  ui.showAlert("Book Removed!", "success");

  e.preventDefault();
});
