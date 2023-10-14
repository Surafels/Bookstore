import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../Redux/books/booksSlice';
import InputItem from './Form';

const BookList = () => {
  const booksObject = useSelector((state) => state.books.books);
  const books = Object.values(booksObject);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <>
      <div>
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              {book.category}
              {book.title}
              {book.author}
              <button type="button" onClick={() => handleRemove(book.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
      <InputItem />
    </>
  );
};

export default BookList;
