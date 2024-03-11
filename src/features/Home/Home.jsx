import { useState, useEffect } from 'react';

import { Header } from '../Header/Header.jsx';
import { Post } from '../Post/Post.jsx';
import { Subreddits } from '../Subreddits/Subreddits.jsx';
import {
  fetchPosts, 
  selectFilteredPosts,
} from '../../store/redditSlice.js';

import { redditPageApi } from '../../api/redditApi';
import { useSelector } from 'react-redux';

export const Home = () => {
  // const reddit = useSelector((state) => state.reddit);
  // const [posts, setPosts] = useState([]);
  const posts = useSelector(selectFilteredPosts)
  const [subRedditsData, setSubRedditsData] = useState([]);
  const [page, setPage] = useState("home");
  const [isLoading, setIsLoading] = useState(false);

  const fetchApiData = async (pageName) => {
    const data = await redditPageApi(pageName);
    // setPosts(data);
  };

  const subRedditsNames = async () => {
    const data = await redditPageApi("subreddits");
    setSubRedditsData(data);
  };

  const setPageView = (pageView) => {
    setPage(pageView);
  };

  const getSearchData = async (searchData) => {
    // setPosts(await searchData);
  }
  
  useEffect(() => {
    setIsLoading(true);
    // fetchApiData(page);
    dispatchEvent(fetchPosts('home'))
    // subRedditsNames();
    setIsLoading(false);
  }, [page]);

  if (posts.length === 0 || !posts) {
    return <h1>No posts available</h1>
  }

  return (
    <>
    <div>
      <div>
      {
        isLoading ? <h1>Data is loading</h1> :
          posts.map((post, i) => (
              <Post 
                key={i}
                ups={post.ups - post.data.downs}
                username={post.author}
                title={post.title}
                content={post.selftext}
                numComments={post.num_comments}
                url={post.url}
              />)
          )
      }
      </div>
    </div>
    {/* <Subreddits setPageView={setPageView} subRedditsData={subRedditsData} /> */}
    </>
  );
}