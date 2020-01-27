// eslint-disable-next-line id-length
import lodash from 'lodash';

export const paginate = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return lodash(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
};

export const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return user && user.token ? { Authorization: `Token ${user.token}` } : {};
};
