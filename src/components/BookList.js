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
      <div className="books">
        <div className="book">
          <ul className="book-info">
            {books.map((book) => (
              <li key={book.id}>
                <div className="book-details">
                  <div className="book-info-column">
                    <span className="book-category">{book.category}</span>
                    <span className="book-title">{book.title}</span>
                    <span className="book-author">{book.author}</span>
                  </div>
                  <div className="book-buttons">
                    <button className="comment-btn" type="button">
                      Comment
                    </button>
                    <div className="vertical-divider" />
                    <button className="remove-btn" type="button" onClick={() => handleRemove(book.id)}>
                      Remove
                    </button>
                    <div className="vertical-divider" />
                    <button className="edit-btn" type="button">
                      Edit
                    </button>

                  </div>
                </div>
                {/* <div className="progressBar" /> */}
                <div className="progress-container">
                  <div className="circular-progress-container">
                    <div className="circular-progress" />
                  </div>
                  <div className="progress">
                    <p className="percent">
                      {Math.floor(Math.random() * 100)}
                      %
                    </p>
                    <p className="completed">Completed</p>
                  </div>
                  <div className="progress-divider" />
                  <div className="current-chapter-container">
                    <p className="chapter-abel">CURRENT CHAPTER</p>
                    <p className="chapter-number">
                      <span>Chapter: </span>
                      {Math.floor(Math.random() * 10 + 1)}
                      <span> Introduction</span>
                    </p>
                    <button type="button" className="progBtn">UPDATE PROGRESS</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <InputItem />
    </>
  );
};

export default BookList;
