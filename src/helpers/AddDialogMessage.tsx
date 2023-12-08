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
        validate: (values) => {
            if (values.messageText.length < 1) {
                return {messageText: 'Must be a text'}
            }else if(values.messageText.length>30){
                return {messageText:'Message must be lower then 30 symb'}
            }
        },
        onSubmit: (values) => {
            addMessage(values.messageText)
            formikDialog.resetForm()
        }
    })
    return (
        <form onSubmit={formikDialog.handleSubmit}>
            {formikDialog.errors.messageText  &&
                <div>{formikDialog.errors.messageText}</div>}
            <textarea {...formikDialog.getFieldProps('messageText')}/>
            <button disabled={!!formikDialog.errors.messageText} type={'submit'}>
                Отправить
            </button>
        </form>
    );
};

export default AddDialogMessage;