import styled from 'styled-components';

const StyledHome = styled.div`
  h1 {
    color: red;
  }
  .bnr-keyv {
    img {
      height: 409px;
      object-fit: cover;
      transform: translateX(-100%);
      &.active {
        transform: translateX(100%);
      }
    }
  }
  .navi__keyv {
    display: flex;
    width: 100%;
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 20px;
    gap: 20px;
    transform: translateY(-137px);
    &--item {
      width: 25%;
    }
  }
  .sec {
    &-commit {
      padding: 15px 20px 20px;
      background-color: #f9f9f9;
    }
    &-download {
      background-image: url('/src/assets/common/home/bg_download.jpg');
      background-color: #fff;
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: 2560px 602px;
      height: 602px;
      margin: 0 auto;
      width: 100%;
      .inner {
        height: 100%;
        position: relative;
        margin: 0 auto;
        max-width: 920px;
        width: 100%;
      }
      .download-btn {
        display: flex;
        margin: 0 auto;
        position: absolute;
        top: unset;
        grid-gap: 24px;
        bottom: 20px;
        gap: 24px;
        right: 50%;
        transform: translateY(-50%) translate(100%);
      }
    }
    &-intro {
      padding: 75px 0 35px;
      background-color: #f3f4f6;
      .inner {
        max-width: 1000px;
        width: 100%;
        margin: 0 auto;
        padding: 0 20px;
      }
    }
    &-review {
      padding: 58px 0 84px;
      background-color: #fff;
      .inner {
        margin: 0 auto;
        max-width: 1260px;
        width: 100%;
        padding: 0 20px;
      }
    }
  }
  .list-commit {
    display: flex;
    flex-wrap: wrap;
    max-width: 500px;
    width: 100%;
    margin: 0 auto 30px;
    list-style: none;
    &__item {
      width: calc((100% - 20px) / 2);
      margin-right: 20px;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      &:nth-child(2n + 2) {
        margin-right: 0;
      }
      img {
        width: 60px;
      }
      &--txt {
        font-size: 16px;
        font-weight: 500;
        margin-left: 8px;
      }
    }
  }
  .list-branch {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    grid-gap: 24px;
    list-style: none;
    &--item {
      border-radius: 24px;
      margin: 0;
      padding: 10px;
      width: calc(20% - 24px);
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 70px;
      img {
        height: 28px;
        margin: 0 auto;
      }
    }
  }
  .list-review {
    display: flex;
    justify-content: space-between;
    list-style: none;
    &__item {
      border-radius: 7px;
      margin: 0 10px;
      padding: 30px 20px;
      width: calc(33.333% - 20px);
      background-color: #fff;
      text-align: center;
      &--img {
        width: 70px;
        margin: 0 auto 8px;
      }
      &--title {
        color: #4b5563;
        font-size: 24px;
        margin-bottom: 10px;
        small {
          color: #939393;
          display: block;
          font-size: 14px;
          font-style: normal;
          font-weight: normal;
        }
      }
      &--txt {
        text-align: left;
        color: #374151;
        font-size: 14px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .list-commit {
      margin: 0 auto 30px;
      &__item {
        img {
          width: 25px;
        }
        &--txt {
          font-size: 14px;
        }
      }
    }
    .list-branch {
      justify-content: unset;
      gap: 20px 12px;
      &--item {
        border-radius: 16px;
        padding: 10px;
        width: calc(50% - 6px);
        height: 70px;
        img {
          height: 28px;
          margin: 0 auto;
        }
      }
    }
    .list-review {
      flex-wrap: wrap;
      &__item {
        border-radius: 7px;
        margin: 0;
        padding: 15px;
        width: 100%;
        &--img {
          width: 92px;
        }
        &--txt {
          text-align: left;
          color: #374151;
          font-size: 14px;
        }
      }
    }
    .sec {
      &-download {
        background-image: url('/src/assets/common/home/bg_download_sp.png');
        background-size: 375px 800px;
        height: 800px;
        margin-top: 30px;
        .download-btn {
          bottom: 53%;
          gap: 20px;
          width: 100%;
          max-width: 280px;
          left: 50%;
          transform: translateX(-50%);
          right: auto;
          img {
            max-width: 130px;
          }
        }
      }
      &-review {
        padding-bottom: 40px;
      }
    }
  }
`;

export default StyledHome;
