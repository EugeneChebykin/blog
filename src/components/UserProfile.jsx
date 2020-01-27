import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Avatar, Button } from 'antd';
import * as actions from '../store/actions';
import history from '../history';

const { Meta } = Card;

const UserProfile = () => {
  const { pageSize, user } = useSelector(state => ({
    pageSize: state.pageSettings.pageSize,
    params: state.articles.params,
    user: state.user.user,
  }));
  const dispatch = useDispatch();
  return (
    <Card
      hoverable
      style={{ width: 240, marginRight: '10px' }}
      title={<Avatar size={64} icon="user" />}
    >
      <Meta title={user.username} description={user.email} />
      <Button
        style={{ marginTop: '20px', width: '100%' }}
        type="primary"
        onClick={() => {
          dispatch(actions.articlesAction({ author: user.username }));
        }}
      >
        Показать мои статьи
      </Button>
      <Button
        style={{ marginTop: '20px', width: '100%' }}
        type="primary"
        onClick={() => dispatch(actions.articlesAction({ limit: pageSize }))}
      >
        Показать все статьи
      </Button>
      <Button
        style={{ marginTop: '20px', width: '100%' }}
        type="primary"
        onClick={() =>
          dispatch(actions.articlesAction({ limit: pageSize, favorited: user.username }))
        }
      >
        Показать понравившиеся
      </Button>
      <Button
        style={{ marginTop: '20px', width: '100%' }}
        type="primary"
        onClick={() => history.push('/add')}
      >
        Добавить новую статью
      </Button>
    </Card>
  );
};

export default UserProfile;
