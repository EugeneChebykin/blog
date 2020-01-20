import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Layout } from 'antd';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const { Header, Content } = Layout;

const ConditionalRoute = ({ component: Comp, pathToRedirect, conditionFunc, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (conditionFunc() ? <Comp {...props} /> : <Redirect to={pathToRedirect} />)}
    />
  );
};

ConditionalRoute.propTypes = {
  component: PropTypes.instanceOf(Object).isRequired,
  pathToRedirect: PropTypes.string.isRequired,
  conditionFunc: PropTypes.func.isRequired,
};

const Routes = () => {
  const { loggedIn } = useSelector(state => state.userReducer);
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Navbar />
      </Header>
      <Content>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <ConditionalRoute
            path="/home"
            component={Home}
            pathToRedirect="/login"
            conditionFunc={() => loggedIn}
          />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Content>
    </Layout>
  );
};

export default Routes;
