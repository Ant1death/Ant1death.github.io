import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    color: #fff;
    font-size: 20px;
    margin: 0 auto;
    margin-bottom: 32px;
    padding-top: 52px;
    padding-bottom: 8px;
    overflow: hidden;
    width: 562px;
    border-bottom: 1px solid rgb(118, 118, 118);
`;

export const HeaderComment = styled.div`
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
`;

export const HeaderLikes = styled.div`
    color: rgb(255, 255, 255);
    font-size: 15px;
    font-weight: 700;
    line-height: 150%;
    display: flex;
    align-items: center;
    gap: 8px;
`;
