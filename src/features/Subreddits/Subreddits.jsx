import './Subreddits.css';

import { setPageName } from '../../store/redditSlice';
import { useDispatch } from 'react-redux';

export const Subreddits = ({ subRedditsData }) => {
    const dispatch = useDispatch();
    return (
        <div className='side-bar'>
            {
                subRedditsData.map((subReddit, i) => (
                    <a 
                        key={i} 
                        className='subreddit-category'
                        onClick={() => dispatch(setPageName(subReddit.display_name))}
                        href='#'>
                        {subReddit.display_name}
                        </a>
                ))
            }
        </div>
    )
};