import { Link } from 'react-router-dom';

const NavList = () => (
  <div className="nav-bar">
    <nav>
      <p>Bookstore CMS</p>
      <ul className="nav-list">
        <li className="book-link">

          <Link to="/">Books</Link>
        </li>
        <li className="category-link">
          <Link to="/Categories">Categories </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default NavList;
