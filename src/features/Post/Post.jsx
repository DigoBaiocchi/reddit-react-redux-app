import './Post.css';
import { Card } from '../../components/Card/Card';
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { BsArrowUpCircle } from "react-icons/bs";
import { useState } from 'react';

export const Post = (props) => {
    const [isClicked, setIsCliked] = useState();

    return (
        <Card>
          <div>
            <div className='counter'>
              <button><BsFillArrowUpCircleFill /></button>
              <p>{props.ups}</p>
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