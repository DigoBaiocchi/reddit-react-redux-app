import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { useState } from 'react';
import { Post } from './components/Post/Post.jsx';
import { Header } from './features/Header/Header.jsx';

const listOfNames = ['Rachel', 'Rodrigo', 'Gambito','Jack'];

function App() {
  const [username, setUsername] = useState('New username');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUsername(value);
  }

  return (
    <div>
      <Header handleChange={handleChange} />
      <main>
        <Post>
          <div className='counter'>
            <p>500</p>
          </div>
          <div className='post-content'>
            <div className='post-content-username'>
            <p>{username}</p>
            </div>
            <div className='post-inner-content'>
            <p>Text goes here</p>
            <img/>
            </div>
            <div className='post-comments'>
              <p>Comments</p>
            </div>
          </div>
        </Post>
      </main>
    </div>
  );
}

export default App;
