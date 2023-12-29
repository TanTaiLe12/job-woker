import styled from 'styled-components';

const StyledDeviceItem = styled.div`
  width: 100%;
  .list-device {
    display: flex;
    justify-content: center;
    gap: 20px;
    &__item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: #fff;
      min-width: 132px;
      width: 25%;
      border-radius: 32px;
      overflow: hidden;
      padding: 12px;
      position: relative;
      transition: background 0.3s linear;
      &:hover {
        background: #f3f4f6;
      }
      &--txt {
        color: #4b5563;
        font-size: 20px;
        font-weight: 400;
        line-height: 32px;
        margin: 8px 0;
        text-align: center;
      }
    }
  }
  @media screen and (max-width: 768px) {
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    .list-device {
      min-width: 100%;
      width: min-content;
      gap: 0;
      &__item {
        min-width: 132px;
        padding: 10px;
        &--txt {
          font-size: 14px;
        }
      }
    }
  }
`;
export default StyledDeviceItem;
