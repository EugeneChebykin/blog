import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Icon, Button, Alert } from 'antd';
import { Link } from 'react-router-dom';
import { loginAction } from '../store/actions';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Must be a valid email address')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginForm = () => {
  const { errors: errorsApi } = useSelector(state => state.errorsReducer);
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        dispatch(loginAction(values));
        setSubmitting(false);
        resetForm();
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
          {errorsApi && <Alert type="error" message={JSON.stringify(errorsApi, null, 2)} />}
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
