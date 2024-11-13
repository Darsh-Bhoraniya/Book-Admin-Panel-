import React, { useState, useEffect } from "react";
import "./Books.css"; // Import CSS for styling spinner

function Books() {
  const [books, setBooks] = useState([]); // Store books data
  const [loading, setLoading] = useState(true); // Loading state
  const [authors, setAuthors] = useState([]); // Add this line for author data
  const [bookTypes, setBookTypes] = useState([]);

  useEffect(() => {
    fetch("https://localhost:44395/api/Books/Getall")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("https://localhost:44395/api/Author/AuthorComboBox")
      .then((response) => response.json())
      .then((data) => {
        setAuthors(data); // Set the authors data here
        setLoading(false); // Stop loading after data is fetched
      });
  }, []);

  useEffect(() => {
    fetch("https://localhost:44395/api/BookType/Getall")
      .then((response) => response.json())
      .then((data) => {
        setBookTypes(data);
      });
  }, []);
  console.log(bookTypes);

  const DeleteBook = (bookID) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      fetch(`https://localhost:44395/api/Books/Delete/${bookID}`, {
        method: "DELETE",
      }).then(() => {
        setBooks(books.filter((book) => book.bookID !== bookID));
      });
    }
  };

  // Display loading spinner
  if (loading) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );
  }

  // Display error message
  // if (error) return <p>Error: {error}</p>;

  return (
    <table className="table table-striped table-hover mt-3">
      <thead className="thead-dark">
        <tr>
          <th>Book Name</th>
          <th>Title</th>
          <th>Author Name</th>
          <th>Type</th>
          <th>Price</th>
          <th>Published Date</th>
          <th>Created</th>
          <th>Modified</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => {
          const base64Image = book.displayImage
            ? `data:image/jpeg;base64,${book.displayImage}`
            : null;

          return (
            <tr key={book.bookID}>
              <td>{book.bookName}</td>
              <td>{book.bookTitle}</td>
              <td>
                {authors.find((auth) => auth.authorID === book.authorID)
                  ?.authorName || "Unknown Author"}
              </td>
              <td>
                {bookTypes.find((type) => type.typeID === book.typeID)
                  ?.typeName || "Unknown Type"}
              </td>

              <td>${book.price}</td>
              <td>{new Date(book.publishedDate).toLocaleDateString()}</td>
              <td>{new Date(book.created).toLocaleDateString()}</td>
              <td>{new Date(book.modified).toLocaleDateString()}</td>
              <td>
                {base64Image ? (
                  <img
                    src={base64Image}
                    style={{ maxWidth: "100px", height: "auto" }}
                  />
                ) : (
                  "No Image"
                )}
              </td>
              <td>
                <button className="btn btn-primary">Edit</button>
                <button
                  className="btn btn-danger"
                  style={{ marginLeft: "10px" }}
                  onClick={() => DeleteBook(book.bookID)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Books;
