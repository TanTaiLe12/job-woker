import { useEffect, useRef, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { NavigateBanner, ArticleItem, DeviceItem } from './components/';
import { StyledHome } from './styled';
import '@splidejs/react-splide/css';
import config from '../../config';

const homeConfig = config.homeConfig;

function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [dataBnr, setDataBnr] = useState(homeConfig.bnrServices.sp);
  const mainRef = useRef(null);
  const deviceRef = useRef(null);
  const handleThumbs = (id) => {
    if (mainRef.current && deviceRef.current) {
      mainRef.current.go(id);
      deviceRef.current.go(id);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      const newDataBnr =
        window.innerWidth < 768 ? homeConfig.bnrServices.sp : homeConfig.bnrServices.pc;
      setDataBnr(newDataBnr);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <StyledHome>
      <div className='keyv'>
        <Splide
          ref={mainRef}
          className='main-carousel'
          options={{
            rewind: true,
            pagination: false,
            arrows: false,
            drag: false,
          }}
        >
          {dataBnr.map((image, index) => (
            <SplideSlide key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </SplideSlide>
          ))}
        </Splide>
        <NavigateBanner data={homeConfig.menuServices} onThumbs={handleThumbs} />
        <Splide
          ref={deviceRef}
          className='slide-device'
          options={{
            rewind: true,
            pagination: false,
            arrows: false,
            drag: false,
          }}
        >
          {Object.keys(homeConfig.diverList).map((type, index) => (
            <SplideSlide key={index}>
              <DeviceItem data={homeConfig.diverList[type]} />
            </SplideSlide>
          ))}
        </Splide>
        <div className='box--btn'>
          <a className='btn-cmn btn-cmn__product'>Đặt dịch vụ</a>
          <a className='btn-cmn btn-cmn__product white'> Bảng giá dịch vụ </a>
        </div>
      </div>
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
      <div className='sec-hotline'>
        <a href='tel:1900232463' className='btn-hotline'>
          <FontAwesomeIcon className='btn-hotline--icon' icon={faPhone} />
          <span className='btn-hotline__content'>
            <span className='btn-hotline__content--text'>1900 232 463</span>
            <span className='btn-hotline__content--note'> (8h00 - 21h00)</span>
          </span>
        </a>
      </div>
      <div className='sec-article'>
        <div className='inner'>
          <h2 className='headline-2 left'>Đối tác của chúng tôi</h2>
          <Splide
            className='list-article'
            options={{
              type: 'loop',
              perPage: 4,
              gap: '20px',
              focus: 0,
              omitEnd: true,
              pagination: false,
              breakpoints: {
                768: {
                  arrows: false,
                  gap: '12px',
                },
              },
            }}
          >
            {homeConfig.listArticle.procedure.map((slide, index) => (
              <SplideSlide key={index}>
                <ArticleItem href={slide.href} img={slide.img} text={slide.text} />
              </SplideSlide>
            ))}
          </Splide>

          <div className='block-head'>
            <h2 className='headline-2 left'>Mẹo hay</h2>
            <a href='#' className='txt-link'>
              Xem tất cả
            </a>
          </div>
          <Splide
            className='list-article'
            options={{
              type: 'loop',
              perPage: 4,
              gap: '20px',
              omitEnd: true,
              pagination: false,
              arrows: false,
              drag: false,
              breakpoints: {
                768: {
                  gap: '12px',
                  drag: true,
                },
              },
            }}
          >
            {homeConfig.listArticle.tips.map((slide, index) => (
              <SplideSlide key={index}>
                <ArticleItem href={slide.href} img={slide.img} text={slide.text} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </StyledHome>
  );
}
export default Home;
