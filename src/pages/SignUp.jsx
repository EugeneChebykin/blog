import React from 'react';
import SignUpForm from '../components/SignUpForm';

const SignUp = () => {
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <div style={styles}>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
