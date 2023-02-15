import axios from '@/libs/axios';

const resources = '/search/repositories';
export const getTopRepos = (
  language,
  { sort, per_page, order, currentPage },
) => {
  return axios.get(
    `${resources}?q=netflix+language:${language}&sort=${sort}&order=${order}&per_page=${per_page}&page=${currentPage}`,
  );
};
