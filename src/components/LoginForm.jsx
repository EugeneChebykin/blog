import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { isEmpty } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Icon, Button, Alert } from 'antd';
import { Link } from 'react-router-dom';
import * as actions from '../store/actions';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Must be a valid email address')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginForm = () => {
  const { errors: errorsApi } = useSelector(state => state);
  const dispatch = useDispatch();
  const readableErrors = Object.keys(errorsApi).reduce((acc, cur) => {
    return `${acc}\n${cur}: ${errorsApi[cur].join(',')}`;
  }, '');
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        dispatch(actions.loginAction(values));
        setSubmitting(false);
      }}
    >
      {({ values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
        <Form onSubmit={handleSubmit} style={{ marginTop: '70px', width: '300px' }}>
          <Form.Item
            validateStatus={touched.email && errors.email ? 'error' : null}
            help={touched.email && errors.email ? errors.email : null}
          >
            <Input
              type="email"
              id="email"
              prefix={<Icon type="mail" />}
              placeholder="Enter an email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item
            validateStatus={touched.password && errors.password ? 'error' : null}
            help={touched.password && errors.password ? errors.password : null}
          >
            <Input
              type="password"
              id="password"
              prefix={<Icon type="lock" />}
              placeholder="Enter a password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item>
            <Button
              style={{ width: '100%' }}
              type="primary"
              htmlType="submit"
              disabled={isSubmitting}
            >
              Log in
            </Button>
            Or <Link to="/signup">register now!</Link>
          </Form.Item>
          {!isEmpty(errorsApi) && <Alert type="error" message={readableErrors} />}
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
