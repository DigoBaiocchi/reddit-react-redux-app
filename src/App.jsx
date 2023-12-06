import './App.css';
import { useState, useEffect } from 'react';

import { Header } from './features/Header/Header.jsx';
import { Post } from './features/Post/Post.jsx';

import { homePageRedditApi } from './api/redditApi';

function App() {
  const [posts, setPosts] = useState([]);

  const fetchApiData = async () => {
    const data = await homePageRedditApi();
    setPosts(data);
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
      <Header />
      <main>
        <div>
          <div>
          {
            posts.map((post) => (
                <Post 
                  ups={formatNumber(post.data.ups)}
                  username={post.data.author}
                  title={post.data.title}
                  content={post.data.selftext}
                  numComments={formatNumber(post.data.num_comments)}
                  url={post.data.url}
                />)
            )
          }
          </div>
        </div>
        <div className='side-bar'>
          <a href=''>Option 1</a>
          <a href=''>Option 2</a>
          <a href=''> Option 3</a>
        </div>
      </main>
    </div>
  );
}

export default App;
