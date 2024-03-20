import './Subreddits.css';

import { setPageName } from '../../store/redditSlice';
import { useDispatch } from 'react-redux';

export const Subreddits = ({ setPageView, subRedditsData }) => {
    const dispatch = useDispatch();
    return (
        <div className='side-bar'>
            {
                subRedditsData.map((subReddit, i) => (
                    <a 
                        key={i} 
                        className='subreddit-category'
                        onClick={() => dispatch(setPageName(subReddit.data.display_name))}
                        href='#'>
                        {subReddit.data.display_name}
                        </a>
                ))
            }
        </div>
    )
};