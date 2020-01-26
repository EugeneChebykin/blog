import React from 'react';
import { useSelector } from 'react-redux';
import ArticlePreview from './ArticlePreview';
// import { paginate } from '../functions';

const ArticlesList = () => {
  const { articles /* , pageSize, currentPage */ } = useSelector(state => ({
    articles: state.articles.articles,
    pageSize: state.pageSettings.pageSize,
    currentPage: state.pageSettings.currentPage,
  }));
  // const currentPageArticles = paginate(articles, currentPage, pageSize);
  const list = articles.map(article => <ArticlePreview key={article.slug} article={article} />);
  const styles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gridGap: '10px',
  };

  return <div style={styles}>{list}</div>;
};

export default ArticlesList;
