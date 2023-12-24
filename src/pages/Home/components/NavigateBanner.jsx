import React, { forwardRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import config from '../../../config';

const homeConfig = config.homeConfig;

const NavigateBanner = forwardRef(({ images }, ref) => {
  return (
    <Splide
      options={{
        fixedWidth: 100,
        fixedHeight: 60,
        gap: 10,
        rewind: true,
        pagination: false,
        isNavigation: true,
        breakpoints: {
          600: {
            fixedWidth: 60,
            fixedHeight: 44,
          },
        },
      }}
    >
      {homeConfig.menuServices.map((item, index) => (
        <SplideSlide key={index}>
          <div className='navi__item'>
            <img src={item.img} alt={item.title} />
            <p className='navi__item--text'>{item.title}</p>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
});

export default NavigateBanner;
