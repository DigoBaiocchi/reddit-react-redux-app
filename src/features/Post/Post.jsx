import './Post.css';
import { Card } from '../../components/Card/Card';

export const Post = (props) => {
    return (
        <Card>
          <div>
            <div className='counter'>
              <p>{props.ups}</p>
            </div>
          </div>
          <div className='post-content'>
            <div className='post-content-username'>
            <p>Posted by {props.username}</p>
            </div>
            <div className='post-inner-content'>
              <p className='post-title'>{props.title}</p>
              <p className='post-text-content'>{props.content}</p>
              <img/>
            </div>
            <div className='post-comments'>
              <a className='post-comments-button' href=''>{props.numComments} Comments</a>
            </div>
          </div>
        </Card>
    );
};