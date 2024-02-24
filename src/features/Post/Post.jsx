import './Post.css';
import { Card } from '../../components/Card/Card';
import { 
  BsFillArrowUpCircleFill, 
  BsArrowUpCircle,
  BsArrowDownCircle,
  BsFillArrowDownCircleFill, 
} from "react-icons/bs";
import { useState } from 'react';

export const Post = (props) => {
    const [clickedValue, setclickedValue] = useState(0);

    const handleClick = (newValue) => {
      if (newValue === clickedValue) {
        setclickedValue(0);
      } else if (newValue === 1) {
        setclickedValue(1);
      } else {
        setclickedValue(-1);
      }
      
    }

    const handleUpVote = () => {
      if (clickedValue === 1) {
        return <BsFillArrowUpCircleFill className='up-arrow-vote' />;
      } else {
        return <BsArrowUpCircle />;
      }
    }

    const handleDownVote = () => {
      if (clickedValue === -1) {
        return <BsFillArrowDownCircleFill className='down-arrow-vote' />;
      } else {
        return <BsArrowDownCircle />;
      }
    }

    return (
        <Card>
          <div>
            <div className='counter'>
              <button onClick={() => handleClick(1)}>{handleUpVote()}</button>
              <p>{props.ups}</p>
              <button onClick={() => handleClick(-1)}>{handleDownVote()}</button>
            </div>
          </div>
          <div className='post-content'>
            <div className='post-content-username'>
            <p>Posted by {props.username}</p>
            </div>
            <div className='post-inner-content'>
              <p className='post-title'>{props.title}</p>
              {
                props.content && <p className='post-text-content'>{props.content}</p>
              }
              
              {
                props.url.includes("//i.redd.it") && <img src={props.url} />
              }
              {
                props.url.includes("//v.redd.it") && <p>Video not available :-\</p>
              }
              <img/>
            </div>
            <div className='post-comments'>
              <a className='post-comments-button' href=''>{props.numComments} Comments</a>
            </div>
          </div>
        </Card>
    );
};