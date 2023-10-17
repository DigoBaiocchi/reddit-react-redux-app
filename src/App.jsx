import './App.css';
import { useState } from 'react';
import { Card } from './components/Card/Card.jsx';
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
        <Card>
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
        </Card>
      </main>
    </div>
  );
}

export default App;
