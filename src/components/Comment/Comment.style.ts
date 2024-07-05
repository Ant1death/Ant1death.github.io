import styled from 'styled-components';

export const CommentContainer = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 32px;
  gap: 20px;
`;

export const Avatar = styled.img`
  min-width: 68px;
  max-width: 68px;
  width: 100%;
  height: 68px;
  border-radius: 60%;
`;

export const Username = styled.div`
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  text-align: left;
`;

export const CreatedAt = styled.div`
  color: rgb(130, 151, 171);
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  text-align: left;
`;

export const CommentContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: rgb(255, 255, 255);

`;

export const CommentHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Text = styled.div`
  margin: 5px 0;
  font-family: Lato;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  text-align: left;
`;

export const Likes = styled.div`
  color: #888;
  align-self: flex-end;
  position: absolute;
  right: 10px;
  top: 15px;
  cursor: pointer;
`;

export const ChildComments = styled.div`
  margin-top: 10px;
  margin-left: 20px; 
  position: relative;
`;

export const CommentListContainer = styled.div`
  padding: 10px;
`;

export const LoadMoreButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  cursor: pointer;
`;