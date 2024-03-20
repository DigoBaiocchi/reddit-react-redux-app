import { useState, useEffect } from 'react';

import { Header } from '../Header/Header.jsx';
import { Post } from '../Post/Post.jsx';
import { Subreddits } from '../Subreddits/Subreddits.jsx';

import { 
  fetchPosts, 
  setPosts,
  setPageName,
  selectPosts,
  selectPageName,
  selectSubReddits,
} from '../../store/redditSlice.js';
import { useDispatch, useSelector } from 'react-redux';

export const Home = () => {
  const dispatch = useDispatch();
  const pageName = useSelector(selectPageName);
  const selectedPosts = useSelector(selectPosts);
  const selectedSubReddits = useSelector(selectSubReddits);
  const [isLoading, setIsLoading] = useState(false);

  const fetchApiData = () => {
    setIsLoading(true);
    dispatch(fetchPosts(pageName));
    setIsLoading(false);
  };

  const subRedditsNames = () => {
    dispatch(fetchPosts("subreddits"));
  };

  const setPageView = (pageView) => {
    dispatch(setPageName(pageView));
  };

  const getSearchData = async (searchData) => {
    setPosts(await searchData);
  }
  
  useEffect(() => {
    fetchApiData();
    subRedditsNames();
  }, [pageName]);

  return (
    <div>
      <Header 
        setPageView={setPageView} 
        page={pageName} 
        searchData={getSearchData}
      />
      <main>
        <div>
          <div>
          {
            isLoading ? <h1>Data is loading</h1> :
              selectedPosts.map((post, i) => (
                  <Post 
                    key={i}
                    ups={post.data.ups - post.data.downs}
                    username={post.data.author}
                    title={post.data.title}
                    content={post.data.selftext}
                    numComments={post.data.num_comments}
                    url={post.data.url}
                  />
                )
              )
          }
          </div>
        </div>
        <Subreddits setPageView={setPageView} subRedditsData={selectedSubReddits} />
      </main>
    </div>
  );
}