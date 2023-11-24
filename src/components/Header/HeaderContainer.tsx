import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {
    setAuthUserTC,
    T_AuthReducerInitial,
} from "../../redux/reducers/authReducer";
import {RootState} from "../../redux/reduxStore";


export type T_HeaderContainer = {
    setAuthUserTC: () => void
    authUserState: T_AuthReducerInitial
}

class HeaderContainer extends React.Component<T_HeaderContainer> {
    componentDidMount() {
        this.props.setAuthUserTC()
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


export default connect(mapStateToProps, {setAuthUserTC})(HeaderContainer);