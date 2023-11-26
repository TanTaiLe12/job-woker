import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  top: 44;
  background-color: #082680;
  height: 68px;
  transition: top 0.3s ease;

  &.hidden {
    top: 0;
    position: fixed;
    z-index: 999;
  }

  .container {
    height: 68px;
    justify-content: space-between;
    display: flex;
    margin: auto;
    max-width: 100svw;
    width: 1200px;

    .left__container {
      display: flex;
      align-items: center;
      .link {
        align-items: center;
        display: inline-flex;
        img {
          width: 147px;
          height: 67px;
        }
      }
      .introduce {
        margin-left: 32px;
        text-decoration: none;
        span {
          font-size: 16px;
          color: #fff;
          white-space: nowrap;
        }
      }
    }
    .right__container {
      display: flex;
      align-items: center;
      font-size: 16px;
      color: #fff;

      ul {
        list-style: none;
        display: flex;
        align-items: center;
        li {
          margin: 0 10px;
          a {
            text-decoration: none;
            color: #fff;
          }
        }
        .address {
          background-color: #011760;
          padding: 7px 30px;
          border-radius: 10px;
          a {
            margin-left: 5px;
          }
        }
      }
      .hotline {
        margin-left: 40px;
        background-color: #fff;
        padding: 6px 16px;
        font-size: 16px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        .icon {
          margin-right: 10px;
          span {
            width: 100%;
            height: 100%;
            font-size: 20px;
            rotate: 99deg;
          }
        }
        span {
          color: #011d79;
          display: block;
          line-height: 18px;
          font-size: 14px;
        }
        a {
          text-decoration: none;
          font-weight: bold;
          display: block;
          line-height: 22px;
          &:hover {
            color: #daa520;
          }
        }
      }
    }
    @keyframes shake {
      0% {
        transform: translateX(0);
      }
      25% {
        transform: translateX(-5px) rotate(5deg);
      }
      50% {
        transform: translateX(5px) rotate(-5deg);
      }
      75% {
        transform: translateX(-5px) rotate(5deg);
      }
      100% {
        transform: translateX(0);
      }
    }

    .phone__icon:hover {
      animation: shake 0.5s ease;
    }
  }
`;

export default StyledHeader;
