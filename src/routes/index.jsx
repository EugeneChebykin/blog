import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Layout } from 'antd';
import Navbar from '../components/Navbar';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import Article from './Article';
import ArticleEdit from './ArticleEdit';
import ArticleAdd from './ArticleAdd';

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
  const { loggedIn } = useSelector(state => state.user);
  return (
    <Layout className="layout" style={{ maxWidth: '1440px' }}>
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
            path="/add"
            component={ArticleAdd}
            pathToRedirect="/login"
            conditionFunc={() => loggedIn}
          />
          <ConditionalRoute
            path="/articles/:slug/edit"
            component={ArticleEdit}
            pathToRedirect="/login"
            conditionFunc={() => loggedIn}
          />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route exact path="/articles/:slug" component={Article} />
        </Switch>
      </Content>
    </Layout>
  );
};

export default Routes;
