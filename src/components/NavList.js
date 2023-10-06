import { Link, Route, Routes } from 'react-router-dom';
import BookList from './BookList';
import Categories from './Categories';

const NavList = () => {
    return (
  <div>
    <nav>
      <p>Bookstore CMS</p>
      <ul>
        <li>
          <Link to="/">Books</Link>
        </li>
        <Link to="/Categories">Categories </Link>
      </ul>
    </nav>
    <Routes>
      <Route path="/BookList" element={<BookList />} />
      <Route path="/Categories" element={<Categories />} />
    </Routes>
  </div>
    )
};

export default NavList;
