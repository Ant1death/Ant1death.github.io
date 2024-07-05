import { FC, memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import * as MarkUp from './Header.style';
import { selectComments } from '../../redux/commentsSlice';
import heartSvg from '../../assets/heart.svg'

interface HeaderProps {
  comments: any[]; 
}

const Header: FC<HeaderProps> = memo(({ comments }) => {
  const calculateTotalLikes = useMemo(() => {
    const calculate = (commentsArray: any[]): number => {
      let totalLikes = 0;
      commentsArray.forEach(comment => {
        totalLikes += comment.likes;
        if (comment.childComments) {
          totalLikes += calculate(comment.childComments);
        }
      });
      return totalLikes;
    };
    return calculate;
  }, []);

  const totalLikes = calculateTotalLikes(comments);

  return (
    <MarkUp.HeaderContainer>
      <MarkUp.HeaderComment>{comments.length} комментариев</MarkUp.HeaderComment>
      <MarkUp.HeaderLikes>
        <img src={heartSvg} alt="likes"/> {totalLikes}
      </MarkUp.HeaderLikes>
    </MarkUp.HeaderContainer>
  );
});

const MemoizedHeader = () => {
  const { comments } = useSelector(selectComments);
  return <Header comments={comments} />;
};

export default MemoizedHeader;