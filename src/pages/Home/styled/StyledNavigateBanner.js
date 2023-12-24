import styled from 'styled-components';

const StyledNavigateBanner = styled.div`
  .navi {
    display: flex;
    width: 100%;
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 20px;
    gap: 20px;
    transform: translateY(-137px);
    &__item {
      height: 100%;
      width: 25%;
      border-radius: 16px;
      box-shadow: 0 4px 6px -1px #0000001a, 0 2px 4px -1px #0000000f;
      background-color: #fff;
      color: #6b7280;
      overflow: hidden;
      transition: background 0.3s ease-out;
      cursor: pointer;
      &:hover {
        background: linear-gradient(
          179.35deg,
          #00c6fb 0.05%,
          #009bf3 50.53%,
          #005bea 98.94%,
          #005bea 0
        );
        color: #fff;
      }
      &--text {
        padding: 12px 12px 30px;
        font-size: 1.6rem;
        font-weight: bold;
      }
    }
  }
`;

export default StyledNavigateBanner;
