import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// import { StyledSlideHeader } from './styled';
import StyledSlideHeader from './styled/StyledSlideHeader';

function SlideHeader() {
  return (
    <StyledSlideHeader>
      <Splide
        aria-label='My Favorite Images'
        className='listItemContainer'
        options={{
          rewind: true,
          width: '100%',
          fixedWidth: 'auto',
          autoplay: true,
          gap: '0',
          arrows: true,
          pagination: false,
        }}
      >
        <SplideSlide>
          <img src='https://cdn.tgdd.vn/2023/11/banner/1200-44-1200x44-1.png' alt='' />
        </SplideSlide>
        <SplideSlide>
          <img src='https://cdn.tgdd.vn/2023/10/banner/1200-44-1200x44-4.png' alt='' />
        </SplideSlide>
        <SplideSlide>
          <img src='https://cdn.tgdd.vn/2023/11/banner/1200-44-1200x44-3.png' alt='' />
        </SplideSlide>
      </Splide>
    </StyledSlideHeader>
  );
}

export default SlideHeader;
