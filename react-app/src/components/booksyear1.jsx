import React, { useState, useEffect } from "react";
import './booksyear1.css';

const BookCard = ({ book }) => {

    const [editedBook, setEditedBook] = useState(book);

    const bookName = book.name;

    const DeleteBook = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8000/del-book/', {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    bookName: bookName,
                }),
            });

            const data = await response.json();

            if (data.success) {
                console.log('Book has been deleted');
                window.location.reload(false);
            } else {
                console.log('Could not be deleted');
            }
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };

    const handleEdit = () => {
        const newAuthor = prompt("Enter new author:", editedBook.author);
        const newDate = prompt("Enter new date of publication:", editedBook.date);
        const newEdition = prompt("Enter new edition number:", editedBook.edition);
        const newPublisher = prompt("Enter new publisher:", editedBook.publisher);

        if (newAuthor !== null) {
            setEditedBook({
                ...editedBook,
                author: newAuthor,
                date: newDate,
                edition: newEdition,
                publisher: newPublisher,
            });

            // Call the handleEditBook function with the updated book
            handleEditBook({
                ...editedBook,
                author: newAuthor,
                date: newDate,
                edition: newEdition,
                publisher: newPublisher,
            });
        }
    };

    const handleEditBook = async (updatedBook) => {
        try {
            const response = await fetch('http://127.0.0.1:8000/edit-book/', {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedBook),
            });

            const data = await response.json();

            if (data.success) {
                console.log('Book updated successfully');
                window.location.reload(false)
                // Update the bookList state or refresh the data as needed
            } else {
                console.log('Failed to update book');
            }
        } catch (error) {
            console.error('Error updating book:', error);
        }
    };


    return (
        <div className="top-card" >
            {/* <img src={book.image} alt="Book" className="img-thumbnail" /> */}
            <div className="book-card" >
                <h5 >Subject: {book.name}</h5>
                <h5 >Author: {book.author}</h5>
                <h5 >Date of publication: {book.date}</h5>
                <h5 >Edition Number: {book.edition}</h5>
                <h5 >Publisher: {book.publisher}</h5>
                {/* <h5 >{book.name}</h5> */}
                {/* <p >Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <a href="#" className="btn btn-primary" onClick={handleEdit}>Edit</a>
                <a className="btn btn-primary" onClick={DeleteBook}>Delete</a>
            </div>
        </div>
    );
};

const HomePage = () => {

    const [bookList, setBookList] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/get-books/')
            .then(response => response.json())
            .then(data => setBookList(data))
            .catch(error => console.error('Error reading book data', error))
    }, []);

    const [bookName, setBookName] = useState('');
    // const [bookImage, setBookImage] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');
    const [bookDate, setBookDate] = useState('');
    const [bookEdition, setBookEdition] = useState('');
    const [bookHouse, setBookPublisher] = useState('');

    const AddBook = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8000/add-book/', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    bookName: bookName,
                    // bookImage: bookImage,
                    bookAuthor: bookAuthor,
                    bookDate: bookDate,
                    bookEdition: bookEdition,
                    bookHouse: bookHouse,
                }),
            });

            const data = await response.json();

            if (data.success) {
                console.log('New book added');
                window.location.reload(false);
            } else {
                console.log('Not added');
            }
        } catch (error) {
            console.error('Error adding book:', error);
        }
    };

    return (
        <div >
            <h1 style={{ marginLeft: "200px" }}>Welcome to the main page of Engineering-Bookhub</h1>
            <form onSubmit={AddBook}>
                <div >
                    <label htmlFor="bookName" className="label"></label>
                    <input type="text" name="bookName" id="bookName" placeholder="Book Name" className="form-control" onChange={(e) => setBookName(e.target.value)} />

                    {/* <label htmlFor="bookImage" className="label"></label>
                    <input type="file" name="bookImage" id="bookImage" placeholder="Upload Image" className="form-control" onChange={(e) => setBookImage(e.target.value)} /> */}

                    <label htmlFor="bookAuthor" className="label"></label>
                    <input type="text" name="bookAuthor" id="bookAuthor" placeholder="Book Author" className="form-control" onChange={(e) => setBookAuthor(e.target.value)} />

                    <label htmlFor="bookDate" className="label"></label>
                    <input type="date" name="bookDate" id="bookDate" placeholder="Date of publication" className="form-control" onChange={(e) => setBookDate(e.target.value)} />

                    <label htmlFor="bookEdition" className="label"></label>
                    <input type="text" name="bookEdition" id="bookEdition" placeholder="Edition Number" className="form-control" onChange={(e) => setBookEdition(e.target.value)} />

                    <label htmlFor="bookHouse" className="label"></label>
                    <input type="text" name="bookHouse" id="bookHouse" placeholder="Publication house" className="form-control" onChange={(e) => setBookPublisher(e.target.value)} />

                </div>
                <button type="submit" className="btn btn-primary upside">Add Books</button>
            </form>

            {bookList.map(book => (
                <BookCard key={book.name} book={book} />
            ))}
        </div>
    );
}

export default HomePage;
