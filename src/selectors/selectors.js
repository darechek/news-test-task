export const getCategories = state => state.reducer.categories.list;
export const getNews = state => state.reducer.news;
export const getNewsById = (state, id) => getNews(state).find(newsItem => newsItem.id === id);
export const needShowLoader = state => state.reducer.needShowLoader;
export const getCategoryById = (state, id) => getCategories(state).find(category => category.id === id);
export const getDetailedNewsItem = state => state.reducer.detailedNewsItem;
export const needShowCategoryLoader = state => state.reducer.categories.isFetching;
