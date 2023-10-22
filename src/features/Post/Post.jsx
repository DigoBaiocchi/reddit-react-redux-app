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
              <p>Comments</p>
            </div>
          </div>
        </Card>
    );
};