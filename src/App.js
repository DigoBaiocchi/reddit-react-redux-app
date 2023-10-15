import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { useState } from 'react';

const listOfNames = ['Rachel', 'Rodrigo', 'Gambito','Jack'];

function App() {
  const [username, setUsername] = useState('New username');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUsername(value);
  }

  return (
    <div>
      <header>
        <nav className='nav-bar'>
          <a className='nav' href=''>Best</a>
          <a className='nav' href=''>Popular</a>
          <a className='nav' href=''>New</a>
        </nav>
        <div className='search-section'>
          <input id="search" className='search' onChange={handleChange}></input>
          <button className='search'd>Search</button>
        </div>
      </header>
      <main>
        <div className='post'>
          <div className='counter'>
            <p>500</p>
          </div>
          <div className='post-content'>
            <div className='post-content-username'>
            <p>{username}</p>
            </div>
            <div className='post-inner-content'>
            <p>title title title title title title title title title title title title title title title title title title title title title title title title title title title title title 
            title title title title title title title title title title title title title title title title title title title title title title title title title title title title title 
            </p>
            <img/>
            </div>
            <div className='post-comments'>
              <p>Comments</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
