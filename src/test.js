

import React, { useState } from 'react';

const MainComponent = () => {
  // State for managing input values and list of books
  const [searchInput, setSearchInput] = useState('');
  const [newBook, setNewBook] = useState({ title: '', author: '', year: '' });
  const [books, setBooks] = useState([]);
  const [order, setOrder] = useState({ key: 'title', reverse: false });

  // Function to add a new book
  const addBook = () => {
    if (newBook.title && newBook.author && newBook.year) {
      setBooks([...books, newBook]);
      setNewBook({ title: '', author: '', year: '' });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="container">
      <h1>AngularJS Practical Examples</h1>
      <div className="input-group">
        <span className="input-group-addon">
          <span className="glyphicon glyphicon-search"></span>
        </span>
        <input 
          type="text" 
          className="form-control" 
          value={searchInput} 
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <h3>A list of Books</h3>
      <ul className="list-group">
        {books.map((book, index) => (
          <li key={index} className="list-group-item">
            {book.title} <span className="badge">{book.author}</span>
          </li>
        ))}
      </ul>
      <select 
        className="form-control pull-right" 
        value={order.key} 
        onChange={(e) => setOrder({ ...order, key: e.target.value })}
      >
        <option value="title">Title</option>
        <option value="author">Author</option>
      </select>
      <div className="clearfix"></div>
      <h3>Add a new Book</h3>
      <div className="form-group">
        <label>Title</label>
        <input 
          type="text" 
          className="form-control" 
          value={newBook.title} 
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <label>Author</label>
        <input 
          type="text" 
          className="form-control" 
          value={newBook.author} 
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <label>Year</label>
        <input 
          type="number" 
          className="form-control" 
          value={newBook.year} 
          onChange={(e) => setNewBook({ ...newBook, year: parseInt(e.target.value) || '' })}
          required
        />
      </div>
      <button className="btn btn-success pull-right" onClick={addBook}>
        <span className="glyphicon glyphicon-plus-sign"></span> Add
      </button>
    </div>
  );
};

export default MainComponent;
