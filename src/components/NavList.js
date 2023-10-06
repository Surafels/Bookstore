import { Link, Route, Routes } from 'react-router-dom';

const NavList = () => {

    return (
        <div>
            <nav>
                <p>Bookstore CMS</p>
                <ul>
<li>
    <Link to = "/">Books</Link>
</li>
<Link to ="/Categories">Catagories </Link>
                </ul>
            </nav>
            <Routes>
                <Route path='' />
                <Route path = "/" />
            </Routes>
        </div>
    );
}

export default NavList;