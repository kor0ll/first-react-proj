import React from "react";
import Post from "../Post/Post";
import s from './../MainContent.module.css';
import userPic from '../../../assets/images/user.jpg';
import { Formik, Form, Field, ErrorMessage } from 'formik';


let Posts = (props) => {
    console.log('render!');
    let reversePostData = [ ...props.postsData ].reverse();

    return <div>
        <p>My posts</p>
        <AddPostForm addPost={props.addPost}/>
        <div className="all-posts">
            {
                
                reversePostData.map((p) => <Post key={p.id} avatar={props.photo === null ? userPic : props.photo} message={p.message} />)
            }
        </div>
    </div>
}

const AddPostForm = (props) => {
    return (
        <Formik
            className={s.post_generator}
            initialValues={{ postText: '' }}
            onSubmit={(values, { setSubmitting }) => {
                props.addPost(values.postText);
                values.postText = '';
                setSubmitting(false);
            }}
        >
            {({ isSubmitting }) => (
                <Form className={s.post_generator}>
                    <Field name="postText"/>
                    <button type="submit" disabled={isSubmitting}>
                        Отправить
                    </button>
                </Form>
            )}
        </Formik>
    )
}

export default Posts;