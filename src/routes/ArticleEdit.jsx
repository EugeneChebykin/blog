import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, FieldArray } from 'formik';
import * as Yup from 'yup';
import { isEmpty } from 'lodash';
import { Form, Input, Icon, Button, Alert, Tag } from 'antd';
import HistoryBackButton from '../components/HistoryBackButton';
import * as actions from '../store/actions';

const ArticleEdit = ({ match }) => {
  const { slug } = match.params;
  const { article, errors: errorsApi } = useSelector(state => ({
    errors: state.errors,
    article: state.articles.articles.find(item => item.slug === slug),
  }));
  const storageArticle = JSON.parse(localStorage.getItem('openedArticle'));
  const { title, body, description, tagList } = isEmpty(article) ? storageArticle : article;
  const dispatch = useDispatch();
  const inputTagRef = React.createRef();

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    body: Yup.string().required('Body is required'),
    tagList: Yup.array()
      .of(Yup.string().required('Enter a tagname'))
      .min(1, 'Must be minimum one tag'),
  });
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '70px',
  };
  return (
    <div className="wrapper" style={styles}>
      <div className="content" style={{ width: '500px' }}>
        <div style={{ display: 'flex', width: '100%' }}>
          <HistoryBackButton /> <h1 style={{ marginLeft: 'auto' }}> Редактирование статьи</h1>
        </div>
        <Formik
          initialValues={{ title, description, body, tagList }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            dispatch(actions.editArticleAction(slug, values));
            setSubmitting(false);
            resetForm();
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
                          onClick={() => push(inputTagRef.current.state.value)}
                        >
                          Add tag
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
                  Save changes
                </Button>
              </Form.Item>

              {!isEmpty(errorsApi) && (
                <Alert type="error" message={JSON.stringify(errorsApi, null, 2)} />
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

ArticleEdit.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};

export default ArticleEdit;
