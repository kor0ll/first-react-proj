import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './Login.module.css';

const LoginForm = (props) => {

    return <div>
        <Formik
            initialValues={{ email: '', password: '', rememberMe: false }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }

                if (!values.password) {
                    errors.password = 'Required';
                }
                return errors;
              }}
            onSubmit={ async (values, { setSubmitting, setStatus }) => {
                props.loginThunk(values.email, values.password, values.rememberMe, setStatus);
                setSubmitting(false);
            }}
        >
            {({ isSubmitting, status }) => (
                <Form className={styles.loginForm}>
                    <div>Email:</div>
                    <Field name="email"/>
                    <ErrorMessage name="email" component="div" className={styles.errorMessage}/>
                    <div>Password:</div>
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div"  className={styles.errorMessage}/>
                    <div className={styles.checkbox}>
                        <Field type="checkbox" name="rememberMe" /> Remember me
                    </div>
                    <div className={styles.errorMessage + " " + styles.mainError}>{status}</div>
                    <button type="submit" disabled={isSubmitting}>
                        Login
                    </button>
                    
                </Form>
            )}
        </Formik>
    </div>
}

export default LoginForm;