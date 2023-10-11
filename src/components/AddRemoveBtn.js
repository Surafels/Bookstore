import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBook, removeBook } from '../Redux/books/booksSlice';

const AddBtn = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(newBook));
    setTitle(' ');
    setAuthor(' ');
  };

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit">
          Add Book
        </button>
      </form>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <button type="button" onClick={() => handleRemove(book.id)}>Remove</button>
          </li>

        ))}
      </ul>
    </div>
  );
};

export default AddBtn;
