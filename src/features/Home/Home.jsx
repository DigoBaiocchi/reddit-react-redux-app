import { useState, useEffect } from 'react';

import { Header } from '../Header/Header.jsx';
import { Post } from '../Post/Post.jsx';

import { redditPageApi } from '../../api/redditApi';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [subRedditsData, setSubRedditsData] = useState([]);
  const [page, setPage] = useState("home");

  const fetchApiData = async (pageName) => {
    const data = await redditPageApi(pageName);
    setPosts(data);
  };

  const subRedditsNames = async () => {
    const data = await redditPageApi("subreddits");
    setSubRedditsData(data);
  };

  const setPageView = (pageView) => {
      setPage(pageView);
    };
    
    const formatNumber = (number) => {
        const checkForMoreThanFourDigits = number / 1000 >= 1;
        if (checkForMoreThanFourDigits) {
            return `${(number / 1000).toFixed(1)}k`;
        }
        return number;
    };
    
    useEffect(() => {
        fetchApiData(page);
        subRedditsNames();
    }, [page]);

  return (
    <div>
      <Header setPageView={setPageView} page={page} />
      <main>
        <div>
          <div>
          {
            posts.map((post, i) => (
                <Post 
                  key={i}
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
          {
            subRedditsData.map((subReddit, i) => (
              <a 
                key={i} 
                onClick={() => setPageView(subReddit.data.display_name)}
                href='#'>
                  {subReddit.data.display_name}
                </a>
            ))
          }
        </div>
      </main>
    </div>
  );
}