import axios from '@/libs/axios';

const resources = '/search/repositories';
export const getTopRepos = (language, { sort, per_page, order }) => {
  return axios.get(
    `${resources}?q=netflix+language:${language}&sort=${sort}&order=${order}&per_page=${per_page}`,
  );
};
