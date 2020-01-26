import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import { useDispatch } from 'react-redux';
import * as actions from '../store/actions';

const Like = ({ article }) => {
  const dispatch = useDispatch();
  const { favorited, favoritesCount, slug } = article;
  const handleSetLike = () => dispatch(actions.setFavoriteAction(slug));
  const handleUnsetLike = () => dispatch(actions.unsetFavoriteAction(slug));
  return (
    <div>
      <Icon
        type="heart"
        theme={favorited ? 'twoTone' : 'outlined'}
        twoToneColor="#eb2f96"
        style={{ fontSize: '20px' }}
        onClick={favorited ? handleUnsetLike : handleSetLike}
      />
      <span style={{ fontSize: '22px' }}>{favoritesCount}</span>
    </div>
  );
};

Like.propTypes = {
  article: PropTypes.instanceOf(Object).isRequired,
};

export default Like;
