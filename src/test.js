import React, { useState } from 'react';

const MainComponent = () => {
    const [searchInput, setSearchInput] = useState('');
    const [newBook, setNewBook] = useState({ title: '', author: '', year: '' });
    const [books, setBooks] = useState([]);
    const [order, setOrder] = useState({ key: 'title', reverse: false });

    const addBook = () => {
        if (newBook.title && newBook.author && newBook.year) {
            setBooks([...books, newBook]);
            setNewBook({ title: '', author: '', year: '' });
        } else {
            // It's better to handle form validation within the form submit event
            // alert('Please fill in all fields');
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        addBook();
    };

    const removeBook = (index) => {
        const updatedBooks = [...books];
        updatedBooks.splice(index, 1);
        setBooks(updatedBooks);
    };

    const editBook = (index, updatedBook) => {
        const updatedBooks = [...books];
        updatedBooks[index] = updatedBook;
        setBooks(updatedBooks);
    };

    return (
        <div className="container">
            <div className="input-group">
                <span className="input-group-addon">
                    <i className="glyphicon glyphicon-search"></i>
                </span>
                <input type="text" className="form-control" placeholder="Search for a book..."
                    value={searchInput} onChange={(e)=> setSearchInput(e.target.value)}
                />
            </div>
            <h3>A list of Books</h3>
            <ul className="list-group">
                {books
                .filter(book => book.title.toLowerCase().includes(searchInput.toLowerCase()))
                .map((book, index) => (
                <li key={index} className="list-group-item">
                    {book.title} <span className="badge">{book.author}</span> - {book.year}
                    <button onClick={() => removeBook(index)} className="btn btn-danger">Remove</button>
                    <button onClick={() => editBook(index, { title: 'Updated Title', author: 'Updated Author', year: 'Updated Year' })} className="btn btn-primary">Edit</button>
                </li>
                ))}
            </ul>
            <select className="form-control" value={order.key} onChange={(e)=> setOrder({ ...order, key: e.target.value })}>
                <option value="title">Title</option>
                <option value="author">Author</option>
            </select>
            <h3>Add a new Book</h3>
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" value={newBook.title} onChange={(e)=> setNewBook({ ...newBook,
                    title: e.target.value })}
                    required
                    />
                </div>
                <div className="form-group">
                    <label>Author</label>
                    <input type="text" className="form-control" value={newBook.author} onChange={(e)=> setNewBook({ ...newBook,
                    author: e.target.value })}
                    required
                    />
                </div>
                <div className="form-group">
                    <label>Year</label>
                    <input type="number" className="form-control" value={newBook.year} min="0"
                        onChange={(e)=> setNewBook({ ...newBook, year: e.target.value })}
                    required
                    />
                </div>
                <button type="submit" className="btn btn-success">
                    Add
                </button>
            </form>
        </div>
    );
};

export default MainComponent;
