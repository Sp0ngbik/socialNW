import React from 'react';
import {useFormik} from "formik";

type T_LoginForm = {
    login: string,
    password: string,
    rememberMe: boolean
}

class FormikErrorType {
}

const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            // const errors: FormikErrorType = {}
            // if (!values.email) {
            //     errors.email = 'Required'
            // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            //     errors.email = 'Invalid email address'
            // }
            // if (!values.password) {
            //     errors.password = 'Required'
            // }
            // return errors
        },
        onSubmit: (values: T_LoginForm) => {
            console.log(values)
        }
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input placeholder='login'
                       {...formik.getFieldProps('login')} />
            </div>
            <div>
                <input placeholder='Password'
                       {...formik.getFieldProps('password')}/>
            </div>
            <div>
                <input
                    id={'rememberMe'}
                    checked={formik.values.rememberMe}
                    placeholder='rememberMe'
                    type={'checkbox'}
                    {...formik.getFieldProps('rememberMe')}
                />Remember me
            </div>
            <div>
                <button type='submit'>Send</button>
            </div>
        </form>
    );
};

export default LoginForm;