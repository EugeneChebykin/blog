import React from 'react';
import PropTypes from 'prop-types';
import { formatDistance } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import { Link } from 'react-router-dom';
import { Card, Tag } from 'antd';
import Like from './Like';

const { Meta } = Card;

const ArticlePreview = ({ article }) => {
  const { title, author, description, createdAt, slug, tagList } = article;
  const formattedDate = formatDistance(new Date(createdAt), new Date(), { locale: ruLocale });

  const linkOnClick = () => {
    localStorage.setItem('openedArticle', JSON.stringify(article));
  };
  return (
    <Card hoverable title={title} extra={<Like article={article} />}>
      <p>{description}</p>
      <Link to={`/articles/${slug}`} onClick={linkOnClick}>
        Читать далее...
      </Link>
      <Meta description={`Создана ${formattedDate} назад`} />
      <Meta description={`Автор ${author.username}`} />
      {tagList.length > 0 && (
        <p>
          Тэги:
          {tagList.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </p>
      )}
    </Card>
  );
};

ArticlePreview.propTypes = {
  article: PropTypes.instanceOf(Object).isRequired,
};

export default ArticlePreview;
