import './App.css';
import BookContent from './BookContent';
import BookList from './BookList';
import Nav from './Nav';




function App() {
  return (
    <div className="App">
        <Nav/>
        <BookContent/>
        <BookList/>
    </div>
  );
}

export default App;

