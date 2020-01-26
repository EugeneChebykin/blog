// eslint-disable-next-line id-length
import lodash from 'lodash';

export const paginate = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return lodash(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
};

export const asd = 0;
