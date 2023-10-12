import { useSelector, useDispatch } from 'react-redux';
import InputItem from './Form';
import { removeBook } from '../Redux/books/booksSlice';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <>
      <div>
        <ul>
          {books.map((book) => (
            <li
              key={book.item_id}
            >
              {book.category}
              {book.title}
              {book.author}

              <li key={book.id}>
                <button type="button" onClick={() => handleRemove(book.id)}>Remove</button>
              </li>

            </li>

          ))}

        </ul>
        <ul />
      </div>
      <InputItem />
    </>
  );
};

export default BookList;
