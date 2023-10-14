import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBook, fetchBooks } from '../Redux/books/booksSlice';

const AddBtn = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const booksObject = useSelector((state) => state.books.books);
  const books = Object.values(booksObject);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="book-title"
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
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="fiction">fiction</option>
          <option value="fiction1">noble</option>
          <option value="faction3">noble2</option>
        </select>

        <button className="add-btn" type="submit">
          Add Book
        </button>
      </form>

      {books.map((book) => (
        <div key={book.id} />
      ))}
    </div>
  );
};

export default AddBtn;
