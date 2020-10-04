class UI {
  // Clear fields
  clearFields() {
    getOneElement("#title").value = "";
    getOneElement("#author").value = "";
    getOneElement("#isbn").value = "";
  }

  // Delete Book
  deleteBook(target) {
    console.log(target);
    if (target.className === "delete") {
      // on supprime le <tr></tr> du tableau

      target.parentElement.parentElement.remove();
    }
  }

  // Show alert
  showAlert(message, className) {
    //create a div
    const div = document.createElement("div");

    // Add Classes
    div.className = `alert ${className}`;

    // Add text
    div.appendChild(document.createTextNode(message));

    // placer le message d'erreur au dessus de form
    const form = getOneElement("#book-form");
    const container = getOneElement(".container");
    container.insertBefore(div, form);

    // activer le timeout
    setTimeout(function () {
      getOneElement(".alert").remove();
    }, 3000);
  }

  // Add Book to List
  addBookToList(book) {
    const list = getOneElement("#book-list");

    // create tr element
    const row = document.createElement("tr");

    // insert td element
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `;
    list.appendChild(row);
  }
}
