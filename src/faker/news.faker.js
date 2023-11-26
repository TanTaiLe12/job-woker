import { faker } from '@faker-js/faker/locale/ja';
import { formatDate } from '~/utils/helpers';

function generateNews() {
  let data = [];
  for (let id = 1; id <= 50; id++) {
    let date = formatDate(faker.date.past(), 'YYYY-MM-DD');
    let title = faker.lorem.lines(1);
    let category = faker.lorem.words(2);
    let detail = faker.lorem.paragraph();

    data.push({
      id: id,
      date: date,
      title: title,
      category: category,
      detail: detail,
    });
  }

  return { data: data };
}

const newsFaker = generateNews();

export default newsFaker;
