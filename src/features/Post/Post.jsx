import './Post.css';
import { Card } from '../../components/Card/Card';
import { 
  BsFillArrowUpCircleFill, 
  BsArrowUpCircle,
  BsArrowDownCircle,
  BsFillArrowDownCircleFill, 
} from "react-icons/bs";
import { useEffect, useState } from 'react';

export const Post = (props) => {
    const [clickedValue, setclickedValue] = useState(0);
    const [totalVotes, setTotalVotes] = useState(props.ups);

    const handleClick = (newValue) => {
      if (newValue === clickedValue) {
        setTotalVotes(props.ups);
        setclickedValue(0);
      } else if (newValue === 1) {
        setTotalVotes(props.ups + 1);
        setclickedValue(1);
      } else {
        setTotalVotes(props.ups - 1);
        setclickedValue(-1);
      }      
    };

    const handleUpVote = () => {
      if (clickedValue === 1) {
        return <BsFillArrowUpCircleFill className='up-arrow-vote' />;
      } else {
        return <BsArrowUpCircle />;
      }
    };

    const handleDownVote = () => {
      if (clickedValue === -1) {
        return <BsFillArrowDownCircleFill className='down-arrow-vote' />;
      } else {
        return <BsArrowDownCircle />;
      }
    };

    const formatNumber = (number) => {
      const checkForMoreThanFourDigits = number / 1000 >= 1;
      if (checkForMoreThanFourDigits) {
          return `${(number / 1000).toFixed(1)}k`;
      }
      return number;
    };

    useEffect(() => {
      setTotalVotes(props.ups);
      setclickedValue(0);
    }, [props]);

    return (
        <Card>
          <div>
            <div className='counter'>
              <button onClick={() => handleClick(1)}>{handleUpVote()}</button>
              <p>{formatNumber(totalVotes)}</p>
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