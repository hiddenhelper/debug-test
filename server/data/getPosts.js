import sortBy from '../utils/sortBy';
import Posts from './posts';

const PageSize = 10;

export default (page, sort) => {
  const start = PageSize * (page - 1);
  const end = PageSize * page;

  let posts;
  if (sort === 'new') {
    posts = Posts.sort((a, b) => new Date(b['created']) - new Date(a['created']));
    //posts = sortBy(Posts, 'created', true);
  } else if (sort === 'old') {
    posts = Posts.sort((a, b) => new Date(a['created']) - new Date(b['created']));
    //posts = sortBy(Posts, 'created');
  } else if (sort === 'top') {
    posts = Posts.sort((a, b) => b['votes'] - a['votes']);
    //posts = sortBy(Posts, 'votes', true);
  } else {
    posts = [...Posts];
  }

  return {
    pages: Math.ceil(Posts.length / PageSize),
    posts: posts.slice(start, end),
  };
};
