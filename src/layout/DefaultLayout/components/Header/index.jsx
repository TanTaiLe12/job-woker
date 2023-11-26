import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader } from './styled';
import { Logo } from '~/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledHeader className={scrollPosition > 50 ? 'hidden' : ''}>
      <div className='container'>
        <div className='left__container'>
          <Link to='/' className='link'>
            <img src={Logo} alt='Logo' />
          </Link>
          <Link className='introduce'>
            <span>Giới thiệu</span>
          </Link>
          <Link className='introduce'>
            <span>Tiện ích</span>
          </Link>
        </div>
        <div className='right__container'>
          <ul>
            <li className='address'>
              <span>
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              <Link>Xuân Thọ</Link>
            </li>
            <li className='address'>
              <Link>Dịch Vụ</Link>
            </li>
            <li>
              <Link>Thông Tin</Link>
            </li>
            <li>
              <Link>Kỹ Thuật</Link>
            </li>
          </ul>
          <div className='hotline'>
            <div className='icon phone__icon'>
              <Link to='tel:0333667925'>
                <FontAwesomeIcon icon={faPhone} />
              </Link>
            </div>
            <div>
              <Link to='tel:0333667925'>0333667925</Link>
              <span>(8h00 - 21h00)</span>
            </div>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;
