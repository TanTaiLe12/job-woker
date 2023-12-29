import { StyledDeviceItem } from '../styled';

function DeviceItem({ data }) {
  return (
    <StyledDeviceItem>
      <div className='list-device'>
        {data.map((item, index) => (
          <a key={index} href={item.href} className='list-device__item'>
            <img className='list-device__item--img' src={item.img} alt={item.text} />
            <p className='list-device__item--txt'>{item.text}</p>
          </a>
        ))}
      </div>
    </StyledDeviceItem>
  );
}

export default DeviceItem;
