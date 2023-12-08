import React, {FC} from 'react';
import {useFormik} from "formik";

type T_AddDialogMessage = {
    addMessage: (newMessageTitle: string) => void
}
const AddDialogMessage: FC<T_AddDialogMessage> = ({addMessage}) => {
    const formikDialog = useFormik({
        initialValues: {
            messageText: ''
        },
        onSubmit: (values) => {
            addMessage(values.messageText)
            formikDialog.resetForm()
        }
    })
    return (
        <form onSubmit={formikDialog.handleSubmit}>
            <textarea {...formikDialog.getFieldProps('messageText')}/>
            <button type={'submit'}>
                Отправить
            </button>
        </form>
    );
};

export default AddDialogMessage;