import { StyledNavigateBanner } from '../styled';

const NavigateBanner = ({ data, onThumbs }) => {
  return (
    <StyledNavigateBanner>
      <div className='navi'>
        {data.map((item, index) => (
          <div className='navi__item' key={index} onClick={() => onThumbs(index)}>
            <img src={item.img} alt={item.title} />
            <p className='navi__item--text'>{item.title}</p>
          </div>
        ))}
      </div>
    </StyledNavigateBanner>
  );
};

export default NavigateBanner;
