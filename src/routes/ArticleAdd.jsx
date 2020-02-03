import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';
import HistoryBackButton from '../components/HistoryBackButton';
import ArticleForm from '../components/ArticleForm';
import * as actions from '../store/actions';

const ArticleAdd = () => {
  const { isLoading } = useSelector(state => ({
    isLoading: state.articles.isLoading,
  }));
  const dispatch = useDispatch();
  const actionToDispatch = values => dispatch(actions.addArticleAction(values));

  const styles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
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
            <HistoryBackButton /> <h1 style={{ marginLeft: 'auto' }}> Добавление статьи</h1>
          </div>
          <ArticleForm actionToDispatch={actionToDispatch} />
        </div>
      )}
    </div>
  );
};

export default ArticleAdd;
