import React from 'react';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';
import ArticlePreview from './ArticlePreview';

const ArticlesList = () => {
  const { articles, isLoading } = useSelector(state => ({
    articles: state.articles.articles,
    isLoading: state.articles.isLoading,
  }));

  const list = articles.map(article => <ArticlePreview key={article.slug} article={article} />);
  const styles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gridGap: '10px',
  };

  return isLoading ? (
    <Spin style={{ width: '100%' }} size="large" />
  ) : (
    <div style={styles}>{list}</div>
  );
};

export default ArticlesList;
