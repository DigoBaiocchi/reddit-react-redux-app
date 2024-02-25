import './Subreddits.css';

export const Subreddits = ({ setPageView, subRedditsData }) => {
    return (
        <div className='side-bar'>
            {
                subRedditsData.map((subReddit, i) => (
                    <a 
                        key={i} 
                        className='subreddit-category'
                        onClick={() => setPageView(subReddit.data.display_name)}
                        href='#'>
                        {subReddit.data.display_name}
                        </a>
                ))
            }
        </div>
    )
};