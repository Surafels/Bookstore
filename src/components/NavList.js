import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const NavList = () => (
  <div className="nav-bar">
    <nav>
      <p className="nav-head">Bookstore CMS</p>
      <ul className="nav-list">
        <li className="book-link">
          <Link to="/">Books</Link>
        </li>
        <li className="category-link">
          <Link to="/Categories">Categories</Link>
        </li>
        <li className="person-link">
          <Link to="/Profile">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default NavList;
