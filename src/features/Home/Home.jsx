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
    dispatchEvent(fetchPosts())
    subRedditsNames();
    setIsLoading(false);
  }, [page]);

  return (
    <div>
      <Header 
        setPageView={setPageView} 
        page={page} 
        searchData={getSearchData}
      />
      <main>
        <div>
          <div>
          {
            isLoading ? <h1>Data is loading</h1> :
              posts.map((post, i) => (
                  <Post 
                    key={i}
                    ups={post.data.ups - post.data.downs}
                    username={post.data.author}
                    title={post.data.title}
                    content={post.data.selftext}
                    numComments={post.data.num_comments}
                    url={post.data.url}
                  />)
              )
          }
          </div>
        </div>
        <Subreddits setPageView={setPageView} subRedditsData={subRedditsData} />
      </main>
    </div>
  );
}