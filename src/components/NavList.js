import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const NavList = () => (
  <div className="nav-bar">
    <nav>
      <p className="nav-head">Bookstore CMS</p>
      <ul className="nav-list">
        <li>
          <Link to="/" className="book-link">BOOKS</Link>
        </li>
        <li>
          <Link to="/Categories" className="category-link">CATEGORIES</Link>
        </li>
      </ul>
      <button type="button" className="person-link">
        <Link to="/Profile">
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </button>
    </nav>
  </div>
);

export default NavList;
