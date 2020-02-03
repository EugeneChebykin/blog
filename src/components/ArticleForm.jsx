import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import * as Yup from 'yup';
import { Form, Input, Icon, Button, Alert, Tag } from 'antd';
import { Formik, FieldArray } from 'formik';

const ArticleForm = ({ initialValues = {}, actionToDispatch }) => {
  const { title, description, body, tagList } = initialValues;
  const { errors: errorsApi } = useSelector(state => ({
    errors: state.errors,
  }));
  const inputTagRef = React.createRef();
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    body: Yup.string().required('Body is required'),
    tagList: Yup.array()
      .of(Yup.string().required('Enter a tagname'))
      .min(1, 'Must be minimum one tag'),
  });

  const readableErrors = Object.keys(errorsApi).reduce((acc, cur) => {
    return `${acc}\n${cur}: ${errorsApi[cur].join(',')}`;
  }, '');

  return (
    <Formik
      initialValues={{ title, description, body, tagList }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        dispatch(actionToDispatch(values));
        setSubmitting(false);
      }}
    >
      {({ values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Item
            validateStatus={touched.title && errors.title ? 'error' : null}
            help={touched.title && errors.title ? errors.title : null}
          >
            <Input
              type="title"
              id="title"
              prefix={<Icon type="mail" />}
              placeholder="Enter a title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item
            validateStatus={touched.description && errors.description ? 'error' : null}
            help={touched.description && errors.description ? errors.description : null}
          >
            <Input
              type="description"
              id="description"
              prefix={<Icon type="lock" />}
              placeholder="Enter a description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item
            validateStatus={touched.body && errors.body ? 'error' : null}
            help={touched.body && errors.body ? errors.body : null}
          >
            <Input.TextArea
              autoSize={{ minRows: 8, maxRows: 8 }}
              type="body"
              id="body"
              placeholder="Enter a body"
              value={values.body}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item
            validateStatus={touched.tagList && errors.tagList ? 'error' : null}
            help={touched.tagList && errors.tagList ? errors.tagList : null}
          >
            <FieldArray
              name="tagList"
              render={({ remove, push }) => {
                const tags =
                  values.tagList &&
                  values.tagList.map((tag, index) => (
                    <Tag
                      key={tag}
                      closable
                      name={`tagList[${index}]`}
                      onClose={() => remove(index)}
                    >
                      {tag}
                    </Tag>
                  ));
                return (
                  <div>
                    {tags}
                    <Input ref={inputTagRef} />
                    <Button
                      type="primary"
                      onClick={() => {
                        push(inputTagRef.current.state.value);
                        inputTagRef.current.state.value = '';
                      }}
                    >
                      Добавить тег
                    </Button>
                  </div>
                );
              }}
            />
          </Form.Item>
          <Form.Item>
            <Button
              style={{ width: '100%' }}
              type="primary"
              htmlType="submit"
              disabled={isSubmitting}
            >
              Сохранить изменения
            </Button>
          </Form.Item>

          {!isEmpty(errorsApi) && <Alert type="error" message={readableErrors} />}
        </Form>
      )}
    </Formik>
  );
};

ArticleForm.propTypes = {
  initialValues: PropTypes.instanceOf(Object),
  actionToDispatch: PropTypes.func.isRequired,
};

ArticleForm.defaultProps = {
  initialValues: {},
};

export default ArticleForm;
