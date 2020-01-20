import React from 'react';

const Home = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return <h1>{user && `Hello ${user.username}`}</h1>;
};

export default Home;
