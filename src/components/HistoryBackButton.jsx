import React from 'react';
import { Button } from 'antd';
import history from '../history';

const HistoryBackButton = () => {
  const returnBack = () => history.go(-1);
  return (
    <Button style={{ marginBottom: '30px' }} type="primary" onClick={returnBack}>
      Назад
    </Button>
  );
};

export default HistoryBackButton;
