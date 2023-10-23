import './App.css';
import { useState, useEffect } from 'react';

import { Header } from './features/Header/Header.jsx';
import { Post } from './features/Post/Post.jsx';

import { redditApi } from './api/redditApi';

function App() {
  const [posts, setPosts] = useState([]);
  

  const handleChange = ({ target }) => {
    const { value } = target;
  }

  const fetchApiData = () => {
    return fetch('https://www.reddit.com/.json')
      .then(data => data.json())
      .then((data) => setPosts(data.data.children));
  };

  const formatNumber = (number) => {
    const checkForMoreThanFourDigits = number / 1000 >= 1;
    if (checkForMoreThanFourDigits) {
      return `${(number / 1000).toFixed(1)}k`;
    }
    return number;
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <div>
      <Header handleChange={handleChange} />
      <main>
        {
          posts.map((post) => (
              <Post 
                ups={post.data.ups}
                username={post.data.author}
                title={post.data.title}
                content={post.data.selftext}
                numComments={formatNumber(post.data.num_comments)}
              />)
          )
        }
        
      </main>
    </div>
  );
}

export default App;
