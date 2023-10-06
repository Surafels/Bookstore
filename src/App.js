import './App.css';
import { Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import NavList from './components/NavList';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <NavList />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
