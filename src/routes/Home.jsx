import React, { useEffect } from 'react';
import { Pagination } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import ArticlesList from '../components/ArticlesList';
import * as actions from '../store/actions';
import UserProfile from '../components/UserProfile';

const Home = () => {
  const { loggedIn } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const { currentPage, pageSize, articlesCount, params } = useSelector(state => ({
    articles: state.articles.articles,
    articlesCount: state.articles.articlesCount,
    currentPage: state.pageSettings.currentPage,
    pageSize: state.pageSettings.pageSize,
    params: state.articles.params,
  }));

  useEffect(() => {
    dispatch(actions.articlesAction({ limit: 10 }));
  }, []);

  const handlePageChange = page => {
    dispatch(actions.changePageAction(page));
    dispatch(actions.articlesAction({ ...params, offset: (page - 1) * pageSize }));
  };

  return (
    <div style={{ padding: '40px', display: 'flex' }}>
      {loggedIn && <UserProfile />}
      <div style={{ flexGrow: '1' }}>
        <ArticlesList />
        <Pagination
          style={{ marginTop: '30px' }}
          current={currentPage}
          total={articlesCount}
          pageSize={pageSize}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Home;
