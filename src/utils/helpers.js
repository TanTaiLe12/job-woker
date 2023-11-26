import moment from 'moment';

export const getURLParam = (key, _default = '') => {
  const href = window.location.href;
  const url = new URL(href);
  return url.searchParams.get(key) || _default;
};

export const formatDate = (date, format = 'YYYY-MM-DD hh:mm:ss') => {
  return !!date ? moment(date).format(format) : '';
};
