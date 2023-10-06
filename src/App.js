import './App.css';
import InputItem from './components/Form';
import BookList from './components/BookList';
import NavList from './components/NavList';

function App() {
  return (
    <div className="App">
      <NavList />
      <InputItem />
      <BookList />
    </div>
  );
}

export default App;
