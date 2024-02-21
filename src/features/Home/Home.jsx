import { useState, useEffect } from 'react';

import { Header } from '../Header/Header.jsx';
import { Post } from '../Post/Post.jsx';

import { redditPageApi } from '../../api/redditApi';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState("home");

  const fetchApiData = async (pageName) => {
    const data = await redditPageApi(pageName);
    setPosts(data);
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
        console.log(page);
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
          <a href=''>Option 1</a>
          <a href=''>Option 2</a>
          <a href=''> Option 3</a>
        </div>
      </main>
    </div>
  );
}