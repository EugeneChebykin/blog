import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, FieldArray } from 'formik';
import * as Yup from 'yup';
import { isEmpty } from 'lodash';
import { Form, Input, Icon, Button, Alert, Tag } from 'antd';
import HistoryBackButton from '../components/HistoryBackButton';
import * as actions from '../store/actions';

const ArticleAdd = () => {
  const { errors: errorsApi } = useSelector(state => state);
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '70px',
  };
  return (
    <div className="wrapper" style={styles}>
      <div className="content" style={{ width: '500px' }}>
        <div style={{ display: 'flex', width: '100%' }}>
          <HistoryBackButton /> <h1 style={{ marginLeft: 'auto' }}> Добавление статьи</h1>
        </div>
        <Formik
          initialValues={{ title: '', description: '', body: '', tagList: [] }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            dispatch(actions.addArticleAction(values));
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
                    const tags = values.tagList.map((tag, index) => (
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

export default ArticleAdd;
