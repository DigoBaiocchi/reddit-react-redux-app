import { useState, useEffect } from 'react';

import { Header } from '../Header/Header.jsx';
import { Post } from '../Post/Post.jsx';
import { Subreddits } from '../Subreddits/Subreddits.jsx';

import { redditPageApi } from '../../api/redditApi';

import { 
  fetchPosts, 
  setPosts,
  setPageName,
  setSubReddits,
  selectPosts,
  selectPageName,
  selectSubReddits,
} from '../../store/redditSlice.js';
import { useDispatch, useSelector } from 'react-redux';

export const Home = () => {
  const [subRedditsData, setSubRedditsData] = useState([]);
  const [page, setPage] = useState("home");
  const pageName = useSelector(selectPageName);
  const selectedPosts = useSelector(selectPosts);
  const selectedSubReddits = useSelector(selectPosts);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const fetchApiData = () => {
    setIsLoading(true);
    dispatch(fetchPosts(pageName));
    setIsLoading(false);
  };

  const subRedditsNames = async () => {
    const data = await redditPageApi("subreddits");
    dispatch(fetchPosts("subreddits"));
    setSubRedditsData(data);
  };

  const setPageView = (pageView) => {
    dispatch(setPageName(pageView));
    setPage(pageView);
  };

  const getSearchData = async (searchData) => {
    setPosts(await searchData);
  }
  
  useEffect(() => {
    fetchApiData();
    subRedditsNames();
    console.log(selectedSubReddits[0]);
    console.log(selectedPosts[0]);
  }, [pageName]);

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
              selectedPosts.map((post, i) => (
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