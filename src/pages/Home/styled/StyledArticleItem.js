import styled from 'styled-components';

const StyledArticleItem = styled.div`
  width: 100%;
  .article__item {
    min-width: 132px;
    &--img {
      aspect-ratio: 242/127;
    }
    &--txt {
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      display: -webkit-box;
      font-weight: 700;
      margin-top: 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: 0.3s ease-in-out;
      font-size: 16px;
      line-height: 1.4;
      color: #333;
    }
    @media screen and (max-width: 768px) {
      &--txt {
        font-size: 12px;
      }
    }
  }
`;
export default StyledArticleItem;
