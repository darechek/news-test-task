export const url = 'http://testtask.sebbia.com/v1/news';
export const categoriesUrl = `${url}/categories`;
export const getNewsListUrl = (categoryId, pageNumber) => `${categoriesUrl}/${categoryId}/news?page=${pageNumber}`;
export const getDetailedNewsItemUrl = (newsItemId) => `${url}/details?id=${newsItemId}`;
