import React from 'react';
import {useFormik} from "formik";
import {Navigate} from "react-router-dom";
import {T_LoginProps} from "./Login";

export type T_LoginForm = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string | null
}


const LoginForm: React.FC<T_LoginProps> = ({setLoginUserTC, isAuth, captcha}) => {
    const formikLogin = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
            mainField: '',
            captcha: null
        },
        validate: (values) => {
            if (!values.email) {
                return {email: 'Required'}
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                return {email: 'Invalid email address'}
            }
            if (!values.password) {
                return {password: 'Password required'}
            }
        },
        onSubmit: async (values: T_LoginForm, formikHelpers) => {
            const response = await setLoginUserTC(values);

            if (response.data.messages) {
                formikHelpers.setFieldError('mainField', response.data.messages[0]);
            }
        }
    })
    if (isAuth) {
        return <Navigate to={'/profile'}/>
    }
    return (
        <form onSubmit={formikLogin.handleSubmit}>
            <div>
                {formikLogin.errors.email && formikLogin.touched.email && <div>{formikLogin.errors.email}</div>}
                <input placeholder='Email'
                       {...formikLogin.getFieldProps('email')} />
            </div>
            <div>
                {formikLogin.errors.password && formikLogin.touched.password &&
                    <div>{formikLogin.errors.password}</div>}
                <input placeholder='Password' type='password'
                       {...formikLogin.getFieldProps('password')}/>
            </div>
            <div>
                <input
                    id={'rememberMe'}
                    checked={formikLogin.values.rememberMe}
                    placeholder='rememberMe'
                    type={'checkbox'}
                    {...formikLogin.getFieldProps('rememberMe')}
                />Remember me
            </div>
            {formikLogin.errors.mainField && <div>{formikLogin.errors.mainField}</div>}
            {captcha &&
                <div><img src={captcha} alt={'captcha not found'}/>
                    <div>
                        <input placeholder={'captcha'} {...formikLogin.getFieldProps('captcha')}/>
                    </div>
                </div>}
            <div>
                <button type='submit'>Send</button>
            </div>
        </form>
    );
};

export default LoginForm;