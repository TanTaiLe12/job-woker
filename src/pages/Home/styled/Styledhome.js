import styled from 'styled-components';

const StyledHome = styled.div`
  .keyv {
    margin-bottom: 40px;
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
    &-hotline {
      position: relative;
      background-image: url('/src/assets/common/home/bnr_hotline.png');
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: 1119px 375px;
      border-radius: 32px;
      box-shadow: 0 20px 25px -5px #0000001a, 0 10px 10px -5px #0000000a;
      height: 375px;
      margin: 0 auto 100px;
      max-width: 1119px;
      .btn-hotline {
        align-items: center;
        background: #082680;
        box-shadow: 0 10px 15px -3px #0000001a, 0 4px 6px -2px #0000000d;
        color: #fff;
        display: flex;
        position: absolute;
        grid-gap: 36px;
        border-radius: 16px;
        bottom: 48px;
        gap: 36px;
        height: 96px;
        left: 64px;
        padding: 16px 49px;
        width: 384px;
        &--icon {
          width: 25px;
          height: 25px;
        }
        &__content {
          align-items: center;
          display: flex;
          flex-direction: column;
          grid-gap: 5px;
          gap: 5px;
          font-weight: bold;
          &--text {
            font-size: 32px;
            line-height: 1.2;
          }
          &--note {
            font-size: 16px;
          }
        }
      }
    }
    &-article {
      .inner {
        margin: 0 auto;
        max-width: 1260px;
        width: 100%;
        padding: 0 20px;
      }
      .block-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
        .headline-2 {
          margin-bottom: 0;
        }
        .txt-link {
          position: relative;
          padding-right: 15px;
          color: #3b82f6;
          font-size: 14px;
          display: inline-block;
          text-decoration: underline;
          line-height: 1.1;
          transition: all 0.3s linear;
          &:hover {
            text-decoration: none;
            &::before {
              right: 0;
            }
          }
          &::before {
            position: absolute;
            content: '';
            border-right: 2px solid #3b82f6;
            border-top: 2px solid #3b82f6;
            top: 50%;
            right: 5px;
            width: 5px;
            height: 5px;
            transform: translateY(-50%) rotate(45deg);
            transition: right 0.3s ease-out;
          }
        }
      }
    }
    .slider-list {
      display: flex;
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
  .list-article {
    .splide__slide {
      min-width: 132px;
    }
  }
  .main-carousel {
    .splide__slide {
      img {
        height: 409px !important;
        object-fit: cover;
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
      &-hotline {
        background-image: url('/src/assets/common/home/bnr_hotline_sp.png');
        background-size: 328px 156px;
        border-radius: 24px;
        box-shadow: 0 5.86238px 7.32797px -1.46559px #0000001a,
          0 2.93119px 2.93119px -1.46559px #0000000a;
        height: 156px;
        margin: 0 auto 40px;
        max-width: 328px;
        .btn-hotline {
          grid-gap: 15px;
          border-radius: 5px;
          bottom: 10px;
          gap: 15px;
          height: 32px;
          left: 20px;
          padding: 5px 5px 5px 10px;
          width: 120px;
          &--icon {
            width: 10px;
            height: 10px;
          }
          &__content {
            align-items: center;
            display: flex;
            flex-direction: column;
            grid-gap: 5px;
            gap: 0;
            font-weight: bold;
            &--text {
              font-size: 12px;
              line-height: 1.1;
            }
            &--note {
              font-size: 10px;
              line-height: 1.1;
            }
          }
        }
      }
    }
    .main-carousel {
      .splide__slide {
        img {
          height: 46svw !important;
          max-height: 295px;
          object-fit: contain;
        }
      }
    }
  }
`;

export default StyledHome;
