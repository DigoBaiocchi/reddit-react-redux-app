import './Post.css';
import { Card } from '../../components/Card/Card';

export const Post = (props) => {
    return (
        <Card>
          <div>
            <div className='counter'>
            <p>500</p>
            </div>
          </div>
          <div className='post-content'>
            <div className='post-content-username'>
            <p>{props.username}</p>
            </div>
            <div className='post-inner-content'>
              <p>{props.title}</p>
              <p>{props.content}</p>
              <img/>
            </div>
            <div className='post-comments'>
              <p>Comments</p>
            </div>
          </div>
        </Card>
    );
};