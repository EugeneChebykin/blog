import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import { Spin } from 'antd';
import HistoryBackButton from '../components/HistoryBackButton';
import ArticleForm from '../components/ArticleForm';
import * as actions from '../store/actions';

const ArticleEdit = ({ match }) => {
  const { slug } = match.params;
  const dispatch = useDispatch();
  const { article, isLoading } = useSelector(state => ({
    errors: state.errors,
    article: state.articles.articles.find(item => item.slug === slug),
    isLoading: state.articles.isLoading,
  }));
  const actionToDispatch = values => dispatch(actions.editArticleAction(slug, values));
  const storageArticle = JSON.parse(localStorage.getItem('openedArticle'));
  const { title, body, description, tagList } = isEmpty(article) ? storageArticle : article;

  const styles = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '70px',
  };

  return (
    <div className="wrapper" style={styles}>
      {isLoading ? (
        <Spin style={{ width: '100%' }} size="large" />
      ) : (
        <div className="content" style={{ width: '500px' }}>
          <div style={{ display: 'flex', width: '100%' }}>
            <HistoryBackButton /> <h1 style={{ marginLeft: 'auto' }}> Редактирование статьи</h1>
          </div>
          <ArticleForm
            initialValues={{ title, body, description, tagList }}
            actionToDispatch={actionToDispatch}
          />
        </div>
      )}
    </div>
  );
};

ArticleEdit.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};

export default ArticleEdit;
