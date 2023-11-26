import styled from 'styled-components';
import '@splidejs/splide/dist/css/splide.min.css';

const StyledSlideHeader = styled.header`
  .listItemContainer {
    ul {
      width: 100%;
      li {
        width: 100% !important;
        img {
          width: 100%;
          height: 44px;
          object-fit: cover;
        }
      }
    }
  }
`;

export default StyledSlideHeader;
