import React from 'react';
import { Link } from 'react-router-dom';
import { Logo, Zalo, Facebook } from '~/assets';
import { StyledFooter } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <StyledFooter>
      <section>
        <div className='fLogo'>
          <Link to='/'>
            <img src={Logo} alt='Logo' />
          </Link>
          <p>Dịch vụ sửa chữa điện máy và vi tính Xuân Lộc</p>
        </div>
        <div className='footer__content'>
          <div className='footer__col'>
            <div>
              <h3>Dịch Vụ Lắp đặt - Sửa chữa - Vi tính - Bảo hành</h3>
              <p className='map'>
                128 Trần Quang Khải, Phường Tân Định, Quận 1, Thành phố Hồ Chí Minh, Việt Nam.
                <Link
                  target='_blank'
                  to='https://www.google.com/maps/place/Nh%C3%A0+Ngh%E1%BB%89+Nh%C6%B0+%C3%9D/@10.9372632,107.3037012,15.2z/data=!4m14!1m7!3m6!1s0x317457296b80fa59:0x1e07a45805b4457c!2zUGjDoXAgQuG6o28gxJDhu5NuZyBOYWk!8m2!3d10.9370713!4d107.3108288!16s%2Fg%2F11pxky1jzn!3m5!1s0x317456058cc6e155:0x8620fc8f4611b7f2!8m2!3d10.9361777!4d107.3015589!16s%2Fg%2F11c1t5w6j0?hl=vi-VN&entry=ttu'
                >
                  Xem bản đồ
                </Link>
              </p>
              <div className='social'>
                <Link to='https://www.facebook.com/TaiLT.Min/' target='_blank'>
                  <img src={Facebook} alt='facebook' />
                  <p>Tai Lê</p>
                </Link>
                <Link target='_blank'>
                  <img src={Zalo} alt='zalo' />
                  <p>Tai Lê</p>
                </Link>
              </div>
            </div>
          </div>
          <div className='footer__col'>
            <h3>LIÊN HỆ</h3>
            <div className='footer__tel'>
              <span>
                Điện Thoại:
                <a href='tel:0333667925'> 0333667925</a>
              </span>
              (8:00 - 21:00, Thứ 2 - CN)
            </div>
            <ul>
              <li>
                <Link>Quy chế hoạt động</Link>
              </li>
              <li>
                <Link>Chính sách sửa chữa</Link>
              </li>
            </ul>
          </div>
          <div className='footer__col'>
            <h3>LIÊN HỆ</h3>
            <div className='footer__tel'>
              <span>
                Điện Thoại:
                <a href='tel:0333667925'> 0333667925</a>
              </span>
              (8:00 - 21:00, Thứ 2 - CN)
            </div>
            <ul>
              <li>
                <Link>Quy chế hoạt động</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='copy__right'>
          <p>Rất vui khi được phục vụ bạn</p>
        </div>
      </section>
    </StyledFooter>
  );
}

export default Footer;
