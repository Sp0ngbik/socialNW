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
        validate: (values) => {
            if (values.postMessage.length < 1) {
               return {postMessage:'Must be a text'}
            }
        },
        onSubmit: (values) => {
            addPostAC(values.postMessage)
            formikPosts.resetForm()
        }
    })
    return (
        <form onSubmit={formikPosts.handleSubmit}>

            {formikPosts.errors.postMessage && formikPosts.touched.postMessage &&
                <div>{formikPosts.errors.postMessage}</div>}
            <textarea
                {...formikPosts.getFieldProps('postMessage')}
            />
            <button disabled={!!formikPosts.errors.postMessage} type='submit'>
                Add post
            </button>
        </form>
    );
};

export default AddPostMessage;