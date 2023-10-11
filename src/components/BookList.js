import { useSelector } from 'react-redux';
import InputItem from './Form';

const BookList = () => {
  const books  = useSelector((state) => state.books.books);

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
