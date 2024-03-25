import { useState, useEffect } from 'react';

import { Post } from '../Post/Post.jsx';
import { Subreddits } from '../Subreddits/Subreddits.jsx';

import { 
  fetchPosts,
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
  
  useEffect(() => {
    fetchApiData();
    subRedditsNames();
  }, [pageName]);

  return (
    <>
      <div>
        <h1>Posts for "{pageName}"</h1>
        {
          isLoading ? <h1>Data is loading</h1> :
            selectedPosts.map((post, i) => (
                <Post 
                  key={i}
                  ups={post.ups - post.downs}
                  username={post.author}
                  title={post.title}
                  content={post.selftext}
                  numComments={post.num_comments}
                  url={post.url}
                />
              )
            )
        }
      </div>
      <Subreddits subRedditsData={selectedSubReddits} />
    </>
  );
}