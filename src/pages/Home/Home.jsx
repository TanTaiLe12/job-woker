import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import config from '../../config';
import { StyledHome } from './styled';
import NavigateBanner from './components/NavigateBanner';
const homeConfig = config.homeConfig;

function Home() {
  const [typeImg, setTypeImg] = useState(1);

  // const mainSplideRef = useRef(null);
  // const thumbnailSplideRef = useRef(null);

  // useEffect(() => {
  //   if (mainSplideRef && thumbnailSplideRef) {
  //     mainSplideRef.sync(thumbnailSplideRef.splide);
  //   }
  // }, [mainSplideRef, thumbnailSplideRef]);
  console.log(homeConfig.logoTrademark);
  return (
    <StyledHome>
      {/* <div className='keyv'>
        <Splide
          options={{
            type: 'fade',
            rewind: true,
            pagination: false,
            arrows: false,
          }}
          id='main-carousel'
          ref={(splide) => (mainSplideRef = splide && splide.splide)}
        >
          {homeConfig.bnrServices.map((image, index) => (
            <SplideSlide key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </SplideSlide>
          ))}
        </Splide>
        <NavigateBanner ref={thumbnailSplideRef} />
      </div> */}
      <section className='sec-commit'>
        <h2 className='headline-2'>Tận Tâm Cam kết</h2>
        <ul className='list-commit'>
          <li className='list-commit__item'>
            <img src='/src/assets/common/home/img_commit01.png' alt='ĐÚNG HẸN' />
            <p className='list-commit__item--txt'>ĐÚNG HẸN</p>
          </li>
          <li className='list-commit__item'>
            <img src='/src/assets/common/home/img_commit02.png' alt='TAY NGHỀ GIỎI' />
            <p className='list-commit__item--txt'>TAY NGHỀ GIỎI</p>
          </li>
          <li className='list-commit__item'>
            <img src='/src/assets/common/home/img_commit03.png' alt='TRUNG THỰC' />
            <p className='list-commit__item--txt'>TRUNG THỰC</p>
          </li>
          <li className='list-commit__item'>
            <img src='/src/assets/common/home/img_commit04.png' alt='' />
            <p className='list-commit__item--txt'>THÂN THIỆN & VUI VẺ</p>
          </li>
        </ul>
        <div className='box--btn'>
          <a href='#' className='btn-cmn'>
            <span className='btn-cmn--arrow'>Xem chi tiết cam kết & hoàn tiền</span>
          </a>
        </div>
      </section>
      <div className='sec-download'>
        <div className='inner'>
          <div className='download-btn'>
            <a href='#' target='_blank'>
              <img src='/src/assets/common/home/logo_store.png' alt='app store' />
            </a>
            <a href='#' target='_blank'>
              <img src='/src/assets/common/home/logo_ch_play.png' alt='app CHPlay' />
            </a>
          </div>
        </div>
      </div>
      <section className='sec-intro'>
        <div className='inner'>
          <h2 className='headline-2'>Đối tác của chúng tôi</h2>
          <ul className='list-branch'>
            {homeConfig.logoTrademark.map((item, index) => (
              <li key={index} className='list-branch--item'>
                <img src={item} alt='' />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className='sec-review'>
        <div className='inner'>
          <h2 className='headline-2'>Đối tác của chúng tôi</h2>
          <ul className='list-review'>
            {homeConfig.listReview.map((item, index) => (
              <li key={index} className='list-review__item'>
                <img className='list-review__item--img' src={item.avatar} alt={item.name} />
                <h3 className='list-review__item--title'>
                  {item.name} <small>{item.rank}</small>
                </h3>
                <p className='list-review__item--txt'>{item.info}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className='banner-hotline'>
        {/* <a href='tel:1900232463' class='btn'>
          <i class='icV2-tel-white'></i>
          <span >
            <span class='hotline-text' >
              1900 232 463
            </span>
            <span class='hotliner-note' >
              {' '}
              (8h00 - 21h00)
            </span>
          </span>
        </a> */}
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
    </StyledHome>
  );
}
export default Home;
