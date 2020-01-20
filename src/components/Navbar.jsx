import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import { NavLink, withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../store/actions';

const Navbar = props => {
  const { loggedIn } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const { location } = props;

  const handleLogoutClick = () => dispatch(actions.logout());

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={[location.pathname]}
      selectedKeys={[location.pathname]}
      style={{ lineHeight: '64px', display: 'flex' }}
    >
      <Menu.Item key="/home">
        <NavLink to="/home">Home</NavLink>
      </Menu.Item>
      {!loggedIn && (
        <Menu.Item key="/login" style={{ marginLeft: 'auto' }}>
          <NavLink to="/login">Login</NavLink>
        </Menu.Item>
      )}
      {loggedIn && (
        <Menu.Item style={{ marginLeft: 'auto' }} onClick={handleLogoutClick}>
          Log out
        </Menu.Item>
      )}
    </Menu>
  );
};

Navbar.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(Navbar);
