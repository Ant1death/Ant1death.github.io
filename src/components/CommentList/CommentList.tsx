import { useEffect, useMemo, FC, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments, selectComments } from '../../redux/commentsSlice';
import { fetchAuthors } from '../../redux/authorsSlice';
import { AppDispatch } from '../../redux/store';
import { useFindAuthorById } from '../../utils/authorsUtils'; // Импортируем функцию
import Comment from '../Comment/Comment';
import * as MarkUp from './CommentsList.style';

const CommentList: FC = memo(() => {
  const { comments, page, total_pages, loading, error } = useSelector(selectComments);
  const dispatch = useDispatch<AppDispatch>();
  const findAuthorById = useFindAuthorById();
  

  useEffect(() => {
    dispatch(fetchComments(1));
    dispatch(fetchAuthors());
  }, [dispatch]);

  const findRootParent = (comment: any, allComments: any[]): any => {
    let parentComment = allComments.find(c => c.id === comment.parent);
    while (parentComment?.parent !== null) {
      // eslint-disable-next-line no-loop-func
      parentComment = allComments.find(c => c.id === parentComment.parent);
    }
    return parentComment || comment;
  };
  
  const buildCommentTree = useMemo(() => {
    const commentsWithChildren = comments.map(comment => ({
      ...comment,
      childComments: [] as any[]
    }));
  
    commentsWithChildren.forEach(comment => {
      if (comment.parent !== null) {
        const rootParent = findRootParent(comment, commentsWithChildren);
        rootParent.childComments.push(comment);
      }
    });
  
    return commentsWithChildren.filter(comment => comment.parent === null);
  }, [comments]);
  
  const renderComments = useMemo(() => {
    const renderComment = (comment: any) => {
      const author = findAuthorById(comment.author);
      return (
        <Comment
          key={comment.id}
          avatar={author?.avatar || ''}
          username={author ? author.name : 'Unknown Author'}
          createdAt={comment.created}
          text={comment.text}
          likes={comment.likes}
          childComments={comment.childComments} 
          id={comment.id}
        />
      );
    };

    return buildCommentTree.map(comment => renderComment(comment));
  }, [buildCommentTree, findAuthorById]);

  const loadMore = () => {
    if (page < total_pages) {
      dispatch(fetchComments(page + 1));
    }
  };

  return (
    <MarkUp.CommentListContainer>
      {renderComments}
      {loading && <MarkUp.Loading>Loading...</MarkUp.Loading>}
      {error && <MarkUp.Error>{error}</MarkUp.Error>}
      {page < total_pages && <MarkUp.LoadMoreButton onClick={loadMore}>Загрузить еще</MarkUp.LoadMoreButton>}
    </MarkUp.CommentListContainer>
  );
});

export default CommentList;
