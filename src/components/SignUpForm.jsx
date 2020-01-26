import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { isEmpty } from 'lodash';
import { Form, Input, Icon, Button, Alert } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { registrAction } from '../store/actions';

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(1, 'Must have a character')
    .max(50, 'Must be shorter than 50')
    .required('Must enter a name'),
  email: Yup.string()
    .email('Must be a valid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Must be longer than 8')
    .max(40, 'Must be shorter than 40')
    .matches(/[0-9]/, 'Must have at least one digit')
    .matches(/[A-Z]/, 'Must have at least one uppercase character')
    .matches(/^[a-zA-Z0-9]{8,}$/, 'Must have only letters and digits')
    .required('Password is required'),
});

const SignUpForm = () => {
  const { errors: errorsApi } = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        dispatch(registrAction(values));
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
        <Form onSubmit={handleSubmit} style={{ marginTop: '70px', width: '300px' }}>
          <Form.Item
            validateStatus={touched.username && errors.username ? 'error' : null}
            help={touched.username && errors.username ? errors.username : null}
          >
            <Input
              type="text"
              id="username"
              prefix={<Icon type="user" />}
              placeholder="Enter a username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
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
              Sign up
            </Button>
          </Form.Item>
          {!isEmpty(errorsApi) && (
            <Alert type="error" message={JSON.stringify(errorsApi, null, 2)} />
          )}
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
