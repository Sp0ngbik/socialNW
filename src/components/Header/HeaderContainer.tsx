import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserDataAC, T_AuthReducerInitial, T_ResponseAuthUser} from "../../redux/reducers/authReducer";
import {RootState} from "../../redux/reduxStore";

type T_ResponseAuthMe = {
    resultCode: number,
    messages: string[],
    data: {
        id: number,
        email: string,
        login: string
    }
}

export type T_HeaderContainer = {
    setAuthUserDataAC: (userData: T_ResponseAuthUser) => void
    authUserState: T_AuthReducerInitial
}

class HeaderContainer extends React.Component<T_HeaderContainer> {
    componentDidMount() {
        axios.get<T_ResponseAuthMe>('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true}).then((res) => {
            if (res.data.resultCode === 0) {
                this.props.setAuthUserDataAC(res.data.data)
            }
        })
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        authUserState: state.authReducer
    }
}


export default connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainer);