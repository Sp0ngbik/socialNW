import React from 'react';
import LoginForm, {T_LoginForm} from "./LoginForm";
import {connect} from "react-redux";
import {setLoginUserTC} from "../../redux/reducers/authReducer";
import {RootState} from "../../redux/reduxStore";

export type T_LoginProps = {
    setLoginUserTC: (data: T_LoginForm) => void
    isAuth: boolean
}

const Login: React.FC<T_LoginProps> = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm {...props}/>
        </div>
    );
};
const mapStateToProps = (state: RootState) => {
    return {
        isAuth: state.authReducer.isAuth
    }
}
export default connect(mapStateToProps, {setLoginUserTC})(Login);