/*
    Loads books from localStorage
    Displays books as cards
    Allows users to remove books
*/

const myLibrary = JSON.parse(localStorage.getItem("myLibrary")) || [];
document.addEventListener('DOMContentLoaded', function() {


    console.log(myLibrary);
    const libraryContainer = document.getElementById("library-container");
    console.log(libraryContainer);

    if (myLibrary.length === 0) {
        libraryContainer.innerHTML = "<p>No books in library</p>";
        return;
    }

    //Display each book as a card
    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.innerHTML = `
            <h2>${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.numPages}</p>
            <button onclick="removeBook(${index})">Remove</button>
        `;
        libraryContainer.appendChild(bookCard);
    });
});

function removeBook(index) {
    let myLibrary = JSON.parse(localStorage.getItem("myLibrary")) || [];
    myLibrary.splice(index, 1);
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
    location.reload();  //Refresh page to update UI
}