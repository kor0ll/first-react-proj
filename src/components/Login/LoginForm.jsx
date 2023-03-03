import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';

const LoginForm = (props) => {

    return <div>
        <Formik
       initialValues={{ login: '', password: '', rememberMe: false }}
       onSubmit={(values, { setSubmitting }) => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
           <Field name="login" />
           <Field type="password" name="password" />
           <div>
           <Field type="checkbox" name="rememberMe" /> Remember me
           </div>
           <button type="submit" disabled={isSubmitting}>
             Login
           </button>
         </Form>
       )}
     </Formik>
    </div>
}

export default LoginForm;