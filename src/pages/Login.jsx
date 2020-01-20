import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = () => {
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <div style={styles}>
      <LoginForm />
    </div>
  );
};

export default Login;
