import React from 'react';
import { StyledGlobal } from './styled';
import { Header, Footer } from './components';
import SlideHeader from './components/SlideHeader';

function DefaultLayout({ children }) {
  return (
    <StyledGlobal>
      <div className='layout-content app-container'>
        <SlideHeader />
        <Header />
        <div className='layout-main'>
          <div id='main-content' className='main'>
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </StyledGlobal>
  );
}

export default DefaultLayout;
