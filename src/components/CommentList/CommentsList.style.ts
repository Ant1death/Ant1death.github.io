import styled from 'styled-components';

export const CommentListContainer = styled.div`
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  width: 562px;
  display: flex;
  flex-direction: column;
`;

export const LoadMoreButton = styled.button`
  margin: 0 auto;
  width: 234px;
  height: 36px;
  border-radius: 4px;
  backdrop-filter: blur(27px);
  background: rgb(49, 52, 57);
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  cursor: pointer;
`;

export const Loading = styled.p`
  margin: 0 auto;
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  text-align: left;
`;

export const Error = styled.p`
  margin: 0 auto;
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  text-align: left;
`;