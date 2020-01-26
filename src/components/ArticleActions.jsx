import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import Like from './Like';
import history from '../history';
import * as actions from '../store/actions';

const ArticleActions = ({ article, user }) => {
  const { author = {}, slug } = article;
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch(actions.deleteArticleAction(slug));
    history.push(`/`);
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ marginRight: '20px' }}>
        <Like article={article} />
      </span>
      {user.username === author.username && (
        <div>
          <Button
            type="primary"
            size="large"
            shape="circle"
            icon="edit"
            onClick={() => {
              history.push(`/articles/${slug}/edit`);
            }}
          />
          <Button
            type="danger"
            size="large"
            shape="circle"
            icon="close"
            onClick={handleDeleteClick}
          />
        </div>
      )}
    </div>
  );
};

ArticleActions.propTypes = {
  article: PropTypes.instanceOf(Object),
  user: PropTypes.instanceOf(Object),
};

ArticleActions.defaultProps = {
  article: {},
  user: {},
};

export default ArticleActions;
