import React from 'react';
import PropTypes from 'prop-types';
import { formatDistance } from 'date-fns';
import { useSelector } from 'react-redux';
import ruLocale from 'date-fns/locale/ru';
import { Card, Tag } from 'antd';
import HistoryBackButton from '../components/HistoryBackButton';
import ArticleActions from '../components/ArticleActions';

const { Meta } = Card;

const Article = ({ match }) => {
  const { slug } = match.params;
  const { user, article = {} } = useSelector(state => ({
    article: state.articles.articles.find(item => item.slug === slug) || {},
    user: state.user.user,
  }));
  const { author = {} } = article;
  const formattedDate = formatDistance(new Date(article.createdAt || 0), new Date(), {
    locale: ruLocale,
  });

  const tags = article.tagList && article.tagList.map(tag => <Tag key={tag}>{tag}</Tag>);

  return (
    <div style={{ padding: '30px' }}>
      <HistoryBackButton />
      <Card
        hoverable
        title={article.title}
        extra={<ArticleActions article={article} user={user} />}
      >
        <p style={{ minHeight: '200px' }}>{article.body}</p>
        <Meta description={`Создана ${formattedDate} назад. Автор - ${author.username}`} />
        {tags && tags.length > 0 && <p>Тэги: {tags}</p>}
      </Card>
    </div>
  );
};

Article.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};

export default Article;
