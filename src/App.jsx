import './App.css';
import { useState } from 'react';

import { Header } from './features/Header/Header.jsx';
import { Post } from './features/Post/Post.jsx';

const listOfNames = ['Rachel', 'Rodrigo', 'Gambito','Jack'];

function App() {
  const [username, setUsername] = useState('New username');

  const handleChange = ({ target }) => {
    const { value } = target;
    setUsername(value);
  }

  return (
    <div>
      <Header handleChange={handleChange} />
      <main>
        <Post username={username} />
      </main>
    </div>
  );
}

export default App;
