import { StyledArticleItem } from '../styled/';

function ArticleItem({ href, img, text }) {
  return (
    <StyledArticleItem>
      <a href={href} className='article__item'>
        <img className='article__item--img' src={img} alt={text} />
        <p className='article__item--txt'>{text}</p>
      </a>
    </StyledArticleItem>
  );
}

export default ArticleItem;
