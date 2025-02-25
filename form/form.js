/*
    Handles form submission
    Saves book to localStorage
    Redirects to library.html
 */

const myLibrary = JSON.parse(localStorage.getItem("myLibrary")) || [];

function Book(title, author, numPages) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
}

function addBookToLibrary(event) {
    event.preventDefault(); //Prevent form refresh

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const numPages = document.getElementById("numPages").value;

    //Technically the fields are marked as required
    if (!title || !author || !numPages) {
        alert("Please fill out all fields");
        return;
    }

    //Create and save book
    const newBook = new Book(title, author, numPages);
    myLibrary.push(newBook);
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));

    //Redirect to library page
    window.location.href = "../library/library.html";
}

//Add event listener after DOM loads
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('#book-fieldset input[type="submit"]').addEventListener("click", addBookToLibrary);
});