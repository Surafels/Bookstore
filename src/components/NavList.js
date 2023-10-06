import { Link } from 'react-router-dom';

const NavList = () => (
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
  </div>
);

export default NavList;
