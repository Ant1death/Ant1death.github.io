import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as MarkUp from './Comment.style';
import { useFindAuthorById } from 'src/utils/authorsUtils';
import { addLike, removeLike } from '../../redux/commentsSlice';
import formatDate from '../../utils/dateUtils';

interface CommentProps {
  id: number;
  avatar: string;
  username: string;
  createdAt: string;
  text: string;
  likes: number;
  childComments?: any[];
}

const Comment: FC<CommentProps> = ({ avatar, username, createdAt, text, likes, childComments, id }) => {
  const findAuthorById = useFindAuthorById();
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);

  const handleLikeToggle = () => {
    if (!liked) {
      dispatch(addLike(id));
      setLiked(true);
    } else {
      dispatch(removeLike(id));
      setLiked(false);
    }
  };
  const renderChildComments = (props: { author: number; id: number; created: string; text: string; likes: number; }) => { {
      const author = findAuthorById(props.author);
      return (
        <Comment
          key={props.id}
          avatar={author?.avatar || ''}
          username={author ? author.name : 'Unknown Author'}
          createdAt={formatDate(props.created)}
          text={props.text}
          likes={props.likes}
          id={props.id}
        />
      );
    };
  };
  return (
    <MarkUp.CommentContainer>
      <MarkUp.Avatar src={avatar} />
      <MarkUp.CommentContent>
        <MarkUp.CommentHeader>
          <MarkUp.Username>{username}</MarkUp.Username>
          <MarkUp.CreatedAt>{formatDate(createdAt)}</MarkUp.CreatedAt>
          <MarkUp.Text>{text}</MarkUp.Text>
        </MarkUp.CommentHeader>

        <MarkUp.ChildComments>
          {childComments?.map(child => (
            renderChildComments(child)
          ))}
        </MarkUp.ChildComments>
        
      </MarkUp.CommentContent>
      <MarkUp.Likes onClick={handleLikeToggle} style={{ color: liked ? 'red' : '#888' }}>
        ❤ {likes}
      </MarkUp.Likes>
    </MarkUp.CommentContainer>
  );
};

export default Comment;