import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #f6f6f6;
  padding: 25px 0 15px;
  position: relative;
  section {
    margin: auto;
    max-width: 1200px;
    width: 100%;
    .fLogo {
      display: flex;
      align-items: center;
      a {
        text-decoration: none;
        background-color: transparent;
        padding-right: 10px;
      }
      img {
        display: block;
        height: 48px;
        max-width: 158px;
      }
      p {
        font-size: 15px;
        color: #082680;
        font-weight: bold;
      }
    }
    .footer__content {
      display: grid;
      gap: 110px;
      grid-template-columns: 2fr 1fr 1fr;
      padding: 15px 0 10px;
      .footer__col {
        h3 {
          color: #222;
          font-size: 15px;
          font-weight: 700;
          line-height: 21px;
          margin-bottom: 12px;
        }
        .map {
          color: #333;
          line-height: 23px;
          font-size: 15px;
          a {
            color: #082680;
            text-decoration: none;
            background-color: transparent;
          }
        }
        .social {
          line-height: 0;
          margin-top: 20px;
          display: flex;
          align-items: center;
          a {
            color: #082680;
            display: inline-block;
            font-size: 14px;
            line-height: 18px;
            margin-right: 10px;
            text-decoration: none;
            display: flex;
            align-items: center;
            .anticon-facebook {
              margin-right: 5px;
            }
          }
          img {
            width: 21px;
            height: 21px;
            object-fit: contain;
            margin-right: 5px;
          }
        }
        .footer__tel {
          color: #333;
          font-size: 13px;
          line-height: 18px;
          margin-bottom: 12px;
          a {
            font-weight: 700;
            text-decoration: none;
            font-size: 15px;
            color: #082680;
          }
          span {
            color: #082680;
            display: block;
            font-size: 15px;
            line-height: 21px;
          }
        }
        ul {
          list-style: none;
          li {
            margin-bottom: 12px;
            line-height: 0;
            a {
              color: #082680;
              cursor: pointer;
              font-size: 15px;
              line-height: 18px;
              text-decoration: none;
            }
          }
        }
      }
    }
    .copy__right {
      border-top: 1px solid #e0e0e0;
      padding-top: 15px;
      text-align: center;
      p {
        font-size: 14px;
        line-height: 21px;
      }
    }
  }
`;

export default StyledFooter;
