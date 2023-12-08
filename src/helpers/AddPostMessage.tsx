import React from 'react';
import {useFormik} from "formik";

type T_AppPostMessage = {
    addPostAC: (postMessage: string) => void
}

const AddPostMessage: React.FC<T_AppPostMessage> = ({addPostAC}) => {
    const formikPosts = useFormik({
        initialValues: {
            postMessage: ''
        },
        onSubmit: (values) => {
            addPostAC(values.postMessage)
            formikPosts.resetForm()
        }
    })
    return (
        <form onSubmit={formikPosts.handleSubmit}>
               <textarea
                   {...formikPosts.getFieldProps('postMessage')}
               />
            <button type='submit'>Add post
            </button>
        </form>
    );
};

export default AddPostMessage;